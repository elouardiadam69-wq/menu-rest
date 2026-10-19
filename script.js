
const translations = {
  fr: {
    language: "Langue",
    brand: "🍽️ Le Délice",
    subtitle: "Bienvenue chez nous",
    title: "Le goût du bonheur",
    description: "Des ingrédients frais, des saveurs authentiques et des moments délicieux.",
    explore: "Découvrir le menu",
    menuEyebrow: "Notre sélection",
    menuTitle: "Notre menu",
    menuDescription: "Préparé avec amour, servi avec le sourire.",
    search: "Rechercher un plat...",
    categories: {
      all: "Tout",
      starters: "Entrées",
      mains: "Plats principaux",
      desserts: "Desserts",
      drinks: "Boissons"
    },
    empty: "Aucun plat trouvé. Essayez une autre recherche.",
    footer: "Fait avec ❤️ pour les amoureux de la cuisine.",
    dishes: [
      { id: 1, category: "starters", emoji: "🥗", name: "Salade fraîche", description: "Salade fraîche, tomates, concombre et sauce maison.", price: 35 },
      { id: 2, category: "starters", emoji: "🥣", name: "Soupe du jour", description: "Une soupe maison préparée avec des légumes frais.", price: 25 },
      { id: 3, category: "starters", emoji: "🥟", name: "Briouates", description: "Délicieux petits feuilletés croustillants.", price: 30 },
      { id: 4, category: "mains", emoji: "🍗", name: "Tajine de poulet", description: "Poulet mijoté aux olives et au citron confit.", price: 75 },
      { id: 5, category: "mains", emoji: "🍝", name: "Pâtes à la sauce tomate", description: "Pâtes italiennes et sauce tomate maison.", price: 55 },
      { id: 6, category: "mains", emoji: "🍔", name: "Burger maison", description: "Burger gourmand, fromage, salade et sauce maison.", price: 65 },
      { id: 7, category: "desserts", emoji: "🍰", name: "Gâteau au chocolat", description: "Gâteau moelleux au chocolat.", price: 30 },
      { id: 8, category: "desserts", emoji: "🥞", name: "Crêpes sucrées", description: "Crêpes délicates avec un nappage gourmand.", price: 25 },
      { id: 9, category: "desserts", emoji: "🍮", name: "Crème caramel", description: "Crème douce avec du caramel fait maison.", price: 22 },
      { id: 10, category: "drinks", emoji: "🍊", name: "Jus d'orange", description: "Jus d'orange fraîchement pressé.", price: 20 },
      { id: 11, category: "drinks", emoji: "🍋", name: "Citronnade", description: "Boisson fraîche au citron.", price: 18 },
      { id: 12, category: "drinks", emoji: "☕", name: "Café", description: "Un café préparé à la demande.", price: 15 }
    ]
  },

  en: {
    language: "Language",
    brand: "🍽️ The Delight",
    subtitle: "Welcome to our restaurant",
    title: "A taste of happiness",
    description: "Fresh ingredients, authentic flavours and delicious moments.",
    explore: "Explore the menu",
    menuEyebrow: "Our selection",
    menuTitle: "Our Menu",
    menuDescription: "Made with love, served with a smile.",
    search: "Search for a dish...",
    categories: {
      all: "All",
      starters: "Starters",
      mains: "Main courses",
      desserts: "Desserts",
      drinks: "Drinks"
    },
    empty: "No dishes found. Try another search.",
    footer: "Made with ❤️ for food lovers.",
    dishes: [
      { id: 1, category: "starters", emoji: "🥗", name: "Fresh Salad", description: "Fresh salad with tomatoes, cucumber and house dressing.", price: 35 },
      { id: 2, category: "starters", emoji: "🥣", name: "Soup of the Day", description: "Homemade soup made with fresh vegetables.", price: 25 },
      { id: 3, category: "starters", emoji: "🥟", name: "Moroccan Briouates", description: "Delicious little crispy pastries.", price: 30 },
      { id: 4, category: "mains", emoji: "🍗", name: "Chicken Tagine", description: "Slow-cooked chicken with olives and preserved lemon.", price: 75 },
      { id: 5, category: "mains", emoji: "🍝", name: "Tomato Pasta", description: "Italian pasta with homemade tomato sauce.", price: 55 },
      { id: 6, category: "mains", emoji: "🍔", name: "Homemade Burger", description: "Tasty burger with cheese, salad and house sauce.", price: 65 },
      { id: 7, category: "desserts", emoji: "🍰", name: "Chocolate Cake", description: "Soft and delicious chocolate cake.", price: 30 },
      { id: 8, category: "desserts", emoji: "🥞", name: "Sweet Pancakes", description: "Delicate pancakes with a delicious topping.", price: 25 },
      { id: 9, category: "desserts", emoji: "🍮", name: "Crème Caramel", description: "Smooth custard with homemade caramel.", price: 22 },
      { id: 10, category: "drinks", emoji: "🍊", name: "Orange Juice", description: "Freshly squeezed orange juice.", price: 20 },
      { id: 11, category: "drinks", emoji: "🍋", name: "Lemonade", description: "Refreshing lemon drink.", price: 18 },
      { id: 12, category: "drinks", emoji: "☕", name: "Coffee", description: "Coffee freshly prepared to order.", price: 15 }
    ]
  },

  ar: {
    language: "اللغة",
    brand: "🍽️ مطعم اللذة",
    subtitle: "مرحباً بكم في مطعمنا",
    title: "مذاق السعادة",
    description: "مكونات طازجة، نكهات أصيلة ولحظات لذيذة.",
    explore: "اكتشف القائمة",
    menuEyebrow: "اختياراتنا",
    menuTitle: "قائمة الطعام",
    menuDescription: "نُحضّر أطباقنا بحب ونقدمها بابتسامة.",
    search: "ابحث عن طبق...",
    categories: {
      all: "الكل",
      starters: "المقبلات",
      mains: "الأطباق الرئيسية",
      desserts: "الحلويات",
      drinks: "المشروبات"
    },
    empty: "لم يتم العثور على أي طبق. جرّب البحث مرة أخرى.",
    footer: "صُنع ❤️ لمحبي الطعام.",
    dishes: [
      { id: 1, category: "starters", emoji: "🥗", name: "سلطة طازجة", description: "سلطة طازجة بالطماطم والخيار وصلصة المطعم.", price: 35 },
      { id: 2, category: "starters", emoji: "🥣", name: "حساء اليوم", description: "حساء منزلي محضر من الخضروات الطازجة.", price: 25 },
      { id: 3, category: "starters", emoji: "🥟", name: "بريوات مغربية", description: "فطائر مغربية صغيرة ومقرمشة.", price: 30 },
      { id: 4, category: "mains", emoji: "🍗", name: "طاجين الدجاج", description: "دجاج مطهو مع الزيتون والحامض المصير.", price: 75 },
      { id: 5, category: "mains", emoji: "🍝", name: "معكرونة بصلصة الطماطم", description: "معكرونة بصلصة الطماطم المحضرة في المطعم.", price: 55 },
      { id: 6, category: "mains", emoji: "🍔", name: "برغر منزلي", description: "برغر شهي بالجبن والسلطة وصلصة المطعم.", price: 65 },
      { id: 7, category: "desserts", emoji: "🍰", name: "كعكة الشوكولاتة", description: "كعكة شوكولاتة طرية ولذيذة.", price: 30 },
      { id: 8, category: "desserts", emoji: "🥞", name: "كريب حلو", description: "كريب رقيق مع إضافات لذيذة.", price: 25 },
      { id: 9, category: "desserts", emoji: "🍮", name: "كريم كراميل", description: "كريم ناعم مع كراميل محضر في المنزل.", price: 22 },
      { id: 10, category: "drinks", emoji: "🍊", name: "عصير البرتقال", description: "عصير برتقال طازج.", price: 20 },
      { id: 11, category: "drinks", emoji: "🍋", name: "ليموناضة", description: "مشروب منعش بالليمون.", price: 18 },
      { id: 12, category: "drinks", emoji: "☕", name: "قهوة", description: "قهوة محضرة عند الطلب.", price: 15 }
    ]
  }
};

