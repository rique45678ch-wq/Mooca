import React from "react";
import { Sparkles, ExternalLink, MessageCircle } from "lucide-react";
import { INTEREST_FORMS } from "../data/apartments";

interface StickyBottomBarProps {
  onOpenInterestModal: (formId?: string) => void;
}

export const StickyBottomBar: React.FC<StickyBottomBarProps> = ({
  onOpenInterestModal,
}) => {
  return (
    <aside
      id="floating-bottom-cta-bar"
      aria-label="Barra de contato e interesse"
      className="fixed bottom-0 inset-x-0 z-30 bg-slate-900/95 backdrop-blur-md border-t border-slate-800 py-3 px-4 shadow-2xl transition-all"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        {/* Left message on tablet/desktop */}
        <div className="hidden md:flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <p className="text-xs font-bold text-white leading-tight">
              Condições de Lançamento Ativas
            </p>
            <p className="text-[11px] text-slate-400">
              Cadastre seu interesse e garanta prioridade na escolha das melhores unidades.
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="w-full sm:w-auto flex items-center justify-center gap-2">
          {/* Main "Tenho Interesse" Button */}
          <button
            id="floating-btn-tenho-interesse"
            onClick={() => onOpenInterestModal()}
            className="flex-1 sm:flex-initial px-6 py-2.5 rounded-xl font-extrabold text-sm text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-md transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-slate-950" />
            <span>Tenho Interesse</span>
          </button>

          {/* Quick link to 2 dorms (most popular) */}
          <a
            id="floating-btn-quick-form"
            href={INTEREST_FORMS[1].url}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-200 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
          >
            <span>Formulário Opção 2</span>
            <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
          </a>
        </div>
      </div>
    </aside>
  );
};
