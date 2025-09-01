import type { Cafe } from '../models/cafe.ts'
import type { Category } from '../models/Category.ts'
import type { PopularProduct } from '../models/PopularProduct.ts'



export const Cafes: Cafe[] = [
  {
    id: 1,
    name: "Café Aurora",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2847&auto=format&fit=crop",
    rating: 4.8,
    deliveryTime: "20-30 min",
    distance: "1.2 km",
    tags: ["Café especial", "Brunch", "Orgânico"]
  },
  {
    id: 2,
    name: "Padaria Bella",
    image: "https://images.unsplash.com/photo-1517433367423-c7e5b0f35086?q=80&w=2580&auto=format&fit=crop",
    rating: 4.6,
    deliveryTime: "25-35 min",
    distance: "1.8 km",
    tags: ["Pães artesanais", "Doces", "Café"]
  },
  {
    id: 3,
    name: "Grão & Cia",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2940&auto=format&fit=crop",
    rating: 4.7,
    deliveryTime: "15-25 min",
    distance: "0.9 km",
    tags: ["Café gourmet", "Sanduíches", "Vegano"]
  },
  {
    id: 4,
    name: "Confeitaria Doce Lar",
    image: "https://images.unsplash.com/photo-1574085733277-851d9d856a3a?q=80&w=2940&auto=format&fit=crop",
    rating: 4.9,
    deliveryTime: "25-40 min",
    distance: "2.3 km",
    tags: ["Bolos", "Tortas", "Sobremesas"]
  },
  {
    id: 5,
    name: "Café do Centro",
    image: "https://images.unsplash.com/photo-1515215316771-2742baa337f4?q=80&w=2748&auto=format&fit=crop",
    rating: 4.5,
    deliveryTime: "20-30 min",
    distance: "1.5 km",
    tags: ["Cafeteria", "Almoço", "Lanches"]
  },
  {
    id: 6,
    name: "Pão & Prosa",
    image: "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=2940&auto=format&fit=crop",
    rating: 4.7,
    deliveryTime: "15-25 min",
    distance: "1.1 km",
    tags: ["Padaria", "Café da manhã", "Pães"]
  }
];

export const popularProducts: PopularProduct[] = [
  {
    id: 1,
    name: "Café Especial",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=2873&auto=format&fit=crop",
    price: 9.90,
    description: "Blend especial de grãos selecionados com notas de chocolate e caramelo."
  },
  {
    id: 2,
    name: "Croissant Tradicional",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=2726&auto=format&fit=crop",
    price: 8.50,
    description: "Croissant tradicional francês feito com manteiga de primeira qualidade."
  },
  {
    id: 3,
    name: "Pão de Queijo",
    image: "https://images.unsplash.com/photo-1627308595136-f8ea7f62c35d?q=80&w=2835&auto=format&fit=crop",
    price: 6.90,
    description: "Pão de queijo mineiro tradicional, quentinho e macio."
  },
  {
    id: 4,
    name: "Bolo de Cenoura",
    image: "https://images.unsplash.com/photo-1605291981739-e2443862b1b6?q=80&w=2940&auto=format&fit=crop",
    price: 12.90,
    description: "Bolo caseiro de cenoura com cobertura de chocolate meio amargo."
  }
];

export const categories: Category[] = [
  {
    icon: "☕",
    name: "Cafés",
    count: 42,
    color: "#8B5A2B"
  },
  {
    icon: "🥐",
    name: "Pães",
    count: 28,
    color: "#D2691E"
  },
  {
    icon: "🧁",
    name: "Doces",
    count: 36,
    color: "#FF69B4"
  },
  {
    icon: "🥪",
    name: "Sanduíches",
    count: 24,
    color: "#228B22"
  },
  {
    icon: "🍰",
    name: "Bolos",
    count: 18,
    color: "#9932CC"
  },
  {
    icon: "🥗",
    name: "Saudáveis",
    count: 15,
    color: "#20B2AA"
  }
];