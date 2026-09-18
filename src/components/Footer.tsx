import React from "react";
import { Building2, ExternalLink, ShieldCheck, Mail, MapPin, Phone } from "lucide-react";
import { INTEREST_FORMS } from "../data/apartments";

interface FooterProps {
  onOpenInterestModal: (formId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenInterestModal }) => {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs pt-16 pb-28 sm:pb-24 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand & Description */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-600 flex items-center justify-center text-white font-bold">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <span className="text-lg font-bold text-white font-serif">
                  AURORA <span className="text-amber-500 font-sans">Residencial</span>
                </span>
                <p className="text-[10px] text-slate-400 uppercase tracking-wider">
                  Venda de Apartamentos
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Empreendimento residencial contemporâneo projetado para oferecer a melhor experiência em moradia e valorização imobiliária. Plantas de 1, 2 e 3 dormitórios com varanda gourmet e lazer completo de clube.
            </p>

            <div className="pt-2 flex items-center gap-2 text-slate-300 text-xs">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Intermediação: Corretor Credenciado CRECI 34.892-J</span>
            </div>
          </div>

          {/* Direct Forms Links (The 3 User Links!) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Formulários de Interesse (Google Forms)
            </h4>
            <p className="text-xs text-slate-400">
              Acesse diretamente os formulários oficiais por tipologia:
            </p>
            <ul className="space-y-2 pt-1">
              {INTEREST_FORMS.map((form) => (
                <li key={form.id}>
                  <a
                    id={`footer-link-form-${form.id}`}
                    href={form.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-slate-300 hover:text-amber-400 transition-colors group"
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-amber-500 group-hover:translate-x-0.5 transition-transform" />
                    <span className="font-semibold text-xs">{form.name}</span>
                    <span className="text-[11px] text-slate-500">({form.area})</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Navigation & Action */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Atendimento & Visitas
            </h4>
            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>Stand de Vendas com Decorado: Av. Principal dos Empreendimentos, 1200 - Bairro Nobre</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                <span>contato@auroraresidencial.com.br</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                id="footer-open-interest-modal"
                onClick={() => onOpenInterestModal()}
                className="w-full py-2.5 px-4 rounded-xl font-bold text-xs text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors shadow-sm cursor-pointer"
              >
                Cadastrar Meu Interesse Agora
              </button>
            </div>
          </div>
        </div>

        {/* Legal Disclaimers */}
        <div className="pt-8 space-y-3 text-[11px] text-slate-400 leading-relaxed">
          <p>
            *Todas as imagens, perspectivas artísticas e plantas apresentadas são meramente ilustrativas e possuem caráter de sugestão de decoração. Os móveis, objetos decorativos e equipamentos não integram o contrato de compra e venda. As medidas são de face a face de paredes e poderão sofrer pequenas variações durante a execução da obra. O empreendimento será comercializado nos termos da Lei nº 4.591/64, com memorial de incorporação devidamente registrado no Cartório de Registro de Imóveis competente.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-2 border-t border-slate-900 text-slate-400">
            <span>© {new Date().getFullYear()} Aurora Residencial. Todos os direitos reservados.</span>
            <span>Landing Page de Venda de Apartamentos & Captação de Leads</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
