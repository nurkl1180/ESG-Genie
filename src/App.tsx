import React, { useState } from 'react';
import { Sidebar } from './components/layout/Sidebar';
import { Overview } from './components/dashboard/Overview';
import { BillParser } from './components/modules/BillParser';
import { DiversityForm } from './components/modules/DiversityForm';
import { GovernanceForm } from './components/modules/GovernanceForm';
import { ESGReport } from './components/modules/ESGReport';
import { GapAnalysis } from './components/dashboard/GapAnalysis';

export default function App() {
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return <Overview />;
      case 'snap':
        return <BillParser />;
      case 'social':
        return <DiversityForm />;
      case 'governance':
        return <GovernanceForm />;
      case 'reports':
        return <ESGReport />;
      default:
        return (
          <div className="flex flex-col items-center justify-center h-[60vh] text-slate-400">
            <h2 className="text-xl font-bold">Module Under Development</h2>
            <p>This section is being mapped to SEDG standards.</p>
          </div>
        );
    }
  };

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="flex-1 p-10 overflow-y-auto">
        <div className="max-w-6xl mx-auto">
          {renderContent()}
        </div>
      </main>

      <GapAnalysis onResolve={setActiveTab} />
    </div>
  );
}