const languageSelect = document.getElementById("language-select");
const searchInput = document.getElementById("search");
const menuGrid = document.getElementById("menu-grid");
const emptyMessage = document.getElementById("empty-message");
const categoryButtons = document.querySelectorAll(".category-button");

let currentLanguage = "fr";
let currentCategory = "all";

function translatePage() {
  const t = translations[currentLanguage];

  document.documentElement.lang = currentLanguage;
  document.documentElement.dir = currentLanguage === "ar" ? "rtl" : "ltr";
  document.body.dir = currentLanguage === "ar" ? "rtl" : "ltr";

  document.title = currentLanguage === "ar"
    ? "مطعم اللذة | قائمة الطعام"
    : currentLanguage === "en"
      ? "The Delight | Restaurant Menu"
      : "Le Délice | Menu Restaurant";

  document.getElementById("language-label").textContent = t.language;
  document.querySelector(".brand").textContent = t.brand;
  document.getElementById("subtitle").textContent = t.subtitle;
  document.getElementById("title").textContent = t.title;
  document.getElementById("description").textContent = t.description;
  document.getElementById("explore").textContent = t.explore;
  document.getElementById("menu-eyebrow").textContent = t.menuEyebrow;
  document.getElementById("menu-title").textContent = t.menuTitle;
  document.getElementById("menu-description").textContent = t.menuDescription;
  searchInput.placeholder = t.search;
  searchInput.setAttribute("aria-label", t.search);
  emptyMessage.textContent = t.empty;
  document.getElementById("footer-text").textContent = t.footer;
document.getElementById("footer-brand").textContent =
    currentLanguage === "ar" ? "مطعم اللذة" :
    currentLanguage === "en" ? "The Delight" : "Le Délice";

  categoryButtons.forEach((button) => {
    const category = button.dataset.category;
    button.textContent = t.categories[category];
    button.classList.toggle("active", category === currentCategory);
  });

  renderDishes();
}

