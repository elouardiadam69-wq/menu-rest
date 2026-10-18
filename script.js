
"use strict";

/* =========================================
   1. INFORMATIONS DU RESTAURANT
   ========================================= */

const restaurant = {
  name: "Restaurant Al Baraka",
  whatsapp: "212600000000"
};

/*
  Remplace le numéro WhatsApp par celui du restaurant.
  Format international : indicatif du pays + numéro,
  sans le signe +, sans espaces.
*/


/* =========================================
   2. TRADUCTIONS DE L'INTERFACE
   ========================================= */

const translations = {
  fr: {
    welcome: "BIENVENUE CHEZ NOUS",
    subtitle: "Cuisine marocaine et saveurs traditionnelles",
    "our-menu": "NOTRE CARTE",
    "menu-title": "Découvrez notre menu",
    "language-label": "Langue",
    all: "Tous les plats",
    "contact-title": "Une question ?",
    "contact-description": "Contactez-nous pour plus d'informations.",
    "contact-button": "Nous contacter sur WhatsApp",
    "footer-note": "Les prix sont indiqués en dirhams marocains (DH).",
    dishes: "plats",
    categories: {
      all: "Tout",
      starters: "Entrées",
      mains: "Plats principaux",
      drinks: "Boissons",
      desserts: "Desserts"
    }
  },

  ar: {
    welcome: "مرحبا بكم عندنا",
    subtitle: "مأكولات مغربية ونكهات تقليدية",
    "our-menu": "قائمة الطعام",
    "menu-title": "اكتشفوا قائمتنا",
    "language-label": "اللغة",
    all: "جميع الأطباق",
    "contact-title": "هل لديكم سؤال؟",
    "contact-description": "اتصلوا بنا للمزيد من المعلومات.",
    "contact-button": "تواصلوا معنا عبر واتساب",
    "footer-note": "الأثمنة بالدرهم المغربي.",
    dishes: "أطباق",
    categories: {
      all: "الكل",
      starters: "المقبلات",
      mains: "الأطباق الرئيسية",
      drinks: "المشروبات",
      desserts: "الحلويات"
    }
  },

  en: {
    welcome: "WELCOME",
    subtitle: "Moroccan cuisine and traditional flavours",
    "our-menu": "OUR MENU",
    "menu-title": "Discover our menu",
    "language-label": "Language",
    all: "All dishes",
    "contact-title": "Have a question?",
    "contact-description": "Contact us for more information.",
    "contact-button": "Contact us on WhatsApp",
    "footer-note": "Prices are shown in Moroccan dirhams (DH).",
    dishes: "dishes",
    categories: {
      all: "All",
      starters: "Starters",
      mains: "Main courses",
      drinks: "Drinks",
      desserts: "Desserts"
    }
  }
};


/* =========================================
   3. PLATS DU RESTAURANT
   ========================================= */

const dishes = [
  {
    id: 1,
    category: "starters",
    price: 25,
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=700&q=80",
    name: {
      fr: "Salade marocaine",
      ar: "سلطة مغربية",
      en: "Moroccan Salad"
    },
    description: {
      fr: "Tomates, concombres et herbes fraîches.",
      ar: "طماطم وخيار وأعشاب طازجة.",
      en: "Tomatoes, cucumbers and fresh herbs."
    }
  },

  {
    id: 2,
    category: "mains",
    price: 65,
    image: "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?auto=format&fit=crop&w=700&q=80",
    name: {
      fr: "Tajine de poulet",
      ar: "طاجين الدجاج",
      en: "Chicken Tagine"
    },
    description: {
      fr: "Poulet, olives et citron confit.",
      ar: "دجاج وزيتون وحامض مصير.",
      en: "Chicken, olives and preserved lemon."
    }
  },

  {
    id: 3,
    category: "mains",
    price: 55,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=700&q=80",
    name: {
      fr: "Couscous aux légumes",
      ar: "كسكس بالخضروات",
      en: "Vegetable Couscous"
    },
    description: {
      fr: "Semoule, légumes et bouillon parfumé.",
      ar: "سميد وخضروات ومرق معطر.",
      en: "Semolina, vegetables and aromatic broth."
    }
  },

  {
    id: 4,
    category: "drinks",
    price: 12,
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=700&q=80",
    name: {
      fr: "Thé à la menthe",
      ar: "أتاي بالنعناع",
      en: "Mint Tea"
    },
    description: {
      fr: "Thé traditionnel à la menthe fraîche.",
      ar: "شاي تقليدي بالنعناع الطازج.",
      en: "Traditional tea with fresh mint."
    }
  },

  {
    id: 5,
    category: "desserts",
    price: 20,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=700&q=80",
    name: {
      fr: "Gâteau du jour",
      ar: "حلوى اليوم",
      en: "Cake of the Day"
    },
    description: {
      fr: "Une douceur préparée avec soin.",
      ar: "حلوى محضرة بعناية.",
      en: "A sweet treat prepared with care."
    }
  },

  {
    id: 6,
    category: "starters",
    price: 30,
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=700&q=80",
    name: {
      fr: "Soupe du jour",
      ar: "حساء اليوم",
      en: "Soup of the Day"
    },
    description: {
      fr: "Soupe maison selon les produits du jour.",
      ar: "حساء منزلي حسب منتجات اليوم.",
      en: "Homemade soup made with seasonal ingredients."
    }
  }
];


