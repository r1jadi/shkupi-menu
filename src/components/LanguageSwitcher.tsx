import { useLanguage } from "@/i18n/LanguageContext";
import { type Locale, localeLabels } from "@/i18n/translations";
import { motion } from "framer-motion";

const locales: Locale[] = ["al", "mk", "en"];

export function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="inline-flex items-center bg-muted/60 backdrop-blur-sm rounded-full p-0.5 border border-border/50">
      {locales.map((l) => (
        <button
          key={l}
          onClick={() => setLocale(l)}
          className="relative px-3 py-1.5 text-xs font-body font-semibold rounded-full transition-colors"
          style={{
            color: locale === l ? "hsl(var(--primary-foreground))" : "hsl(var(--muted-foreground))",
          }}
        >
          {locale === l && (
            <motion.div
              layoutId="langSwitch"
              className="absolute inset-0 bg-primary rounded-full"
              transition={{ type: "spring", bounce: 0.2, duration: 0.35 }}
            />
          )}
          <span className="relative z-10">{localeLabels[l]}</span>
        </button>
      ))}
    </div>
  );
}
