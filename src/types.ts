export interface DatasetFile {
  name: string;
  size: number;
  type: string; // "csv" | "excel" | "pdf" | "image" | "json" | "txt"
  rawText?: string;
  base64Data?: string;
  cleanedText?: string;
}

export interface AnalysisResult {
  agentResponse: string;
  dataHealthScore: number;
  dataQualityScore: number;
  cleaningLogs: string[];
  sqlQuery?: string;
  chartConfig?: {
    type: "bar" | "line" | "scatter" | "pie";
    xAxis: string;
    yAxis: string;
    title: string;
    data: Array<Record<string, any>>;
  };
  predictions?: Array<{
    date: string;
    predicted: number;
    lower: number;
    upper: number;
  }>;
  extractedEntities?: Array<{
    text: string;
    label: string;
  }>;
}

export type AgentRole = 
  | "Data Cleaning Agent"
  | "Visualization Agent"
  | "Forecast Agent"
  | "Report Agent"
  | "Business Analyst Agent"
  | "SQL Agent";

export interface ChatMessage {
  id: string;
  sender: "user" | "ai";
  text: string;
  agent?: AgentRole;
  timestamp: string;
  chart?: AnalysisResult["chartConfig"];
  sql?: string;
  citations?: string[];
}

export interface DragWidget {
  id: string;
  title: string;
  visible: boolean;
  type: "scorecard" | "chart" | "logs" | "sql" | "entities" | "recommendations" | "forecasting";
  size: "small" | "medium" | "large";
}
