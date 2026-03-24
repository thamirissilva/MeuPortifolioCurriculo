import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Code2, 
  User, 
  Heart,
  ExternalLink,
  Terminal,
  ChevronRight,
  Sparkles,
  MousePointer2,
  Zap,
  Cpu,
  Star
} from 'lucide-react';

const App = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: "Neon Dreams Interface",
      desc: "Um ecossistema visual onde a funcionalidade encontra a estética synthwave.",
      tech: ["React", "Framer Motion", "Tailwind"],
      emoji: "✨"
    },
    {
      title: "Kawaii Crypto Asset",
      desc: "Visualizador de dados em tempo real com micro-interações amigáveis.",
      tech: ["TypeScript", "Next.js"],
      emoji: "🌸"
    },
    {
      title: "Starlight API",
      desc: "Documentação interativa focada na experiência do desenvolvedor.",
      tech: ["Node.js", "GraphQL"],
      emoji: "🌙"
    }
  ];

  const skills = [
    { name: "Frontend Architecture", level: "92%", color: "from-[#FF71CE] to-[#B967FF]", icon: <Code2 className="w-4 h-4" /> },
    { name: "UI/UX Experience", level: "88%", color: "from-[#01CDFE] to-[#05FFA1]", icon: <Heart className="w-4 h-4" /> },
    { name: "Creative Coding", level: "75%", color: "from-[#B967FF] to-[#FF71CE]", icon: <Sparkles className="w-4 h-4" /> },
    { name: "Core Infrastructure", level: "65%", color: "from-[#05FFA1] to-[#01CDFE]", icon: <Cpu className="w-4 h-4" /> }
  ];

  return (
    <div className="min-h-screen bg-[#08080E] text-[#F0F0F7] font-light selection:bg-[#FF71CE]/30 overflow-x-hidden">
      
      {/* Dynamic Background Elements */}
      <div className="fixed top-[-20%] left-[-10%] w-[60%] h-[60%] bg-[#FF71CE]/5 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#01CDFE]/5 rounded-full blur-[120px] pointer-events-none animate-pulse" style={{animationDelay: '2s'}}></div>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-[#08080E]/80 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-8'}`}>
        <div className="max-w-6xl mx-auto px-8 flex justify-between items-center">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#FF71CE] to-[#B967FF] flex items-center justify-center shadow-[0_0_20px_rgba(255,113,206,0.3)] group-hover:scale-110 transition-transform">
              <Sparkles className="text-white w-5 h-5" />
            </div>
            <span className="text-lg font-medium tracking-[0.2em] bg-gradient-to-r from-[#FF71CE] to-[#01CDFE] bg-clip-text text-transparent">
              KAWAII_TECH
            </span>
          </div>
          
          <div className="hidden md:flex gap-10 items-center font-normal text-[11px] uppercase tracking-[0.3em] text-white/60">
            {['Início', 'História', 'Habilidades', 'Projetos'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-white transition-colors relative group">
                {item}
                <span className="absolute -bottom-2 left-1/2 w-0 h-[1px] bg-[#FF71CE] transition-all group-hover:w-full group-hover:left-0"></span>
              </a>
            ))}
            <button className="border border-white/10 hover:border-[#FF71CE]/50 px-6 py-2 rounded-full transition-all text-white">
              CONTATO
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="início" className="relative pt-48 pb-32 px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 space-y-10">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/5 text-[#01CDFE] font-medium text-[10px] uppercase tracking-[0.2em]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#05FFA1] animate-pulse"></span>
              System Status: Ready to Create
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extralight leading-[1.1] tracking-tight">
              Onde o <span className="font-semibold italic text-white">Código</span> <br /> 
              encontra a <span className="text-[#FF71CE] font-normal">Doçura.</span>
            </h1>
            
            <p className="text-lg text-white/50 max-w-lg leading-relaxed font-light">
              Desenvolvedora focada em experiências digitais sensíveis. Unindo a precisão técnica da arquitetura de software com uma estética vibrante e acolhedora.
            </p>
            
            <div className="flex flex-wrap gap-6 pt-4">
              <button className="bg-white text-[#08080E] px-10 py-4 rounded-full font-medium text-sm hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:-translate-y-1 transition-all flex items-center gap-3 group">
                Explorar Projetos <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <div className="flex gap-3">
                <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 hover:border-[#FF71CE] transition-all"><Github className="w-5 h-5" /></a>
                <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 hover:border-[#01CDFE] transition-all"><Linkedin className="w-5 h-5" /></a>
              </div>
            </div>
          </div>
          
          <div className="flex-1 relative">
            <div className="relative z-10 w-72 h-72 md:w-[420px] md:h-[420px] rounded-full p-[2px] bg-gradient-to-tr from-[#FF71CE] via-[#B967FF] to-[#01CDFE]">
              <div className="w-full h-full rounded-full overflow-hidden bg-[#08080E]">
                <img 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800" 
                  alt="Portrait" 
                  className="w-full h-full object-cover opacity-90 contrast-125"
                />
              </div>
            </div>
            {/* Minimalist Floating Elements */}
            <div className="absolute top-1/4 -left-10 w-16 h-16 bg-[#12121A]/80 backdrop-blur-md border border-white/10 rounded-2xl flex items-center justify-center shadow-2xl animate-bounce duration-[5s]">
              <Code2 className="text-[#FF71CE] w-6 h-6" />
            </div>
            <div className="absolute bottom-1/4 -right-5 w-14 h-14 bg-[#12121A]/80 backdrop-blur-md border border-white/10 rounded-2xl flex items-center justify-center shadow-2xl animate-bounce duration-[4s]">
              <Heart className="text-[#01CDFE] w-5 h-5" />
            </div>
          </div>
        </div>
      </section>

      {/* Bio Section - ATUALIZADA COM SUA TRAJETÓRIA */}
      <section id="história" className="py-32 relative">
        <div className="max-w-4xl mx-auto px-8">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px flex-1 bg-white/5"></div>
            <h2 className="text-[10px] uppercase tracking-[0.5em] text-[#FF71CE] font-bold">LOG_DE_SISTEMA: Bio</h2>
            <div className="h-px flex-1 bg-white/5"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-4 space-y-4">
              <div className="p-6 rounded-[2rem] bg-white/[0.02] border border-white/5 text-center group hover:border-[#FF71CE]/30 transition-all">
                 <Star className="w-6 h-6 text-[#FF71CE] mx-auto mb-3" />
                 <h4 className="text-xs uppercase tracking-widest font-bold">Propósito</h4>
                 <p className="text-[10px] text-white/40 mt-2 font-light">Humanizar a tecnologia através do design e do código.</p>
              </div>
              <div className="p-6 rounded-[2rem] bg-white/[0.02] border border-white/5 text-center group hover:border-[#01CDFE]/30 transition-all">
                 <Terminal className="w-6 h-6 text-[#01CDFE] mx-auto mb-3" />
                 <h4 className="text-xs uppercase tracking-widest font-bold">Stack</h4>
                 <p className="text-[10px] text-white/40 mt-2 font-light">Especialista em ecossistemas modernos de Frontend.</p>
              </div>
            </div>

            <div className="md:col-span-8 space-y-8">
              <p className="text-2xl font-light leading-relaxed text-white/90">
                Iniciei minha jornada no mundo tech com uma percepção clara: <span className="text-[#01CDFE] italic">a tecnologia é poderosa, mas muitas vezes fria.</span>
              </p>
              
              <div className="space-y-6 text-base text-white/50 font-light leading-relaxed">
                <p>
                  Minha trajetória é marcada pela busca constante em transformar linhas de código em experiências que abraçam o usuário. Como desenvolvedora, entendi que a eficiência de um backend e a beleza de um frontend só alcançam seu potencial máximo quando existe empatia no design.
                </p>
                <p>
                  Trabalho construindo interfaces que desafiam o padrão "corporate grey". Acredito que o <span className="text-[#FF71CE]">Kawaii</span> não é apenas uma estética, mas uma filosofia de acessibilidade e acolhimento — provando que sistemas complexos podem (e devem) ser visualmente encantadores e divertidos de usar.
                </p>
                <p>
                  Hoje, foco em arquiteturas escaláveis que não abrem mão da micro-interação delicada, do gradiente suave e daquela faísca de criatividade que faz cada projeto ser único.
                </p>
              </div>
              
              <div className="pt-6 flex gap-12">
                <div>
                   <span className="block text-sm font-bold text-white uppercase tracking-tighter italic">Missão</span>
                   <span className="text-[10px] text-white/30 uppercase tracking-[0.2em]">Codificar Sonhos</span>
                </div>
                <div>
                   <span className="block text-sm font-bold text-white uppercase tracking-tighter italic">Visão</span>
                   <span className="text-[10px] text-white/30 uppercase tracking-[0.2em]">Futuro Colorido</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="habilidades" className="py-32 bg-white/[0.01]">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12">
            {skills.map((skill, idx) => (
              <div key={idx} className="group space-y-4">
                <div className="flex justify-between items-end">
                  <div className="flex items-center gap-3">
                    <span className="text-white/30 text-xs font-mono">0{idx + 1}</span>
                    <h3 className="text-sm font-normal uppercase tracking-widest text-white/80 group-hover:text-white transition-colors">{skill.name}</h3>
                  </div>
                  <span className="text-[10px] font-mono text-white/30">{skill.level}</span>
                </div>
                <div className="h-[2px] w-full bg-white/5 relative overflow-hidden">
                  <div 
                    className={`absolute top-0 left-0 h-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                    style={{ width: skill.level }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projetos" className="py-32 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-end mb-20">
            <h2 className="text-3xl font-extralight tracking-tight italic text-white/90">Curadoria Criativa</h2>
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/20">Scroll to explore</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {projects.map((proj, idx) => (
              <div key={idx} className="group relative">
                <div className="aspect-[4/5] rounded-[2rem] bg-[#12121A] border border-white/5 overflow-hidden transition-all duration-500 group-hover:border-[#FF71CE]/30 group-hover:-translate-y-2">
                  <div className="h-full w-full flex flex-col p-10">
                    <div className="text-5xl mb-8 group-hover:scale-110 transition-transform duration-500 inline-block">{proj.emoji}</div>
                    <h3 className="text-xl font-normal mb-3 text-white">{proj.title}</h3>
                    <p className="text-sm text-white/40 leading-relaxed font-light mb-8 italic">{proj.desc}</p>
                    <div className="mt-auto flex flex-wrap gap-2">
                      {proj.tech.map(t => (
                        <span key={t} className="text-[9px] uppercase tracking-widest text-white/30 border border-white/5 px-2 py-1 rounded-md">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-32 px-8 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-extralight tracking-tighter">Vamos projetar o <span className="text-[#01CDFE] italic">futuro</span>?</h2>
            <p className="text-white/40 font-light tracking-wide max-w-sm mx-auto">Disponível para novos projetos e colaborações artísticas.</p>
            <div className="pt-8">
              <a 
                href="mailto:contato@exemplo.com" 
                className="text-2xl md:text-3xl font-light hover:text-[#FF71CE] transition-colors border-b border-white/10 pb-2 inline-block"
              >
                hello@kawaii.tech
              </a>
            </div>
          </div>
          
          <div className="mt-32 w-full flex flex-col md:flex-row justify-between items-center gap-8 text-[9px] font-normal tracking-[0.4em] text-white/20 uppercase">
            <p>© 2024 • Crafted with Light & Love</p>
            <div className="flex gap-10">
              <a href="#" className="hover:text-white transition-colors">Instagram</a>
              <a href="#" className="hover:text-white transition-colors">Behance</a>
              <a href="#" className="hover:text-white transition-colors">Dribbble</a>
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600&display=swap');
        
        body {
          font-family: 'Outfit', sans-serif;
          -webkit-font-smoothing: antialiased;
        }

        h1, h2, h3 {
          font-family: 'Outfit', sans-serif;
        }

        ::-webkit-scrollbar {
          width: 6px;
        }
        ::-webkit-scrollbar-track {
          background: #08080E;
        }
        ::-webkit-scrollbar-thumb {
          background: #1A1A24;
          border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #FF71CE44;
        }
      `}</style>

    </div>
  );
};

export default App;
