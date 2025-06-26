# Qube Healthcare - Vercel Deployment Guide

This guide will walk you through deploying the Qube Healthcare e-commerce application to Vercel.

## Prerequisites

- [Node.js](https://nodejs.org/) (v16 or later)
- [Git](https://git-scm.com/)
- [Vercel CLI](https://vercel.com/cli) (optional)
- A [Vercel account](https://vercel.com/signup)

## Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd qube-healthcare
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   - Copy `.env.example` to `.env`
   - Update the values as needed

## Local Development

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deploying to Vercel

### Option 1: Vercel Dashboard (Recommended)

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Go to [Vercel Dashboard](https://vercel.com/dashboard)
3. Click "Add New" → "Project"
4. Import your repository
5. Configure project settings:
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
6. Click "Deploy"

### Option 2: Vercel CLI

1. Install Vercel CLI (if not installed):
   ```bash
   npm install -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

## Environment Variables

Make sure to set the following environment variables in your Vercel project settings:

- `NODE_VERSION`: 16 (or higher)
- `NPM_VERSION`: 8 (or higher)
- Any other required environment variables from `.env.example`

## Custom Domain (Optional)

1. Go to your project in the Vercel Dashboard
2. Navigate to "Settings" → "Domains"
3. Add your custom domain and follow the instructions to verify ownership

## Troubleshooting

- **Build Fails**: Check the build logs in the Vercel dashboard for specific error messages
- **Assets Not Loading**: Ensure the `base` in `vite.config.ts` is set to `'/'` for production
- **Environment Variables**: Verify all required environment variables are set in Vercel

## Support

For any issues, please contact the development team or open an issue in the repository.
