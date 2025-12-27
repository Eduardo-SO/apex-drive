# 🏎️ APEX DRIVE - Dashboard Automotivo Gran Turismo 7

Dashboard automotivo estilo Gran Turismo 7 com design ultra-minimalista dark mode, desenvolvido com React, TypeScript, Tailwind CSS, Framer Motion e Recharts.

## ✨ Características

### Design
- **Dark Mode Ultra-Minimalista**: Background escuro com efeitos glassmorphism
- **Bordas Finas**: 0.5px com transparência sutil (border-white/10)
- **Tipografia Técnica**: Inter e Roboto Mono para visual profissional
- **Animações Fluidas**: Framer Motion para transições suaves
- **Efeitos Ambient**: Gradientes sutis de fundo

### Componentes Implementados

#### 1. **glass-card.tsx**
Componente base reutilizável com efeito glassmorphism:
- Background: `bg-black/40` com `backdrop-blur-xl`
- Bordas: `border-[0.5px] border-white/10`
- Hover effects opcionais com Framer Motion
- Animações de entrada suaves

#### 2. **sidebar-menu.tsx**
Menu lateral com categorias e marcas:
- Categorias: Gr.3, Gr.4, Supercars, Hypercars
- Lista de marcas com contador
- Ícones da biblioteca Lucide React
- Estados ativos com visual destacado
- Animações de hover e tap

#### 3. **car-hero.tsx**
Seção hero com informações do veículo:
- Nome do modelo em fonte gigante ao fundo (opacidade 5%)
- Silhueta do carro centralizada
- Informações: marca, modelo, ano
- Quick stats: velocidade máxima, 0-100 km/h, peso
- Gradiente de fundo com efeito glow

#### 4. **specs-grid.tsx**
Grid de especificações técnicas:
- 3 cards com glassmorphism:
  - Motor: tipo, cilindrada, posição
  - Transmissão: tipo, marchas, tração
  - Arrefecimento: radiador, intercooler
- Ícones customizados para cada categoria
- Animações escalonadas (stagger)

#### 5. **performance-chart.tsx**
Gráfico de performance com Recharts:
- AreaChart com duas áreas sobrepostas
- Eixo X: RPM
- Eixo Y duplo: HP (esquerda) e Torque (direita)
- Cores: Potência (branco), Torque (vermelho #ff0000)
- Tooltip customizado com glassmorphism
- Grid sutil e animações suaves

#### 6. **ai-registration-form.tsx**
Formulário de cadastro via IA:
- **Estado Idle**: Campo de busca com efeito glow cyan
- **Estado Loading**: Skeleton screen elegante com animação shimmer
- **Simulação de IA**: Delay de 2.5s para processar
- Retorna JSON estruturado com dados do Ferrari F40
- Validação de input
- Botão com gradiente e hover effects

### Estrutura de Dados

```typescript
interface CarData {
  brand: string;
  model: string;
  year: number;
  specs: {
    engine: { type, displacement, position }
    transmission: { type, gears, drive }
    cooling: { radiator, intercooler }
    performance: { max_speed, zero_to_hundred, weight }
  };
  chartData: [{ rpm, hp, torque }]
}
```

## 🎨 Design System

### Cores
- Background: `#000000` → `#0a0a0a` (gradiente)
- Glass cards: `bg-black/40` + `backdrop-blur-xl`
- Bordas: `border-white/10` ou `border-white/5`
- Texto primário: `text-white`
- Texto secundário: `text-white/60`
- Accent: `#ff0000` (vermelho vibrante)
- Glow: `rgba(0, 255, 255, 0.3)` (cyan)

### Tipografia
- **Inter**: Interface e headings
- **Roboto Mono**: Valores técnicos e estatísticas
- Labels: `text-xs uppercase tracking-widest text-white/40`
- Values: `text-lg font-mono`
- Hero: `text-9xl font-black text-white/5`

### Efeitos
- Glassmorphism: `bg-black/40 backdrop-blur-xl border-[0.5px] border-white/10`
- Hover: `transition-all duration-300`
- Skeleton: Animação shimmer customizada
- Scrollbar: Customizado com transparência

## 🚀 Como Usar

### Estado Inicial
O dashboard inicia com o **formulário de cadastro IA**. Digite o nome de um modelo de carro e clique em "Processar com IA".

### Após Cadastro
O sistema exibe:
1. Header fixo com botão "Adicionar Novo Carro"
2. Car Hero Section com informações principais
3. Specs Grid com especificações técnicas
4. Performance Chart com curvas de potência e torque

### Adicionar Novo Carro
Clique no botão vermelho "Adicionar Novo Carro" no topo para resetar e cadastrar outro veículo.

## 📁 Estrutura de Arquivos

```
src/
├── components/
│   ├── glass-card.tsx          # Componente base glassmorphism
│   ├── sidebar-menu.tsx        # Menu lateral com categorias
│   ├── car-hero.tsx            # Hero section do veículo
│   ├── specs-grid.tsx          # Grid de especificações
│   ├── performance-chart.tsx   # Gráfico Recharts
│   └── ai-registration-form.tsx # Formulário com IA
├── types/
│   └── car.types.ts            # Interfaces TypeScript
├── data/
│   └── mock-cars.ts            # Dados de exemplo
├── App.tsx                     # Componente principal
├── main.tsx                    # Entry point
└── index.css                   # Estilos globais
```

## 🛠️ Tecnologias

- **React 19** + **TypeScript**
- **Vite** - Build tool
- **Tailwind CSS 4** - Styling
- **Framer Motion** - Animações
- **Recharts** - Gráficos
- **Lucide React** - Ícones

## 📊 Exemplo de Dados

O formulário simula o retorno da IA com dados do **Ferrari F40 (1987)**:
- Motor: V8 Twin-Turbo 2.9L Mid-Engine
- Transmissão: Manual 5 marchas RWD
- Performance: 324 km/h, 0-100 em 4.1s, 1100 kg
- Curva: 478 HP @ 7000 RPM, 426 Nm @ 5000-7000 RPM

## 🎯 Convenções

- **Arquivos de componentes**: kebab-case.tsx
- **Componentes React**: PascalCase
- **Interfaces TypeScript**: PascalCase com prefixo (ex: CarData)
- **Funções**: camelCase
- **Constantes**: UPPER_CASE ou camelCase

## ✅ Status

Todos os componentes foram implementados com sucesso:
- ✅ Estilos globais com glassmorphism
- ✅ Interfaces TypeScript
- ✅ Componente base (glass-card)
- ✅ Sidebar com categorias e marcas
- ✅ Hero section
- ✅ Grid de especificações
- ✅ Gráfico de performance
- ✅ Formulário de cadastro IA
- ✅ Integração no App.tsx

## 🎮 Inspiração

Design inspirado em **Gran Turismo 7**, focando em:
- Minimalismo técnico
- Precisão de dados
- Visualização profissional
- Experiência imersiva

