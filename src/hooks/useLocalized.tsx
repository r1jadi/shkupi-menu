import { useLanguage } from "@/i18n/LanguageContext";
import type { Locale } from "@/i18n/translations";

/** Pick the right localized field from a DB row, falling back to default (EN) */
export function useLocalized() {
  const { locale } = useLanguage();
  return {
    locale,
    /** Get localized name from a row that has name, name_al, name_mk */
    name: (row: { name: string; name_al?: string | null; name_mk?: string | null }) => {
      if (locale === "al" && row.name_al) return row.name_al;
      if (locale === "mk" && row.name_mk) return row.name_mk;
      return row.name;
    },
    /** Get localized description from a row */
    description: (row: { description?: string | null; description_al?: string | null; description_mk?: string | null }) => {
      if (locale === "al" && row.description_al) return row.description_al;
      if (locale === "mk" && row.description_mk) return row.description_mk;
      return row.description ?? null;
    },
    /** Format price in MKD */
    price: (amount: number) => `${Math.round(amount)} ден`,
  };
}
