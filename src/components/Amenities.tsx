import React from "react";
import {
  Waves,
  Dumbbell,
  UtensilsCrossed,
  Laptop,
  HeartHandshake,
  Smile,
  ShoppingBag,
  ShieldCheck,
  CheckCircle,
  Sparkles,
} from "lucide-react";
import { AMENITIES } from "../data/apartments";

interface AmenitiesProps {
  onOpenInterestModal: () => void;
}

const iconMap: Record<string, React.ReactNode> = {
  Waves: <Waves className="w-6 h-6 text-amber-600" />,
  Dumbbell: <Dumbbell className="w-6 h-6 text-amber-600" />,
  Utensils: <UtensilsCrossed className="w-6 h-6 text-amber-600" />,
  Laptop: <Laptop className="w-6 h-6 text-amber-600" />,
  HeartHandshake: <HeartHandshake className="w-6 h-6 text-amber-600" />,
  Smile: <Smile className="w-6 h-6 text-amber-600" />,
  ShoppingBag: <ShoppingBag className="w-6 h-6 text-amber-600" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-amber-600" />,
};

export const Amenities: React.FC<AmenitiesProps> = ({ onOpenInterestModal }) => {
  return (
    <section id="lazer" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            <span>Condomínio Clube Completo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Lazer e Conforto Para Viver Momentos Inesquecíveis
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Mais de 15 itens de lazer e serviços entregues totalmente equipados e decorados com acabamento de alto padrão.
          </p>
        </div>

        {/* Feature Grid with Visual Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {AMENITIES.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-amber-300 hover:bg-amber-50/20 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-white shadow-xs border border-slate-200/80 flex items-center justify-center">
                  {iconMap[item.icon] || <CheckCircle className="w-6 h-6 text-amber-600" />}
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Visual Highlights Gallery Banner */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative rounded-2xl overflow-hidden h-64 group shadow-md">
            <img
              src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800&q=80"
              alt="Piscina Climatizada"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 text-white">
              <span className="text-xs font-semibold uppercase text-amber-400">Área Externa</span>
              <h4 className="text-lg font-bold">Piscina Climatizada & Solarium</h4>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden h-64 group shadow-md">
            <img
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80"
              alt="Academia Completa"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 text-white">
              <span className="text-xs font-semibold uppercase text-amber-400">Saúde & Bem-Estar</span>
              <h4 className="text-lg font-bold">Fitness Center Moderno</h4>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden h-64 group shadow-md">
            <img
              src="https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=800&q=80"
              alt="Espaço Gourmet & Lounge"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 text-white">
              <span className="text-xs font-semibold uppercase text-amber-400">Celebrações</span>
              <h4 className="text-lg font-bold">Espaço Gourmet & Rooftop</h4>
            </div>
          </div>
        </div>

        {/* CTA Banner inside amenities */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-amber-600 to-amber-800 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-bold">
              Quer conhecer o condomínio decorado de perto?
            </h3>
            <p className="text-amber-100 text-xs sm:text-sm">
              Agende uma visita guiada com nossos corretores credenciados e receba a apresentação em PDF.
            </p>
          </div>

          <button
            id="amenities-cta-interest"
            onClick={onOpenInterestModal}
            className="shrink-0 px-6 py-3.5 rounded-xl font-bold text-sm text-slate-950 bg-white hover:bg-amber-50 shadow-lg transition-transform active:scale-95 cursor-pointer"
          >
            Tenho Interesse na Visita
          </button>
        </div>
      </div>
    </section>
  );
};
