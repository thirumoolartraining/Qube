# Qube Health Care - E-commerce Website

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fthirumoolartraining%2FQube&project-name=qube-healthcare&repository-name=qube-healthcare)

## Overview
Qube Health Care is a modern e-commerce platform for pharmaceutical products, built with React, TypeScript, Vite, and Tailwind CSS.

## Features
- Product catalog with categories
- Shopping cart functionality
- Secure checkout process
- Contact form
- Responsive design
- Privacy Policy, Terms & Conditions, and other legal pages

## Getting Started

### Prerequisites
- Node.js 16+ and npm/yarn

### Installation
1. Clone the repository
   ```bash
   git clone https://github.com/thirumoolartraining/Qube.git
   cd Qube
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn
   ```

3. Create a `.env` file in the root directory with your environment variables:
   ```env
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. Start the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

## Deployment

### Vercel
This project is configured for easy deployment on Vercel. Click the button below to deploy:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fthirumoolartraining%2FQube&project-name=qube-healthcare&repository-name=qube-healthcare)

### Manual Deployment
1. Push your code to a GitHub repository
2. Import the repository to Vercel
3. Vercel will automatically detect the Vite project and set up the build settings
4. Add your environment variables in the Vercel project settings
5. Deploy!

## Environment Variables

For local development, create a `.env` file in the root directory with the following variables:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Technologies Used
- React 18
- TypeScript
- Vite
- Tailwind CSS
- React Router
- React Hook Form
- Zod (Validation)
- Framer Motion (Animations)
- Lucide Icons

## License
This project is proprietary and confidential.
