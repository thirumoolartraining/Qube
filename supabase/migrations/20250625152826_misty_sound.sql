/*
  # Seed Products Data

  1. Insert all healthcare products with proper pricing in INR
  2. Maintain consistent product structure and categories
  3. First 4 products are marked as featured
  4. All products have a minimum order quantity of 1
*/

-- Insert products data
INSERT INTO products (
  id,
  name,
  description,
  price,
  image_url,
  category,
  tags,
  benefits,
  ingredients,
  in_stock,
  featured,
  min_order_quantity,
  certifications
) VALUES
/* 1 — 21st Century Biotine */
('00000000-0000-0000-0000-000000000001',
 '21st Century Biotine',
 'High-potency biotin supplement for healthy hair, skin, and nails',
 800.00,
 '/assets/images/21stcentury-biotin.png',
 'vitamins',
 ARRAY['hair-health','skin-care','nail-strength'],
 ARRAY[
   'Promotes healthy hair growth and reduces breakage',
   'Strengthens nails and prevents brittleness',
   'Supports skin health and hydration'
 ],
 ARRAY['Biotin (as d-Biotin)','Calcium Carbonate','Microcrystalline Cellulose'],
 true,  true,  1,
 ARRAY['WHO-GMP Certified','Vegan','Gluten Free']
),

/* 2 — HK Vitals Multivitamin Gummies */
('00000000-0000-0000-0000-000000000002',
 'HK Vitals Multivitamin Gummies',
 'Delicious multivitamin gummies for daily nutrition',
 899.00,
 '/assets/images/hk-multivitamin-gummies.png',
 'vitamins',
 ARRAY['multivitamin','gummies','immunity'],
 ARRAY[
   'Supports overall health and wellbeing',
   'Boosts immune system function',
   'Promotes healthy skin, hair, and nails',
   'Provides essential vitamins and minerals'
 ],
 ARRAY['Vitamin A','Vitamin C','Vitamin D','Vitamin E','Vitamin B Complex','Zinc'],
 true,  true,  1,
 ARRAY['WHO-GMP Certified','Vegan','Gluten Free']
),

/* 3 — HK Vitals Omega-3 Fish Oil */
('00000000-0000-0000-0000-000000000003',
 'HK Vitals Omega-3 Fish Oil',
 'Premium fish oil supplement with high EPA & DHA',
 1499.00,
 '/assets/images/hk-omega3.png',
 'supplements',
 ARRAY['omega-3','heart-health','brain-health'],
 ARRAY[
   'Supports heart and cardiovascular health',
   'Promotes brain function and development',
   'Helps maintain healthy cholesterol levels',
   'Supports joint health and mobility'
 ],
 ARRAY['Fish Oil Concentrate','Omega-3 Fatty Acids (EPA & DHA)','Vitamin E (as antioxidant)'],
 true,  true,  1,
 ARRAY['IFOS Certified','Molecularly Distilled','Mercury Tested']
),

/* 4 — HK Vitals Vitamin C + Zinc */
('00000000-0000-0000-0000-000000000004',
 'HK Vitals Vitamin C + Zinc',
 'Immune support with Vitamin C and Zinc',
 649.00,
 '/assets/images/hk-vitc-zinc.png',
 'vitamins',
 ARRAY['immunity','antioxidant','cold-flu'],
 ARRAY[
   'Boosts immune system function',
   'Powerful antioxidant protection',
   'Supports skin health and wound healing',
   'May help reduce duration of common colds'
 ],
 ARRAY['Vitamin C (as Ascorbic Acid)','Zinc (as Zinc Citrate)','Rose Hips Extract'],
 true,  true,  1,
 ARRAY['WHO-GMP Certified','Vegan','Gluten Free']
),

/* 5 — HK Vitals Biotin with Keratin */
('00000000-0000-0000-0000-000000000005',
 'HK Vitals Biotin with Keratin',
 'Advanced formula for hair, skin, and nails',
 999.00,
 '/assets/images/hk-biotin-keratin.png',
 'supplements',
 ARRAY['hair-growth','skin-health','nail-strength'],
 ARRAY[
   'Promotes thicker, stronger hair',
   'Reduces hair fall and breakage',
   'Improves skin elasticity and hydration',
   'Strengthens brittle nails'
 ],
 ARRAY['Biotin','Hydrolyzed Keratin','Zinc','Selenium','MSM'],
 true,  false, 1,
 ARRAY['WHO-GMP Certified','Vegan','Gluten Free']
),

/* 6 — HK Vitals Vitamin D3 2000 IU */
('00000000-0000-0000-0000-000000000006',
 'HK Vitals Vitamin D3 2000 IU',
 'High-potency Vitamin D3 supplement for bone health',
 699.00,
 '/assets/images/hk-vitd3.png',
 'vitamins',
 ARRAY['bone-health','immunity','vitamin-d'],
 ARRAY[
   'Supports calcium absorption for strong bones',
   'Enhances immune system function',
   'Promotes muscle function and strength',
   'May help improve mood and energy levels'
 ],
 ARRAY['Vitamin D3 (as Cholecalciferol)','Medium Chain Triglycerides'],
 true,  false, 1,
 ARRAY['WHO-GMP Certified','Vegan','Gluten Free']
),

