// Стоимость полиса = (все стоимости) * коэффициент
const BASE_RATE = 0.005; // например, 0.5%

export const calculateHomeInsurance = (
  finishingCost: number,
  structuralElCost: number,
  neighborsCost: number,
  household: number
) => {
  const totalInsuredAmount = finishingCost + structuralElCost + neighborsCost + household;
  const yearlyPayment = totalInsuredAmount * BASE_RATE;
  const monthlyPayment = yearlyPayment / 12;

  return {
    yearly: Math.round(yearlyPayment),
    monthly: Math.round(monthlyPayment)
  };
};
