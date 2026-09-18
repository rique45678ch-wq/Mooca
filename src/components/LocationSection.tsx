import React, { useState } from "react";
import {
  MapPin,
  Clock,
  Train,
  ShoppingBag,
  Trees,
  GraduationCap,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import { LOCATION_HIGHLIGHTS } from "../data/apartments";

interface LocationSectionProps {
  onOpenInterestModal: () => void;
}

export const LocationSection: React.FC<LocationSectionProps> = ({
  onOpenInterestModal,
}) => {
  return (
    <section id="localizacao" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Text and Points of Interest */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5 text-amber-700" />
              <span>Localização Privilegiada</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Tudo o Que Você Precisa a Poucos Passos de Casa
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Viva cercado pelas melhores conveniências da cidade. Bairro seguro, arborizado e com infraestrutura completa de comércio, gastronomia, mobilidade e lazer para valorizar seu patrimônio a cada ano.
            </p>

            {/* Proximity List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {LOCATION_HIGHLIGHTS.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-xs flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-amber-50 border border-amber-200/60 flex items-center justify-center text-amber-700 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-amber-700 block">
                      {item.time} ({item.category})
                    </span>
                    <span className="text-xs font-semibold text-slate-800 line-clamp-1">
                      {item.place}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA button */}
            <div className="pt-2">
              <button
                id="btn-location-interest"
                onClick={onOpenInterestModal}
                className="px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-slate-900 hover:bg-slate-800 shadow-md transition-all active:scale-95 cursor-pointer inline-flex items-center gap-2"
              >
                <span>Tenho Interesse e Quero Conhecer o Endereço</span>
                <Sparkles className="w-4 h-4 text-amber-400" />
              </button>
            </div>
          </div>

          {/* Right Column: Visual Map Card */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-white p-2">
              <div className="relative h-96 w-full rounded-xl overflow-hidden bg-slate-100">
                {/* Visual Map Representation */}
                <img
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1000&q=80"
                  alt="Mapa da Região e Entorno"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-slate-900/30" />

                {/* Floating Pin on Map */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <div className="px-3.5 py-1.5 rounded-full bg-slate-950 text-white text-xs font-bold shadow-2xl border border-amber-400 flex items-center gap-1.5 animate-bounce">
                    <MapPin className="w-3.5 h-3.5 text-amber-400" />
                    <span>Residencial Aurora</span>
                  </div>
                  <div className="w-4 h-4 rounded-full bg-amber-500 ring-4 ring-amber-400/40 mt-1" />
                </div>

                {/* Info Card at bottom of map */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-md shadow-lg border border-slate-200/80 text-xs">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-bold text-slate-900 block text-sm">
                        Plantão de Vendas & Decorado
                      </span>
                      <span className="text-slate-500">
                        Atendimento diário das 09h às 19h com estacionamento privativo
                      </span>
                    </div>
                    <button
                      onClick={onOpenInterestModal}
                      className="px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs"
                    >
                      Agendar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
