import React from "react";
import { X, ExternalLink, Building2, CheckCircle2, Sparkles, Home } from "lucide-react";
import { INTEREST_FORMS } from "../data/apartments";

interface InterestModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedFormId?: string;
}

export const InterestModal: React.FC<InterestModalProps> = ({
  isOpen,
  onClose,
  selectedFormId,
}) => {
  if (!isOpen) return null;

  return (
    <div
      id="interest-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        id="interest-modal-container"
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-100 animate-scaleUp"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-amber-950 p-6 text-white relative">
          <button
            id="close-modal-btn"
            onClick={onClose}
            className="absolute top-5 right-5 text-slate-400 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Fechar modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold tracking-wider uppercase mb-1">
            <Sparkles className="w-4 h-4" />
            <span>Cadastro Exclusivo de Interesse</span>
          </div>
          <h3 className="text-2xl font-bold text-white tracking-tight">
            Escolha a Opção que Mais Combina com Você
          </h3>
          <p className="text-slate-300 text-sm mt-1">
            Selecione uma das opções abaixo para abrir o formulário correspondente e receber a tabela oficial de valores e condições.
          </p>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-4 max-h-[75vh] overflow-y-auto">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
            3 Formulários Disponíveis:
          </p>

          <div className="space-y-3">
            {INTEREST_FORMS.map((form) => {
              const isSelected = selectedFormId === form.id;
              return (
                <div
                  key={form.id}
                  id={`modal-option-${form.id}`}
                  className={`p-4 rounded-xl border transition-all duration-200 hover:shadow-md ${
                    isSelected || form.featured
                      ? "border-amber-400 bg-amber-50/40 ring-1 ring-amber-400/30"
                      : "border-slate-200 hover:border-slate-300 bg-white"
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold px-2 py-0.5 rounded bg-slate-900 text-white">
                          {form.shortLabel}
                        </span>
                        <span className="text-xs font-medium text-amber-700 bg-amber-100 px-2 py-0.5 rounded">
                          {form.category}
                        </span>
                        <span className="text-xs text-slate-500 font-medium">
                          {form.area}
                        </span>
                      </div>
                      <h4 className="text-base font-bold text-slate-900">
                        {form.name}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {form.description}
                      </p>
                    </div>

                    <a
                      id={`btn-open-form-${form.id}`}
                      href={form.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => {
                        // User proceeds to Google Forms in new tab
                      }}
                      className="shrink-0 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 shadow-md hover:shadow-lg transition-all active:scale-95 text-center"
                    >
                      <span>Tenho Interesse</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Quick info footer */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80 flex items-start gap-3 mt-4">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <div className="text-xs text-slate-600 space-y-1">
              <p className="font-semibold text-slate-800">
                Seus dados estão 100% seguros
              </p>
              <p>
                Os formulários são gerenciados diretamente pelo Google Forms oficial do empreendimento. Um corretor credenciado entrará em contato em até 1 hora com o material completo.
              </p>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <span>Atendimento com corretores credenciados (CRECI)</span>
          <button
            id="btn-close-modal-secondary"
            onClick={onClose}
            className="text-slate-700 hover:text-slate-900 font-semibold px-3 py-1.5 rounded-lg hover:bg-slate-200/60 transition-colors"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