function renderDishes() {
  const t = translations[currentLanguage];
  const query = searchInput.value.trim().toLocaleLowerCase(currentLanguage);

  const filteredDishes = t.dishes.filter((dish) => {
    const matchesCategory =
      currentCategory === "all" || dish.category === currentCategory;

    const searchableText =
      `${dish.name} ${dish.description}`.toLocaleLowerCase(currentLanguage);

    const matchesSearch = searchableText.includes(query);

    return matchesCategory && matchesSearch;
  });

  menuGrid.replaceChildren();

  filteredDishes.forEach((dish) => {
    const card = document.createElement("article");
    card.className = "dish-card";

    const visual = document.createElement("div");
    visual.className = "dish-visual";
    visual.setAttribute("aria-hidden", "true");
    visual.textContent = dish.emoji;

    const info = document.createElement("div");
    info.className = "dish-info";

    const name = document.createElement("h3");
    name.textContent = dish.name;

    const description = document.createElement("p");
    description.textContent = dish.description;

    const bottom = document.createElement("div");
    bottom.className = "dish-bottom";

    const category = document.createElement("span");
    category.className = "dish-category";
    category.textContent = t.categories[dish.category];

    const price = document.createElement("span");
    price.className = "dish-price";
    price.textContent = `${dish.price} DH`;

    bottom.append(category, price);
    info.append(name, description, bottom);
    card.append(visual, info);
    menuGrid.append(card);
  });

  emptyMessage.hidden = filteredDishes.length > 0;
}

languageSelect.addEventListener("change", () => {
  currentLanguage = languageSelect.value;
  translatePage();
});

categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    currentCategory = button.dataset.category;

    categoryButtons.forEach((item) => {
      item.classList.toggle("active", item === button);
    });

    renderDishes();
  });
});

searchInput.addEventListener("input", renderDishes);

document.getElementById("year").textContent = new Date().getFullYear();

translatePage();

/* ===== Administration du restaurant ===== */

const adminPanel = document.getElementById("admin-panel");
const offersSection = document.getElementById("offers-section");
const offersGrid = document.getElementById("offers-grid");

let offers = [];



function saveRestaurantData() {
  try {
    localStorage.setItem(
      "delice-menu-data",
      JSON.stringify({ translations, offers })
    );

    syncDishesToSupabase().catch((error) => {
      console.error("Erreur Supabase :", error);
      alert("Les modifications sont enregistrées localement, mais pas encore dans Supabase.");
    });

    return true;
  } catch (error) {
    console.error("Erreur de sauvegarde :", error);
    alert("Impossible d'enregistrer les modifications.");
    return false;
  }
}

async function syncDishesToSupabase() {
  const dishes = translations.fr.dishes.map((dish) => {
    const dishAr = translations.ar.dishes.find((item) => item.id === dish.id);
    const dishEn = translations.en.dishes.find((item) => item.id === dish.id);

    return {
      id: dish.id,
      name: dish.name,
      description: dish.description,
      category: dish.category,
      price: dish.price,
      emoji: dish.emoji || "🍽️",
      name_ar: dishAr?.name || "",
      description_ar: dishAr?.description || "",
      name_en: dishEn?.name || "",
      description_en: dishEn?.description || "",
      available: true
    };
  });

  const { error } = await supabaseClient
    .from("dishes")
    .upsert(dishes, { onConflict: "id" });

  if (error) throw error;
}



