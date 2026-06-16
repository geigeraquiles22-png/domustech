const PRODUCTS_DATA = [
  {
    id: 1,
    name: "Aire Acondicionado Split 3000 frigorias",
    description: "Equipo split frio/calor con tecnologia inverter, bajo consumo y control remoto. Ideal para ambientes de hasta 20m2. Incluye kit de instalacion basico. Eficiencia energetica clase A.",
    price: 850000,
    category: "Climatizacion",
    image: "https://images.unsplash.com/photo-1631545806609-26f2c0a4d5b8?w=600&auto=format&fit=crop&q=80",
    images: [],
    featured: true,
    inStock: true,
    tag: "Destacado"
  },
  {
    id: 2,
    name: "Termo Acero Inoxidable 1 Litro",
    description: "Termo de acero inoxidable con doble pared y aislamiento al vacio. Mantiene la temperatura hasta 12 horas. Tapa cebadora, ideal para mate. Libre de BPA.",
    price: 18500,
    category: "Cocina",
    image: "https://images.unsplash.com/photo-1577937927133-66ef06acdf18?w=600&auto=format&fit=crop&q=80",
    images: [],
    featured: true,
    inStock: true,
    tag: "Nuevo"
  },
  {
    id: 3,
    name: "Heladera No Frost 300L",
    description: "Heladera con freezer superior, sistema No Frost, cajones amplios y estantes regulables. Bajo consumo energetico. Capacidad total 300 litros. Color acero.",
    price: 920000,
    category: "Electrodomesticos",
    image: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=600&auto=format&fit=crop&q=80",
    images: [],
    featured: true,
    inStock: true,
    tag: "Premium"
  },
  {
    id: 4,
    name: "Cafetera Express Automatica",
    description: "Cafetera express con bomba de 15 bares, espumador de leche y deposito de agua extraible. Prepara cafe de calidad en casa. Apta para cafe molido y monodosis.",
    price: 145000,
    category: "Cocina",
    image: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=600&auto=format&fit=crop&q=80",
    images: [],
    featured: false,
    inStock: true,
    tag: ""
  },
  {
    id: 5,
    name: "Ventilador de Pie 20 pulgadas",
    description: "Ventilador de pie con 3 velocidades, altura regulable y cabezal oscilante. Aspas de alto flujo de aire. Silencioso y de bajo consumo. Ideal para ambientes grandes.",
    price: 42000,
    category: "Climatizacion",
    image: "https://images.unsplash.com/photo-1565374395542-0ce18882c857?w=600&auto=format&fit=crop&q=80",
    images: [],
    featured: false,
    inStock: true,
    tag: ""
  },
  {
    id: 6,
    name: "Juego de Ollas Antiadherentes x5",
    description: "Set de 5 ollas de aluminio con recubrimiento antiadherente y mangos ergonomicos que no transmiten calor. Aptas para todo tipo de cocinas, incluida induccion. Incluye tapas de vidrio templado.",
    price: 68000,
    category: "Cocina",
    image: "https://images.unsplash.com/photo-1584990347449-a2d4c2c9b3f3?w=600&auto=format&fit=crop&q=80",
    images: [],
    featured: true,
    inStock: true,
    tag: "Oferta"
  },
  {
    id: 7,
    name: "Microondas Digital 23L",
    description: "Horno microondas con display digital, 10 niveles de potencia y funciones automaticas de descongelado y recalentado. Capacidad 23 litros. Facil de limpiar.",
    price: 135000,
    category: "Electrodomesticos",
    image: "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=600&auto=format&fit=crop&q=80",
    images: [],
    featured: false,
    inStock: false,
    tag: "Sin Stock"
  },
  {
    id: 8,
    name: "Aspiradora Robot Inteligente",
    description: "Robot aspirador con sensores de obstaculos, programacion por horarios y control desde app. Bateria de larga duracion y base de carga automatica. Ideal para mantener los pisos siempre limpios.",
    price: 210000,
    category: "Electrodomesticos",
    image: "https://images.unsplash.com/photo-1603618386394-87d6d3a0d4a5?w=600&auto=format&fit=crop&q=80",
    images: [],
    featured: false,
    inStock: true,
    tag: ""
  }
];

// Exportar para que sea accesible tanto de forma global como modulo
if (typeof module !== 'undefined' && module.exports) {
  module.exports = PRODUCTS_DATA;
} else {
  window.PRODUCTS_DATA = PRODUCTS_DATA;
}
