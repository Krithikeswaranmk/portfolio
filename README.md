# Portfolio Website

A production-ready portfolio website for Krithik Eswaran M, showcasing expertise in Applied Data Science, NLP, and LLM Research.

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel-ready

## Features

- ✅ Professional, recruiter-facing design
- ✅ Responsive layout (mobile-first)
- ✅ SEO optimized with metadata and structured data
- ✅ Accessibility compliant (ARIA labels, semantic HTML)
- ✅ Smooth scrolling navigation
- ✅ Project detail modals
- ✅ Contact form with validation
- ✅ Dark theme with custom design system

## Local Setup

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository or navigate to the project directory:
   ```bash
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the website.

### Build for Production

```bash
npm run build
npm start
```

## Deployment to Vercel

### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI globally:
   ```bash
   npm i -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Deploy:
   ```bash
   vercel
   ```

4. Follow the prompts to complete deployment.

### Option 2: Deploy via GitHub

1. Push your code to a GitHub repository.

2. Go to [vercel.com](https://vercel.com) and sign in with your GitHub account.

3. Click "New Project" and import your repository.

4. Vercel will automatically detect Next.js and configure the build settings.

5. Click "Deploy" and your site will be live in minutes.

### Option 3: Deploy via Vercel Dashboard

1. Go to [vercel.com](https://vercel.com) and sign in.

2. Click "Add New Project".

3. Import your Git repository or upload the project folder.

4. Configure project settings (usually auto-detected for Next.js).

5. Click "Deploy".

## Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Hero.tsx            # Hero section
│   ├── About.tsx           # About section
│   ├── Skills.tsx          # Skills grid
│   ├── Projects.tsx        # Projects section
│   ├── ProjectCard.tsx     # Project card component
│   ├── ProjectModal.tsx    # Project detail modal
│   ├── Experience.tsx      # Work experience
│   ├── Education.tsx       # Education timeline
│   ├── Contact.tsx         # Contact form
│   ├── Footer.tsx          # Footer
│   └── StructuredData.tsx  # SEO structured data
├── lib/
│   └── data.ts             # Portfolio data (source of truth)
└── public/                 # Static assets
```

## Customization

All portfolio data is centralized in `lib/data.ts`. Update this file to modify:

- Personal information
- Professional summary
- Education details
- Work experience
- Projects
- Skills
- Contact information

## Design System

- **Background**: Deep navy (`#0a0e27`)
- **Text**: Off-white (`#f8f9fa`)
- **Accent**: Muted coral (`#f87171`)
- **Typography**: Inter font family
- **Spacing**: Consistent Tailwind spacing scale

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is private and proprietary.

## Contact

For questions or issues, contact: krithikeswaranmk@gmail.com