/* =========================================
   4. CATÉGORIES ET ÉTAT DU MENU
   ========================================= */

const categoryKeys = [
  "all",
  "starters",
  "mains",
  "drinks",
  "desserts"
];

let currentLanguage = "fr";
let currentCategory = "all";


/* =========================================
   5. SÉLECTION DES ÉLÉMENTS HTML
   ========================================= */

const languageSelect =
  document.getElementById("language-select");

const categoryList =
  document.getElementById("category-list");

const categoryTitle =
  document.getElementById("category-title");

const menuGrid =
  document.getElementById("menu-grid");

const dishCount =
  document.getElementById("dish-count");

const emptyMessage =
  document.getElementById("empty-message");


/* =========================================
   6. CHANGER LA LANGUE
   ========================================= */

function changeLanguage(language) {
  if (!translations[language]) {
    return;
  }

  currentLanguage = language;

  const t = translations[currentLanguage];

  document.documentElement.lang = currentLanguage;
  document.documentElement.dir =
    currentLanguage === "ar" ? "rtl" : "ltr";

  // Traduire les textes possédant l'attribut data-i18n.
  document.querySelectorAll("[data-i18n]").forEach(element => {
    const key = element.dataset.i18n;
    element.textContent = t[key];
  });

  // Mettre à jour le nom du restaurant.
  document.getElementById("restaurant-name").textContent =
    restaurant.name;

  document.getElementById("footer-name").textContent =
    restaurant.name;

  // Mettre à jour le titre de la catégorie.
  updateCategoryTitle();

  // Afficher les catégories et les plats dans la nouvelle langue.
  renderCategories();
  renderDishes();

  // Adapter le lien WhatsApp.
  const phone = restaurant.whatsapp.replace(/\D/g, "");

  document.getElementById("contact-link").href =
    "https://wa.me/" + phone;

  document.title =
    restaurant.name + " | " + t["menu-title"];
}


/* =========================================
   7. AFFICHER LES CATÉGORIES
   ========================================= */

function renderCategories() {
  const t = translations[currentLanguage];

  categoryList.replaceChildren();

  categoryKeys.forEach(key => {
    const button = document.createElement("button");

    button.type = "button";
    button.className = "category-button";

    if (key === currentCategory) {
      button.classList.add("active");
    }

    button.textContent = t.categories[key];

    button.setAttribute(
      "aria-pressed",
      String(key === currentCategory)
    );

    button.addEventListener("click", () => {
      currentCategory = key;
      renderCategories();
      updateCategoryTitle();
      renderDishes();
    });

    categoryList.appendChild(button);
  });
}


/* =========================================
   8. METTRE À JOUR LE TITRE
   ========================================= */

function updateCategoryTitle() {
  const t = translations[currentLanguage];

  categoryTitle.textContent =
    currentCategory === "all"
      ? t.all
      : t.categories[currentCategory];
}


/* =========================================
   9. AFFICHER LES PLATS
   ========================================= */

function renderDishes() {
  const t = translations[currentLanguage];

  menuGrid.replaceChildren();

  const visibleDishes = dishes.filter(dish => {
    return currentCategory === "all" ||
           dish.category === currentCategory;
  });

  visibleDishes.forEach(dish => {
    const card = document.createElement("article");
    card.className = "dish-card";

    const image = document.createElement("img");
    image.className = "dish-image";
    image.src = dish.image;
    image.alt = dish.name[currentLanguage];
    image.loading = "lazy";

    // Montrer un fond neutre si une photo ne charge pas.
    image.addEventListener("error", () => {
      image.style.display = "none";
    }, { once: true });

    const content = document.createElement("div");
    content.className = "dish-content";

    const category = document.createElement("span");
    category.className = "dish-category";
    category.textContent = t.categories[dish.category];

    const name = document.createElement("h3");
    name.className = "dish-name";
    name.textContent = dish.name[currentLanguage];

    const description = document.createElement("p");
    description.className = "dish-description";
    description.textContent =
      dish.description[currentLanguage];

    const price = document.createElement("p");
    price.className = "dish-price";

    price.textContent =
      new Intl.NumberFormat(
        currentLanguage === "ar" ? "ar-MA" : currentLanguage,
        { maximumFractionDigits: 2 }
      ).format(dish.price) + " DH";

    content.append(
      category,
      name,
      description,
      price
    );

    card.append(image, content);
    menuGrid.appendChild(card);
  });

  dishCount.textContent =
    visibleDishes.length + " " + t.dishes;

  emptyMessage.hidden = visibleDishes.length !== 0;
}


/* =========================================
   10. DÉMARRAGE DU SITE
   ========================================= */

languageSelect.addEventListener("change", event => {
  changeLanguage(event.target.value);
});

document.getElementById("current-year").textContent =
  new Date().getFullYear();

// Afficher le menu en français au premier chargement.
changeLanguage("fr");
