import { Product } from '../types/product';
import { getImageUrl } from '../utils/imageUtils';

const now = new Date().toISOString();

const createProduct = (product: Omit<Product, 'image' | 'inStock' | 'minOrderQuantity'> & {
  image_url: string;
  in_stock: boolean;
  min_order_quantity: number;
  created_at?: string;
  updated_at?: string;
}): Product => ({
  ...product,
  image: product.image_url,
  inStock: product.in_stock,
  minOrderQuantity: product.min_order_quantity,
});

export const products: Product[] = [
  createProduct({
    id: '1',
    name: '21st Century Biotine',
    description: 'High-potency biotin supplement for healthy hair, skin, and nails',
    price: 800,
    image_url: getImageUrl('21stcentury-biotin.png'),
    category: 'vitamins',
    tags: ['hair-health', 'skin-care', 'nail-strength'],
    benefits: [
      'Promotes healthy hair growth and reduces breakage',
      'Strengthens nails and prevents brittleness',
      'Supports skin health and hydration'
    ],
    ingredients: ['Biotin (as d-Biotin)', 'Calcium Carbonate', 'Microcrystalline Cellulose'],
    in_stock: true,
    featured: true,
    min_order_quantity: 1,
    certifications: ['WHO-GMP', 'ISO 9001'],
    created_at: now,
    updated_at: now
  }),
  createProduct({
    id: '2',
    name: 'Boldfit Omega 3 Fish Oil',
    description: 'High-purity fish oil with EPA and DHA for heart and brain health',
    price: 600,
    image_url: getImageUrl('boldfit-omega3.png'),
    category: 'supplements',
    tags: ['heart-health', 'brain-function', 'joint-support'],
    benefits: [
      'Supports cardiovascular health and circulation',
      'Promotes brain function and cognitive performance',
      'Helps maintain healthy joints and flexibility'
    ],
    ingredients: ['Fish Oil', 'Gelatin', 'Glycerin', 'Purified Water'],
    in_stock: true,
    featured: true,
    min_order_quantity: 1,
    certifications: ['WHO-GMP', 'ISO 9001'],
    created_at: now,
    updated_at: now
  }),
  createProduct({
    id: '3',
    name: "St D'vence Tea Tree Face Wash",
    description: 'Purifying face wash with tea tree oil for clear, refreshed skin',
    price: 499,
    image_url: getImageUrl('teatree-facewash.png'),
    category: 'skincare',
    tags: ['oil-control', 'acne-prone', 'deep-cleansing'],
    benefits: [
      'Deep cleanses and removes excess oil',
      'Helps prevent breakouts and blemishes',
      'Soothes irritated skin with natural tea tree oil'
    ],
    ingredients: ['Aqua', 'Tea Tree Oil', 'Glycerin', 'Aloe Vera', 'Vitamin E'],
    in_stock: true,
    featured: true,
    min_order_quantity: 1,
    certifications: ['Dermatologist Tested', 'Paraben Free'],
    created_at: now,
    updated_at: now
  }),
  createProduct({
    id: '4',
    name: 'Kapiva Aloe Vera Gel',
    description: 'Pure and natural aloe vera gel for soothing and hydrating skin',
    price: 299,
    image_url: getImageUrl('kapiva-aleovera-gel.png'),
    category: 'skincare',
    tags: ['hydration', 'soothing', 'after-sun'],
    benefits: [
      'Deeply hydrates and soothes dry skin',
      'Cools and calms sunburns and irritation',
      'Non-greasy formula absorbs quickly'
    ],
    ingredients: ['Aloe Barbadensis Leaf Extract', 'Glycerin', 'Carbomer', 'Phenoxyethanol'],
    in_stock: true,
    featured: true,
    min_order_quantity: 1,
    certifications: ['100% Pure Aloe', 'No Artificial Colors'],
    created_at: now,
    updated_at: now
  }),
  createProduct({
    id: '5',
    name: 'HK Vitals Vitamin C Serum',
    description: 'Brightening serum with 20% vitamin C for radiant and even-toned skin',
    price: 1299,
    image_url: getImageUrl('hkvitals-vitamin-c.jpg'),
    category: 'skincare',
    tags: ['brightening', 'antioxidant', 'dark-spots'],
    benefits: [
      'Reduces dark spots and hyperpigmentation',
      'Brightens and evens out skin tone',
      'Powerful antioxidant protection',
      'Stimulates collagen production'
    ],
    ingredients: ['Ascorbic Acid', 'Vitamin E', 'Ferulic Acid', 'Hyaluronic Acid'],
    in_stock: true,
    featured: false,
    min_order_quantity: 1,
    certifications: ['Dermatologist Tested', 'Cruelty Free', 'Vegan'],
    created_at: now,
    updated_at: now
  }),
  createProduct({
    id: '6',
    name: 'HK Vitals Biotin 10000mcg',
    description: 'High potency biotin supplement for healthy hair, skin, and nails',
    price: 899,
    image_url: getImageUrl('hk-vitals-biotin.png'),
    category: 'supplements',
    tags: ['hair-health', 'skin-care', 'nail-strength'],
    benefits: [
      'Promotes healthy hair growth and thickness',
      'Supports strong, healthy nails',
      'Helps maintain glowing skin',
      'Essential for metabolism of fats and carbohydrates'
    ],
    ingredients: ['Biotin (Vitamin B7)', 'Microcrystalline Cellulose', 'Vegetable Magnesium Stearate'],
    in_stock: true,
    featured: false,
    min_order_quantity: 1,
    certifications: ['WHO-GMP Certified', 'Vegan', 'Gluten Free'],
    created_at: now,
    updated_at: now
  }),
  createProduct({
    id: '7',
    name: 'HK Vitals Multivitamin with Zinc & Vitamin C',
    description: 'Complete daily multivitamin with zinc and vitamin C for overall health and wellness',
    price: 1599,
    image_url: getImageUrl('hk-vitals-multivitamin.png'),
    category: 'vitamins',
    tags: ['daily-essentials', 'immunity-booster', 'energy'],
    benefits: [
      'Comprehensive blend of essential vitamins and minerals',
      'Supports immune system function with added zinc and vitamin C',
      'Boosts energy and vitality',
      'Promotes overall health and wellbeing',
      'Enhances skin health and collagen production'
    ],
    ingredients: ['Vitamin A', 'Vitamin C (as Ascorbic Acid)', 'Vitamin D3', 'Vitamin E', 'B Vitamins', 'Zinc (as Zinc Gluconate)', 'Selenium', 'Magnesium'],
    in_stock: true,
    featured: true,
    min_order_quantity: 1,
    certifications: ['WHO-GMP Certified', 'Vegan', 'Gluten Free'],
    created_at: now,
    updated_at: now
  }),
  createProduct({
    id: '8',
    name: 'Cetaphil Gentle Skin Cleanser',
    description: 'Mild, non-irritating cleanser for all skin types, including sensitive skin',
    price: 499,
    image_url: getImageUrl('cetaphil-cleanser.png'),
    category: 'personal-care',
    tags: ['sensitive-skin', 'fragrance-free', 'non-comedogenic'],
    benefits: [
      'Gently cleanses without stripping moisture',
      'Maintains skin\'s natural pH balance',
      'Suitable for face, hands, and body',
      'Leaves skin feeling soft and smooth'
    ],
    ingredients: ['Water', 'Glycerin', 'Cetyl Alcohol', 'Stearyl Alcohol', 'Sodium Lauryl Sulfate'],
    in_stock: true,
    featured: false,
    min_order_quantity: 1,
    certifications: ['Dermatologist Recommended', 'Hypoallergenic', 'Non-comedogenic'],
    created_at: now,
    updated_at: now
  }),
  createProduct({
    id: '9',
    name: 'HK Vitals Vitamin D3 + K2',
    description: 'Essential bone and immune support supplement with Vitamin D3 and K2',
    price: 1099,
    image_url: getImageUrl('hkvitals-vitamind3.png'),
    category: 'supplements',
    tags: ['bone-health', 'immunity', 'vitamin-d'],
    benefits: [
      'Supports strong and healthy bones',
      'Enhances calcium absorption',
      'Boosts immune system function',
      'May improve mood and energy levels'
    ],
    ingredients: ['Vitamin D3 (as Cholecalciferol)', 'Vitamin K2 (as Menaquinone-7)', 'Medium Chain Triglycerides'],
    in_stock: true,
    featured: false,
    min_order_quantity: 1,
    certifications: ['WHO-GMP Certified', 'Vegan', 'Gluten Free'],
    created_at: now,
    updated_at: now
  }),
  createProduct({
    id: '10',
    name: 'HK Vitals Omega 3 Fish Oil',
    description: 'High potency fish oil supplement for heart, brain, and joint health',
    price: 1499,
    image_url: getImageUrl('hk-omega3.png'),
    category: 'supplements',
    tags: ['heart-health', 'brain-function', 'joint-support'],
    benefits: [
      'Supports heart and cardiovascular health',
      'Promotes brain function and cognitive health',
      'Helps maintain healthy joints and mobility',
      'May support mood and emotional wellbeing'
    ],
    ingredients: ['Fish Oil Concentrate', 'Omega-3 Fatty Acids (EPA & DHA)', 'Vitamin E (as d-alpha Tocopherol)'],
    in_stock: true,
    featured: false,
    min_order_quantity: 1,
    certifications: ['IFOS Certified', 'Molecularly Distilled', 'Mercury Tested'],
    created_at: now,
    updated_at: now
  }),
  createProduct({
    id: '10',
    name: 'HK Vitals Vitamin B12',
    description: 'High potency Vitamin B12 supplement for energy and nerve function',
    price: 799,
    image_url: getImageUrl('hk-vit-b12.png'),
    category: 'supplements',
    tags: ['energy', 'nerve-health', 'b-vitamins'],
    benefits: [
      'Supports healthy energy levels and metabolism',
      'Promotes proper nerve function',
      'Helps maintain healthy red blood cells',
      'Supports brain health and cognitive function'
    ],
    ingredients: ['Methylcobalamin (Vitamin B12)', 'Microcrystalline Cellulose', 'Vegetable Magnesium Stearate'],
    in_stock: true,
    featured: false,
    min_order_quantity: 1,
    certifications: ['WHO-GMP Certified', 'Vegan', 'Gluten Free'],
    created_at: now,
    updated_at: now
  }),
  createProduct({
    id: '11',
    name: 'HK Vitals Zinc + Vitamin C',
    description: 'Immune support supplement with zinc and vitamin C',
    price: 599,
    image_url: getImageUrl('hk-zinc-vitc.png'),
    category: 'supplements',
    tags: ['immunity', 'antioxidant', 'cold-flu'],
    benefits: [
      'Supports healthy immune system function',
      'Powerful antioxidant protection',
      'Promotes skin health and wound healing',
      'May help reduce duration of common colds'
    ],
    ingredients: ['Zinc (as Zinc Citrate)', 'Vitamin C (as Ascorbic Acid)', 'Microcrystalline Cellulose'],
    in_stock: true,
    featured: false,
    min_order_quantity: 1,
    certifications: ['WHO-GMP Certified', 'Vegan', 'Gluten Free'],
    created_at: now,
    updated_at: now
  }),
  createProduct({
    id: '11',
    name: 'HK Vitals Retinol Night Cream',
    description: 'Advanced anti-aging night cream with encapsulated retinol for skin renewal',
    price: 1299,
    image_url: getImageUrl('hk-retinol-cream.png'),
    category: 'skincare',
    tags: ['anti-aging', 'retinol', 'night-cream'],
    benefits: [
      'Reduces appearance of fine lines and wrinkles',
      'Improves skin texture and tone',
      'Stimulates collagen production',
      'Promotes skin cell renewal'
    ],
    ingredients: ['Encapsulated Retinol', 'Niacinamide', 'Hyaluronic Acid', 'Ceramides'],
    in_stock: true,
    featured: false,
    min_order_quantity: 1,
    certifications: ['Dermatologist Tested', 'Non-comedogenic', 'Paraben Free'],
    created_at: now,
    updated_at: now
  }),
  createProduct({
    id: '12',
    name: 'HK Vitals Vitamin E Body Lotion',
    description: 'Nourishing body lotion with Vitamin E and natural moisturizers',
    price: 599,
    image_url: getImageUrl('hk-vit-e-lotion.png'),
    category: 'personal-care',
    tags: ['moisturizing', 'body-care', 'vitamin-e'],
    benefits: [
      'Deeply hydrates and nourishes dry skin',
      'Rich in antioxidants to protect skin',
      'Lightweight, non-greasy formula',
      'Helps improve skin elasticity'
    ],
    ingredients: ['Aqua', 'Glycerin', 'Vitamin E (Tocopheryl Acetate)', 'Shea Butter', 'Jojoba Oil'],
    in_stock: true,
    featured: false,
    min_order_quantity: 1,
    certifications: ['Dermatologist Tested', 'Paraben Free', 'Sulfate Free'],
    created_at: now,
    updated_at: now
  })
];