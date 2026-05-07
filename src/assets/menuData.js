// src/assets/menuData.js

export const AUTOPLAY_INTERVAL_MS = 5000;
export const TOAST_DURATION_MS = 2500;

// 1. หมวดหมู่สำหรับแสดงใน PromoCarousel หน้า Index
export const CATEGORIES = [
  {
    id: "pro",
    title: "PROMOTIONS",
    desc: "Deals so good, it's a crime. Grab 'em before they're gone!",
    img: "/images/cat-1.png",
    link: "/menu",
    badge: "promo",
  },
  {
    id: "c1",
    title: "ALL BUCKETS",
    desc: "Grab the squad. Overflowing with crispy, golden perfection.",
    img: "/images/cat-2.png",
    link: "/menu?tab=bucket",
    badge: "top-sale",
  },
  {
    id: "c2",
    title: "SANDWICHES",
    desc: "Bold flavors, messy hands. Your new favorite chicken buns.",
    img: "/images/pro-4.png",
    link: "/menu?tab=sandwich",
    badge: "new",
  },
  {
    id: "c3",
    title: "SIDES",
    desc: "Never just a backup. The perfect crispy and savory sidekicks.",
    img: "/images/cat-4.png",
    link: "/menu?tab=side",
  },
];

// 2. โปรโมชั่นสำหรับแสดงใน Slider ฝั่งซ้ายของหน้า MenuPage
export const PROMOTIONS = [
  {
    id: "pro1",
    tag: "COMBO DEAL -10%",
    title: "PARTY BUCKET SET",
    price: "฿383.-",
    cal: "2100 Cal.",
    img: "/images/pro-combo-1.png",
  },
  {
    id: "pro2",
    tag: "COMBO DEAL -10%",
    title: "SPICY SANDWICH SET",
    price: "฿115.-",
    cal: "850 Cal.",
    img: "/images/pro-combo-2.png",
  },
  {
    id: "pro3",
    tag: "TRY ME -5%",
    title: "CHICKSKATE",
    price: "฿189.-",
    cal: "950 Cal.",
    img: "/images/pro-4.png",
  },
];

