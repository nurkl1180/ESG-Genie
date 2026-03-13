import React, { useState } from 'react';
import { FileText, Download, Printer, CheckCircle, ShieldCheck, Leaf, Users, Globe } from 'lucide-react';

export const ESGReport: React.FC = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [reportReady, setReportReady] = useState(false);

  const handleGenerate = async () => {
    setIsGenerating(true);
    // Simulate report generation logic
    await new Promise(resolve => setTimeout(resolve, 2500));
    setIsGenerating(false);
    setReportReady(true);
  };

  if (!reportReady) {
    return (
      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center min-h-[60vh] space-y-8 animate-in fade-in duration-500">
        <div className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-3xl flex items-center justify-center">
          <FileText className="w-12 h-12" />
        </div>
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Generate SEDG Draft Report</h2>
          <p className="text-slate-500 max-w-md mx-auto">
            Our AI will compile your Environmental, Social, and Governance data into a Bursa Malaysia compliant SME disclosure format.
          </p>
        </div>
        
        <button 
          onClick={handleGenerate}
          disabled={isGenerating}
          className="px-10 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-slate-800 transition-all shadow-xl shadow-slate-200 flex items-center gap-3 disabled:opacity-50"
        >
          {isGenerating ? (
            <>
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Compiling Disclosures...
            </>
          ) : (
            <>
              <Globe className="w-5 h-5" />
              Generate Draft Report
            </>
          )}
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-in zoom-in-95 duration-500 pb-20">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Draft ESG Report</h2>
          <p className="text-slate-500 mt-1">Status: Ready for Internal Review (SEDG Basic Level)</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-600 hover:bg-slate-50 transition-all">
            <Printer className="w-4 h-4" /> Print
          </button>
          <button className="flex items-center gap-2 px-6 py-2 bg-emerald-600 text-white rounded-xl text-sm font-bold hover:bg-emerald-500 transition-all shadow-lg shadow-emerald-100">
            <Download className="w-4 h-4" /> Download PDF
          </button>
        </div>
      </div>

      {/* Report Preview */}
      <div className="bg-white rounded-[40px] border border-slate-200 shadow-2xl overflow-hidden">
        {/* Report Header */}
        <div className="bg-slate-900 p-12 text-white">
          <div className="flex justify-between items-start">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
                  <ShieldCheck className="text-white w-5 h-5" />
                </div>
                <span className="text-xl font-bold tracking-tight">ESG Genie</span>
              </div>
              <h1 className="text-4xl font-bold mb-2">Sustainability Disclosure Report</h1>
              <p className="text-slate-400 text-lg">Prepared for: <span className="text-white font-medium">SME Enterprise Sdn Bhd</span></p>
            </div>
            <div className="text-right">
              <p className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-1">Reporting Period</p>
              <p className="text-xl font-medium">FY 2025 - 2026</p>
              <p className="text-xs text-slate-400 mt-4">Standard: SEDG (Simplified ESG Disclosure Guide)</p>
            </div>
          </div>
        </div>

        {/* Report Content */}
        <div className="p-12 space-y-12">
          {/* Executive Summary */}
          <section className="space-y-4">
            <h3 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-4">Executive Summary</h3>
            <p className="text-slate-600 leading-relaxed">
              This report outlines the sustainability performance of SME Enterprise Sdn Bhd in accordance with the 
              Simplified ESG Disclosure Guide (SEDG) for SMEs in Malaysia. Our focus remains on operational efficiency, 
              workforce well-being, and ethical business conduct.
            </p>
          </section>

          {/* Environmental Pillar */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-emerald-50 text-emerald-600 rounded-xl">
                <Leaf className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Environmental Disclosures</h3>
            </div>
            
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">E1: Energy Consumption</p>
                  <p className="text-2xl font-bold text-slate-900">32,450 kWh</p>
                  <p className="text-xs text-slate-500 mt-2">Source: TNB Utility Bills (Verified by Gemini 3)</p>
                </div>
                <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Scope 2 Emissions</p>
                  <p className="text-2xl font-bold text-emerald-600">24.01 tCO2e</p>
                  <p className="text-xs text-slate-500 mt-2">Factor: 0.740 kgCO2/kWh (Peninsular Grid)</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">E2: Water Consumption</p>
                  <p className="text-2xl font-bold text-slate-900">450 m3</p>
                  <p className="text-xs text-slate-500 mt-2">Source: Air Selangor Utility Bills</p>
                </div>
                <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Environmental Policy</p>
                  <div className="flex items-center gap-2 mt-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    <span className="text-sm font-medium text-slate-700">Formal Policy Established</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Social Pillar */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-50 text-blue-600 rounded-xl">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Social Disclosures</h3>
            </div>
            
            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-6">S1: Workforce Diversity</p>
              <div className="grid grid-cols-3 gap-8">
                <div>
                  <p className="text-sm text-slate-500 mb-1">Gender Ratio (F:M)</p>
                  <p className="text-xl font-bold text-slate-900">42% : 58%</p>
                </div>
                <div>
                  <p className="text-sm text-slate-500 mb-1">Bumiputera Representation</p>
                  <p className="text-xl font-bold text-slate-900">65%</p>
                </div>
                <div>
                  <p className="text-sm text-slate-500 mb-1">Youth Employment (&lt;30)</p>
                  <p className="text-xl font-bold text-slate-900">28%</p>
                </div>
              </div>
            </div>
          </section>

          {/* Governance Pillar */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-violet-50 text-violet-600 rounded-xl">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Governance Disclosures</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { label: 'G1: Anti-Corruption Policy', status: 'Established' },
                { label: 'G1: Corruption Risk Assessment', status: 'Completed' },
                { label: 'G3: Sustainability Responsibility', status: 'Board Level' },
                { label: 'G3: Board Oversight', status: 'Annual Review' },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <span className="text-sm font-medium text-slate-700">{item.label}</span>
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-lg">{item.status}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Report Footer */}
        <div className="bg-slate-50 p-8 border-t border-slate-100 text-center">
          <p className="text-xs text-slate-400">
            This report was generated by ESG Genie. Data accuracy depends on user input and AI extraction precision.
            <br />© 2026 ESG Genie. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};
