import { useState } from "react";
import { useMenuItems, useCreateMenuItem, useUpdateMenuItem, useDeleteMenuItem, uploadMenuImage } from "@/hooks/useMenuItems";
import { useCategories } from "@/hooks/useCategories";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { toast } from "sonner";
import { Plus, Pencil, Trash2, ImagePlus } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { MenuItem } from "@/hooks/useMenuItems";
import { useLanguage } from "@/i18n/LanguageContext";

interface FormState {
  name: string;
  name_al: string;
  name_mk: string;
  description: string;
  description_al: string;
  description_mk: string;
  price: string;
  category_id: string;
  is_available: boolean;
  is_popular: boolean;
  image_url: string;
}

const emptyForm: FormState = {
  name: "", name_al: "", name_mk: "",
  description: "", description_al: "", description_mk: "",
  price: "", category_id: "", is_available: true, is_popular: false, image_url: "",
};

export function MenuItemManager() {
  const { data: items, isLoading } = useMenuItems();
  const { data: categories } = useCategories();
  const createItem = useCreateMenuItem();
  const updateItem = useUpdateMenuItem();
  const deleteItem = useDeleteMenuItem();
  const { t } = useLanguage();

  const [dialogOpen, setDialogOpen] = useState(false);
  const [editId, setEditId] = useState<string | null>(null);
  const [form, setForm] = useState<FormState>(emptyForm);
  const [uploading, setUploading] = useState(false);

  const setField = <K extends keyof FormState>(key: K, val: FormState[K]) =>
    setForm((f) => ({ ...f, [key]: val }));

  const openEdit = (item: MenuItem) => {
    setEditId(item.id);
    setForm({
      name: item.name,
      name_al: (item as any).name_al || "",
      name_mk: (item as any).name_mk || "",
      description: item.description || "",
      description_al: (item as any).description_al || "",
      description_mk: (item as any).description_mk || "",
      price: String(item.price),
      category_id: item.category_id,
      is_available: item.is_available,
      is_popular: item.is_popular,
      image_url: item.image_url || "",
    });
    setDialogOpen(true);
  };

  const resetForm = () => { setForm(emptyForm); setEditId(null); };

  const handleImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    try {
      const url = await uploadMenuImage(file);
      setField("image_url", url);
      toast.success("Image uploaded");
    } catch {
      toast.error("Failed to upload image");
    }
    setUploading(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      name: form.name,
      name_al: form.name_al || null,
      name_mk: form.name_mk || null,
      description: form.description || null,
      description_al: form.description_al || null,
      description_mk: form.description_mk || null,
      price: parseFloat(form.price),
      category_id: form.category_id,
      is_available: form.is_available,
      is_popular: form.is_popular,
      image_url: form.image_url || null,
    };

    try {
      if (editId) {
        await updateItem.mutateAsync({ id: editId, ...payload } as any);
        toast.success("Item updated");
      } else {
        await createItem.mutateAsync({ ...payload, sort_order: (items?.length || 0) + 1 } as any);
        toast.success("Item created");
      }
      setDialogOpen(false);
      resetForm();
    } catch {
      toast.error("Something went wrong");
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteItem.mutateAsync(id);
      toast.success("Item deleted");
    } catch {
      toast.error("Failed to delete");
    }
  };

  const handleToggle = async (item: MenuItem, field: "is_available" | "is_popular") => {
    try {
      await updateItem.mutateAsync({ id: item.id, [field]: !item[field] });
    } catch {
      toast.error("Failed to update");
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-display font-semibold text-foreground">{t("admin.tabs.items")}</h2>
        <Dialog open={dialogOpen} onOpenChange={(o) => { setDialogOpen(o); if (!o) resetForm(); }}>
          <DialogTrigger asChild>
            <Button className="font-body gap-2" disabled={!categories?.length}>
              <Plus className="w-4 h-4" /> {t("categories.add").replace("Category", "Item")}
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="font-display">{editId ? "Edit" : "New"} Menu Item</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4 mt-2">
              {/* Name & Description with language tabs */}
              <Tabs defaultValue="en" className="w-full">
                <TabsList className="grid w-full grid-cols-3 h-9">
                  <TabsTrigger value="en" className="text-xs font-body">🇬🇧 EN</TabsTrigger>
                  <TabsTrigger value="al" className="text-xs font-body">🇦🇱 AL</TabsTrigger>
                  <TabsTrigger value="mk" className="text-xs font-body">🇲🇰 MK</TabsTrigger>
                </TabsList>
                <TabsContent value="en" className="space-y-3 mt-3">
                  <div className="space-y-2">
                    <Label className="font-body">Name (English) *</Label>
                    <Input value={form.name} onChange={(e) => setField("name", e.target.value)} required className="h-11 font-body" />
                  </div>
                  <div className="space-y-2">
                    <Label className="font-body">Description (English)</Label>
                    <Textarea value={form.description} onChange={(e) => setField("description", e.target.value)} className="font-body" />
                  </div>
                </TabsContent>
                <TabsContent value="al" className="space-y-3 mt-3">
                  <div className="space-y-2">
                    <Label className="font-body">Emri (Shqip)</Label>
                    <Input value={form.name_al} onChange={(e) => setField("name_al", e.target.value)} className="h-11 font-body" placeholder="Leave empty to use English" />
                  </div>
                  <div className="space-y-2">
                    <Label className="font-body">Përshkrimi (Shqip)</Label>
                    <Textarea value={form.description_al} onChange={(e) => setField("description_al", e.target.value)} className="font-body" placeholder="Leave empty to use English" />
                  </div>
                </TabsContent>
                <TabsContent value="mk" className="space-y-3 mt-3">
                  <div className="space-y-2">
                    <Label className="font-body">Име (Македонски)</Label>
                    <Input value={form.name_mk} onChange={(e) => setField("name_mk", e.target.value)} className="h-11 font-body" placeholder="Leave empty to use English" />
                  </div>
                  <div className="space-y-2">
                    <Label className="font-body">Опис (Македонски)</Label>
                    <Textarea value={form.description_mk} onChange={(e) => setField("description_mk", e.target.value)} className="font-body" placeholder="Leave empty to use English" />
                  </div>
                </TabsContent>
              </Tabs>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="font-body">Price (ден)</Label>
                  <Input type="number" step="1" min="0" value={form.price} onChange={(e) => setField("price", e.target.value)} required className="h-11 font-body" />
                </div>
                <div className="space-y-2">
                  <Label className="font-body">Category</Label>
                  <Select value={form.category_id} onValueChange={(v) => setField("category_id", v)}>
                    <SelectTrigger className="h-11 font-body">
                      <SelectValue placeholder="Select..." />
                    </SelectTrigger>
                    <SelectContent>
                      {categories?.map((c) => (
                        <SelectItem key={c.id} value={c.id} className="font-body">{c.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Image upload */}
              <div className="space-y-2">
                <Label className="font-body">Image</Label>
                <div className="flex items-center gap-3">
                  {form.image_url ? (
                    <img src={form.image_url} alt="" className="w-16 h-16 rounded-lg object-cover" />
                  ) : (
                    <div className="w-16 h-16 rounded-lg bg-muted flex items-center justify-center">
                      <ImagePlus className="w-5 h-5 text-muted-foreground" />
                    </div>
                  )}
                  <label className="cursor-pointer">
                    <span className="text-sm text-primary font-body font-medium hover:underline">
                      {uploading ? "Uploading..." : form.image_url ? "Change image" : "Upload image"}
                    </span>
                    <input type="file" accept="image/*" onChange={handleImage} className="hidden" disabled={uploading} />
                  </label>
                  {form.image_url && (
                    <button type="button" onClick={() => setField("image_url", "")} className="text-sm text-destructive font-body">
                      Remove
                    </button>
                  )}
                </div>
              </div>

              {/* Toggles */}
              <div className="flex items-center justify-between py-2">
                <Label className="font-body">Available</Label>
                <Switch checked={form.is_available} onCheckedChange={(v) => setField("is_available", v)} />
              </div>
              <div className="flex items-center justify-between py-2">
                <Label className="font-body">Mark as Popular</Label>
                <Switch checked={form.is_popular} onCheckedChange={(v) => setField("is_popular", v)} />
              </div>

              <Button type="submit" className="w-full h-11 font-body" disabled={createItem.isPending || updateItem.isPending || !form.category_id}>
                {editId ? t("categories.save") : "Create Item"}
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {!categories?.length && (
        <div className="text-center py-8 text-muted-foreground font-body">
          Create a category first before adding menu items.
        </div>
      )}

      {isLoading ? (
        <div className="space-y-3">
          {[1, 2, 3, 4].map((i) => <Skeleton key={i} className="h-20 rounded-xl" />)}
        </div>
      ) : items?.length === 0 ? (
        <div className="text-center py-12 text-muted-foreground font-body">
          No menu items yet. Add your first dish!
        </div>
      ) : (
        <div className="space-y-2">
          {items?.map((item) => (
            <div key={item.id} className={`flex items-center gap-3 p-4 bg-card rounded-xl border border-border group transition-opacity ${!item.is_available ? "opacity-50" : ""}`}>
              {item.image_url && (
                <img src={item.image_url} alt={item.name} className="w-12 h-12 rounded-lg object-cover shrink-0" />
              )}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <p className="font-body font-medium text-card-foreground truncate">{item.name}</p>
                  {item.is_popular && <span className="text-xs text-gold font-body">★</span>}
                </div>
                <p className="text-sm text-muted-foreground font-body">
                  {Math.round(Number(item.price))} ден · {(item as any).categories?.name || "—"}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Switch
                  checked={item.is_available}
                  onCheckedChange={() => handleToggle(item, "is_available")}
                  className="scale-90"
                />
                <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button variant="ghost" size="icon" onClick={() => openEdit(item)}>
                    <Pencil className="w-4 h-4" />
                  </Button>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle className="font-display">{t("categories.deleteTitle")} "{item.name}"?</AlertDialogTitle>
                        <AlertDialogDescription className="font-body">This action cannot be undone.</AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel className="font-body">{t("categories.cancel")}</AlertDialogCancel>
                        <AlertDialogAction onClick={() => handleDelete(item.id)} className="bg-destructive text-destructive-foreground font-body">{t("categories.delete")}</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
