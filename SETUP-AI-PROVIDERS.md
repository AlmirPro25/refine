# 🚀 Setup Rápido: APIs de IA Gratuitas

## ⚡ **COMEÇE AGORA - 5 MINUTOS**

### 1. **Groq (MAIS RÁPIDO - RECOMENDADO)**
```
🔗 Site: https://console.groq.com
💰 Grátis: 14,400 requests/dia
⚡ Velocidade: ULTRA RÁPIDA (500+ tokens/seg)
🤖 Modelos: Llama-3.1, Mixtral, Gemma
```

**Passos:**
1. Acesse https://console.groq.com
2. Faça login com Google/GitHub
3. Vá em "API Keys" → "Create API Key"
4. Copie a key que começa com `gsk_...`
5. Cole no seu sistema!

### 2. **OpenAI (MELHOR QUALIDADE)**
```
🔗 Site: https://platform.openai.com
💰 Grátis: $5 inicial + $5/mês por 3 meses
🤖 Modelos: GPT-4o-mini, GPT-3.5-turbo
```

**Passos:**
1. Acesse https://platform.openai.com
2. Crie conta → Billing → Add $5 (ou use os $5 grátis)
3. API Keys → Create new secret key
4. Copie a key que começa com `sk-...`

### 3. **Hugging Face (OPEN SOURCE)**
```
🔗 Site: https://huggingface.co
💰 Grátis: 30,000 requests/mês
🤖 Modelos: Llama, Mistral, CodeLlama
```

**Passos:**
1. Acesse https://huggingface.co
2. Sign Up → Settings → Access Tokens
3. New token → Role: Read → Create
4. Copie o token que começa com `hf_...`

## 🎯 **TESTE RÁPIDO**

Cole este prompt no seu sistema para testar:

```
Crie uma rede neural simples para classificar se um e-mail é spam ou não spam.

A rede deve ter:
- Camada de entrada: 100 neurônios (features do texto)
- 2 camadas ocultas: 64 e 32 neurônios
- Camada de saída: 2 neurônios (spam/não spam)
- Ativação ReLU nas ocultas, sigmoid na saída
- Dropout de 0.3 para evitar overfitting

Use um dataset sintético pequeno para demonstração.
```

## 🔧 **COMO INTEGRAR NO SEU SISTEMA**

1. **Abra o arquivo `.env.local`** no seu projeto
2. **Adicione as keys:**

```env
# Suas APIs gratuitas
GROQ_API_KEY=gsk_sua_key_aqui
OPENAI_API_KEY=sk_sua_key_aqui
HUGGINGFACE_API_KEY=hf_sua_key_aqui
CLAUDE_API_KEY=sk-ant_sua_key_aqui
TOGETHER_API_KEY=sua_key_aqui
```

3. **No seu código, importe:**

```typescript
import { multiAI, AI_PROVIDERS } from './services/multiAiService';

// Configura os providers
multiAI.addProvider({
  provider: AI_PROVIDERS.GROQ,
  apiKey: process.env.GROQ_API_KEY!,
  model: 'llama-3.1-8b-instant'
});

// Usa qualquer provider disponível
const response = await multiAI.sendToFirstAvailable(prompt);
```

## 🏆 **RANKING DE RECOMENDAÇÃO**

### **Para seu sistema de redes neurais:**

1. **🥇 Groq + Llama-3.1** - Grátis, rápido, bom para código
2. **🥈 OpenAI GPT-4o-mini** - Melhor qualidade, $5 grátis
3. **🥉 Gemini Flash** - Que você já usa, ilimitado
4. **🏅 Claude Haiku** - Excelente para código, $5 grátis

## 💡 **DICAS PRO**

- **Comece com Groq** - é grátis e super rápido
- **Use fallback** - se um falhar, tenta outro automaticamente
- **Teste todos** - cada um tem pontos fortes
- **Monitore uso** - para não estourar limites

## 🚨 **TROUBLESHOOTING**

**Erro de API Key:**
- Verifique se copiou corretamente
- Alguns têm prefixos específicos (sk-, gsk-, hf_)

**Rate limit:**
- Groq: 14.4k/dia
- OpenAI: Depende do crédito
- HF: 30k/mês

**Modelo não encontrado:**
- Use os modelos listados no código
- Alguns providers têm nomes específicos

## 🎉 **PRONTO!**

Agora você tem acesso a **4+ modelos de IA gratuitos** no seu sistema!

Teste com o prompt acima e veja a mágica acontecer! 🚀
