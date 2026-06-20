import { Product } from '../models/product.model';

export const products: Product[] = [
  {
    id: 'athena-strap-top',
    name: 'Athena Strap Top',
    price: 4900,
    image: '/assets/images/p1.jpg',
    category: 'Tops',
    colors: ['Blue', 'White'],
    sizes: ['XS', 'S', 'M', 'L'],
    isNew: true,
    isBest: true,
    description: 'A soft tropical strap top designed for warm days.',
    fabric: 'Cotton linen blend'
  },
  {
    id: 'paisley-skirt',
    name: 'Paisley Skirt',
    price: 6500,
    image: '/assets/images/p2.jpg',
    category: 'Skirts',
    colors: ['Sage'],
    sizes: ['S', 'M', 'L'],
    isNew: true,
    isBest: true,
    description: 'A feminine skirt with tropical elegance.',
    fabric: 'Rayon blend'
  },
  {
    id: 'linen-wide-leg-trouser',
    name: 'Linen Wide-Leg Trouser',
    price: 7200,
    image: '/assets/images/p3.jpg',
    category: 'Trousers',
    colors: ['Beige'],
    sizes: ['S', 'M', 'L'],
    isNew: true,
    isBest: false,
    description: 'Relaxed wide-leg trousers with a refined linen finish.',
    fabric: 'Linen blend'
  },
  {
    id: 'tropical-midi-dress',
    name: 'Tropical Midi Dress',
    price: 8500,
    image: '/assets/images/p4.jpg',
    category: 'Dresses',
    colors: ['Sand'],
    sizes: ['XS', 'S', 'M', 'L'],
    isNew: true,
    isBest: true,
    description: 'A timeless midi dress made for warm days and soft evenings.',
    fabric: 'Rayon blend'
  },
  {
    id: 'island-crop-top',
    name: 'Island Crop Top',
    price: 3900,
    image: '/assets/images/p5.jpg',
    category: 'Tops',
    colors: ['Ivory'],
    sizes: ['XS', 'S', 'M'],
    isNew: false,
    isBest: true,
    description: 'An easy everyday crop top with a clean silhouette.',
    fabric: 'Cotton'
  },
  {
    id: 'paradyze-wrap-skirt',
    name: 'Paradyze Wrap Skirt',
    price: 5900,
    image: '/assets/images/p6.jpg',
    category: 'Skirts',
    colors: ['Green'],
    sizes: ['S', 'M', 'L'],
    isNew: false,
    isBest: true,
    description: 'A soft wrap skirt inspired by tropical movement.',
    fabric: 'Cotton rayon blend'
  },
  {
    id: 'linen-resort-shirt',
    name: 'Linen Resort Shirt',
    price: 5400,
    image: '/assets/images/p7.jpg',
    category: 'Shirts',
    colors: ['White'],
    sizes: ['S', 'M', 'L'],
    isNew: false,
    isBest: false,
    description: 'A relaxed resort shirt designed for effortless styling.',
    fabric: 'Linen'
  },
  {
    id: 'summer-strap-dress',
    name: 'Summer Strap Dress',
    price: 7900,
    image: '/assets/images/p8.jpg',
    category: 'Dresses',
    colors: ['Blue'],
    sizes: ['XS', 'S', 'M', 'L'],
    isNew: false,
    isBest: true,
    description: 'A feminine strap dress made for tropical evenings.',
    fabric: 'Rayon'
  }
];