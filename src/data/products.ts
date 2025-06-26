import { Product } from '../types/product';
import { getProductImageUrl } from '../utils/assetUtils';

// Image paths - using the asset utility for consistent paths
const images = {
  biotin: getProductImageUrl('21stcentury-biotin.png'),
  omega3: getProductImageUrl('boldfit-omega3.png'),
  teatreeFacewash: getProductImageUrl('teatree-facewash.png'),
  aloeVeraGel: getProductImageUrl('kapiva-aleovera-gel.png'),
  multivitamin: getProductImageUrl('hk-vitals-multivitamin.png'),
  vitaminD3: getProductImageUrl('hkvitals-vitamind3.png'),
  zinc: getProductImageUrl('hkvitals-zinc.png'),
  cetaphil: getProductImageUrl('cetaphil-moisturising-cream.png'),
  boroplus: getProductImageUrl('boroplus-antiseptic-cream.png'),
  sunscreen: getProductImageUrl('lotus-sunscreen.png'),
  mouthwash: getProductImageUrl('mouthwash.png'),
  bodywash: getProductImageUrl('omorfee-bodywash.png')
};

const now = new Date().toISOString();

const createProduct = (product: Omit<Product, 'image' | 'inStock' | 'minOrderQuantity' | 'rating' | 'numReviews' | 'orderIncrement'> & {
  image_url: string;
  in_stock: boolean;
  min_order_quantity?: number;
  created_at?: string;
  updated_at?: string;
}): Product & { orderIncrement: number } => ({
  ...product,
  image: product.image_url,
  inStock: product.in_stock,
  // Set minimum order quantity to 20 if not specified
  minOrderQuantity: 20,
  // Add order increment property (10 units)
  orderIncrement: 10,
  rating: 0,
  numReviews: 0,
});