// 3. รายการอาหารทั้งหมด (รวมข้อมูลสำหรับ Modal Popup)
export const MENU = [
  // --- BUCKETS ---
  {
    id: 1,
    name: "Signature 8pc Bucket",
    price: 299,
    cat: "bucket",
    img: "/images/menu-profile-1.png",
    desc: "Classic Original Recipe chicken.",
    fullDesc:
      "8 pieces of our world-famous Original Recipe chicken, hand-breaded and freshly prepared with our secret blend of 11 herbs and spices. Perfect for sharing (or keeping to yourself).",
    ingredients: ["Chicken", "Secret Spices", "Wheat Flour", "Vegetable Oil"],
    allergens: ["Gluten", "Soy", "Egg"],
  },
  {
    id: 2,
    name: "Party Pack 20pc",
    price: 555,
    cat: "bucket",
    img: "/images/menu-profile-2.png",
    desc: "Extra spicy bucket.",
    fullDesc:
      "A massive bucket of our spiciest, crunchiest fried chicken. Marinated in fiery chili sauce and double-breaded for maximum crunch. Warning: Not for the faint of heart.",
    ingredients: ["Chicken", "Spicy Chili Marinade", "Wheat Flour", "Garlic"],
    allergens: ["Gluten", "Soy"],
  },
  {
    id: 3,
    name: "Zabb Team Box",
    price: 149,
    cat: "bucket",
    img: "/images/menu-profile-3.png",
    desc: "Wingz Zabb + nuggets combo.",
    fullDesc:
      "The ultimate snack box. Featuring our signature spicy 'Zabb' chicken wings paired with golden, crispy chicken nuggets. The perfect combo for game night.",
    ingredients: [
      "Chicken Wings",
      "Chicken Breast",
      "Zabb Seasoning Powder",
      "Lime",
    ],
    allergens: ["Gluten", "Soy"],
  },
  {
    id: "p1",
    name: "Smile Bucket",
    price: 199,
    cat: "bucket",
    img: "/images/pro-1.png",
    desc: "Limited time smile bucket.",
    fullDesc:
      "Put a smile on your face with this limited-edition bucket. Includes a mix of crispy chicken pieces and special smiley-face potato bites.",
    ingredients: ["Chicken", "Potatoes", "Spices", "Smiles"],
    allergens: ["Gluten"],
  },
  {
    id: "t2",
    name: "Chick N' Share",
    price: 99,
    cat: "bucket",
    img: "/images/pro-3.png",
    desc: "Perfect for sharing.",
    fullDesc:
      "A generous serving of our bite-sized chicken pops. Crispy on the outside, juicy on the inside. Share it with a friend, if you can.",
    ingredients: ["Bite-sized Chicken", "Crispy Breading", "Salt", "Pepper"],
    allergens: ["Gluten"],
  },

  // --- SANDWICHES ---
  {
    id: 4,
    name: "Spicy Chicken Sandwich",
    price: 89,
    cat: "sandwich",
    img: "/images/menu-profile-4.png",
    desc: "Crispy, spicy, and juicy.",
    fullDesc:
      "A fiery, hand-breaded chicken breast fillet topped with spicy mayo and crisp pickles, all hugged by a toasted brioche bun.",
    ingredients: [
      "Spicy Chicken Breast",
      "Brioche Bun",
      "Spicy Mayo",
      "Pickles",
    ],
    allergens: ["Gluten", "Egg", "Dairy", "Soy"],
  },
  {
    id: 5,
    name: "Classic Sandwich",
    price: 69,
    cat: "sandwich",
    img: "/images/menu-profile-5.png",
    desc: "Original crispy chicken.",
    fullDesc:
      "The one that started it all. A premium white meat chicken breast, double-breaded for extra crunch, served with fresh lettuce and our signature house sauce.",
    ingredients: ["Chicken Breast", "Sesame Bun", "Lettuce", "House Sauce"],
    allergens: ["Gluten", "Egg", "Sesame"],
  },
  {
    id: 6,
    name: "Zinger Double",
    price: 199,
    cat: "sandwich",
    img: "/images/menu-profile-6.png",
    desc: "Double patty, double flavor.",
    fullDesc:
      "Two massive spicy Zinger chicken patties stacked high with melted cheddar cheese, bacon, and zesty sauce. You'll need both hands for this one.",
    ingredients: [
      "2x Zinger Patties",
      "Brioche Bun",
      "Cheddar Cheese",
      "Bacon",
      "Zesty Sauce",
    ],
    allergens: ["Gluten", "Dairy", "Egg", "Soy"],
  },
  {
    id: "n1",
    name: "Chickskate",
    price: 199,
    cat: "sandwich",
    img: "/images/pro-4.png",
    desc: "New street style sandwich.",
    fullDesc:
      "Our latest street-inspired creation. A massive crispy chicken cutlet extending way past the bun, topped with Korean Gochujang glaze and fresh slaw.",
    ingredients: [
      "Oversized Chicken Cutlet",
      "Brioche Bun",
      "Gochujang Glaze",
      "Cabbage Slaw",
    ],
    allergens: ["Gluten", "Egg", "Soy", "Sesame"],
  },

  // --- SIDES ---
  {
    id: 7,
    name: "Golden Fries (L)",
    price: 49,
    cat: "side",
    img: "/images/menu-profile-7.png",
    desc: "Golden crispy fries.",
    fullDesc:
      "Thick-cut premium potatoes, fried to a perfect golden crisp and lightly salted. The ultimate companion to any meal.",
    ingredients: ["Potatoes", "Vegetable Oil", "Sea Salt"],
    allergens: ["None"],
  },
  {
    id: 8,
    name: "Coleslaw",
    price: 39,
    cat: "side",
    img: "/images/menu-profile-8.png",
    desc: "Creamy classic slaw.",
    fullDesc:
      "Freshly chopped cabbage, carrots, and onions mixed in our signature sweet and tangy creamy dressing. A refreshing palate cleanser.",
    ingredients: ["Cabbage", "Carrots", "Onions", "Mayonnaise", "Vinegar"],
    allergens: ["Egg", "Soy"],
  },
  {
    id: 9,
    name: "Mac & Cheese",
    price: 49,
    cat: "side",
    img: "/images/menu-profile-9.png",
    desc: "Creamy, cheesey goodness.",
    fullDesc:
      "Comfort food at its finest. Tender elbow macaroni baked in a rich, gooey blend of cheddar and parmesan cheese.",
    ingredients: [
      "Macaroni Pasta",
      "Cheddar Cheese",
      "Parmesan",
      "Milk",
      "Butter",
    ],
    allergens: ["Gluten", "Dairy"],
    soldOut: true,
  },
  {
    id: 12,
    name: "Tteokbokki",
    price: 89,
    cat: "side",
    img: "/images/menu-tteokbokki.png",
    desc: "Spicy Korean rice cakes.",
    fullDesc:
      "Chewy Korean rice cakes and fish cakes simmered in a sweet and fiery Gochujang chili sauce. A trendy and addictive street food side.",
    ingredients: [
      "Rice Cakes",
      "Fish Cakes",
      "Gochujang Sauce",
      "Green Onions",
    ],
    allergens: ["Gluten", "Soy", "Fish"],
  },
  {
    id: 13,
    name: "Seafood Pajeon",
    price: 99,
    cat: "side",
    img: "/images/menu-pajeon.png",
    desc: "Korean savory pancake.",
    fullDesc:
      "A traditional Korean savory pancake packed with fresh scallions, shrimp, and squid, fried until perfectly crispy on the edges.",
    ingredients: [
      "Wheat Flour",
      "Scallions",
      "Shrimp",
      "Squid",
      "Soy Sauce Dip",
    ],
    allergens: ["Gluten", "Shellfish", "Soy"],
  },
  {
    id: 14,
    name: "Japchae",
    price: 79,
    cat: "side",
    img: "/images/menu-japchae.png",
    desc: "Stir-fried glass noodles.",
    fullDesc:
      "Sweet potato glass noodles stir-fried with spinach, carrots, mushrooms, and a savory-sweet soy garlic sauce.",
    ingredients: [
      "Glass Noodles",
      "Spinach",
      "Carrots",
      "Mushrooms",
      "Soy Sauce",
      "Sesame Oil",
    ],
    allergens: ["Soy", "Sesame"],
  },
  {
    id: 15,
    name: "Snack Udon",
    price: 59,
    cat: "side",
    img: "/images/menu-udon.png",
    desc: "Light and savory broth.",
    fullDesc:
      "A small, comforting bowl of thick udon noodles served in a light soy and dashi broth, topped with tempura flakes and scallions.",
    ingredients: [
      "Udon Noodles",
      "Dashi Broth",
      "Soy Sauce",
      "Tempura Flakes",
      "Scallions",
    ],
    allergens: ["Gluten", "Soy", "Fish"],
  },

  // --- DESSERTS ---
  {
    id: 10,
    name: "Chocolate Cupcake",
    price: 45,
    cat: "desserts",
    img: "/images/menu-profile-10.png",
    desc: "Rich chocolate treat.",
    fullDesc:
      "A deeply rich and moist chocolate cupcake topped with a swirl of velvety dark chocolate buttercream. For the serious sweet tooth.",
    ingredients: ["Cocoa Powder", "Wheat Flour", "Sugar", "Butter", "Eggs"],
    allergens: ["Gluten", "Dairy", "Egg"],
  },
  {
    id: 11,
    name: "Soft serve",
    price: 39,
    cat: "desserts",
    img: "/images/menu-profile-11.png",
    desc: "Vanilla swirl.",
    fullDesc:
      "Classic, creamy vanilla soft serve ice cream served in a crispy wafer cone. Simple, cool, and perfectly sweet.",
    ingredients: ["Milk", "Cream", "Sugar", "Vanilla Extract", "Wafer Cone"],
    allergens: ["Dairy", "Gluten"],
  },

  // --- DRINKS ---
  {
    id: 16,
    name: "Coca-Cola",
    price: 39,
    cat: "drink",
    img: "/images/menu-cola.png",
    desc: "Ice cold refreshment.",
    fullDesc:
      "The classic, crisp, and refreshing taste of Coca-Cola, served ice cold to perfectly complement your fried chicken.",
    ingredients: [
      "Carbonated Water",
      "High Fructose Corn Syrup",
      "Caramel Color",
      "Caffeine",
    ],
    allergens: ["None"],
  },
  {
    id: 17,
    name: "Chocolate Float",
    price: 65,
    cat: "drink",
    img: "/images/menu-float.png",
    desc: "Choco blend with vanilla top.",
    fullDesc:
      "A decadent icy chocolate blend, topped generously with a swirl of our signature vanilla soft serve. It's a drink and a dessert all in one.",
    ingredients: ["Chocolate Syrup", "Milk", "Ice", "Vanilla Soft Serve"],
    allergens: ["Dairy"],
  },
  {
    id: 18,
    name: "Soju (Original)",
    price: 150,
    cat: "drink",
    img: "/images/menu-soju.png",
    desc: "Classic Korean spirit.",
    fullDesc:
      "A bottle of Korea's most popular clear spirit. Clean, neutral taste that pairs incredibly well with spicy and fried foods. Must be 20+ to order.",
    ingredients: ["Water", "Rice", "Tapioca", "Ethanol"],
    allergens: ["None"],
  },
  {
    id: 19,
    name: "Makgeolli",
    price: 180,
    cat: "drink",
    img: "/images/menu-makgeolli.png",
    desc: "Korean rice wine.",
    fullDesc:
      "A traditional unfiltered Korean rice wine. Milky, slightly sweet, and lightly sparkling. The perfect pairing for our Seafood Pajeon. Must be 20+ to order.",
    ingredients: ["Water", "Rice", "Nuruk (Fermentation Starter)"],
    allergens: ["Wheat (from Nuruk)"],
  },
];
