import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CategoryManager } from "@/components/admin/CategoryManager";
import { MenuItemManager } from "@/components/admin/MenuItemManager";
import { QRCodeSection } from "@/components/admin/QRCodeSection";
import { LogOut, LayoutGrid, UtensilsCrossed, QrCode } from "lucide-react";
import { motion } from "framer-motion";

export default function AdminDashboard() {
  const { user, loading, signOut } = useAuth();

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
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-40">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-display font-bold text-foreground">Restaurant Shkupi</h1>
            <p className="text-xs text-muted-foreground font-body">Menu Manager</p>
          </div>
          <Button variant="ghost" size="sm" onClick={signOut} className="font-body text-muted-foreground">
            <LogOut className="w-4 h-4 mr-2" />
            Sign Out
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
              Menu Items
            </TabsTrigger>
            <TabsTrigger value="categories" className="font-body gap-2">
              <LayoutGrid className="w-4 h-4" />
              Categories
            </TabsTrigger>
            <TabsTrigger value="qr" className="font-body gap-2">
              <QrCode className="w-4 h-4" />
              QR Code
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
