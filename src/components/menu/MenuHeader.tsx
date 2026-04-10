import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Settings } from "lucide-react";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useLanguage } from "@/i18n/LanguageContext";

export function MenuHeader() {
  const { t } = useLanguage();

  return (
    <header className="relative overflow-hidden bg-gradient-to-b from-primary/10 via-background to-background pt-10 pb-6">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-4 left-8 w-32 h-32 rounded-full bg-primary/30 blur-3xl" />
        <div className="absolute top-12 right-12 w-40 h-40 rounded-full bg-gold/30 blur-3xl" />
      </div>

      <div className="relative max-w-3xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-body mb-2">
            {t("header.address")}
          </p>
          <div className="mb-4">
            <LanguageSwitcher />
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground tracking-tight">
            Restaurant Shkupi
          </h1>
          <div className="flex items-center justify-center gap-3 mt-3">
            <span className="h-px w-12 bg-primary/30" />
            <span className="text-gold text-lg">✦</span>
            <span className="h-px w-12 bg-primary/30" />
          </div>
          <p className="text-muted-foreground font-body text-sm mt-3 max-w-md mx-auto">
            {t("header.subtitle")}
          </p>
        </motion.div>

        {/* Admin link - subtle */}
        <Link
          to="/admin"
          className="absolute top-4 right-4 p-2 rounded-full text-muted-foreground/40 hover:text-muted-foreground transition-colors"
          aria-label="Admin panel"
        >
          <Settings className="w-4 h-4" />
        </Link>
      </div>
    </header>
  );
}
