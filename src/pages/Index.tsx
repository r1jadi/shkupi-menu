import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCategories } from "@/hooks/useCategories";
import { useMenuItems } from "@/hooks/useMenuItems";
import { MenuCard } from "@/components/menu/MenuCard";
import { MenuSkeleton } from "@/components/menu/MenuSkeleton";
import { MenuHeader } from "@/components/menu/MenuHeader";
import { CategoryNav } from "@/components/menu/CategoryNav";
import { UtensilsCrossed } from "lucide-react";

const Index = () => {
  const { data: categories, isLoading: catLoading } = useCategories();
  const { data: menuItems, isLoading: itemsLoading } = useMenuItems();
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const isLoading = catLoading || itemsLoading;

  // Set first category as active
  useEffect(() => {
    if (categories?.length && !activeCategory) {
      setActiveCategory(categories[0].id);
    }
  }, [categories, activeCategory]);

  const scrollToCategory = (id: string) => {
    setActiveCategory(id);
    sectionRefs.current[id]?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Track scroll to update active category
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveCategory(entry.target.id);
          }
        });
      },
      { rootMargin: "-100px 0px -60% 0px", threshold: 0.1 }
    );

    Object.values(sectionRefs.current).forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [categories, menuItems]);

  const availableItems = menuItems?.filter((item) => item.is_available) ?? [];
  const popularItems = availableItems.filter((item) => item.is_popular);

  return (
    <div className="min-h-screen bg-background">
      <MenuHeader />

      {/* Category Navigation */}
      {!isLoading && categories && categories.length > 0 && (
        <CategoryNav
          categories={categories}
          activeCategory={activeCategory}
          onSelect={scrollToCategory}
          hasPopular={popularItems.length > 0}
        />
      )}

      <main className="max-w-3xl mx-auto px-4 pb-20 pt-4">
        {isLoading ? (
          <MenuSkeleton />
        ) : categories?.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-20"
          >
            <UtensilsCrossed className="w-16 h-16 mx-auto text-muted-foreground/40 mb-4" />
            <h2 className="text-2xl font-display text-foreground mb-2">Menu Coming Soon</h2>
            <p className="text-muted-foreground">We're preparing something delicious for you.</p>
          </motion.div>
        ) : (
          <>
            {/* Popular Items Section */}
            {popularItems.length > 0 && (
              <section
                id="popular"
                ref={(el: HTMLDivElement | null) => { sectionRefs.current["popular"] = el; }}
                className="mb-10"
              >
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="text-2xl font-display font-semibold text-foreground mb-5 flex items-center gap-2"
                >
                  <span className="text-gold">★</span> Popular Dishes
                </motion.h2>
                <div className="grid gap-4">
                  {popularItems.map((item, i) => (
                    <MenuCard key={item.id} item={item} index={i} isPopular />
                  ))}
                </div>
              </section>
            )}

            {/* Category Sections */}
            <AnimatePresence>
              {categories?.map((category) => {
                const items = availableItems.filter((item) => item.category_id === category.id);
                if (items.length === 0) return null;
                return (
                  <section
                    key={category.id}
                    id={category.id}
                    ref={(el: HTMLDivElement | null) => { sectionRefs.current[category.id] = el; }}
                    className="mb-10 scroll-mt-32"
                  >
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                    >
                      <h2 className="text-2xl font-display font-semibold text-foreground mb-1">
                        {category.name}
                      </h2>
                      {category.description && (
                        <p className="text-muted-foreground text-sm mb-5">{category.description}</p>
                      )}
                    </motion.div>
                    <div className="grid gap-4">
                      {items.map((item, i) => (
                        <MenuCard key={item.id} item={item} index={i} />
                      ))}
                    </div>
                  </section>
                );
              })}
            </AnimatePresence>
          </>
        )}
      </main>

      {/* Footer */}
      <footer className="text-center py-8 border-t border-border">
        <p className="text-sm text-muted-foreground font-body">
          © {new Date().getFullYear()} Restaurant Shkupi — All rights reserved — Created by Bleta
        </p>
      </footer>
    </div>
  );
};

export default Index;
