export interface SampleProject {
  id: string;
  name: string;
  category: string;
  type: string;
  filename: string;
  contentText: string;
  base64?: string;
  suggestedPrompts: string[];
  metrics: {
    totalRecords: number;
    healthScore: number;
    quality: number;
  };
}

export const SAMPLE_PROJECTS: SampleProject[] = [
  {
    id: "global-sales",
    name: "Enterprise Global Sales Q3 (Structured CSV)",
    category: "Structured Data Analysis",
    type: "csv",
    filename: "global_sales_q3.csv",
    contentText: `Month,Country,Category,Product,Sales,Units,Revenue,TargetSales,CustomerSatisfaction
2026-01,United States,Technology,CloudServer Enterprise,12000,48,576000,10000,4.8
2026-01,Germany,Technology,CloudServer Enterprise,8202,32,393696,8000,4.5
2026-01,United Kingdom,Technology,CloudServer Enterprise,9200,36,441600,9000,4.6
2026-01,Japan,Technology,CloudServer Enterprise,11210,44,538080,11000,4.7
2026-02,United States,Technology,Kubernetes Service Tier 3,14500,58,696000,12000,4.9
2026-02,Germany,Technology,Kubernetes Service Tier 3,9200,36,441600,9000,4.4
2026-02,United Kingdom,Technology,Kubernetes Service Tier 3,11500,46,552000,10500,4.7
2026-02,Japan,Technology,Kubernetes Service Tier 3,13000,52,624000,12000,4.8
2026-03,United States,Consumer Electronics,Mobile Pro X,16000,320,320000,15000,4.4
2026-03,Germany,Consumer Electronics,Mobile Pro X,10200,204,204000,9500,4.1
2026-03,United Kingdom,Consumer Electronics,Mobile Pro X,11200,224,224000,11000,4.3
2026-03,Japan,Consumer Electronics,Mobile Pro X,15400,308,308000,14000,4.5
2026-04,United States,Consumer Electronics,Audio Hub Smart,18200,364,364000,16000,4.6
2026-04,Germany,Consumer Electronics,Audio Hub Smart,11500,230,230000,11000,4.2
2026-04,United Kingdom,Consumer Electronics,Audio Hub Smart,12800,256,256000,13000,4.5
2026-04,Japan,Consumer Electronics,Audio Hub Smart,16900,338,338000,16000,4.7
2026-05,United States,Office hardware,ErgoDesk Premium,21000,140,147000,18000,4.7
2026-05,Germany,Office hardware,ErgoDesk Premium,13500,90,94500,12500,4.3
2026-05,United Kingdom,Office hardware,ErgoDesk Premium,15200,101,106400,14000,4.4
2026-05,Japan,Office hardware,ErgoDesk Premium,19800,132,138600,18500,4.6
2026-06,United States,Office hardware,SmartChair Task,25200,504,252000,22000,4.8
2026-06,Germany,Office hardware,SmartChair Task,16200,324,162000,15000,4.5
2026-06,United Kingdom,Office hardware,SmartChair Task,18100,362,181000,17000,4.6
2026-06,Japan,Office hardware,SmartChair Task,22400,448,224000,21000,4.7`,
    suggestedPrompts: [
      "Can we identify sales anomaly outliers and clean missing values?",
      "Show me a regional monthly sales analysis chart with forecasting.",
      "Run an ARIMA or LSTM approximation for target sales across categories."
    ],
    metrics: {
      totalRecords: 24,
      healthScore: 98,
      quality: 96
    }
  },
  {
    id: "finance-saas",
    name: "SaaS Financial Health Analysis (Excel Spreadsheet)",
    category: "Financial Analyst Engine",
    type: "excel",
    filename: "saas_financial_perf.xlsx",
    contentText: `Sheet: Revenues & Churn Metrics
Year,Quarter,ARR (M),MRR (K),Revenue Churn Rate,Renewals %,CAC Payback (Months),LTV:CAC Ratio,Gross Margin %
2025,Q1,12.5,1041,0.024,0.94,14.2,3.5,0.78
2025,Q2,13.8,1150,0.021,0.95,13.8,3.8,0.79
2025,Q3,15.2,1266,0.019,0.96,12.5,4.2,0.81
2025,Q4,17.4,1450,0.017,0.97,11.2,4.8,0.83
2026,Q1,19.2,1600,0.015,0.98,9.8,5.4,0.84
2026,Q2,21.8,1816,0.012,0.99,8.5,6.2,0.86`,
    suggestedPrompts: [
      "Analyze the SaaS growth trends and CAC Payback improvements.",
      "Draw scatter-chart correlations between MRR and LTV:CAC Ratio.",
      "Suggest SaaS business action points for Gross Margin maximization."
    ],
    metrics: {
      totalRecords: 6,
      healthScore: 100,
      quality: 100
    }
  },
  {
    id: "enterprise-audit",
    name: "Enterprise Corporate Review (PDF Document)",
    category: "NLP & Document Intelligence",
    type: "pdf",
    filename: "corporate_operations_intel.pdf",
    contentText: `EXECUTIVE DOCUMENT: Q3 STRATEGIC INITIATIVES AUDIT
Author: Executive Intelligence Group (Muhammad Mawiya - Principal Analyst)
Date: June 15, 2026
Confidentiality Status: Enterprise Level Restricted

1. EXECUTIVE SUMMARY
InsightForge AI's auditing engine identified significant performance variances across several corporate departments. Our Cloud Services division exceeded initial projections by 14.8%, recording gross ARR of $21.8M due to increased global migration to serverless technologies and decentralized workspace systems. Conversely, standard Office Supplies and Hardware segments reported a margin erosion of 4.2% attributed directly to global supply chain disruptions and container logistics imbalances centered in the South Pacific.

2. FORECASTS AND STRATEGIC RECOMMENDATIONS
- Recommendation A (Cloud Security Scaling): Accelerate R&D operations inside our container security architectures. Expected ARR yield improvement of up to 25% over the succeeding 18 months.
- Recommendation B (Hardware Supplier Renegotiations): Reconfigure delivery nodes to minimize South Pacific exposure. Restructure hardware supply lines through western logistics networks.
- Sentiment Orientation of Board Review: Strong confidence index of 8.9/10, though supply-chain vulnerabilities pose immediate tactical risks.
- Sentiment Class: Highly positive with emerging logistical anxiety.

3. NAMED ENTITIES IDENTIFIED
- Organizations: InsightForge AI, AWS Integration Group, Mawiya Corporate Advisory, Microsoft Cloud Core.
- Geographies: European Logistics Hub, Singapore, South Pacific, Seattle, Munich.
- Numbers: 14.8%, $21.8M, 4.2%, 18 months, 8.9/10.`,
    suggestedPrompts: [
      "Conduct a named entity extraction and list all organizational entities.",
      "Summarize the key document findings and recommend concrete action items.",
      "Do document logic comparisons comparing ARR projection with logistics anxiety."
    ],
    metrics: {
      totalRecords: 1,
      healthScore: 92,
      quality: 95
    }
  }
];
