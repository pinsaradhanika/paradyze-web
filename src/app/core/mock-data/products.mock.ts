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
    description: 'A feminine skirt with tropical elegance.',
    fabric: 'Rayon blend'
  }
];