import { createClient } from '@supabase/supabase-js';
import { products } from '../src/data/products';
import * as dotenv from 'dotenv';
import path from 'path';

// Load environment variables from .env file
dotenv.config({ path: path.resolve(__dirname, '../.env') });

const supabaseUrl = process.env.VITE_SUPABASE_URL || '';
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing required environment variables VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function seedProducts() {
  try {
    console.log('Starting to seed products...');
    
    // First, delete all existing products
    const { error: deleteError } = await supabase
      .from('products')
      .delete()
      .neq('id', 0); // Delete all products

    if (deleteError) {
      console.error('Error deleting existing products:', deleteError);
      return;
    }

    console.log('Deleted existing products');

    // Insert new products
    const { data, error } = await supabase
      .from('products')
      .insert(products)
      .select();

    if (error) {
      console.error('Error seeding products:', error);
      return;
    }

    console.log(`Successfully seeded ${data?.length || 0} products`);
    process.exit(0);
  } catch (error) {
    console.error('Unexpected error:', error);
    process.exit(1);
  }
}

seedProducts();
