import React from "react";
import {
  ExternalLink,
  ClipboardList,
  CheckCircle2,
  Sparkles,
  ArrowUpRight,
  ShieldCheck,
  Building,
} from "lucide-react";
import { INTEREST_FORMS } from "../data/apartments";

export const QuickFormsSection: React.FC = () => {
  return (
    <section id="formularios-interesse" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative subtle background accents */}
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-amber-600/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
            <ClipboardList className="w-4 h-4 text-amber-400" />
            <span>Formulários de Interesse Oficiais</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Escolha o Seu Formulário e Cadastre Seu Interesse
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Disponibilizamos 3 formulários especializados para atender exatamente o que você procura. Clique no botão <strong>Tenho Interesse</strong> da sua opção preferida para ser direcionado ao formulário correspondente.
          </p>
        </div>

        {/* 3 Form Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {INTEREST_FORMS.map((form, index) => (
            <div
              key={form.id}
              id={`form-card-box-${form.id}`}
              className={`flex flex-col justify-between rounded-2xl p-7 border transition-all duration-300 hover:transform hover:-translate-y-1 ${
                form.featured
                  ? "bg-gradient-to-b from-slate-800 to-slate-850 border-amber-500/80 ring-2 ring-amber-500/30 shadow-2xl relative"
                  : "bg-slate-850/90 border-slate-750 hover:border-slate-600 shadow-xl"
              }`}
            >
              {form.featured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 shadow-md">
                    Mais Selecionado
                  </span>
                </div>
              )}

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-amber-500/20 text-amber-300">
                    Formulário 0{index + 1}
                  </span>
                  <span className="text-xs font-semibold text-slate-400">
                    {form.area}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {form.name}
                  </h3>
                  <p className="text-xs font-semibold text-amber-400 mt-1">
                    {form.category}
                  </p>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {form.description}
                </p>

                <div className="space-y-2 pt-3 border-t border-slate-700/60 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Tabela oficial com valores atualizados</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Acesso antecipado à escolha de andares</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Simulação personalizada de financiamento</span>
                  </div>
                </div>
              </div>

              {/* Action Button linking to Form */}
              <div className="pt-6 mt-6 border-t border-slate-700/60 space-y-2.5">
                <a
                  id={`btn-form-section-${form.id}`}
                  href={form.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3.5 px-4 rounded-xl font-bold text-sm transition-all shadow-lg flex items-center justify-center gap-2 text-center ${
                    form.featured
                      ? "bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-extrabold"
                      : "bg-slate-800 hover:bg-slate-750 text-white hover:text-amber-300 border border-slate-700 hover:border-amber-500/50"
                  }`}
                >
                  <span>{form.cta}</span>
                  <ExternalLink className="w-4 h-4 shrink-0" />
                </a>

                <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400">
                  <ShieldCheck className="w-3 h-3 text-emerald-400" />
                  <span>Link direto para Google Forms seguro</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Support Note */}
        <div className="mt-12 p-4 rounded-xl bg-slate-800/60 border border-slate-700 max-w-2xl mx-auto text-center text-xs text-slate-400">
          Dúvidas sobre qual formulário escolher? Qualquer uma das opções conecta você diretamente à equipe oficial de consultores do empreendimento.
        </div>
      </div>
    </section>
  );
};
