
export const EMISSION_FACTORS = {
  electricity: {
    peninsular: 0.740, // kgCO2/kWh (2026 Projection)
    sabah: 0.539,
    sarawak: 0.199
  },
  water: 0.402, // kgCO2/m3
  waste: 567.0, // kgCO2e/tonne (General Waste)
};

export const SEDG_DISCLOSURES = [
  {
    id: 'E1',
    pillar: 'Environmental',
    name: 'Energy Consumption',
    description: 'Total energy consumption within the organization.',
    requirement: 'kWh from utility bills'
  },
  {
    id: 'E2',
    pillar: 'Environmental',
    name: 'Water Consumption',
    description: 'Total water consumption within the organization.',
    requirement: 'm3 from utility bills'
  },
  {
    id: 'S1',
    pillar: 'Social',
    name: 'Workforce Diversity',
    description: 'Percentage of employees by gender, age group, and ethnicity.',
    requirement: 'Employee demographic data'
  },
  {
    id: 'G1',
    pillar: 'Governance',
    name: 'Anti-Corruption',
    description: 'Operations assessed for risks related to corruption.',
    requirement: 'Policy statement and risk assessment'
  }
];

export const REGIONS = [
  { id: 'peninsular', name: 'Peninsular Malaysia' },
  { id: 'sabah', name: 'Sabah' },
  { id: 'sarawak', name: 'Sarawak' }
];
