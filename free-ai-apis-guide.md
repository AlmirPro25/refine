# 🤖 Guia Completo: APIs de IA Gratuitas para seu Sistema

## 🏆 **MELHORES OPÇÕES GRATUITAS**

### 1. **OpenAI (GPT-3.5/4)**
- **Cota Grátis:** $5 de crédito inicial + $5/mês por 3 meses
- **Modelos:** GPT-3.5-turbo, GPT-4o-mini
- **Site:** https://platform.openai.com
- **Vantagem:** Melhor qualidade, muito usado
- **Como usar:** Registra → API Keys → $5 grátis

### 2. **Anthropic Claude**
- **Cota Grátis:** $5 de crédito inicial
- **Modelos:** Claude-3-haiku, Claude-3-sonnet
- **Site:** https://console.anthropic.com
- **Vantagem:** Muito bom para código, ético
- **Como usar:** Registra → Console → API Key

### 3. **Google AI Studio (Gemini)**
- **Cota Grátis:** 15 requests/minuto, ILIMITADO
- **Modelos:** Gemini-1.5-flash, Gemini-1.5-pro
- **Site:** https://aistudio.google.com
- **Vantagem:** Totalmente grátis, sem limite mensal
- **Como usar:** Já tem! Pode usar mais modelos

### 4. **Hugging Face (Inference API)**
- **Cota Grátis:** 30,000 requests/mês
- **Modelos:** Llama, Mistral, CodeLlama, Phi-3
- **Site:** https://huggingface.co/inference-api
- **Vantagem:** Muitos modelos open-source
- **Como usar:** Registra → Settings → Access Tokens

### 5. **Groq (Ultra Rápido)**
- **Cota Grátis:** 14,400 requests/dia
- **Modelos:** Llama-3.1, Mixtral, Gemma
- **Site:** https://console.groq.com
- **Vantagem:** SUPER RÁPIDO (500+ tokens/seg)
- **Como usar:** Registra → API Keys

### 6. **Together AI**
- **Cota Grátis:** $25 de crédito inicial
- **Modelos:** Llama-3.1, Mixtral, Qwen, Yi
- **Site:** https://together.ai
- **Vantagem:** Muitos modelos, bom preço
- **Como usar:** Registra → API → $25 grátis

### 7. **Replicate**
- **Cota Grátis:** $10 de crédito inicial
- **Modelos:** Llama, SDXL, Flux, CodeLlama
- **Site:** https://replicate.com
- **Vantagem:** IA de imagem também
- **Como usar:** Registra → Account → API tokens

### 8. **Cohere**
- **Cota Grátis:** 1000 requests/mês
- **Modelos:** Command, Command-R, Embed
- **Site:** https://cohere.com
- **Vantagem:** Bom para embeddings
- **Como usar:** Registra → API Keys

## 🔥 **OPÇÕES TOTALMENTE GRATUITAS (SEM LIMITE)**

### 9. **Ollama (Local)**
- **Cota:** ILIMITADO (roda no seu PC)
- **Modelos:** Llama, Mistral, Phi-3, CodeLlama
- **Site:** https://ollama.ai
- **Como usar:** Download → ollama run llama3

### 10. **GitHub Models (Beta)**
- **Cota:** Grátis durante beta
- **Modelos:** GPT-4o, Claude, Llama
- **Site:** https://github.com/marketplace/models
- **Vantagem:** Vários modelos em um lugar

## 💡 **COMO INTEGRAR NO SEU SISTEMA**

Vou criar um serviço multi-provider para você usar todos esses modelos:

```typescript
// services/multiAiService.ts
export const AI_PROVIDERS = {
  GEMINI: 'gemini',
  OPENAI: 'openai', 
  CLAUDE: 'claude',
  GROQ: 'groq',
  HUGGINGFACE: 'huggingface'
}
```

## 🎯 **RECOMENDAÇÕES POR USO**

### **Para Código (como seu sistema):**
1. **Claude** - Melhor para código
2. **GPT-4o-mini** - Muito bom e barato
3. **CodeLlama via Groq** - Grátis e rápido

### **Para Velocidade:**
1. **Groq** - Ultra rápido
2. **Gemini-Flash** - Rápido e grátis
3. **Together AI** - Bom equilíbrio

### **Para Economia:**
1. **Gemini** - Totalmente grátis
2. **Hugging Face** - 30k requests grátis
3. **Ollama** - Roda local, sem custo

## 🚀 **PRÓXIMOS PASSOS**

1. **Registre-se** nos que te interessam
2. **Pegue as API keys**
3. **Me avise** quais quer integrar
4. **Eu crio** o sistema multi-provider para você

## 💰 **RESUMO DE CUSTOS**

| Provider | Cota Grátis | Modelo Recomendado |
|----------|-------------|-------------------|
| Gemini | ♾️ Ilimitado | gemini-1.5-flash |
| OpenAI | $5 inicial | gpt-4o-mini |
| Claude | $5 inicial | claude-3-haiku |
| Groq | 14.4k/dia | llama-3.1-8b |
| HuggingFace | 30k/mês | microsoft/DialoGPT |
| Together | $25 inicial | meta-llama/Llama-3-8b |

Qual desses te interessa mais? Posso começar integrando os que você escolher!