/* 7 — HK Vitals Magnesium Glycinate */
('00000000-0000-0000-0000-000000000007',
 'HK Vitals Magnesium Glycinate',
 'Highly bioavailable magnesium for better absorption',
 899.00,
 '/assets/images/hk-magnesium.png',
 'supplements',
 ARRAY['muscle-relaxant','sleep-aid','stress-relief'],
 ARRAY[
   'Promotes relaxation and better sleep',
   'Helps reduce muscle cramps and spasms',
   'Supports nerve function and muscle relaxation',
   'May help relieve occasional constipation'
 ],
 ARRAY['Magnesium (as Magnesium Glycinate)','Rice Flour','Vegetable Capsule'],
 true,  false, 1,
 ARRAY['WHO-GMP Certified','Vegan','Gluten Free']
),

/* 8 — HK Vitals Probiotic 50 Billion CFU */
('00000000-0000-0000-0000-000000000008',
 'HK Vitals Probiotic 50 Billion CFU',
 'Advanced probiotic with 50 billion CFU and 10 strains',
 1299.00,
 '/assets/images/hk-probiotic.png',
 'supplements',
 ARRAY['gut-health','digestion','immunity'],
 ARRAY[
   'Supports healthy gut flora balance',
   'Aids in digestion and nutrient absorption',
   'Boosts immune system function',
   'May help reduce occasional digestive discomfort'
 ],
 ARRAY['Probiotic Blend (10 strains, 50B CFU)','Prebiotic Fiber','Rice Maltodextrin'],
 true,  false, 1,
 ARRAY['WHO-GMP Certified','Dairy Free','Vegetarian']
),

/* 9 — HK Vitals Ashwagandha KSM-66 */
('00000000-0000-0000-0000-000000000009',
 'HK Vitals Ashwagandha KSM-66',
 'Standardized extract for stress relief and energy',
 999.00,
 '/assets/images/hk-ashwagandha.png',
 'ayurveda',
 ARRAY['stress-relief','energy','adaptogen'],
 ARRAY[
   'Helps reduce stress and anxiety',
   'Supports mental clarity and focus',
   'May help improve sleep quality',
   'Supports healthy cortisol levels'
 ],
 ARRAY['Ashwagandha Root Extract (KSM-66)','Rice Flour','Vegetable Capsule'],
 true,  false, 1,
 ARRAY['WHO-GMP Certified','Vegan','Gluten Free']
),

/* 10 — HK Vitals Vitamin B12 */
('00000000-0000-0000-0000-00000000000a',
 'HK Vitals Vitamin B12',
 'High potency Vitamin B12 supplement for energy and nerve function',
 799.00,
 '/assets/images/hk-vit-b12.png',
 'supplements',
 ARRAY['energy','nerve-health','b-vitamins'],
 ARRAY[
   'Supports healthy energy levels and metabolism',
   'Promotes proper nerve function',
   'Helps maintain healthy red blood cells',
   'Supports brain health and cognitive function'
 ],
 ARRAY['Methylcobalamin (Vitamin B12)','Microcrystalline Cellulose','Vegetable Magnesium Stearate'],
 true,  false, 1,
 ARRAY['WHO-GMP Certified','Vegan','Gluten Free']
),

/* 11 — HK Vitals Retinol Night Cream */
('00000000-0000-0000-0000-00000000000b',
 'HK Vitals Retinol Night Cream',
 'Advanced anti-aging night cream with encapsulated retinol',
 1299.00,
 '/assets/images/hk-retinol-cream.png',
 'skincare',
 ARRAY['anti-aging','retinol','night-cream'],
 ARRAY[
   'Reduces appearance of fine lines and wrinkles',
   'Improves skin texture and tone',
   'Stimulates collagen production',
   'Promotes skin cell renewal'
 ],
 ARRAY['Encapsulated Retinol','Niacinamide','Hyaluronic Acid','Ceramides'],
 true,  false, 1,
 ARRAY['Dermatologist Tested','Non-comedogenic','Paraben Free']
),

/* 12 — HK Vitals Vitamin E Body Lotion */
('00000000-0000-0000-0000-00000000000c',
 'HK Vitals Vitamin E Body Lotion',
 'Nourishing body lotion with Vitamin E and natural moisturizers',
 599.00,
 '/assets/images/hk-vit-e-lotion.png',
 'personal-care',
 ARRAY['moisturizing','body-care','vitamin-e'],
 ARRAY[
   'Deeply hydrates and nourishes dry skin',
   'Rich in antioxidants to protect skin',
   'Lightweight, non-greasy formula',
   'Helps improve skin elasticity'
 ],
 ARRAY['Aqua','Glycerin','Vitamin E (Tocopheryl Acetate)','Shea Butter','Jojoba Oil'],
 true,  false, 1,
 ARRAY['Dermatologist Tested','Paraben Free','Sulfate Free']
)

ON CONFLICT (id) DO UPDATE
SET name               = excluded.name,
    description        = excluded.description,
    price              = excluded.price,
    image_url          = excluded.image_url,
    category           = excluded.category,
    tags               = excluded.tags,
    benefits           = excluded.benefits,
    ingredients        = excluded.ingredients,
    in_stock           = excluded.in_stock,
    featured           = excluded.featured,
    min_order_quantity = excluded.min_order_quantity,
    certifications     = excluded.certifications,
    updated_at         = now();