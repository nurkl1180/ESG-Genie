import React, { useState } from 'react';
import { ShieldCheck, FileText, Save, Loader2, CheckCircle, AlertCircle } from 'lucide-react';

export const GovernanceForm: React.FC = () => {
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [formData, setFormData] = useState({
    has_anti_corruption_policy: false,
    corruption_risk_assessment: false,
    has_code_of_conduct: false,
    sustainability_responsibility: '',
    board_oversight: false,
  });

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: checked }));
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    // Simulate API call to save governance data
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSaving(false);
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in slide-in-from-bottom-4 duration-500">
      <header>
        <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Governance Pillar</h2>
        <p className="text-slate-500 mt-1">Mapped to SEDG (Simplified ESG Disclosure Guide) Governance Requirements.</p>
      </header>

      <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-3 bg-violet-50 text-violet-600 rounded-2xl">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900">G1: Business Ethics & Anti-Corruption</h3>
            <p className="text-sm text-slate-500">Essential disclosures for SME governance integrity.</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <div className="pt-1">
                <input 
                  type="checkbox" 
                  name="has_anti_corruption_policy"
                  checked={formData.has_anti_corruption_policy}
                  onChange={handleCheckboxChange}
                  className="w-5 h-5 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-900">Anti-Corruption Policy</label>
                <p className="text-xs text-slate-500 mt-1">Does the company have a formal policy prohibiting corruption and bribery?</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <div className="pt-1">
                <input 
                  type="checkbox" 
                  name="corruption_risk_assessment"
                  checked={formData.corruption_risk_assessment}
                  onChange={handleCheckboxChange}
                  className="w-5 h-5 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-900">Corruption Risk Assessment</label>
                <p className="text-xs text-slate-500 mt-1">Have operations been assessed for risks related to corruption in the last 12 months?</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <div className="pt-1">
                <input 
                  type="checkbox" 
                  name="has_code_of_conduct"
                  checked={formData.has_code_of_conduct}
                  onChange={handleCheckboxChange}
                  className="w-5 h-5 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-900">Code of Business Conduct</label>
                <p className="text-xs text-slate-500 mt-1">A formal document outlining ethical standards for employees and management.</p>
              </div>
            </div>
          </div>

          <div className="space-y-6 pt-6 border-t border-slate-100">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <FileText className="w-5 h-5 text-emerald-500" />
              G3: Management of Sustainability
            </h3>
            
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Who is responsible for sustainability in the organization?</label>
              <select 
                name="sustainability_responsibility"
                value={formData.sustainability_responsibility}
                onChange={handleSelectChange}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none bg-white transition-all"
              >
                <option value="">Select Responsibility Level</option>
                <option value="board">Board of Directors</option>
                <option value="ceo">CEO / Managing Director</option>
                <option value="committee">ESG Committee</option>
                <option value="manager">Designated Manager</option>
                <option value="none">No formal responsibility assigned</option>
              </select>
            </div>

            <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <div className="pt-1">
                <input 
                  type="checkbox" 
                  name="board_oversight"
                  checked={formData.board_oversight}
                  onChange={handleCheckboxChange}
                  className="w-5 h-5 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-900">Board Oversight of ESG</label>
                <p className="text-xs text-slate-500 mt-1">Does the Board review sustainability performance at least annually?</p>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-100 flex justify-between items-center">
            <div className="flex items-center gap-2 text-amber-600 bg-amber-50 px-3 py-2 rounded-xl border border-amber-100">
              <AlertCircle className="w-4 h-4" />
              <span className="text-xs font-bold">SEDG Basic Requirement</span>
            </div>
            
            <button 
              type="submit"
              disabled={isSaving}
              className={`
                flex items-center gap-2 px-8 py-4 rounded-2xl font-bold transition-all shadow-lg 
                ${saveSuccess 
                  ? 'bg-emerald-100 text-emerald-700 shadow-emerald-100' 
                  : 'bg-emerald-600 text-white hover:bg-emerald-500 shadow-emerald-200'
                }
                disabled:opacity-50 disabled:cursor-not-allowed
              `}
            >
              {isSaving ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : saveSuccess ? (
                <CheckCircle className="w-5 h-5" />
              ) : (
                <Save className="w-5 h-5" />
              )}
              {isSaving ? 'Saving...' : saveSuccess ? 'Governance Updated!' : 'Save Governance Data'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