function loadRestaurantData() {
  try {
    const saved = localStorage.getItem("delice-menu-data");
    if (!saved) return;

    const data = JSON.parse(saved);

    if (data.translations) {
      ["fr", "ar", "en"].forEach((lang) => {
        if (Array.isArray(data.translations[lang]?.dishes)) {
          translations[lang].dishes = data.translations[lang].dishes;
        }
      });
    }

    if (Array.isArray(data.offers)) {
      offers = data.offers;
    }
  } catch (error) {
    console.error("Erreur de chargement du menu :", error);
  }
}

async function loadDishesFromSupabase() {
  try {
    const { data, error } = await supabaseClient
      .from("dishes")
      .select("*");

    if (error) throw error;

    if (!Array.isArray(data) || data.length === 0) {
      console.warn("Aucun plat trouvé dans Supabase.");
      return;
    }

    translations.fr.dishes = data.map((dish) => ({
      id: dish.id,
      category: dish.category,
      emoji: dish.emoji || "🍽️",
      price: Number(dish.price),
      name: dish.name || "",
      description: dish.description || ""
    }));

    translations.ar.dishes = data.map((dish) => ({
      id: dish.id,
      category: dish.category,
      emoji: dish.emoji || "🍽️",
      price: Number(dish.price),
      name: dish.name_ar || "",
      description: dish.description_ar || ""
    }));

    translations.en.dishes = data.map((dish) => ({
      id: dish.id,
      category: dish.category,
      emoji: dish.emoji || "🍽️",
      price: Number(dish.price),
      name: dish.name_en || "",
      description: dish.description_en || ""
    }));

    console.log("✅ Plats chargés depuis Supabase :", data.length);

    translatePage();
    renderAdminDishes();
  } catch (error) {
    console.error("Erreur de chargement Supabase :", error);
  }
}

function openAdmin() {
  adminPanel.hidden = false;
  renderAdminDishes();
  renderAdminOffers();
  adminPanel.scrollIntoView({ behavior: "smooth", block: "start" });
}
const adminOpenButton = document.getElementById("admin-open");
const adminCloseButton = document.getElementById("admin-close");

if (adminOpenButton) {
  adminOpenButton.addEventListener("click", openAdmin);
}

if (adminCloseButton) {
  adminCloseButton.addEventListener("click", () => {
    adminPanel.hidden = true;
  });
}

function renderAdminDishes() {
  const list = document.getElementById("admin-dishes-list");
  list.replaceChildren();

  translations.fr.dishes.forEach((dish) => {
    const item = document.createElement("div");
    item.className = "admin-list-item";

    const info = document.createElement("div");
    const name = document.createElement("strong");
    name.textContent = `${dish.emoji} ${dish.name}`;

    const details = document.createElement("p");
    details.textContent = `${dish.price} DH`;

    info.append(name, details);

    const actions = document.createElement("div");
    actions.className = "admin-list-actions";

    const edit = document.createElement("button");
    edit.type = "button";
    edit.className = "admin-edit";
    edit.textContent = "✏️ Modifier";
    edit.addEventListener("click", () => editDish(dish.id));

    const remove = document.createElement("button");
    remove.type = "button";
    remove.className = "admin-delete";
    remove.textContent = "🗑️ Supprimer";
    remove.addEventListener("click", () => deleteDish(dish.id));

    actions.append(edit, remove);
    item.append(info, actions);
    list.append(item);
  });
}

