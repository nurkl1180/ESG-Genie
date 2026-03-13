
import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, FileText, CheckCircle2, Loader2, AlertCircle } from 'lucide-react';
import { parseUtilityBill, type BillData } from '../../services/gemini';

export const BillParser: React.FC = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [isConfirming, setIsConfirming] = useState(false);
  const [result, setResult] = useState<BillData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const onDrop = async (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (!file) return;

    setIsUploading(true);
    setError(null);
    setSuccessMessage(null);

    try {
      const reader = new FileReader();
      reader.onload = async () => {
        const base64 = reader.result as string;
        const data = await parseUtilityBill(base64, file.type);
        setResult(data);
        setIsUploading(false);
      };
      reader.readAsDataURL(file);
    } catch (err) {
      setError("Failed to parse bill. Please ensure the image is clear.");
      setIsUploading(false);
    }
  };

  const handleConfirm = async () => {
    if (!result) return;
    setIsConfirming(true);
    
    // Simulate API call to save to ledger
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setSuccessMessage(`Successfully added ${result.billType === 'electricity' ? result.kwh + ' kWh' : result.m3 + ' m3'} to the ESG Ledger.`);
    setResult(null);
    setIsConfirming(false);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'image/*': ['.jpeg', '.jpg', '.png'] },
    multiple: false
  });

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in slide-in-from-bottom-4 duration-500">
      <header>
        <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Snap-to-ESG™ Intake</h2>
        <p className="text-slate-500 mt-1">Upload utility bills to automatically calculate Scope 2 emissions using Gemini 3 Vision.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div 
          {...getRootProps()} 
          className={`
            border-2 border-dashed rounded-3xl p-12 flex flex-col items-center justify-center transition-all cursor-pointer
            ${isDragActive ? 'border-emerald-500 bg-emerald-50' : 'border-slate-200 hover:border-emerald-400 hover:bg-slate-50'}
          `}
        >
          <input {...getInputProps()} />
          <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-4">
            {isUploading ? <Loader2 className="w-8 h-8 animate-spin" /> : <Upload className="w-8 h-8" />}
          </div>
          <p className="text-lg font-bold text-slate-900">
            {isUploading ? 'Analyzing with AI...' : 'Drop your TNB/Water bill here'}
          </p>
          <p className="text-sm text-slate-500 mt-2 text-center">
            Supports JPEG, PNG. Max 10MB.<br />
            AI will extract kWh, m3, and billing periods.
          </p>
        </div>

        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm min-h-[400px]">
          <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
            <FileText className="w-5 h-5 text-emerald-500" />
            Extraction Result
          </h3>

          {isUploading && (
            <div className="flex flex-col items-center justify-center h-64 space-y-4">
              <div className="w-full max-w-xs bg-slate-100 h-2 rounded-full overflow-hidden">
                <div className="bg-emerald-500 h-full w-1/2 animate-[shimmer_2s_infinite]" />
              </div>
              <p className="text-sm text-slate-500 animate-pulse">Gemini 3 is reading your bill...</p>
            </div>
          )}

          {!isUploading && result && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 p-4 bg-emerald-50 rounded-2xl border border-emerald-100">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <span className="text-sm font-semibold text-emerald-800">Successfully Extracted</span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-slate-50 rounded-2xl">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Bill Type</p>
                  <p className="text-lg font-bold text-slate-900 capitalize">{result.billType}</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-2xl">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Date</p>
                  <p className="text-lg font-bold text-slate-900">{result.date || 'N/A'}</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-2xl">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Usage</p>
                  <p className="text-lg font-bold text-slate-900">
                    {result.billType === 'electricity' ? `${result.kwh} kWh` : `${result.m3} m3`}
                  </p>
                </div>
                <div className="p-4 bg-slate-50 rounded-2xl">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Amount</p>
                  <p className="text-lg font-bold text-slate-900">RM {result.amount}</p>
                </div>
              </div>

              <button 
                onClick={handleConfirm}
                disabled={isConfirming}
                className="w-full py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-slate-800 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isConfirming ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Updating Ledger...
                  </>
                ) : (
                  'Confirm & Add to ESG Ledger'
                )}
              </button>
            </div>
          )}

          {!isUploading && !result && !error && !successMessage && (
            <div className="flex flex-col items-center justify-center h-64 text-slate-400">
              <AlertCircle className="w-12 h-12 mb-4 opacity-20" />
              <p className="text-sm">No data extracted yet.</p>
            </div>
          )}

          {successMessage && (
            <div className="flex flex-col items-center justify-center h-64 space-y-4 animate-in zoom-in-95 duration-300">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <p className="text-center font-bold text-slate-900">{successMessage}</p>
              <button 
                onClick={() => setSuccessMessage(null)}
                className="text-sm font-bold text-emerald-600 hover:text-emerald-500"
              >
                Upload another bill
              </button>
            </div>
          )}

          {error && (
            <div className="p-4 bg-red-50 text-red-600 rounded-2xl border border-red-100 flex items-center gap-3">
              <AlertCircle className="w-5 h-5" />
              <p className="text-sm font-medium">{error}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
