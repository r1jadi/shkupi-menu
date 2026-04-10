import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import type { Category } from "@/hooks/useCategories";
import { useLanguage } from "@/i18n/LanguageContext";
import { useLocalized } from "@/hooks/useLocalized";

interface Props {
  categories: Category[];
  activeCategory: string | null;
  onSelect: (id: string) => void;
  hasPopular: boolean;
}

export function CategoryNav({ categories, activeCategory, onSelect, hasPopular }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const activeRef = useRef<HTMLButtonElement>(null);
  const { t } = useLanguage();
  const loc = useLocalized();

  useEffect(() => {
    if (activeRef.current && scrollRef.current) {
      const container = scrollRef.current;
      const el = activeRef.current;
      const left = el.offsetLeft - container.offsetWidth / 2 + el.offsetWidth / 2;
      container.scrollTo({ left, behavior: "smooth" });
    }
  }, [activeCategory]);

  const allItems = [
    ...(hasPopular ? [{ id: "popular", label: t("nav.popular") }] : []),
    ...categories.map((c) => ({ id: c.id, label: loc.name(c) })),
  ];

  return (
    <div className="sticky top-0 z-30 bg-background/80 backdrop-blur-xl border-b border-border">
      <div
        ref={scrollRef}
        className="max-w-3xl mx-auto px-4 flex gap-1 overflow-x-auto scrollbar-hide py-3"
      >
        {allItems.map((item) => {
          const isActive = activeCategory === item.id;
          return (
            <button
              key={item.id}
              ref={isActive ? activeRef : null}
              onClick={() => onSelect(item.id)}
              className="relative whitespace-nowrap px-4 py-2 text-sm font-body font-medium rounded-full transition-colors shrink-0"
              style={{ color: isActive ? "hsl(var(--primary-foreground))" : "hsl(var(--muted-foreground))" }}
            >
              {isActive && (
                <motion.div
                  layoutId="activeCategory"
                  className="absolute inset-0 bg-primary rounded-full"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                />
              )}
              <span className="relative z-10">{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
