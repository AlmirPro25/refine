export enum Tab {
  Code = 'code',
  Explanation = 'explanation',
  Visualize = 'visualize',
  UI = 'ui',
  Simulate = 'simulate',
  JSBrowser = 'jsBrowser',
}

export type SampleDataset = 'none' | 'mnist' | 'imdb' | 'cifar10';

export interface Layer {
  name: string;
  type: string;
  inputs: string[];
  neurons?: number;
  shape?: number[];
  activation?: string;
  rate?: number;
  filters?: number;
  kernel_size?: number[];
  pool_size?: number[];
  // FIX: Add missing properties for NLP layers to resolve TypeScript errors in NetworkVisualizer.
  max_tokens?: number;
  output_dim?: number;
  output_sequence_length?: number;
}

export interface NetworkArchitecture {
  layers: Layer[];
}

export interface UICode {
  framework: string;
  code: string;
}

export interface GeminiResponse {
  pythonCode: string;
  explanation: string;
  architecture: NetworkArchitecture;
  uiCode?: UICode;
  jsCode?: string;
}

export interface SimulationFile {
  filename: string;
  content: string;
  encoding: 'utf-8' | 'base64';
}