function editDish(id) {
  const dishFr = translations.fr.dishes.find((dish) => dish.id === id);
  const dishAr = translations.ar.dishes.find((dish) => dish.id === id);
  const dishEn = translations.en.dishes.find((dish) => dish.id === id);

  if (!dishFr || !dishAr || !dishEn) {
    alert("Ce plat n'existe pas dans les trois langues.");
    return;
  }

  document.getElementById("dish-id").value = id;
  document.getElementById("dish-category").value = dishFr.category;
  document.getElementById("dish-emoji").value = dishFr.emoji;
  document.getElementById("dish-price").value = dishFr.price;

  document.getElementById("dish-name-fr").value = dishFr.name;
  document.getElementById("dish-desc-fr").value = dishFr.description;

  document.getElementById("dish-name-ar").value = dishAr.name;
  document.getElementById("dish-desc-ar").value = dishAr.description;

  document.getElementById("dish-name-en").value = dishEn.name;
  document.getElementById("dish-desc-en").value = dishEn.description;

  document.getElementById("dish-form").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

function resetDishForm() {
  document.getElementById("dish-form").reset();
  document.getElementById("dish-id").value = "";
  document.getElementById("dish-emoji").value = "🍽️";
}

document.getElementById("dish-reset").addEventListener("click", resetDishForm);

document.getElementById("dish-form").addEventListener("submit", (event) => {
  event.preventDefault();

  const idInput = document.getElementById("dish-id").value;
  const id = idInput
    ? Number(idInput)
    : Math.max(0, ...translations.fr.dishes.map((dish) => dish.id)) + 1;

  const category = document.getElementById("dish-category").value;
  const emoji = document.getElementById("dish-emoji").value.trim() || "🍽️";
  const price = Number(document.getElementById("dish-price").value);

  if (!Number.isFinite(price) || price < 0) {
    alert("Veuillez entrer un prix valide.");
    return;
  }

  const values = {
    fr: {
      name: document.getElementById("dish-name-fr").value.trim(),
      description: document.getElementById("dish-desc-fr").value.trim()
    },
    ar: {
      name: document.getElementById("dish-name-ar").value.trim(),
      description: document.getElementById("dish-desc-ar").value.trim()
    },
    en: {
      name: document.getElementById("dish-name-en").value.trim(),
      description: document.getElementById("dish-desc-en").value.trim()
    }
  };

  if (Object.values(values).some(
    (value) => !value.name || !value.description
  )) {
    alert("Complétez le nom et la description dans les trois langues.");
    return;
  }

  ["fr", "ar", "en"].forEach((lang) => {
    const dish = {
      id,
      category,
      emoji,
      price,
      name: values[lang].name,
      description: values[lang].description
    };

    const index = translations[lang].dishes.findIndex(
      (item) => item.id === id
    );

    if (index >= 0) {
      translations[lang].dishes[index] = dish;
    } else {
      translations[lang].dishes.push(dish);
    }
  });

  if (!saveRestaurantData()) return;

  resetDishForm();
  translatePage();
  renderAdminDishes();
  alert("Plat enregistré avec succès !");
});

function deleteDish(id) {
  if (!confirm("Voulez-vous vraiment supprimer ce plat ?")) return;

  ["fr", "ar", "en"].forEach((lang) => {
    translations[lang].dishes = translations[lang].dishes.filter(
      (dish) => dish.id !== id
    );
  });

  if (!saveRestaurantData()) return;

  translatePage();
  renderAdminDishes();
}

function renderAdminOffers() {
  const list = document.getElementById("admin-offers-list");
  list.replaceChildren();

  offers.forEach((offer) => {
    const item = document.createElement("div");
    item.className = "admin-list-item";

    const info = document.createElement("div");
    const name = document.createElement("strong");
    name.textContent = `🎉 ${offer.fr.name}`;

    const details = document.createElement("p");
    details.textContent = `${offer.price} DH`;

    info.append(name, details);

    const actions = document.createElement("div");
    actions.className = "admin-list-actions";

    const edit = document.createElement("button");
    edit.type = "button";
    edit.className = "admin-edit";
    edit.textContent = "✏️ Modifier";
    edit.addEventListener("click", () => editOffer(offer.id));

    const remove = document.createElement("button");
    remove.type = "button";
    remove.className = "admin-delete";
    remove.textContent = "🗑️ Supprimer";
    remove.addEventListener("click", () => deleteOffer(offer.id));

    actions.append(edit, remove);
    item.append(info, actions);
    list.append(item);
  });
}

function renderOffers() {
  const lang = currentLanguage;
  offersGrid.replaceChildren();

  offers.forEach((offer) => {
    const card = document.createElement("article");
    card.className = "offer-card";

    const name = document.createElement("h3");
    name.textContent = `🎉 ${offer[lang].name}`;

    const description = document.createElement("p");
    description.textContent = offer[lang].description;

    const price = document.createElement("div");
    price.className = "offer-price";
    price.textContent = `${offer.price} DH`;

    card.append(name, description, price);
    offersGrid.append(card);
  });

  offersSection.hidden = offers.length === 0;
}

function resetOfferForm() {
  document.getElementById("offer-form").reset();
  document.getElementById("offer-id").value = "";
}

document.getElementById("offer-reset").addEventListener("click", resetOfferForm);

document.getElementById("offer-form").addEventListener("submit", (event) => {
  event.preventDefault();

  const idInput = document.getElementById("offer-id").value;
  const id = idInput
    ? Number(idInput)
    : Math.max(0, ...offers.map((offer) => offer.id)) + 1;

  const price = Number(document.getElementById("offer-price").value);

  if (!Number.isFinite(price) || price < 0) {
    alert("Veuillez entrer un prix valide.");
    return;
  }

  const offer = {
    id,
    price,
    fr: {
      name: document.getElementById("offer-name-fr").value.trim(),
      description: document.getElementById("offer-desc-fr").value.trim()
    },
    ar: {
      name: document.getElementById("offer-name-ar").value.trim(),
      description: document.getElementById("offer-desc-ar").value.trim()
    },
    en: {
      name: document.getElementById("offer-name-en").value.trim(),
      description: document.getElementById("offer-desc-en").value.trim()
    }
  };

  if (["fr", "ar", "en"].some(
    (lang) => !offer[lang].name || !offer[lang].description
  )) {
    alert("Complétez le nom et la description de l'offre dans les trois langues.");
    return;
  }

  const index = offers.findIndex((item) => item.id === id);

  if (index >= 0) {
    offers[index] = offer;
  } else {
    offers.push(offer);
  }

  if (!saveRestaurantData()) return;

  resetOfferForm();
  renderOffers();
  renderAdminOffers();
  alert("Offre enregistrée avec succès !");
});

function editOffer(id) {
  const offer = offers.find((item) => item.id === id);
  if (!offer) return;

  document.getElementById("offer-id").value = offer.id;
  document.getElementById("offer-price").value = offer.price;

  ["fr", "ar", "en"].forEach((lang) => {
    document.getElementById(`offer-name-${lang}`).value = offer[lang].name;
    document.getElementById(`offer-desc-${lang}`).value = offer[lang].description;
  });

  document.getElementById("offer-form").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

function deleteOffer(id) {
  if (!confirm("Voulez-vous vraiment supprimer cette offre ?")) return;

  offers = offers.filter((offer) => offer.id !== id);

  if (!saveRestaurantData()) return;

  renderOffers();
  renderAdminOffers();
}

/* Charger les données enregistrées, puis actualiser le menu */
loadRestaurantData();
loadDishesFromSupabase();
const originalTranslatePage = translatePage;

translatePage = function () {
  originalTranslatePage();
  renderOffers();
};

translatePage();


const loginOverlay = document.getElementById("admin-login");

document.getElementById("admin-login-open").addEventListener("click", () => {
  document.getElementById("admin-login-form").hidden = false;
  loginOverlay.hidden = false;
});


document.getElementById("admin-login-close").addEventListener("click", () => {
  loginOverlay.hidden = true;
});



const MANAGER_UID = "8d30bbb4-4b6f-4002-aff1-3cbd07be405e";

document.getElementById("admin-login-form")?.addEventListener("submit", async (event) => {
  event.preventDefault();

  const errorElement = document.getElementById("login-error");
  errorElement.textContent = "";

  const email = document.getElementById("admin-email").value.trim();
  const password = document.getElementById("admin-password").value;

  try {
    const { data, error } = await supabaseClient.auth.signInWithPassword({
      email,
      password
    });

    if (error) {
      errorElement.textContent = "E-mail ou mot de passe incorrect.";
      return;
    }

    if (data.user?.id !== MANAGER_UID) {
      await supabaseClient.auth.signOut();
      errorElement.textContent = "Ce compte n'est pas autorisé.";
      return;
    }

   document.getElementById("admin-login-form").hidden = false;
loginOverlay.hidden = true;

    const adminPanel = document.getElementById("admin-panel");
    if (adminPanel) {
      adminPanel.hidden = false;
      adminPanel.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    if (typeof renderAdminDishes === "function") {
      renderAdminDishes();
    }

    if (typeof renderAdminOffers === "function") {
      renderAdminOffers();
    }

    console.log("Connexion réussie.");
  } catch (err) {
    console.error(err);
    errorElement.textContent = "Erreur de connexion. Réessayez.";
  }
});
