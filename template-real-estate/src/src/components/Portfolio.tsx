import { PersonData, Locale } from "@/lib/data";
import { Sparkles, BrainCircuit, Zap, Shield, ArrowRight, Activity, TerminalSquare, Database, CheckCircle2, MessageSquare, ChevronDown, Layers, Code, Bot } from "lucide-react";
import { LangSwitch } from "./LangSwitch";

export function Portfolio({ data, locale }: { data: PersonData, locale: Locale }) {

  return (
    <div className="min-h-screen bg-[var(--void)] text-[var(--text)] font-sans overflow-x-hidden selection:bg-[var(--gold-400)] selection:text-white">
      
      {/* Blurred glow orb background */}
      <div className="absolute top-[-20%] left-[20%] w-[60%] h-[50%] bg-[var(--gold-700)] opacity-20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-[40%] right-[-10%] w-[40%] h-[60%] bg-[var(--atlantic)] opacity-10 blur-[120px] rounded-full pointer-events-none" />

      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[var(--void)]/60 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BrainCircuit className="w-6 h-6 text-[var(--gold-400)]" />
            <span className="font-bold text-lg tracking-tight">AITemplate</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[var(--text-secondary)]">
            <a href="#features" className="hover:text-white transition-colors">{locale === 'pt' ? 'Funcionalidades' : 'Features'}</a>
            <a href="#integrations" className="hover:text-white transition-colors">{locale === 'pt' ? 'Integrações' : 'Integrations'}</a>
            <a href="#security" className="hover:text-white transition-colors">{locale === 'pt' ? 'Segurança' : 'Security'}</a>
          </nav>
          <div className="flex items-center gap-4">
            <div className="relative flex items-center gap-2 bg-transparent border border-white/10 rounded-full px-4 py-1.5 text-[10px] font-semibold text-[#888] tracking-widest cursor-pointer hover:bg-white/5 transition-colors">
              <span className={locale === 'pt' ? 'text-white' : ''}>PT</span>
              <span className="text-white/20">/</span>
              <span className={locale === 'en' ? 'text-white' : ''}>EN</span>
              <div className="absolute inset-0 opacity-0">
                <LangSwitch locale={locale} label={locale === 'pt' ? 'EN' : 'PT'} />
              </div>
            </div>
            <button className="hidden sm:flex px-5 py-2 text-sm font-bold bg-white text-black rounded-full hover:bg-neutral-200 transition-colors">
              {locale === 'pt' ? 'Começar' : 'Get Started'}
            </button>
          </div>
        </div>
      </header>

      <main className="relative z-10 pt-32 pb-24 max-w-7xl mx-auto px-6">
        
        {/* Hero Section */}
        <section className="text-center py-20 md:py-32 relative">
          {/* Network Node background for the hero */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-10 pointer-events-none mix-blend-screen mask-image-linear-gradient(to_bottom,black_20%,transparent_100%)"></div>
          
          <div className="relative z-10 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-[var(--text-secondary)] font-medium mb-8 hover:bg-white/10 transition-colors cursor-pointer">
            <Sparkles className="w-4 h-4" />
            <span>{locale === 'pt' ? 'O novo padrão em orquestração de IA' : 'The new standard in AI orchestration'}</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-8">
            {locale === 'pt' ? 'A Próxima Geração de' : 'The Next Generation of'} <br />
            <span className="bg-gradient-to-r from-[var(--gold-400)] via-[var(--gold-500)] to-blue-500 text-transparent bg-clip-text">
              {locale === 'pt' ? 'Agentes Autônomos' : 'Autonomous Agents'}
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-[var(--text-secondary)] max-w-3xl mx-auto mb-12 leading-relaxed">
            {locale === 'pt' 
              ? 'A plataforma unificada que conecta os seus LLMs aos dados da sua empresa. Implante agentes autônomos escaláveis com latência ultra-baixa e segurança de nível bancário.'
              : 'The unified platform that connects your LLMs to your enterprise data. Deploy scalable autonomous agents with ultra-low latency and bank-grade security.'}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <button className="w-full sm:w-auto px-8 py-3.5 bg-white text-black font-bold rounded-full flex items-center justify-center gap-2 hover:bg-neutral-200 transition-colors shadow-[0_0_40px_rgba(255,255,255,0.3)]">
              {locale === 'pt' ? 'Começar Gratuitamente' : 'Start Building Free'} <span className="font-serif">→</span>
            </button>
            <button className="w-full sm:w-auto px-8 py-3.5 bg-transparent border border-white/20 text-white font-bold rounded-full flex items-center justify-center hover:bg-white/5 transition-colors">
              {locale === 'pt' ? 'Ler a Documentação' : 'Read Documentation'}
            </button>
          </div>
        </section>

        {/* Trusted By Logos */}
        <section className="py-12 border-y border-white/5 bg-white/[0.02]">
          <p className="text-center text-sm text-[var(--text-secondary)] font-medium mb-8 uppercase tracking-widest">
            {locale === 'pt' ? 'A infraestrutura escolhida por empresas inovadoras' : 'The infrastructure chosen by innovative companies'}
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Realistic fictional tech brand logos */}
            {['Nexus', 'Synthetix', 'Lumina', 'OmniData', 'Apex AI'].map(logo => (
              <span key={logo} className="text-2xl font-bold font-mono tracking-tighter flex items-center gap-2">
                <Layers className="w-6 h-6" /> {logo}
              </span>
            ))}
          </div>
        </section>

        {/* Bento Grid Features */}
        <section id="features" className="py-32">
          <div className="mb-20 text-center">
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
              {locale === 'pt' ? 'Primitivas ' : 'Powerful '}
              <span className="text-[var(--gold-400)]">{locale === 'pt' ? 'poderosas.' : 'primitives.'}</span>
            </h2>
            <p className="text-[var(--text-secondary)] text-xl max-w-2xl mx-auto">
              {locale === 'pt' 
                ? 'Tudo o que você precisa para arquitetar, testar e colocar os seus agentes em produção com zero dor de cabeça.' 
                : 'Everything you need to architect, test, and push your agents to production with zero headache.'}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Main Feature - Spans 2 cols & 2 rows */}
            <div className="lg:col-span-2 lg:row-span-2 bg-[var(--card)] border border-[var(--border)] rounded-[var(--radius-lg)] p-8 md:p-10 relative overflow-hidden group hover:border-[var(--gold-400)]/30 transition-all duration-500">
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[var(--gold-500)]/20 to-transparent blur-[80px] rounded-full group-hover:from-[var(--gold-400)]/30 transition-colors duration-700" />
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="mb-10">
                  <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mb-6">
                    <TerminalSquare className="w-6 h-6 text-[var(--gold-400)]" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">{locale === 'pt' ? 'Automação de Workflows Complexos' : 'Complex Workflow Automation'}</h3>
                  <p className="text-[var(--text-secondary)] md:text-lg max-w-md leading-relaxed">
                    {locale === 'pt' 
                      ? 'Abstraia a complexidade das integrações. Nossa SDK gerencia o estado, memória e chamadas de ferramentas de forma autônoma e resiliente.' 
                      : 'Abstract away integration complexity. Our SDK manages state, memory, and tool calls autonomously with built-in resilience.'}
                  </p>
                </div>
                {/* Mock Code Block */}
                <div className="bg-[#0D0D12] border border-white/10 rounded-2xl p-6 font-mono text-[10px] md:text-xs lg:text-sm text-green-400 shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--gold-400)] to-blue-500" />
                  <div className="flex gap-2 mb-4">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                  </div>
                  <p className="text-purple-400">import <span className="text-white">&#123; Agent &#125;</span> from <span className="text-green-300">'@aitemplate/sdk'</span>;</p>
                  <br/>
                  <p className="text-blue-400">const <span className="text-white">agent</span> = new <span className="text-yellow-200">Agent</span>();</p>
                  <p><span className="text-purple-400">await</span> agent.<span className="text-blue-300">connect</span>(<span className="text-green-300">'slack'</span>);</p>
                  <p><span className="text-purple-400">await</span> agent.<span className="text-blue-300">deploy</span>();</p>
                  <p className="text-neutral-500 mt-4">// {locale === 'pt' ? 'Pronto em' : 'Ready in'} 200ms</p>
                </div>
              </div>
            </div>

            {/* Top Middle Feature */}
            <div className="lg:col-span-1 bg-[var(--card)] border border-[var(--border)] rounded-[var(--radius-lg)] p-8 flex flex-col group hover:border-[var(--gold-400)]/30 transition-all duration-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/10 blur-[40px] rounded-full" />
              <div className="relative z-10">
                <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center mb-5">
                  <Zap className="w-5 h-5 text-yellow-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">{locale === 'pt' ? 'Edge Computing Nativo' : 'Native Edge Computing'}</h3>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed hidden md:block">
                  {locale === 'pt' 
                    ? 'Agentes implantados globalmente. Tempo de resposta TTFB inferior a 50ms para streaming de IA.' 
                    : 'Globally deployed agents. Sub-50ms TTFB response times for AI streaming.'}
                </p>
              </div>
            </div>

            {/* Top Right Feature */}
            <div className="lg:col-span-1 bg-[var(--card)] border border-[var(--border)] rounded-[var(--radius-lg)] p-8 flex flex-col group hover:border-[var(--gold-400)]/30 transition-all duration-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-[40px] rounded-full" />
              <div className="relative z-10">
                <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center mb-5">
                  <Shield className="w-5 h-5 text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">{locale === 'pt' ? 'Segurança e Conformidade' : 'Security & Compliance'}</h3>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed hidden md:block">
                  {locale === 'pt' 
                    ? 'A sua propriedade intelectual protegida com SOC2 Tipo II e criptografia AES-256.' 
                    : 'Your intellectual property protected with SOC2 Type II and AES-256 encryption.'}
                </p>
              </div>
            </div>

            {/* Bottom Middle Feature */}
            <div className="lg:col-span-1 bg-[var(--card)] border border-[var(--border)] rounded-[var(--radius-lg)] p-8 flex flex-col group hover:border-[var(--gold-400)]/30 transition-all duration-500 relative overflow-hidden">
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-500/10 blur-[40px] rounded-full" />
              <div className="relative z-10">
                <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center mb-5">
                  <Database className="w-5 h-5 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">{locale === 'pt' ? 'Múltiplos Modelos' : 'Multiple Models'}</h3>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                  {locale === 'pt' 
                    ? 'Suporte nativo para GPT-4, Claude 3, Llama 3 e BYOM.' 
                    : 'Native support for GPT-4, Claude 3, Llama 3 and BYOM.'}
                </p>
              </div>
            </div>

            {/* Bottom Right Feature */}
            <div className="lg:col-span-1 bg-[var(--card)] border border-[var(--border)] rounded-[var(--radius-lg)] p-8 flex flex-col group hover:border-[var(--gold-400)]/30 transition-all duration-500 relative overflow-hidden">
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-[var(--gold-500)]/10 blur-[50px] rounded-full" />
              <div className="relative z-10">
                <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center mb-5">
                  <Activity className="w-5 h-5 text-[var(--gold-400)]" />
                </div>
                <h3 className="text-xl font-bold mb-3">{locale === 'pt' ? 'Agentes de Business Enterprise' : 'Enterprise Business Agents'}</h3>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                  {locale === 'pt' 
                    ? 'A sua propriedade intelectual está protegida. Auditorias SOC2 Tipo II anuais.' 
                    : 'Your intellectual property is protected. Annual SOC2 Type II audits.'}
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* Use Cases (Feito para resolver) */}
        <section id="use-cases" className="py-32">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">{locale === 'pt' ? 'Feito para resolver.' : 'Built to solve.'}</h2>
            <p className="text-[var(--text-secondary)] text-sm md:text-base max-w-2xl mx-auto">{locale === 'pt' ? 'Veja o que as principais equipes de engenharia estão dizendo.' : 'See what leading engineering teams are saying.'}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <MessageSquare className="w-5 h-5 text-blue-400" />,
                title: { pt: 'Resolução de Atendimento Automática', en: 'Automated Ticket Resolution' },
                desc: { pt: 'Integre com Zendesk ou Intercom a 8 modelos. A flexibilidade de mesclar Claude 3 e GPT-4 via única API, sem refatorar código, é o ponto para a nossa arquitetura.', en: 'Integrate with Zendesk or Intercom. Agents analyze history, access internal manuals, and execute refunds with zero human intervention.' },
                glow: 'from-blue-500/20'
              },
              {
                icon: <Code className="w-5 h-5 text-[var(--gold-400)]" />,
                title: { pt: 'Engenharia Reversa e Refatoração', en: 'Reverse Engineering & Refactoring' },
                desc: { pt: '"Estávamos céticos quanto à latência, mas a orquestração na edge superou as expectativas. Nossos chatbots agora respondem em tempo real sem sem engasgos."', en: '"We were skeptical about latency, but the edge orchestration exceeded expectations. Our chatbots now respond in true real-time with zero buffering."' },
                glow: 'from-[var(--gold-400)]/20'
              },
              {
                icon: <Activity className="w-5 h-5 text-purple-400" />,
                title: { pt: 'Agentes de Business Intelligence', en: 'Business Intelligence Agents' },
                desc: { pt: '"A capacidade de manter o estado e memória do agente entre diferentes sessões transformou completamente a maneira como processamos dados de clientes."', en: '"The ability to persist agent state and memory across different sessions completely transformed how we process our customer data."' },
                glow: 'from-purple-500/20'
              }
            ].map((useCase, idx) => (
              <div key={idx} className="relative group p-8 rounded-[var(--radius-lg)] bg-[var(--card)] border border-[var(--border)] hover:border-white/20 transition-all duration-300 overflow-hidden flex flex-col h-full">
                <div className={`absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t ${useCase.glow} to-transparent opacity-50`}></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center mb-6">
                    {useCase.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{useCase.title[locale]}</h3>
                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed">{useCase.desc[locale]}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">{locale === 'pt' ? 'Preços simples e transparentes.' : 'Simple, transparent pricing.'}</h2>
            <p className="text-[var(--text-secondary)] text-lg max-w-xl mx-auto">{locale === 'pt' ? 'Comece de graça, escale quando precisar.' : 'Start for free, scale when you need to.'}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Hobby Plan */}
            <div className="bg-[var(--base)] border border-[var(--border)] rounded-[var(--radius-lg)] p-8">
              <h3 className="text-2xl font-bold mb-2">Hobby</h3>
              <p className="text-[var(--text-secondary)] mb-6">{locale === 'pt' ? 'Perfeito para projetos pessoais e experimentos.' : 'Perfect for side projects and experiments.'}</p>
              <div className="mb-8">
                <span className="text-4xl font-bold">$0</span>
                <span className="text-[var(--text-secondary)]">/{locale === 'pt' ? 'mês' : 'month'}</span>
              </div>
              <ul className="space-y-4 mb-8">
                {(locale === 'pt' ? ["100.000 requisições/mês", "Suporte da comunidade", "Latência padrão", "1 agente ativo"] : ["100,000 API requests/mo", "Community support", "Standard latency", "1 active agent"]).map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[var(--gold-400)]" />
                    <span className="text-[var(--text-secondary)]">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 rounded-lg border border-[var(--border)] hover:bg-[var(--card)] transition-colors font-semibold">
                {locale === 'pt' ? 'Começar' : 'Get Started'}
              </button>
            </div>

            {/* Pro Plan */}
            <div className="bg-[var(--card)] border border-[var(--gold-400)]/50 rounded-[var(--radius-lg)] p-8 relative shadow-[var(--shadow-card)]">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[var(--void)] border border-[var(--gold-400)] shadow-[0_0_15px_rgba(168,85,247,0.5)] text-[var(--gold-400)] text-[10px] font-bold px-4 py-1 rounded-full uppercase tracking-widest">
                {locale === 'pt' ? 'Mais Popular' : 'Most Popular'}
              </div>
              <h3 className="text-2xl font-bold mb-2">Pro</h3>
              <p className="text-[var(--text-secondary)] mb-6">{locale === 'pt' ? 'Para workloads em produção e equipes.' : 'For production workloads and teams.'}</p>
              <div className="mb-8">
                <span className="text-4xl font-bold">$49</span>
                <span className="text-[var(--text-secondary)]">/{locale === 'pt' ? 'mês' : 'month'}</span>
              </div>
              <ul className="space-y-4 mb-8">
                {(locale === 'pt' ? ["Requisições ilimitadas", "Suporte prioritário 24/7", "Latência ultra-baixa", "Agentes ilimitados", "Modelos customizados"] : ["Unlimited API requests", "Priority 24/7 support", "Ultra-low latency", "Unlimited agents", "Custom models"]).map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[var(--gold-400)]" />
                    <span className="text-[var(--text-secondary)]">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 rounded-lg bg-gradient-to-r from-[var(--gold-400)] to-[var(--gold-500)] text-white hover:opacity-90 transition-opacity font-semibold">
                {locale === 'pt' ? 'Atualizar para Pro' : 'Upgrade to Pro'}
              </button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-24 border-t border-white/5">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">{locale === 'pt' ? 'Perguntas Frequentes.' : 'Frequently asked questions.'}</h2>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {(locale === 'pt' ? [
              { q: "Como lidam com a retenção de dados e privacidade?", a: "Nós temos uma política de zero retenção. Os inputs e outputs do seu modelo não são armazenados após a requisição ser finalizada, garantindo que dados sensíveis da sua empresa não sejam usados para treinar modelos base." },
              { q: "Posso utilizar LLMs hospedados em minha própria VPC?", a: "Sim, através do plano Enterprise, fornecemos integrações seguras (como AWS PrivateLink) para que o agente orquestre modelos que rodam exclusivamente na sua infraestrutura isolada." },
              { q: "Quais são os limites de concorrência na API?", a: "O plano Hobby suporta até 10 requisições simultâneas. O plano Pro eleva o limite para 1.000 concorrências. Para necessidades maiores, o nosso plano Enterprise oferece balanceamento de carga dedicado." },
              { q: "A plataforma suporta memória de longo prazo (RAG)?", a: "Absolutamente. Nós incluímos suporte nativo para bancos de dados vetoriais (Pinecone, Qdrant, e pgvector) para injeção automática de contexto." }
            ] : [
              { q: "How do you handle data retention and privacy?", a: "We have a strict zero data retention policy. Your model inputs and outputs are not stored after the request is fulfilled, guaranteeing that your sensitive data is never used to train base models." },
              { q: "Can I use LLMs hosted inside my own VPC?", a: "Yes, through our Enterprise plan, we provide secure integrations (like AWS PrivateLink) so the agent can orchestrate models running exclusively in your isolated infrastructure." },
              { q: "What are the API concurrency limits?", a: "The Hobby plan supports up to 10 concurrent requests. The Pro plan raises this limit to 1,000. For higher demands, our Enterprise tier offers dedicated load balancing." },
              { q: "Does the platform support long-term memory (RAG)?", a: "Absolutely. We include native plug-and-play support for vector databases (Pinecone, Qdrant, and pgvector) for automatic context injection." }
            ]).map((faq, i) => (
              <div key={i} className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-6 group hover:border-[var(--gold-400)]/30 transition-colors cursor-pointer">
                <div className="flex justify-between items-center">
                  <h4 className="font-bold text-lg">{faq.q}</h4>
                  <ChevronDown className="w-5 h-5 text-[var(--text-secondary)] group-hover:text-[var(--gold-400)] transition-colors" />
                </div>
                <p className="mt-4 text-[var(--text-secondary)] leading-relaxed hidden group-hover:block">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-[var(--border)] bg-[var(--card)]">
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col gap-4 items-center md:items-start">
            <div className="flex items-center gap-2">
              <BrainCircuit className="w-5 h-5 text-[var(--text-secondary)]" />
              <span className="text-[var(--text-secondary)] font-medium">© {new Date().getFullYear()} AITemplate Inc.</span>
            </div>
            {/* Author Badge */}
            <a href="https://wmonteiro.pt" target="_blank" rel="noreferrer" className="flex items-center gap-3 bg-[var(--background)] p-1.5 pr-4 rounded-full border border-[var(--border)] hover:border-[var(--primary)] transition-colors w-max group mt-2">
              <img src="/perfil2.png" alt="William Monteiro" className="w-6 h-6 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300" />
              <div className="flex flex-col text-left">
                <span className="text-[10px] text-[var(--text-secondary)] leading-none mb-0.5">Template created by</span>
                <span className="text-xs text-white group-hover:text-[var(--primary)] font-medium leading-none">William Monteiro</span>
              </div>
            </a>
          </div>
          <div className="flex gap-6 text-sm text-[var(--text-secondary)]">
            <a href="#" className="hover:text-white transition-colors">{locale === 'pt' ? 'Privacidade' : 'Privacy'}</a>
            <a href="#" className="hover:text-white transition-colors">{locale === 'pt' ? 'Termos' : 'Terms'}</a>
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
