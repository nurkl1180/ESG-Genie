
import React, { useState } from 'react';
import { Users, Save, Loader2, CheckCircle } from 'lucide-react';

export const DiversityForm: React.FC = () => {
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [formData, setFormData] = useState({
    total: 0,
    female: 0,
    male: 0,
    bumiputera: 0,
    chinese: 0,
    indian: 0,
    others: 0,
    age_under_30: 0,
    age_30_50: 0,
    age_over_50: 0,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: parseInt(value) || 0 }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1200));
    setIsSaving(false);
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in slide-in-from-bottom-4 duration-500">
      <header>
        <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Social Pillar: Workforce Diversity</h2>
        <p className="text-slate-500 mt-1">Mapped to Bursa Malaysia Sustainability Reporting Guide (S1: Diversity).</p>
      </header>

      <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl">
            <Users className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900">Demographic Breakdown</h3>
            <p className="text-sm text-slate-500">Provide headcounts for your permanent workforce.</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <section>
            <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Gender Distribution</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Total Employees</label>
                <input 
                  type="number" name="total" value={formData.total} onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Female</label>
                <input 
                  type="number" name="female" value={formData.female} onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Male</label>
                <input 
                  type="number" name="male" value={formData.male} onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                />
              </div>
            </div>
          </section>

          <section>
            <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Ethnicity (Malaysian Context)</h4>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {['bumiputera', 'chinese', 'indian', 'others'].map((eth) => (
                <div key={eth}>
                  <label className="block text-sm font-medium text-slate-700 mb-2 capitalize">{eth}</label>
                  <input 
                    type="number" name={eth} value={(formData as any)[eth]} onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                  />
                </div>
              ))}
            </div>
          </section>

          <section>
            <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Age Group</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Under 30</label>
                <input 
                  type="number" name="age_under_30" value={formData.age_under_30} onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">30 - 50</label>
                <input 
                  type="number" name="age_30_50" value={formData.age_30_50} onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Over 50</label>
                <input 
                  type="number" name="age_over_50" value={formData.age_over_50} onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                />
              </div>
            </div>
          </section>

          <div className="pt-6 border-t border-slate-100 flex justify-end">
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
              {isSaving ? 'Saving...' : saveSuccess ? 'Data Saved!' : 'Save Diversity Data'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
