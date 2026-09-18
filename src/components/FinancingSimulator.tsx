import React, { useState } from "react";
import { Calculator, Sparkles, ExternalLink, Check, DollarSign, Percent } from "lucide-react";
import { APARTMENT_OPTIONS } from "../data/apartments";

interface FinancingSimulatorProps {
  onOpenInterestModal: (formId?: string) => void;
}

export const FinancingSimulator: React.FC<FinancingSimulatorProps> = ({
  onOpenInterestModal,
}) => {
  const [selectedApartmentId, setSelectedApartmentId] = useState<string>("2dorm-suite");
  const [propertyPrice, setPropertyPrice] = useState<number>(475000);
  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(20);
  const [financingYears, setFinancingYears] = useState<number>(30);

  const selectedApartment =
    APARTMENT_OPTIONS.find((a) => a.id === selectedApartmentId) || APARTMENT_OPTIONS[1];

  const handleSelectApartment = (aptId: string) => {
    setSelectedApartmentId(aptId);
    if (aptId === "studio-1dorm") setPropertyPrice(289000);
    else if (aptId === "2dorm-suite") setPropertyPrice(475000);
    else setPropertyPrice(890000);
  };

  const downPaymentAmount = (propertyPrice * downPaymentPercent) / 100;
  const financedAmount = propertyPrice - downPaymentAmount;
  const totalMonths = financingYears * 12;

  // Simplified amortization estimate (Price system ~ 9.5% a.a.)
  const monthlyRate = 0.0076;
  const estimatedMonthly =
    financedAmount > 0
      ? (financedAmount * (monthlyRate * Math.pow(1 + monthlyRate, totalMonths))) /
        (Math.pow(1 + monthlyRate, totalMonths) - 1)
      : 0;

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <section id="simulador" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
            <Calculator className="w-4 h-4 text-amber-400" />
            <span>Condições Facilitadas de Compra</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Simulador de Financiamento & Entrada Parcelada
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Descubra como o seu apartamento cabe perfeitamente no seu planejamento financeiro com entrada facilitada direto com a construtora.
          </p>
        </div>

        {/* Simulator Card Box */}
        <div className="max-w-4xl mx-auto bg-slate-850 rounded-2xl border border-slate-700 shadow-2xl p-6 sm:p-10">
          {/* Typology Selector */}
          <div className="mb-8">
            <label className="block text-xs font-bold uppercase tracking-wider text-amber-400 mb-3">
              1. Selecione a tipologia do apartamento:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {APARTMENT_OPTIONS.map((apt) => (
                <button
                  key={apt.id}
                  type="button"
                  id={`sim-btn-${apt.id}`}
                  onClick={() => handleSelectApartment(apt.id)}
                  className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                    selectedApartmentId === apt.id
                      ? "bg-amber-500/10 border-amber-400 text-white ring-1 ring-amber-400/40"
                      : "bg-slate-800/80 border-slate-700 text-slate-300 hover:border-slate-600"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-amber-300">
                      {apt.tag}
                    </span>
                    {selectedApartmentId === apt.id && (
                      <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                    )}
                  </div>
                  <div className="text-xs font-semibold text-slate-100">{apt.title}</div>
                  <div className="text-xs text-slate-400 mt-1">A partir de {apt.priceFrom}</div>
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Controls */}
            <div className="space-y-6">
              {/* Property Value Slider */}
              <div>
                <div className="flex items-center justify-between text-xs sm:text-sm font-semibold mb-2">
                  <span className="text-slate-300">Valor Estimado do Imóvel:</span>
                  <span className="text-amber-400 font-bold text-base">
                    {formatCurrency(propertyPrice)}
                  </span>
                </div>
                <input
                  type="range"
                  min={250000}
                  max={1200000}
                  step={10000}
                  value={propertyPrice}
                  onChange={(e) => setPropertyPrice(Number(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-400"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                  <span>R$ 250 mil</span>
                  <span>R$ 1,2 milhão</span>
                </div>
              </div>

              {/* Down Payment Slider */}
              <div>
                <div className="flex items-center justify-between text-xs sm:text-sm font-semibold mb-2">
                  <span className="text-slate-300">Entrada (Parcelável no período de obras):</span>
                  <span className="text-amber-400 font-bold text-base">
                    {downPaymentPercent}% ({formatCurrency(downPaymentAmount)})
                  </span>
                </div>
                <input
                  type="range"
                  min={10}
                  max={50}
                  step={5}
                  value={downPaymentPercent}
                  onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-400"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                  <span>10% (Mínimo)</span>
                  <span>50%</span>
                </div>
              </div>

              {/* Term Slider */}
              <div>
                <div className="flex items-center justify-between text-xs sm:text-sm font-semibold mb-2">
                  <span className="text-slate-300">Prazo de Financiamento:</span>
                  <span className="text-amber-400 font-bold text-base">
                    {financingYears} anos ({totalMonths} meses)
                  </span>
                </div>
                <input
                  type="range"
                  min={15}
                  max={35}
                  step={5}
                  value={financingYears}
                  onChange={(e) => setFinancingYears(Number(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-400"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                  <span>15 anos</span>
                  <span>35 anos</span>
                </div>
              </div>
            </div>

            {/* Results Box */}
            <div className="bg-slate-800 p-6 sm:p-8 rounded-2xl border border-slate-700 space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Resultado da Simulação Preliminar
              </span>

              <div className="space-y-3">
                <div>
                  <p className="text-xs text-slate-400">Parcela mensal estimada do financiamento:</p>
                  <p className="text-2xl sm:text-3xl font-black text-amber-400">
                    {formatCurrency(estimatedMonthly)}
                    <span className="text-xs font-normal text-slate-300"> /mês</span>
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-700 grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <span className="text-slate-400 block">Entrada facilitada:</span>
                    <span className="font-bold text-white text-sm">
                      {formatCurrency(downPaymentAmount)}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Valor a financiar:</span>
                    <span className="font-bold text-white text-sm">
                      {formatCurrency(financedAmount)}
                    </span>
                  </div>
                </div>
              </div>

              {/* DIRECT BUTTON WITH USER'S SPECIFIC GOOGLE FORM FOR THIS APARTMENT */}
              <div className="pt-3 space-y-2">
                <a
                  id="btn-simulator-tenho-interesse"
                  href={selectedApartment.formUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl font-bold text-sm text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 transition-all shadow-lg flex items-center justify-center gap-2 group text-center"
                >
                  <span>Tenho Interesse nesta Simulação</span>
                  <ExternalLink className="w-4 h-4 text-slate-950" />
                </a>

                <p className="text-[11px] text-center text-slate-400 leading-tight">
                  Envia seu formulário com prioridade para aprovação de crédito na Caixa / Bancos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
