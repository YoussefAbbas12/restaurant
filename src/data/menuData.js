const img = (file) => `${import.meta.env.BASE_URL}images/${file}`;
const menuData = {
  Appetizers: [
    {
      name: "Hummus with Black Truffle",
      desc: "Chickpea pur\xE9e, tahini, shaved black truffle, pine nuts",
      price: "$22",
      img: img("appetizer-hummus.png")
    },
    {
      name: "Smoked Baba Ghanoush",
      desc: "Charred eggplant, pomegranate molasses, walnuts",
      price: "$18",
      img: img("appetizer-baba.png")
    },
    {
      name: "Waraq Enab Royale",
      desc: "Vine leaves stuffed with wagyu beef and minted rice",
      price: "$26",
      img: img("appetizer-waraq.png")
    },
    {
      name: "Crispy Spiced Calamari",
      desc: "Alexandrian spice blend, saffron aioli",
      price: "$24",
      img: img("appetizer-calamari.png")
    }
  ],
  Mains: [
    {
      name: "Koshary Royal",
      desc: "Beluga lentils, crispy shallots, spiced tomato reduction",
      price: "$45",
      img: img("koshary.png")
    },
    {
      name: "Fattah El Sha'er",
      desc: "Slow-braised lamb shank, saffron rice, garlic yogurt",
      price: "$65",
      img: img("fattah.png")
    },
    {
      name: "Stuffed Pigeon (Hamam Mahshi)",
      desc: "Freekeh wheat, cinnamon, clarified butter glaze",
      price: "$55",
      img: img("main-pigeon.png")
    },
    {
      name: "Alexandrian Sea Bass",
      desc: "Line-caught bass, spicy tomato and bell pepper sauce",
      price: "$58",
      img: img("main-seabass.png")
    },
    {
      name: "Hawawshi Wellington",
      desc: "Spiced minced wagyu beef baked in flaky pastry",
      price: "$62",
      img: img("main-hawawshi.png")
    },
    {
      name: "Macaroni B\xE9chamel",
      desc: "Layered pasta, spiced ground meat, rich nutmeg b\xE9chamel",
      price: "$42",
      img: img("main-macaroni.png")
    }
  ],
  Desserts: [
    {
      name: "Umm Ali Supreme",
      desc: "Croissant pudding, clotted cream, pistachios, rose water",
      price: "$28",
      img: img("umm-ali.png")
    },
    {
      name: "Basbousa with Qishta",
      desc: "Semolina cake, orange blossom syrup, fresh clotted cream",
      price: "$22",
      img: img("dessert-basbousa.png")
    },
    {
      name: "Kunafa Rolls",
      desc: "Crispy phyllo threads, sweetened ricotta, honey",
      price: "$24",
      img: img("dessert-kunafa.png")
    }
  ],
  Beverages: [
    {
      name: "Royal Karkadeh",
      desc: "Chilled hibiscus tea with orange blossom",
      price: "$12",
      img: img("beverage-karkadeh.png")
    },
    {
      name: "Egyptian Turkish Coffee",
      desc: "Cardamom infused, sand-brewed",
      price: "$14",
      img: img("beverage-coffee.png")
    },
    {
      name: "The Sphinx Cocktail",
      desc: "Fig-infused rum, date syrup, lemon, bitters",
      price: "$22",
      img: img("beverage-cocktail.png")
    }
  ]
};
const featuredDishes = [
  {
    id: 1,
    name: "Koshary Royal",
    desc: "Egyptian street food elevated. Beluga lentils, crispy shallots, spiced tomato reduction.",
    price: "$45",
    img: img("koshary.png")
  },
  {
    id: 2,
    name: "Fattah El Sha'er",
    desc: "Slow-braised lamb shank, saffron-infused rice, toasted artisan bread, garlic yogurt.",
    price: "$65",
    img: img("fattah.png")
  },
  {
    id: 3,
    name: "Molokheya Royale",
    desc: "Silky jute leaf soup with rabbit essence, roasted garlic coriander taqliya.",
    price: "$38",
    img: img("molokheya.png")
  },
  {
    id: 4,
    name: "Umm Ali Supreme",
    desc: "Warm croissant pudding, clotted cream, Iranian pistachios, rose water flamb\xE9.",
    price: "$28",
    img: img("umm-ali.png")
  }
];
export {
  featuredDishes,
  menuData
};
