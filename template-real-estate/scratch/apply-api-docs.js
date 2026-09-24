const fs = require('fs');
const path = require('path');

const targetDir = 'c:\\Users\\william.monteiro\\p_projetos\\templates\\template-api-docs';
const portfolioPath = path.join(targetDir, 'src', 'components', 'Portfolio.tsx');

let content = fs.readFileSync(portfolioPath, 'utf8');

// 1. Branding substitutions
content = content.replace(/AITemplate/g, 'API Docs');
content = content.replace(/A Próxima Geração de.*?Agentes Autônomos/gs, 'A Próxima Geração de\\n            <span className="bg-gradient-to-r from-[var(--gold-400)] via-[var(--gold-500)] to-blue-500 text-transparent bg-clip-text">\\n              Documentação de APIs\\n            </span>');
content = content.replace(/The Next Generation of.*?Autonomous Agents/gs, 'The Next Generation of\\n            <span className="bg-gradient-to-r from-[var(--gold-400)] via-[var(--gold-500)] to-blue-500 text-transparent bg-clip-text">\\n              API Documentation\\n            </span>');
content = content.replace(/orquestração de IA/g, 'documentação interativa');
content = content.replace(/AI orchestration/g, 'interactive documentation');
content = content.replace(/conecta os seus LLMs aos dados da sua empresa/g, 'conecta os seus programadores aos seus endpoints');
content = content.replace(/connects your LLMs to your enterprise data/g, 'connects your developers to your endpoints');
content = content.replace(/Implante agentes autônomos/g, 'Publique documentação interativa');
content = content.replace(/Deploy scalable autonomous agents/g, 'Publish interactive documentation');

// 2. Navigation
content = content.replace(/href="#features"/g, 'href="/features"');
content = content.replace(/href="#integrations"/g, 'href="/integrations"');
content = content.replace(/href="#security"/g, 'href="/security"');

fs.writeFileSync(portfolioPath, content, 'utf8');

// 3. Create Nav Pages
const pages = [
  { name: 'features', title: 'Funcionalidades / Features' },
  { name: 'integrations', title: 'Integrações / Integrations' },
  { name: 'security', title: 'Segurança / Security' }
];

const appDir = path.join(targetDir, 'src', 'app');

pages.forEach(page => {
  const pageDir = path.join(appDir, page.name);
  if (!fs.existsSync(pageDir)) {
    fs.mkdirSync(pageDir, { recursive: true });
  }

  const pageContent = `import { BrainCircuit, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function ${page.name.charAt(0).toUpperCase() + page.name.slice(1)}Page() {
  return (
    <div className="min-h-screen bg-[var(--void)] text-[var(--text)] font-sans selection:bg-[var(--gold-400)] selection:text-white">
      <div className="absolute top-[-20%] left-[20%] w-[60%] h-[50%] bg-[var(--gold-700)] opacity-20 blur-[120px] rounded-full pointer-events-none" />
      
      <header className="border-b border-white/5 bg-[var(--void)]/60 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <BrainCircuit className="w-6 h-6 text-[var(--gold-400)]" />
            <span className="font-bold text-lg tracking-tight">API Docs</span>
          </Link>
          <Link href="/" className="flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" /> Voltar / Back
          </Link>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-32 relative z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-8 tracking-tight">${page.title}</h1>
        <p className="text-xl text-[var(--text-secondary)] max-w-3xl leading-relaxed">
          Página dedicada a detalhar as informações sobre ${page.name}. Mantém exatamente o mesmo design system Premium.
        </p>
        
        <div className="mt-16 h-96 rounded-2xl border border-white/10 bg-[var(--card)] flex items-center justify-center relative overflow-hidden group hover:border-white/20 transition-all duration-500">
           <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[var(--gold-500)]/20 to-transparent blur-[80px] rounded-full group-hover:from-[var(--gold-400)]/30 transition-colors duration-700" />
          <p className="text-[var(--text-secondary)] relative z-10 text-lg">Conteúdo da página ${page.name} em construção...</p>
        </div>
      </main>
    </div>
  );
}`;

  fs.writeFileSync(path.join(pageDir, 'page.tsx'), pageContent, 'utf8');
});

console.log('Update completed!');
