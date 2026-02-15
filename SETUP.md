# Setup Instructions

## Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

## Installation Steps

1. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
kate-gibbs-website/
├── app/                  # Next.js app directory
│   ├── about/           # About page
│   ├── services/        # Services page
│   ├── projects/        # Projects page
│   ├── contact/         # Contact page
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── components/          # React components
│   ├── ui/             # UI components (shadcn/ui)
│   ├── header.tsx      # Header/navigation
│   └── footer.tsx      # Footer
├── lib/                # Utility functions
├── hooks/              # React hooks
├── public/             # Static assets
└── ...config files
```

## Customization

### Update Contact Information

Edit the contact information in:
- `components/footer.tsx`
- `app/contact/page.tsx`

### Update Images

Replace images in the `public/` folder and update references in the page components.

### Update Content

All content is in the page components under `app/`. Edit the text directly in the TSX files.

## Building for Production

```bash
npm run build
npm start
```

## Deployment

This project is optimized for deployment on Vercel:

1. Push your code to GitHub
2. Import the repository in Vercel
3. Deploy!

For other hosting providers, consult the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).
