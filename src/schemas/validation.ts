import { z } from 'zod';

export const checkoutSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  address: z.string().min(5, 'Please enter a valid address'),
  city: z.string().min(2, 'Please enter a valid city'),
  country: z.string().min(2, 'Please select a country'),
  postalCode: z.string().min(3, 'Please enter a valid postal code'),
  orderNotes: z.string().optional(),
});

export const rfqSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().min(2, 'Company name must be at least 2 characters'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  productInterest: z.string().min(2, 'Please specify your product interest'),
  quantity: z.number().min(20, 'Minimum quantity is 20 units').refine(
    (val) => val % 10 === 0,
    'Quantity must be in multiples of 10 units'
  ),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});