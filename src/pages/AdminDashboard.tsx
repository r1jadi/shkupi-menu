import { useAuth } from "@/hooks/useAuth";
import { Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CategoryManager } from "@/components/admin/CategoryManager";
import { MenuItemManager } from "@/components/admin/MenuItemManager";
import { QRCodeSection } from "@/components/admin/QRCodeSection";
import { LogOut, LayoutGrid, UtensilsCrossed, QrCode } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

export default function AdminDashboard() {
  const { user, loading, signOut } = useAuth();
  const { t } = useLanguage();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!user) return <Navigate to="/admin" replace />;

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-40">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-display font-bold text-foreground">{t("admin.dashboard.title")}</h1>
            <p className="text-xs text-muted-foreground font-body">{t("admin.dashboard.subtitle")}</p>
          </div>
          <Button variant="ghost" size="sm" onClick={signOut} className="font-body text-muted-foreground">
            <LogOut className="w-4 h-4 mr-2" />
            {t("admin.signOut")}
          </Button>
        </div>
      </header>

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-5xl mx-auto px-4 py-6"
      >
        <Tabs defaultValue="items" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 max-w-md h-12">
            <TabsTrigger value="items" className="font-body gap-2">
              <UtensilsCrossed className="w-4 h-4" />
              {t("admin.tabs.items")}
            </TabsTrigger>
            <TabsTrigger value="categories" className="font-body gap-2">
              <LayoutGrid className="w-4 h-4" />
              {t("admin.tabs.categories")}
            </TabsTrigger>
            <TabsTrigger value="qr" className="font-body gap-2">
              <QrCode className="w-4 h-4" />
              {t("admin.tabs.qr")}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="items">
            <MenuItemManager />
          </TabsContent>
          <TabsContent value="categories">
            <CategoryManager />
          </TabsContent>
          <TabsContent value="qr">
            <QRCodeSection />
          </TabsContent>
        </Tabs>
      </motion.main>
    </div>
  );
}
