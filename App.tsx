import React, { useState, useCallback } from 'react';
import type { Chat } from '@google/genai';
import { PromptForm } from './components/PromptForm';
import { OutputDisplay } from './components/OutputDisplay';
import { startChatSession, sendMessageToChat, translatePythonToJs } from './services/geminiService';
import type { GeminiResponse, SampleDataset } from './types';
import { Hero } from './components/Hero';
import { LoadingSpinner } from './components/LoadingSpinner';
import { DataVisualizer } from './components/DataVisualizer';

const App: React.FC = () => {
  const [prompt, setPrompt] = useState<string>('');
  const [generateUi, setGenerateUi] = useState<boolean>(false);
  const [generateJs, setGenerateJs] = useState<boolean>(false);
  const [aiResponse, setAiResponse] = useState<GeminiResponse | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [loadingMessage, setLoadingMessage] = useState<string>('Tecendo as vias neurais...');
  const [isRefining, setIsRefining] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedDataset, setSelectedDataset] = useState<SampleDataset>('none');
  const [showDataVisualizer, setShowDataVisualizer] = useState<boolean>(false);
  const [model, setModel] = useState<string>('gemini-2.5-flash');
  const [chatSession, setChatSession] = useState<Chat | null>(null);

  // State for hyperparameters
  const [learningRate, setLearningRate] = useState<string>('0.001');
  const [epochs, setEpochs] = useState<string>('10');
  const [batchSize, setBatchSize] = useState<string>('32');


  const constructInitialPrompt = () => {
    let finalPrompt = `**Hiperparâmetros Sugeridos:**
Taxa de Aprendizado: ${learningRate}
Épocas: ${epochs}
Tamanho do Lote: ${batchSize}

`;

    if (selectedDataset !== 'none') {
      finalPrompt += `**Conjunto de Dados Selecionado:** ${selectedDataset}\n\n`;
    }

    finalPrompt += `**PROMPT DO USUÁRIO:**\n${prompt}`;

    if (generateUi) {
      finalPrompt += "\n\n---\nINSTRUÇÃO ADICIONAL: Crie também uma interface de usuário completa para esta rede neural. A interface deve permitir que um usuário forneça uma entrada e veja a previsão do modelo. O código Python principal deve salvar o modelo treinado, e o código da UI deve carregá-lo e usá-lo.";
    }
    return finalPrompt;
  }

  const handleGenerate = useCallback(async () => {
    if (!prompt.trim()) {
      setError('Por favor, insira uma descrição para a IA que você deseja construir.');
      return;
    }
    
    setIsLoading(true);
    setLoadingMessage('Tecendo as vias neurais...');
    setError(null);
    setAiResponse(null);
    setChatSession(null); // Start a new session

    try {
      const newChat = startChatSession(model);
      setChatSession(newChat);
      const initialPrompt = constructInitialPrompt();
      let response = await sendMessageToChat(newChat, initialPrompt);

      if (generateJs) {
        setLoadingMessage('Traduzindo para TensorFlow.js...');
        const jsCode = await translatePythonToJs(response.pythonCode, response.explanation, prompt);
        response = { ...response, jsCode };
      }
      
      setAiResponse(response);
    } catch (err) {
      console.error(err);
      setError(err instanceof Error ? err.message : 'Ocorreu um erro desconhecido. Verifique o console para mais detalhes.');
    } finally {
      setIsLoading(false);
    }
  }, [prompt, generateUi, generateJs, selectedDataset, learningRate, epochs, batchSize, model]);

  const handleRefine = useCallback(async (refinementPrompt: string) => {
    if (!chatSession) {
      setError('A sessão de chat não foi iniciada. Por favor, gere uma IA primeiro.');
      return;
    }
     if (!refinementPrompt.trim()) {
      setError('Por favor, insira um prompt de refinamento.');
      return;
    }

    setIsRefining(true);
    setError(null);

    try {
      const response = await sendMessageToChat(chatSession, refinementPrompt);
      let finalResponse = response;

      // Re-translate to JS if it was generated before
      if (aiResponse?.jsCode) {
         const jsCode = await translatePythonToJs(response.pythonCode, response.explanation, prompt);
         finalResponse = { ...response, jsCode };
      }

      setAiResponse(finalResponse);
    } catch (err)
 {
      console.error(err);
      setError(err instanceof Error ? err.message : 'Ocorreu um erro desconhecido durante o refinamento. Verifique o console.');
    } finally {
      setIsRefining(false);
    }
  }, [chatSession, aiResponse, prompt]);


  return (
    <div className="min-h-screen bg-gray-900 font-sans text-gray-200">
      {showDataVisualizer && selectedDataset !== 'none' && (
        <DataVisualizer dataset={selectedDataset} onClose={() => setShowDataVisualizer(false)} />
      )}
      <div className="container mx-auto px-4 py-8">
        <main className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4">
            <div className="sticky top-8 bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700 shadow-2xl shadow-purple-500/10">
              <h1 className="text-2xl font-bold text-white mb-1">Criador de Redes Neurais <span className="text-purple-400">AI</span></h1>
              <p className="text-gray-400 mb-6 text-sm">Descreva um modelo de IA, e eu irei gerar o código Python, uma explicação e uma visualização da rede.</p>
              <PromptForm
                prompt={prompt}
                setPrompt={setPrompt}
                onSubmit={handleGenerate}
                isLoading={isLoading}
                generateUi={generateUi}
                setGenerateUi={setGenerateUi}
                generateJs={generateJs}
                setGenerateJs={setGenerateJs}
                selectedDataset={selectedDataset}
                setSelectedDataset={setSelectedDataset}
                onVisualize={() => setShowDataVisualizer(true)}
                learningRate={learningRate}
                setLearningRate={setLearningRate}
                epochs={epochs}
                setEpochs={setEpochs}
                batchSize={batchSize}
                setBatchSize={setBatchSize}
                model={model}
                setModel={setModel}
              />
              {error && <p className="mt-4 text-sm text-red-400 bg-red-900/50 p-3 rounded-lg">{error}</p>}
            </div>
          </div>

          <div className="lg:col-span-8">
            {isLoading && (
              <div className="flex flex-col items-center justify-center h-full min-h-[500px]">
                <LoadingSpinner />
                <p className="mt-4 text-lg text-purple-300 animate-pulse">{loadingMessage}</p>
                <p className="text-sm text-gray-400">Isso pode levar um momento.</p>
              </div>
            )}
            {!isLoading && !aiResponse && <Hero />}
            {aiResponse && (
              <OutputDisplay 
                response={aiResponse} 
                prompt={prompt} 
                onRefine={handleRefine}
                isRefining={isRefining}
              />
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;