export type Locale = "en" | "al" | "mk";

export const localeLabels: Record<Locale, string> = {
  en: "EN",
  al: "AL",
  mk: "MK",
};

const translations = {
  // Menu Header
  "header.address": {
    en: "Bul. Krste Misirkov, Skopje, North Macedonia, 1000",
    al: "Bul. Krste Misirkov, Shkup, Maqedonia e Veriut, 1000",
    mk: "Бул. Крсте Мисирков, Скопје, Северна Македонија, 1000",
  },
  "header.subtitle": {
    en: "Authentic flavors, crafted with passion. Explore our carefully curated menu.",
    al: "Shije autentike, të krijuara me pasion. Eksploroni menunë tonë të kujdesshme.",
    mk: "Автентични вкусови, создадени со страст. Истражете го нашето внимателно подготвено мени.",
  },

  // Category Nav
  "nav.popular": {
    en: "★ Popular",
    al: "★ Më të kërkuarat",
    mk: "★ Популарни",
  },

  // Menu
  "menu.comingSoon": {
    en: "Menu Coming Soon",
    al: "Menuja Së Shpejti",
    mk: "Менито Наскоро",
  },
  "menu.comingSoonDesc": {
    en: "We're preparing something delicious for you.",
    al: "Po përgatisim diçka të shijshme për ju.",
    mk: "Подготвуваме нешто вкусно за вас.",
  },
  "menu.popularDishes": {
    en: "Popular Dishes",
    al: "Më të kërkuarat",
    mk: "Популарни Јадења",
  },
  "menu.popularChoice": {
    en: "★ Popular Choice",
    al: "★ Më e kërkuara",
    mk: "★ Популарен Избор",
  },

  // Footer
  "footer.rights": {
    en: "All rights reserved",
    al: "Të gjitha të drejtat e rezervuara",
    mk: "Сите права задржани",
  },
  "footer.createdBy": {
    en: "Created by",
    al: "Krijuar nga",
    mk: "Креирано од",
  },

  // Admin Login
  "admin.login.title": {
    en: "Manager Login",
    al: "Hyrja e Menaxherit",
    mk: "Најава на Менаџер",
  },
  "admin.login.subtitle": {
    en: "Sign in to manage your restaurant menu",
    al: "Hyni për të menaxhuar menunë e restorantit",
    mk: "Најавете се за да го управувате менито",
  },
  "admin.login.email": {
    en: "Email",
    al: "Email",
    mk: "Е-пошта",
  },
  "admin.login.password": {
    en: "Password",
    al: "Fjalëkalimi",
    mk: "Лозинка",
  },
  "admin.login.submit": {
    en: "Sign In",
    al: "Hyr",
    mk: "Најави се",
  },
  "admin.login.loading": {
    en: "Signing in...",
    al: "Duke hyrë...",
    mk: "Се најавува...",
  },
  "admin.login.error": {
    en: "Invalid credentials",
    al: "Kredencialet janë të pavlefshme",
    mk: "Невалидни податоци",
  },
  "admin.login.success": {
    en: "Welcome back!",
    al: "Mirë se u kthyet!",
    mk: "Добредојдовте назад!",
  },

  // Admin Dashboard
  "admin.dashboard.title": {
    en: "Restaurant Shkupi",
    al: "Restoranti Shkupi",
    mk: "Ресторан Шкупи",
  },
  "admin.dashboard.subtitle": {
    en: "Menu Manager",
    al: "Menaxhimi i Menusë",
    mk: "Менаџер на Мени",
  },
  "admin.signOut": {
    en: "Sign Out",
    al: "Dil",
    mk: "Одјави се",
  },
  "admin.tabs.items": {
    en: "Menu Items",
    al: "Artikujt",
    mk: "Ставки",
  },
  "admin.tabs.categories": {
    en: "Categories",
    al: "Kategoritë",
    mk: "Категории",
  },
  "admin.tabs.qr": {
    en: "QR Code",
    al: "Kodi QR",
    mk: "QR Код",
  },

  // Category Manager
  "categories.title": {
    en: "Categories",
    al: "Kategoritë",
    mk: "Категории",
  },
  "categories.add": {
    en: "Add Category",
    al: "Shto Kategori",
    mk: "Додај Категорија",
  },
  "categories.edit": {
    en: "Edit Category",
    al: "Ndrysho Kategorinë",
    mk: "Уреди Категорија",
  },
  "categories.new": {
    en: "New Category",
    al: "Kategori e Re",
    mk: "Нова Категорија",
  },
  "categories.name": {
    en: "Name",
    al: "Emri",
    mk: "Име",
  },
  "categories.namePlaceholder": {
    en: "e.g. Appetizers",
    al: "p.sh. Antipasta",
    mk: "пр. Предјадења",
  },
  "categories.description": {
    en: "Description (optional)",
    al: "Përshkrimi (opsionale)",
    mk: "Опис (опционално)",
  },
  "categories.descPlaceholder": {
    en: "A short description...",
    al: "Një përshkrim i shkurtër...",
    mk: "Краток опис...",
  },
  "categories.save": {
    en: "Save Changes",
    al: "Ruaj Ndryshimet",
    mk: "Зачувај Промени",
  },
  "categories.create": {
    en: "Create Category",
    al: "Krijo Kategori",
    mk: "Креирај Категорија",
  },
  "categories.empty": {
    en: "No categories yet. Create one to get started.",
    al: "Nuk ka kategori ende. Krijoni një për të filluar.",
    mk: "Нема категории. Креирајте една за да започнете.",
  },
  "categories.deleteTitle": {
    en: "Delete",
    al: "Fshij",
    mk: "Избриши",
  },
  "categories.deleteDesc": {
    en: "This will also delete all menu items in this category. This action cannot be undone.",
    al: "Kjo do të fshijë edhe të gjitha artikujt në këtë kategori. Ky veprim nuk mund të zhbëhet.",
    mk: "Ова ќе ги избрише и сите ставки во оваа категорија. Ова дејство не може да се врати.",
  },
  "categories.cancel": {
    en: "Cancel",
    al: "Anulo",
    mk: "Откажи",
  },
  "categories.delete": {
    en: "Delete",
    al: "Fshij",
    mk: "Избриши",
  },
  "categories.updated": {
    en: "Category updated",
    al: "Kategoria u përditësua",
    mk: "Категоријата е ажурирана",
  },
  "categories.created": {
    en: "Category created",
    al: "Kategoria u krijua",
    mk: "Категоријата е креирана",
  },
  "categories.deleted": {
    en: "Category deleted",
    al: "Kategoria u fshi",
    mk: "Категоријата е избришана",
  },
  "categories.error": {
    en: "Something went wrong",
    al: "Diçka shkoi keq",
    mk: "Нешто тргна наопаку",
  },
  "categories.deleteError": {
    en: "Failed to delete — category may have items",
    al: "Dështoi fshirja — kategoria mund të ketë artikuj",
    mk: "Бришењето не успеа — категоријата може да има ставки",
  },
} as const;

export type TranslationKey = keyof typeof translations;

export function t(key: TranslationKey, locale: Locale): string {
  return translations[key]?.[locale] ?? translations[key]?.["en"] ?? key;
}

export default translations;
