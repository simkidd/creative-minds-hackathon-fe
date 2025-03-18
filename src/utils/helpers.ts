export const formatCurrency = (
  amount: number,
  locale = "en-NG",
  currency = "NGN"
) => {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    // maximumFractionDigits: 2,
    minimumFractionDigits: 0,
    // notation: "compact",
  }).format(amount);
};

export const slugify = (name: string): string => {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
};

export const formatText = (status: string) => status.replace(/_/g, " ");