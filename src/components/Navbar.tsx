import React, { useState } from "react";
import { Building2, Menu, X, PhoneCall, Sparkles, ExternalLink } from "lucide-react";
import { INTEREST_FORMS } from "../data/apartments";

interface NavbarProps {
  onOpenInterestModal: (formId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenInterestModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      id="main-navbar"
      className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all shadow-xs"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-600 to-amber-700 flex items-center justify-center text-white shadow-md shadow-amber-600/20">
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-tight text-slate-900 flex items-center gap-1.5 font-serif">
                AURORA <span className="text-amber-600 font-sans font-bold text-base tracking-normal">Residencial</span>
              </span>
              <p className="text-[11px] font-medium tracking-wide text-slate-500 uppercase -mt-1">
                Apartamentos Exclusivos
              </p>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-slate-600">
            <button
              id="nav-link-apartments"
              onClick={() => scrollToSection("apartamentos")}
              className="hover:text-amber-600 transition-colors cursor-pointer py-1"
            >
              Apartamentos & Plantas
            </button>
            <button
              id="nav-link-forms"
              onClick={() => scrollToSection("formularios-interesse")}
              className="hover:text-amber-600 transition-colors cursor-pointer py-1 flex items-center gap-1.5"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Formulários de Interesse
            </button>
            <button
              id="nav-link-amenities"
              onClick={() => scrollToSection("lazer")}
              className="hover:text-amber-600 transition-colors cursor-pointer py-1"
            >
              Lazer & Estrutura
            </button>
            <button
              id="nav-link-location"
              onClick={() => scrollToSection("localizacao")}
              className="hover:text-amber-600 transition-colors cursor-pointer py-1"
            >
              Localização
            </button>
            <button
              id="nav-link-simulator"
              onClick={() => scrollToSection("simulador")}
              className="hover:text-amber-600 transition-colors cursor-pointer py-1"
            >
              Simulador
            </button>
          </nav>

          {/* Primary CTA Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              id="navbar-cta-interest"
              onClick={() => onOpenInterestModal()}
              className="relative group px-5 py-2.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 shadow-md hover:shadow-amber-500/20 transition-all active:scale-95 flex items-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-amber-200 group-hover:rotate-12 transition-transform" />
              <span>Tenho Interesse</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              id="navbar-mobile-interest-btn"
              onClick={() => onOpenInterestModal()}
              className="px-3.5 py-2 text-xs font-bold text-white bg-amber-600 rounded-lg shadow-sm"
            >
              Tenho Interesse
            </button>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div id="mobile-menu-drawer" className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3">
          <button
            onClick={() => scrollToSection("apartamentos")}
            className="block w-full text-left py-2 text-slate-700 font-semibold text-sm hover:text-amber-600"
          >
            Apartamentos & Plantas
          </button>
          <button
            onClick={() => scrollToSection("formularios-interesse")}
            className="block w-full text-left py-2 text-slate-700 font-semibold text-sm hover:text-amber-600 flex items-center gap-2"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            Formulários de Interesse (3 Opções)
          </button>
          <button
            onClick={() => scrollToSection("lazer")}
            className="block w-full text-left py-2 text-slate-700 font-semibold text-sm hover:text-amber-600"
          >
            Lazer & Estrutura
          </button>
          <button
            onClick={() => scrollToSection("localizacao")}
            className="block w-full text-left py-2 text-slate-700 font-semibold text-sm hover:text-amber-600"
          >
            Localização Privilegiada
          </button>
          <button
            onClick={() => scrollToSection("simulador")}
            className="block w-full text-left py-2 text-slate-700 font-semibold text-sm hover:text-amber-600"
          >
            Simulador de Financiamento
          </button>
          <div className="pt-2 border-t border-slate-100 space-y-2">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Acesso Direto aos Formulários:</p>
            {INTEREST_FORMS.map((form) => (
              <a
                key={form.id}
                href={form.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 text-xs font-medium text-slate-800 hover:bg-amber-50 hover:text-amber-800"
              >
                <span>{form.name}</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
