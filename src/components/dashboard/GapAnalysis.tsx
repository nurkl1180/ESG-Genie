
import React from 'react';
import { AlertTriangle, CheckCircle, ArrowRight } from 'lucide-react';

interface GapAnalysisProps {
  onResolve: (tabId: string) => void;
}

const gaps = [
  {
    id: 'snap',
    kpi: 'E1: Energy Consumption',
    status: 'Critical Gap',
    action: 'Missing 12 months of electricity data.',
    pillar: 'Environmental'
  },
  {
    id: 'social',
    kpi: 'S1: Workforce Diversity',
    status: 'Partial Gap',
    action: 'Gender ratio reported, but age groups missing.',
    pillar: 'Social'
  },
  {
    id: 'governance',
    kpi: 'G1: Anti-Corruption',
    status: 'Critical Gap',
    action: 'No formal policy statement uploaded.',
    pillar: 'Governance'
  }
];

export const GapAnalysis: React.FC<GapAnalysisProps> = ({ onResolve }) => {
  return (
    <div className="w-80 bg-slate-50 border-l border-slate-200 p-6 flex flex-col h-screen sticky top-0">
      <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
        <AlertTriangle className="w-5 h-5 text-amber-500" />
        SEDG Gap Analysis
      </h3>

      <div className="space-y-4 overflow-y-auto pr-2">
        {gaps.map((gap, i) => (
          <div key={i} className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex justify-between items-start mb-2">
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${
                gap.status === 'Critical Gap' ? 'bg-red-50 text-red-600' : 'bg-amber-50 text-amber-600'
              }`}>
                {gap.status}
              </span>
              <span className="text-[10px] text-slate-400 font-bold uppercase">{gap.pillar}</span>
            </div>
            <h4 className="text-sm font-bold text-slate-900">{gap.kpi}</h4>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">{gap.action}</p>
            <button 
              onClick={() => onResolve(gap.id)}
              className="mt-3 text-xs font-bold text-emerald-600 flex items-center gap-1 hover:gap-2 transition-all"
            >
              Resolve Now <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        ))}
      </div>

      <div className="mt-auto pt-6">
        <div className="p-4 bg-emerald-900 rounded-2xl text-white">
          <div className="flex items-center gap-2 mb-2">
            <CheckCircle className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-bold uppercase tracking-wider">Ready for Audit?</span>
          </div>
          <p className="text-xs text-emerald-100/70 leading-relaxed">
            Your current data meets 45% of Bursa Malaysia's basic SME requirements.
          </p>
          <button 
            onClick={() => onResolve('reports')}
            className="w-full mt-4 py-2 bg-emerald-500 text-white rounded-xl text-xs font-bold hover:bg-emerald-400 transition-colors"
          >
            Generate Draft Report
          </button>
        </div>
      </div>
    </div>
  );
};
