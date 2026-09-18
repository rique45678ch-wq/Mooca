import React from "react";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Percent,
  CalendarCheck,
  ExternalLink,
  MapPin,
  CheckCircle,
} from "lucide-react";
import { INTEREST_FORMS } from "../data/apartments";

interface HeroProps {
  onOpenInterestModal: (formId?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenInterestModal }) => {
  return (
    <section id="hero-section" className="relative overflow-hidden bg-slate-900 text-white pt-8 pb-20 lg:pt-14 lg:pb-28">
      {/* Background Architectural Glow and Pattern */}
      <div className="absolute inset-0 z-0 opacity-25">
        <img
          src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=2000&q=80"
          alt="Edifício Residencial Moderno"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/95 to-slate-900/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headlines & Main CTA */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Launch Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-400/30 text-amber-400 text-xs sm:text-sm font-semibold tracking-wide backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
              <span>Lançamento Exclusivo • Condições Especiais de Pré-Venda</span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-white">
              Seu Novo Apartamento com{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500">
                Varanda Gourmet
              </span>{" "}
              e Lazer de Clube
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Plantas inteligentes de <strong>1, 2 e 3 dormitórios</strong> em localização nobre. Entrada facilitada direto com a construtora e financiamento bancário com taxas promocionais.
            </p>

            {/* Quick Benefits Bullet List */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs sm:text-sm text-slate-300 max-w-xl mx-auto lg:mx-0 text-left">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Entrada em até 36x</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Uso do seu FGTS</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Piscina c/ Borda Infinita</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                <span>A 3 min do Metrô</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Vaga Demarcada</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Varanda com Churrasqueira</span>
              </div>
            </div>

            {/* Main CTA Actions */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                id="hero-main-cta-interest"
                onClick={() => onOpenInterestModal()}
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-base text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-xl shadow-amber-500/20 hover:shadow-amber-500/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer flex items-center justify-center gap-3"
              >
                <span>Tenho Interesse</span>
                <ArrowRight className="w-5 h-5 text-slate-950" />
              </button>

              <a
                id="hero-scroll-apartments-btn"
                href="#apartamentos"
                className="w-full sm:w-auto px-6 py-4 rounded-xl font-semibold text-sm text-slate-200 hover:text-white bg-slate-800/80 hover:bg-slate-800 border border-slate-700 transition-colors text-center"
              >
                Conhecer as Plantas
              </a>
            </div>

            {/* Direct Form Links Quick Bar */}
            <div className="pt-3">
              <p className="text-xs font-semibold text-amber-400/90 uppercase tracking-wider mb-2">
                Acesse o formulário direto da sua opção:
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
                {INTEREST_FORMS.map((item, idx) => (
                  <a
                    key={item.id}
                    id={`hero-quick-link-${idx + 1}`}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/90 hover:bg-amber-600/90 border border-slate-700 hover:border-amber-400 text-xs font-medium text-slate-200 hover:text-white transition-all shadow-sm"
                  >
                    <span>{item.shortLabel}</span>
                    <ExternalLink className="w-3 h-3 text-amber-400 group-hover:text-white" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Hero Showcase Card with Form Previews */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-gradient-to-b from-slate-800/90 to-slate-900/90 border border-slate-700/80 p-5 sm:p-6 shadow-2xl backdrop-blur-md">
              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-slate-700/80 pb-4 mb-4">
                <div>
                  <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
                    Cadastro de Interesse Oficial
                  </span>
                  <h3 className="text-lg font-bold text-white">
                    Receba a Tabela de Preços & Condições
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 font-bold text-xs">
                  VIP
                </div>
              </div>

              {/* 3 Quick Cards pointing directly to the 3 Links */}
              <p className="text-xs text-slate-400 mb-3">
                Clique no botão de interesse da opção desejada para preencher o formulário no Google Forms:
              </p>

              <div className="space-y-3">
                {INTEREST_FORMS.map((form, index) => (
                  <div
                    key={form.id}
                    className="group p-3.5 rounded-xl bg-slate-800/50 hover:bg-slate-800 border border-slate-700 hover:border-amber-500/50 transition-all"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-[11px] font-bold px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300">
                            Opção 0{index + 1}
                          </span>
                          <span className="text-xs font-semibold text-white">
                            {form.shortLabel}
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 mt-1 line-clamp-1">
                          {form.category} • {form.area}
                        </p>
                      </div>

                      <a
                        id={`hero-card-cta-${form.id}`}
                        href={form.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-bold text-slate-900 bg-amber-400 hover:bg-amber-300 transition-colors shadow-sm"
                      >
                        <span>Tenho Interesse</span>
                        <ExternalLink className="w-3.5 h-3.5 text-slate-900" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Trust Badge Below Form Box */}
              <div className="mt-4 pt-3 border-t border-slate-700/60 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  Formulários Oficiais Google Forms
                </span>
                <span className="text-slate-300 font-medium">
                  Atendimento em até 1h
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
