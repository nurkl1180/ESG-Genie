
import { EMISSION_FACTORS } from './constants';

export interface ESGData {
  electricity_kwh?: number;
  water_m3?: number;
  region: 'peninsular' | 'sabah' | 'sarawak';
  workforce?: {
    total: number;
    female: number;
    male: number;
    bumiputera: number;
    chinese: number;
    indian: number;
    others: number;
  };
  has_energy_policy?: boolean;
}

export const calculateScope2Emissions = (kwh: number, region: keyof typeof EMISSION_FACTORS.electricity) => {
  return (kwh * EMISSION_FACTORS.electricity[region]) / 1000; // Convert to tonnes CO2e
};

export const calculateWaterEmissions = (m3: number) => {
  return (m3 * EMISSION_FACTORS.water) / 1000; // Convert to tonnes CO2e
};

export const checkSEDGGaps = (data: ESGData) => {
  const gaps: any[] = [];

  if (!data.electricity_kwh) {
    gaps.push({
      id: 'E1',
      kpi: 'E1: Energy Consumption',
      status: 'Critical Gap',
      action: 'Upload 12 months of TNB bills for Scope 2 calculation.'
    });
  } else if (!data.has_energy_policy) {
    gaps.push({
      id: 'E1',
      kpi: 'E1: Energy Management',
      status: 'Partial Gap',
      action: 'Draft a simple statement on energy reduction goals.'
    });
  }

  if (!data.workforce) {
    gaps.push({
      id: 'S1',
      kpi: 'S1: Workforce Diversity',
      status: 'Critical Gap',
      action: 'Complete the workforce demographic form.'
    });
  }

  return gaps;
};
