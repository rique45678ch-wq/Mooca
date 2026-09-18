import React, { useState } from "react";
import {
  Bed,
  Bath,
  Car,
  Maximize2,
  CheckCircle2,
  ExternalLink,
  Sparkles,
  ChevronRight,
  Info,
} from "lucide-react";
import { APARTMENT_OPTIONS } from "../data/apartments";

interface ApartmentCardsProps {
  onOpenInterestModal: (formId?: string) => void;
}

export const ApartmentCards: React.FC<ApartmentCardsProps> = ({
  onOpenInterestModal,
}) => {
  const [activeTab, setActiveTab] = useState<string>("all");

  const filteredOptions =
    activeTab === "all"
      ? APARTMENT_OPTIONS
      : APARTMENT_OPTIONS.filter((opt) => opt.id === activeTab);

  return (
    <section id="apartamentos" className="py-20 bg-slate-100/70 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            <span>Plantas & Tipologias Exclusivas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Escolha o Apartamento Ideal Para o Seu Estilo de Vida
          </h2>
          <p className="text-base text-slate-600">
            Conheça as opções disponíveis e clique em <strong>Tenho Interesse</strong> para abrir o formulário exclusivo e garantir condições e tabela especial de lançamento.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            <button
              id="filter-all-apartments"
              onClick={() => setActiveTab("all")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === "all"
                  ? "bg-slate-900 text-white shadow-sm"
                  : "bg-white text-slate-600 hover:bg-slate-200/70 border border-slate-200"
              }`}
            >
              Todas as Tipologias
            </button>
            {APARTMENT_OPTIONS.map((opt) => (
              <button
                key={opt.id}
                id={`filter-opt-${opt.id}`}
                onClick={() => setActiveTab(opt.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeTab === opt.id
                    ? "bg-amber-600 text-white shadow-sm"
                    : "bg-white text-slate-600 hover:bg-slate-200/70 border border-slate-200"
                }`}
              >
                {opt.tag}
              </button>
            ))}
          </div>
        </div>

        {/* Apartments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {filteredOptions.map((apt, index) => (
            <article
              key={apt.id}
              id={`card-apartment-${apt.id}`}
              className={`flex flex-col bg-white rounded-2xl overflow-hidden border transition-all duration-300 hover:shadow-xl ${
                apt.popular
                  ? "border-amber-400 ring-2 ring-amber-400/30 relative shadow-lg"
                  : "border-slate-200 shadow-sm"
              }`}
            >
              {/* Popular Badge */}
              {apt.badge && (
                <div className="absolute top-4 left-4 z-20">
                  <span className="px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-slate-950/90 text-amber-300 backdrop-blur-sm border border-amber-400/40 shadow-sm">
                    {apt.badge}
                  </span>
                </div>
              )}

              {/* Image Container */}
              <div className="relative h-64 w-full overflow-hidden bg-slate-200">
                <img
                  src={apt.image}
                  alt={apt.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
                  <span className="text-xs font-semibold uppercase tracking-wider bg-black/50 px-2.5 py-1 rounded-md backdrop-blur-sm">
                    {apt.tag}
                  </span>
                  <span className="text-sm font-bold bg-amber-600 px-2.5 py-1 rounded-md shadow-sm">
                    A partir de {apt.priceFrom}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                      {apt.title}
                    </h3>
                    <p className="text-xs font-medium text-amber-700 mt-0.5">
                      {apt.subtitle}
                    </p>
                  </div>

                  {/* Specs Pill Grid */}
                  <div className="grid grid-cols-2 gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700">
                    <div className="flex items-center gap-2">
                      <Maximize2 className="w-4 h-4 text-amber-600 shrink-0" />
                      <span className="font-semibold">{apt.area}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Bed className="w-4 h-4 text-amber-600 shrink-0" />
                      <span>{apt.bedrooms}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Bath className="w-4 h-4 text-amber-600 shrink-0" />
                      <span>{apt.bathrooms}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Car className="w-4 h-4 text-amber-600 shrink-0" />
                      <span>{apt.parking}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {apt.description}
                  </p>

                  {/* Highlights List */}
                  <div className="space-y-1.5 pt-2 border-t border-slate-100">
                    <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                      Destaques da Planta:
                    </p>
                    {apt.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA & Price */}
                <div className="pt-4 border-t border-slate-100 space-y-3">
                  <div className="text-xs text-slate-500 flex items-center justify-between">
                    <span>Estimativa de parcela:</span>
                    <span className="font-semibold text-slate-800">
                      {apt.installmentEstimate}
                    </span>
                  </div>

                  {/* MAIN TENHO INTERESSE BUTTON WITH DIRECT LINK TO THE GOOGLE FORM */}
                  <a
                    id={`btn-tenho-interesse-card-${apt.id}`}
                    href={apt.formUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 hover:from-amber-500 hover:to-amber-600 shadow-md hover:shadow-lg hover:shadow-amber-600/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2 group text-center"
                  >
                    <span>Tenho Interesse</span>
                    <ExternalLink className="w-4 h-4 text-amber-200 group-hover:text-white transition-transform group-hover:translate-x-0.5" />
                  </a>

                  <p className="text-[11px] text-center text-slate-400">
                    Abre formulário seguro do Google Forms em nova aba
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
