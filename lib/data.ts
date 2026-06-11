export type Category = {
  slug: string
  name: string
  description: string
  image: string
}

export type Product = {
  slug: string
  name: string
  category: string
  description: string
  price: number
  oldPrice?: number
  image: string
  badge?: string
  rating: number
}

export const categories: Category[] = [
  {
    slug: "turkish",
    name: "قهوة تركي",
    description: "نكهة أصيلة محمّصة بعناية",
    image: "/images/cat-turkish.png",
  },
  {
    slug: "espresso",
    name: "إسبريسو",
    description: "قوام غني وكريمة ذهبية",
    image: "/images/cat-espresso.png",
  },
  {
    slug: "cappuccino",
    name: "كابتشينو",
    description: "رغوة حريرية ناعمة",
    image: "/images/cat-cappuccino.png",
  },
  {
    slug: "flavored",
    name: "نكهات مميزة",
    description: "لمسات من البندق والكراميل",
    image: "/images/cat-flavor.png",
  },
  {
    slug: "easy",
    name: "قهوة سريعة",
    description: "متعة لحظية في كل كوب",
    image: "/images/cat-easy.png",
  },
  {
    slug: "mix",
    name: "خلطات خاصة",
    description: "تركيبات لاين الحصرية",
    image: "/images/cat-mix.png",
  },
  {
    slug: "cappuccino-art",
    name: "لاتيه آرت",
    description: "فن في كل فنجان",
    image: "/images/cat-cappuccino.png",
  },
  {
    slug: "hotchoc",
    name: "هوت شوكلت",
    description: "دفء الشوكولاتة الفاخرة",
    image: "/images/cat-hotchoc.png",
  },
]

export const products: Product[] = [
  {
    slug: "turkish-premium",
    name: "تركي لاين الفاخر",
    category: "قهوة تركي",
    description: "حبوب عربية مختارة محمّصة على الطريقة التقليدية لنكهة عميقة وعطر آسر.",
    price: 240,
    oldPrice: 290,
    image: "/images/product-turkish.png",
    badge: "الأكثر مبيعاً",
    rating: 5,
  },
  {
    slug: "espresso-signature",
    name: "إسبريسو سيجنتشر",
    category: "إسبريسو",
    description: "خلطة غنية بكريمة ذهبية كثيفة وتوازن مثالي بين القوة والنعومة.",
    price: 320,
    image: "/images/product-espresso.png",
    badge: "جديد",
    rating: 5,
  },
  {
    slug: "cappuccino-classic",
    name: "كابتشينو كلاسيك",
    category: "كابتشينو",
    description: "خليط ناعم يمنحك رغوة حريرية ومذاقاً متوازناً في كل كوب.",
    price: 210,
    oldPrice: 250,
    image: "/images/product-cappuccino.png",
    rating: 4,
  },
  {
    slug: "flavored-hazelnut",
    name: "قهوة بنكهة البندق",
    category: "نكهات مميزة",
    description: "لمسة دافئة من البندق المحمّص تضيف بُعداً فاخراً لفنجانك.",
    price: 275,
    image: "/images/product-flavor.png",
    badge: "مميز",
    rating: 5,
  },
]

export const features = [
  {
    title: "حبوب مختارة",
    description: "ننتقي أجود المحاصيل من أفضل المزارع حول العالم.",
  },
  {
    title: "تحميص يومي",
    description: "نحمّص كل دفعة بإتقان لنضمن وصول أنقى نكهة إليك.",
  },
  {
    title: "توصيل سريع",
    description: "نوصّل طلبك بعناية إلى باب منزلك في أسرع وقت.",
  },
  {
    title: "جودة مضمونة",
    description: "رضاك أولويتنا، ونضمن لك تجربة قهوة لا تُنسى.",
  },
]

export const stats = [
  { value: 15, suffix: "+", label: "سنة خبرة" },
  { value: 50, suffix: "K+", label: "عميل سعيد" },
  { value: 40, suffix: "+", label: "نوع قهوة" },
]
