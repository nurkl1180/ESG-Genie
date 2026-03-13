# ESG Genie

**ESG Genie** is a specialized ESG (Environmental, Social, and Governance) reporting and management tool designed specifically for Malaysian Small and Medium Enterprises (SMEs). It simplifies the complex process of sustainability disclosure by mapping operational data directly to **Bursa Malaysia** and **SEDG (Simplified ESG Disclosure Guide)** standards.

## 🚀 Key Features

### 1. Snap-to-ESG™ (Environmental Pillar)
- **AI-Powered Intake**: Upload electricity (TNB) and water (Air Selangor) bills.
- **Automated Extraction**: Uses Gemini 3 Vision to extract consumption data (kWh/m3) and billing periods.
- **Scope 2 Calculation**: Automatically calculates carbon emissions (tCO2e) using the latest Malaysian Grid Emission Factors.

### 2. Social Pillar Management
- **Workforce Diversity**: Track gender ratios, ethnicity representation (Bumiputera/Non-Bumiputera), and age group distributions.
- **SEDG Mapping**: All inputs are directly mapped to S1 (Workforce Diversity) basic requirements.

### 3. Governance Tracking
- **Business Ethics**: Track Anti-Corruption policies, Risk Assessments, and Codes of Conduct.
- **Management Oversight**: Document sustainability responsibilities and Board-level oversight.
- **Compliance Guidance**: Real-time indicators of SEDG G1 and G3 requirements.

### 4. SEDG Gap Analysis
- **Real-Time Monitoring**: A persistent side panel that identifies missing disclosures.
- **Actionable Insights**: "Resolve Now" links that jump directly to the relevant module to fix data gaps.
- **Compliance Score**: Visual progress bar showing readiness for Bursa Malaysia/SEDG reporting.

### 5. Automated ESG Reporting
- **Draft Generation**: Compiles all verified data into a professional, SEDG-compliant disclosure report.
- **Bursa Ready**: Designed to meet the basic reporting requirements for SMEs in the Malaysian supply chain.

## 🛠 Tech Stack

- **Frontend**: React 18 (Vite), TypeScript
- **Styling**: Tailwind CSS (Modern "Slate & Emerald" aesthetic)
- **Icons**: Lucide React
- **Charts**: Recharts (D3-based)
- **AI Engine**: Google Gemini 3 (Vision & Text) for automated data extraction and validation.

## 📦 Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone <your-repo-url>
   cd esg-genie
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Environment Variables**:
   Create a `.env` file and add your Gemini API Key:
   ```env
   GEMINI_API_KEY=your_api_key_here
   ```

4. **Run the development server**:
   ```bash
   npm run dev
   ```

## 📄 License

This project is developed for the purpose of simplifying ESG compliance for Malaysian SMEs.
