# Branded Water Bottles Website

A modern, elegant, and professional website for a customized branded water bottles business. Built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Hero Section**: Eye-catching landing with animated background and clear call-to-action
- **About Us**: Company story and value propositions
- **Services**: Comprehensive list of services with icons and descriptions
- **Portfolio**: Filterable gallery showcasing branded bottle projects
- **Why Choose Us**: Key benefits and statistics
- **Contact Form**: Easy-to-use quote request form with validation
- **Footer**: Complete contact information and social links

## Design Highlights

- Clean, minimalistic design with white, blue, and aqua color scheme
- Fully responsive layout for all devices
- Smooth animations and transitions
- Custom SVG bottle illustrations
- Modern Inter font family
- Gradient accents and glassmorphism effects

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd branded-water-bottles
```

2. Install dependencies (if not already installed):
```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

### Production Build

Build the application for production:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## Project Structure

```
branded-water-bottles/
├── app/
│   ├── components/
│   │   ├── Hero.tsx          # Hero section with CTA
│   │   ├── About.tsx         # About us section
│   │   ├── Services.tsx      # Services grid
│   │   ├── Portfolio.tsx     # Portfolio gallery with filters
│   │   ├── WhyChooseUs.tsx   # Benefits section
│   │   ├── Contact.tsx       # Contact form
│   │   └── Footer.tsx        # Footer with links
│   ├── globals.css           # Global styles and animations
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Main page
├── public/                   # Static assets
└── package.json              # Dependencies
```

## Customization

### Colors

The website uses a blue and cyan color scheme. To customize colors, update the Tailwind classes in the components:

- Primary blue: `blue-600`, `blue-500`, `blue-400`
- Accent cyan: `cyan-500`, `cyan-400`, `cyan-300`

### Content

Update the following files to customize content:

- **Hero text**: `app/components/Hero.tsx`
- **About story**: `app/components/About.tsx`
- **Services**: `app/components/Services.tsx`
- **Portfolio items**: `app/components/Portfolio.tsx`
- **Contact info**: `app/components/Contact.tsx` and `app/components/Footer.tsx`

### Images

Replace the SVG bottle illustrations with actual product images by:

1. Adding images to the `public/` folder
2. Updating the image sources in the components
3. Using Next.js `<Image>` component for optimization

## Technologies Used

- **Next.js 16**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **React**: UI library
- **Inter Font**: Modern sans-serif typography

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is created for demonstration purposes.

## Contact

For questions or support, please contact:
- Email: info@brandedwater.com
- Phone: +1 (555) 123-4567
