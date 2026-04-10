import { useState } from "react";
import { useCategories, useCreateCategory, useUpdateCategory, useDeleteCategory } from "@/hooks/useCategories";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger,
} from "@/components/ui/dialog";
import {
  AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent,
  AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { toast } from "sonner";
import { Plus, Pencil, Trash2, GripVertical } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { useLanguage } from "@/i18n/LanguageContext";

export function CategoryManager() {
  const { data: categories, isLoading } = useCategories();
  const createCategory = useCreateCategory();
  const updateCategory = useUpdateCategory();
  const deleteCategory = useDeleteCategory();
  const { t } = useLanguage();

  const [dialogOpen, setDialogOpen] = useState(false);
  const [editId, setEditId] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [nameAl, setNameAl] = useState("");
  const [nameMk, setNameMk] = useState("");
  const [description, setDescription] = useState("");
  const [descAl, setDescAl] = useState("");
  const [descMk, setDescMk] = useState("");

  const resetForm = () => { setName(""); setNameAl(""); setNameMk(""); setDescription(""); setDescAl(""); setDescMk(""); setEditId(null); };

  const openEdit = (cat: any) => {
    setEditId(cat.id);
    setName(cat.name);
    setNameAl(cat.name_al || "");
    setNameMk(cat.name_mk || "");
    setDescription(cat.description || "");
    setDescAl(cat.description_al || "");
    setDescMk(cat.description_mk || "");
    setDialogOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload: any = {
      name,
      name_al: nameAl || null,
      name_mk: nameMk || null,
      description: description || null,
      description_al: descAl || null,
      description_mk: descMk || null,
    };
    try {
      if (editId) {
        await updateCategory.mutateAsync({ id: editId, ...payload });
        toast.success(t("categories.updated"));
      } else {
        const sortOrder = (categories?.length || 0) + 1;
        await createCategory.mutateAsync({ ...payload, sort_order: sortOrder });
        toast.success(t("categories.created"));
      }
      setDialogOpen(false); resetForm();
    } catch {
      toast.error(t("categories.error"));
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteCategory.mutateAsync(id);
      toast.success(t("categories.deleted"));
    } catch {
      toast.error(t("categories.deleteError"));
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-display font-semibold text-foreground">{t("categories.title")}</h2>
        <Dialog open={dialogOpen} onOpenChange={(o) => { setDialogOpen(o); if (!o) resetForm(); }}>
          <DialogTrigger asChild>
            <Button className="font-body gap-2"><Plus className="w-4 h-4" /> {t("categories.add")}</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="font-display">{editId ? t("categories.edit") : t("categories.new")}</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4 mt-2">
              <Tabs defaultValue="en" className="w-full">
                <TabsList className="grid w-full grid-cols-3 h-9">
                  <TabsTrigger value="en" className="text-xs font-body">🇬🇧 EN</TabsTrigger>
                  <TabsTrigger value="al" className="text-xs font-body">🇦🇱 AL</TabsTrigger>
                  <TabsTrigger value="mk" className="text-xs font-body">🇲🇰 MK</TabsTrigger>
                </TabsList>
                <TabsContent value="en" className="space-y-3 mt-3">
                  <div className="space-y-2">
                    <Label className="font-body">{t("categories.nameEnglishRequired")}</Label>
                    <Input value={name} onChange={(e) => setName(e.target.value)} placeholder={t("categories.namePlaceholder")} required className="h-11 font-body" />
                  </div>
                  <div className="space-y-2">
                    <Label className="font-body">{t("categories.description")}</Label>
                    <Textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder={t("categories.descPlaceholder")} className="font-body" />
                  </div>
                </TabsContent>
                <TabsContent value="al" className="space-y-3 mt-3">
                  <div className="space-y-2">
                    <Label className="font-body">{t("categories.nameAlbanian")}</Label>
                    <Input value={nameAl} onChange={(e) => setNameAl(e.target.value)} className="h-11 font-body" placeholder={t("admin.placeholder.useEnglish")} />
                  </div>
                  <div className="space-y-2">
                    <Label className="font-body">{t("categories.descriptionAlbanian")}</Label>
                    <Textarea value={descAl} onChange={(e) => setDescAl(e.target.value)} className="font-body" placeholder={t("admin.placeholder.useEnglish")} />
                  </div>
                </TabsContent>
                <TabsContent value="mk" className="space-y-3 mt-3">
                  <div className="space-y-2">
                    <Label className="font-body">{t("categories.nameMacedonian")}</Label>
                    <Input value={nameMk} onChange={(e) => setNameMk(e.target.value)} className="h-11 font-body" placeholder={t("admin.placeholder.useEnglish")} />
                  </div>
                  <div className="space-y-2">
                    <Label className="font-body">{t("categories.descriptionMacedonian")}</Label>
                    <Textarea value={descMk} onChange={(e) => setDescMk(e.target.value)} className="font-body" placeholder={t("admin.placeholder.useEnglish")} />
                  </div>
                </TabsContent>
              </Tabs>

              <Button type="submit" className="w-full h-11 font-body" disabled={createCategory.isPending || updateCategory.isPending}>
                {editId ? t("categories.save") : t("categories.create")}
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {isLoading ? (
        <div className="space-y-3">
          {[1, 2, 3].map((i) => <Skeleton key={i} className="h-16 rounded-xl" />)}
        </div>
      ) : categories?.length === 0 ? (
        <div className="text-center py-12 text-muted-foreground font-body">{t("categories.empty")}</div>
      ) : (
        <div className="space-y-2">
          {categories?.map((cat) => (
            <div key={cat.id} className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border group">
              <GripVertical className="w-4 h-4 text-muted-foreground/40 shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="font-body font-medium text-card-foreground">{cat.name}</p>
                {cat.description && <p className="text-sm text-muted-foreground font-body truncate">{cat.description}</p>}
              </div>
              <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <Button variant="ghost" size="icon" onClick={() => openEdit(cat)}><Pencil className="w-4 h-4" /></Button>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive"><Trash2 className="w-4 h-4" /></Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle className="font-display">{t("categories.deleteTitle")} "{cat.name}"?</AlertDialogTitle>
                      <AlertDialogDescription className="font-body">{t("categories.deleteDesc")}</AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel className="font-body">{t("categories.cancel")}</AlertDialogCancel>
                      <AlertDialogAction onClick={() => handleDelete(cat.id)} className="bg-destructive text-destructive-foreground font-body">{t("categories.delete")}</AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