export const products: Product[] = [
  createProduct({
    id: '1',
    name: '21st Century Biotine',
    description: 'High-potency biotin supplement for healthy hair, skin, and nails',
    price: 800,
    image_url: images.biotin,
    category: 'vitamins',
    benefits: [
      'Promotes healthy hair growth and reduces breakage',
      'Strengthens nails and prevents brittleness',
      'Supports skin health and hydration'
    ],
    ingredients: ['Biotin (as d-Biotin)', 'Calcium Carbonate', 'Microcrystalline Cellulose'],
    in_stock: true,
    featured: true,
    min_order_quantity: 20,
    certifications: ['WHO-GMP', 'ISO 9001'],
    created_at: now,
    updated_at: now
  }),
  createProduct({
    id: '2',
    name: 'Boldfit Omega 3',
    description: 'High-purity fish oil with EPA and DHA for heart and brain health',
    price: 600,
    image_url: images.omega3,
    category: 'supplements',
    benefits: [
      'Supports cardiovascular health and circulation',
      'Promotes brain function and cognitive performance',
      'Helps maintain healthy joints and flexibility'
    ],
    ingredients: ['Fish Oil', 'Gelatin', 'Glycerin', 'Purified Water'],
    in_stock: true,
    featured: true,
    min_order_quantity: 20,
    certifications: ['WHO-GMP', 'ISO 9001'],
    created_at: now,
    updated_at: now
  }),
  createProduct({
    id: '3',
    name: "Boroplus Antiseptic Cream",
    description: 'Antiseptic cream for minor cuts, burns and skin infections',
    price: 120,
    image_url: images.boroplus,
    category: 'personal-care',
    benefits: [
      'Prevents infection in minor cuts and burns',
      'Soothes skin irritation and itching',
      'Promotes faster healing'
    ],
    ingredients: ['Cetrimide', 'Chlorhexidine Gluconate', 'Liquid Paraffin', 'White Soft Paraffin'],
    in_stock: true,
    featured: false,
    min_order_quantity: 20,
    certifications: ['ISO Certified', 'GMP Certified'],
    created_at: now,
    updated_at: now
  }),
  createProduct({
    id: '4',
    name: 'Cetaphil Moisturising Cream',
    description: 'Rich, non-greasy moisturizer for dry, sensitive skin',
    price: 550,
    image_url: images.cetaphil,
    category: 'skincare',
    benefits: [
      'Intensely hydrates dry skin',
      'Non-comedogenic and fragrance-free',
      'Suitable for sensitive skin types',
      'Provides 24-hour hydration'
    ],
    ingredients: ['Water', 'Glycerin', 'Petrolatum', 'Cetearyl Alcohol'],
    in_stock: true,
    featured: true,
    min_order_quantity: 20,
    certifications: ['Dermatologist Recommended', 'Hypoallergenic'],
    created_at: now,
    updated_at: now
  }),
  createProduct({
    id: '5',
    name: 'HK Vitals Multivitamin with Zinc & Vitamin C',
    description: 'Complete daily multivitamin with zinc and vitamin C for overall health and wellness',
    price: 1599,
    image_url: images.multivitamin,
    category: 'vitamins',
    benefits: [
      'Comprehensive blend of essential vitamins and minerals',
      'Supports immune system function',
      'Boosts energy and vitality',
      'Promotes overall health and wellbeing'
    ],
    ingredients: ['Vitamin A', 'Vitamin C', 'Vitamin D3', 'Vitamin E', 'B Vitamins', 'Zinc', 'Selenium', 'Magnesium'],
    in_stock: true,
    featured: true,
    min_order_quantity: 20,
    certifications: ['WHO-GMP Certified', 'Vegan', 'Gluten Free'],
    created_at: now,
    updated_at: now
  }),
  createProduct({
    id: '6',
    name: 'HK Vitals Vitamin D3',
    description: 'High-potency vitamin D3 supplement for bone and immune health',
    price: 599,
    image_url: images.vitaminD3,
    category: 'vitamins',
    benefits: [
      'Supports bone health and calcium absorption',
      'Enhances immune system function',
      'Promotes muscle strength',
      'May help improve mood'
    ],
    ingredients: ['Cholecalciferol (Vitamin D3)', 'Medium Chain Triglycerides', 'Sunflower Oil'],
    in_stock: true,
    featured: false,
    min_order_quantity: 20,
    certifications: ['WHO-GMP Certified', 'Vegetarian'],
    created_at: now,
    updated_at: now
  }),
  createProduct({
    id: '7',
    name: 'HK Vitals Zinc',
    description: 'Essential mineral supplement for immune support and metabolism',
    price: 499,
    image_url: images.zinc,
    category: 'supplements',
    benefits: [
      'Supports immune system function',
      'Essential for wound healing',
      'Promotes healthy skin',
      'Supports normal growth and development'
    ],
    ingredients: ['Zinc Citrate', 'Microcrystalline Cellulose', 'Magnesium Stearate'],
    in_stock: true,
    featured: false,
    min_order_quantity: 20,
    certifications: ['WHO-GMP Certified', 'Vegan', 'Gluten Free'],
    created_at: now,
    updated_at: now
  }),
  createProduct({
    id: '8',
    name: 'Kapiva Aleovera Gel',
    description: 'Pure and natural aloe vera gel for soothing and hydrating skin',
    price: 299,
    image_url: images.aloeVeraGel,
    category: 'skincare',
    benefits: [
      'Deeply hydrates and soothes dry skin',
      'Cools and calms sunburns and irritation',
      'Non-greasy formula absorbs quickly'
    ],
    ingredients: ['Aloe Barbadensis Leaf Extract', 'Glycerin', 'Carbomer', 'Phenoxyethanol'],
    in_stock: true,
    featured: true,
    min_order_quantity: 20,
    certifications: ['100% Pure Aloe', 'No Artificial Colors'],
    created_at: now,
    updated_at: now
  }),
  createProduct({
    id: '9',
    name: 'Lotus Sunscreen',
    description: 'Broad spectrum SPF 50+ sunscreen for face and body',
    price: 450,
    image_url: images.sunscreen,
    category: 'skincare',
    benefits: [
      'Provides broad spectrum UVA/UVB protection',
      'Water-resistant formula',
      'Lightweight and non-greasy',
      'Suitable for all skin types'
    ],
    ingredients: ['Zinc Oxide', 'Octinoxate', 'Octisalate', 'Avobenzone'],
    in_stock: true,
    featured: true,
    min_order_quantity: 20,
    certifications: ['Dermatologically Tested', 'Non-Comedogenic'],
    created_at: now,
    updated_at: now
  }),
  createProduct({
    id: '10',
    name: 'The Mouth Company Mouthwash',
    description: 'Alcohol-free mouthwash for fresh breath and oral hygiene',
    price: 350,
    image_url: images.mouthwash,
    category: 'personal-care',
    benefits: [
      'Kills 99.9% of germs that cause bad breath',
      'Alcohol-free formula doesn\'t burn',
      'Helps prevent cavities and plaque',
      'Freshens breath for hours'
    ],
    ingredients: ['Cetylpyridinium Chloride', 'Sodium Fluoride', 'Sorbitol', 'Xylitol'],
    in_stock: true,
    featured: false,
    min_order_quantity: 20,
    certifications: ['ADA Accepted', 'Dentist Recommended'],
    created_at: now,
    updated_at: now
  }),
  createProduct({
    id: '11',
    name: 'Omorfee Bodywash',
    description: 'Natural body wash with essential oils for nourished skin',
    price: 399,
    image_url: images.bodywash,
    category: 'personal-care',
    benefits: [
      'Gently cleanses without stripping natural oils',
      'Contains nourishing essential oils',
      'Suitable for daily use',
      'Free from parabens and sulfates'
    ],
    ingredients: ['Aloe Vera', 'Coconut Oil', 'Jojoba Oil', 'Vitamin E'],
    in_stock: true,
    featured: true,
    min_order_quantity: 20,
    certifications: ['Natural Ingredients', 'Cruelty Free'],
    created_at: now,
    updated_at: now
  }),
  createProduct({
    id: '12',
    name: 'St D\'vence Tea Tree Face Wash',
    description: 'Purifying face wash with tea tree oil for clear skin',
    price: 349,
    image_url: images.teatreeFacewash,
    category: 'skincare',
    benefits: [
      'Helps control excess oil and shine',
      'Reduces acne and breakouts',
      'Soothes irritated skin',
      'Leaves skin feeling fresh and clean'
    ],
    ingredients: ['Tea Tree Oil', 'Aloe Vera', 'Witch Hazel', 'Niacinamide'],
    in_stock: true,
    featured: true,
    min_order_quantity: 20,
    certifications: ['Dermatologically Tested', 'Vegan'],
    created_at: now,
    updated_at: now
  })
];