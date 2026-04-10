import { motion } from "framer-motion";
import type { MenuItem } from "@/hooks/useMenuItems";
import { useLanguage } from "@/i18n/LanguageContext";
import { useLocalized } from "@/hooks/useLocalized";

interface Props {
  item: MenuItem;
  index: number;
  isPopular?: boolean;
}

export function MenuCard({ item, index, isPopular }: Props) {
  const { t } = useLanguage();
  const loc = useLocalized();

  const localName = loc.name(item);
  const localDesc = loc.description(item);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      whileTap={{ scale: 0.99 }}
      className="group relative bg-card rounded-xl border border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
    >
      <div className="flex gap-4 p-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <div className="min-w-0">
              <h3 className="font-display font-semibold text-card-foreground text-base leading-tight">
                {localName}
              </h3>
              {isPopular && (
                <span className="inline-flex items-center gap-1 mt-1 text-xs font-body font-medium text-gold">
                  {t("menu.popularChoice")}
                </span>
              )}
            </div>
            <span className="font-body font-semibold text-primary text-base whitespace-nowrap">
              {loc.price(Number(item.price))}
            </span>
          </div>
          {localDesc && (
            <p className="text-muted-foreground text-sm font-body mt-2 line-clamp-2 leading-relaxed">
              {localDesc}
            </p>
          )}
        </div>

        {item.image_url && (
          <div className="shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden">
            <img
              src={item.image_url}
              alt={localName}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        )}
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/0 via-primary/60 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
}
