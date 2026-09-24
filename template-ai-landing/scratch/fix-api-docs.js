const fs = require('fs');
const path = require('path');

const targetDir = 'c:\\Users\\william.monteiro\\p_projetos\\templates\\template-api-docs';
const portfolioPath = path.join(targetDir, 'src', 'components', 'Portfolio.tsx');

// Reset to a clean state by copying from template-ai-landing
const sourcePath = 'c:\\Users\\william.monteiro\\p_projetos\\templates\\template-ai-landing\\src\\components\\Portfolio.tsx';
let content = fs.readFileSync(sourcePath, 'utf8');

// Precise replacements
content = content.replace(/AITemplate/g, 'API Docs');
content = content.replace(/Agentes Autônomos/g, 'Documentação de APIs');
content = content.replace(/Autonomous Agents/g, 'API Documentation');
content = content.replace(/orquestração de IA/g, 'documentação interativa');
content = content.replace(/AI orchestration/g, 'interactive documentation');
content = content.replace(/conecta os seus LLMs aos dados da sua empresa/g, 'conecta os seus programadores aos seus endpoints');
content = content.replace(/connects your LLMs to your enterprise data/g, 'connects your developers to your endpoints');
content = content.replace(/Implante agentes autônomos/g, 'Publique documentação interativa');
content = content.replace(/Deploy scalable autonomous agents/g, 'Publish interactive documentation');

// Navigation links
content = content.replace(/href="#features"/g, 'href="/features"');
content = content.replace(/href="#integrations"/g, 'href="/integrations"');
content = content.replace(/href="#security"/g, 'href="/security"');

fs.writeFileSync(portfolioPath, content, 'utf8');
console.log('Fixed syntax error!');
