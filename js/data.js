const products = [
  {
    id: 1,
    name: "آيفون 13 مستعمل",
    price: 15000,
    category: "إلكترونيات",
    description: "حالة ممتازة، بطارية 90%، مع الكرتونة والشاحن الأصلي.",
    image: "https://images.unsplash.com/photo-1632661674596-df8be070a5c5?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 2,
    name: "طقم كنب غرفة معيشة",
    price: 5000,
    category: "أثاث",
    description: "طقم كنب 3 قطع، لون رمادي، نظيف جداً.",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 3,
    name: "دراجة هوائية جبلية",
    price: 2500,
    category: "رياضة",
    description: "دراجة هجينة مناسبة للطرق الوعرة، فرامل ديسك.",
    image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 4,
    name: "ساعة يد ذكية",
    price: 800,
    category: "إلكترونيات",
    description: "ساعة شاومي، مستخدمة شهر واحد فقط.",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=400"
  }
];

window.appData = {
  products: products,
  categories: ["الكل", "إلكترونيات", "أثاث", "رياضة", "ملابس"]
};
