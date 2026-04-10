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
  "admin.login.emailPlaceholder": {
    en: "manager@shkupi.com",
    al: "menaxher@shkupi.com",
    mk: "менаџер@shkupi.com",
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
  "notFound.message": {
    en: "Oops! Page not found",
    al: "Ups! Faqja nuk u gjet",
    mk: "Упс! Страницата не е пронајдена",
  },
  "notFound.backHome": {
    en: "Return to Home",
    al: "Kthehu te Faqja Kryesore",
    mk: "Врати се на Почетна",
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
  "admin.placeholder.useEnglish": {
    en: "Leave empty to use English",
    al: "Lëreni bosh për të përdorur anglishten",
    mk: "Оставете празно за да се користи англиски",
  },
  "admin.item.add": {
    en: "Add Item",
    al: "Shto Artikull",
    mk: "Додај Ставка",
  },
  "admin.item.new": {
    en: "New",
    al: "I ri",
    mk: "Нова",
  },
  "admin.item.edit": {
    en: "Edit",
    al: "Ndrysho",
    mk: "Уреди",
  },
  "admin.item.menuItem": {
    en: "Menu Item",
    al: "Artikull i Menusë",
    mk: "Ставка од Менито",
  },
  "admin.item.nameEnglish": {
    en: "Name (English) *",
    al: "Emri (Anglisht) *",
    mk: "Име (Англиски) *",
  },
  "admin.item.descriptionEnglish": {
    en: "Description (English)",
    al: "Përshkrimi (Anglisht)",
    mk: "Опис (Англиски)",
  },
  "admin.item.nameAlbanian": {
    en: "Name (Albanian)",
    al: "Emri (Shqip)",
    mk: "Име (Албански)",
  },
  "admin.item.descriptionAlbanian": {
    en: "Description (Albanian)",
    al: "Përshkrimi (Shqip)",
    mk: "Опис (Албански)",
  },
  "admin.item.nameMacedonian": {
    en: "Name (Macedonian)",
    al: "Emri (Maqedonisht)",
    mk: "Име (Македонски)",
  },
  "admin.item.descriptionMacedonian": {
    en: "Description (Macedonian)",
    al: "Përshkrimi (Maqedonisht)",
    mk: "Опис (Македонски)",
  },
  "admin.item.price": {
    en: "Price (ден)",
    al: "Çmimi (ден)",
    mk: "Цена (ден)",
  },
  "admin.item.category": {
    en: "Category",
    al: "Kategoria",
    mk: "Категорија",
  },
  "admin.item.select": {
    en: "Select...",
    al: "Zgjidh...",
    mk: "Избери...",
  },
  "admin.item.image": {
    en: "Image",
    al: "Imazhi",
    mk: "Слика",
  },
  "admin.item.uploading": {
    en: "Uploading...",
    al: "Duke ngarkuar...",
    mk: "Се прикачува...",
  },
  "admin.item.changeImage": {
    en: "Change image",
    al: "Ndrysho imazhin",
    mk: "Промени слика",
  },
  "admin.item.uploadImage": {
    en: "Upload image",
    al: "Ngarko imazh",
    mk: "Прикачи слика",
  },
  "admin.item.remove": {
    en: "Remove",
    al: "Hiq",
    mk: "Отстрани",
  },
  "admin.item.available": {
    en: "Available",
    al: "Në dispozicion",
    mk: "Достапно",
  },
  "admin.item.markPopular": {
    en: "Mark as Popular",
    al: "Shëno si Më e kërkuar",
    mk: "Означи како Популарно",
  },
  "admin.item.create": {
    en: "Create Item",
    al: "Krijo Artikull",
    mk: "Креирај Ставка",
  },
  "admin.item.createCategoryFirst": {
    en: "Create a category first before adding menu items.",
    al: "Krijoni fillimisht një kategori para se të shtoni artikujt e menusë.",
    mk: "Прво креирајте категорија пред да додавате ставки во менито.",
  },
  "admin.item.empty": {
    en: "No menu items yet. Add your first dish!",
    al: "Nuk ka ende artikuj në menu. Shtoni pjatën tuaj të parë!",
    mk: "Се уште нема ставки во менито. Додадете го првото јадење!",
  },
  "admin.item.uploaded": {
    en: "Image uploaded",
    al: "Imazhi u ngarkua",
    mk: "Сликата е прикачена",
  },
  "admin.item.uploadFailed": {
    en: "Failed to upload image",
    al: "Ngarkimi i imazhit dështoi",
    mk: "Прикачувањето на сликата не успеа",
  },
  "admin.item.updated": {
    en: "Item updated",
    al: "Artikulli u përditësua",
    mk: "Ставката е ажурирана",
  },
  "admin.item.created": {
    en: "Item created",
    al: "Artikulli u krijua",
    mk: "Ставката е креирана",
  },
  "admin.item.deleted": {
    en: "Item deleted",
    al: "Artikulli u fshi",
    mk: "Ставката е избришана",
  },
  "admin.item.deleteFailed": {
    en: "Failed to delete",
    al: "Fshirja dështoi",
    mk: "Бришењето не успеа",
  },
  "admin.item.updateFailed": {
    en: "Failed to update",
    al: "Përditësimi dështoi",
    mk: "Ажурирањето не успеа",
  },
  "admin.delete.cannotUndo": {
    en: "This action cannot be undone.",
    al: "Ky veprim nuk mund të zhbëhet.",
    mk: "Ова дејство не може да се врати.",
  },
  "admin.qr.instructions": {
    en: "Print this QR code and place it on your tables. Customers can scan it to view the menu.",
    al: "Shtypeni këtë kod QR dhe vendoseni në tavolinat tuaja. Klientët mund ta skanojnë për të parë menunë.",
    mk: "Испечатете го овој QR код и поставете го на вашите маси. Гостите можат да го скенираат за да го видат менито.",
  },
  "admin.qr.scanToView": {
    en: "Scan to View Menu",
    al: "Skano për të parë menunë",
    mk: "Скенирај за да го видиш менито",
  },
  "admin.qr.downloadSvg": {
    en: "Download SVG",
    al: "Shkarko SVG",
    mk: "Преземи SVG",
  },
  "admin.qr.menuUrl": {
    en: "Menu URL:",
    al: "URL e menusë:",
    mk: "URL на менито:",
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
  "categories.nameEnglishRequired": {
    en: "Name (English) *",
    al: "Emri (Anglisht) *",
    mk: "Име (Англиски) *",
  },
  "categories.nameAlbanian": {
    en: "Name (Albanian)",
    al: "Emri (Shqip)",
    mk: "Име (Албански)",
  },
  "categories.descriptionAlbanian": {
    en: "Description (Albanian)",
    al: "Përshkrimi (Shqip)",
    mk: "Опис (Албански)",
  },
  "categories.nameMacedonian": {
    en: "Name (Macedonian)",
    al: "Emri (Maqedonisht)",
    mk: "Име (Македонски)",
  },
  "categories.descriptionMacedonian": {
    en: "Description (Macedonian)",
    al: "Përshkrimi (Maqedonisht)",
    mk: "Опис (Македонски)",
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
