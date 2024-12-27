# Personal Portfolio & Blog

A modern, minimalist portfolio and blog built with SvelteKit, TypeScript, MDSvex, and Tailwind CSS.

## Features

- 🚀 Built with SvelteKit 5 and TypeScript
- 📝 Blog with MDSvex for Markdown processing
- 💅 Styled with Tailwind CSS and Typography plugin
- 🎨 Dark theme with Nord-inspired colors
- ✨ Syntax highlighting with Shiki
- 📱 Fully responsive design
- 🔄 Automatic deployment to GitHub Pages

## Development

### Prerequisites

- Node.js 20 or later
- npm or pnpm

### Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   pnpm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   # or
   pnpm dev
   ```

4. Open http://localhost:5173 in your browser

### Adding Blog Posts

1. Create a new markdown file in `src/content/blog/`
2. Add frontmatter metadata at the top of the file:
   ```markdown
   ---
   title: Your Post Title
   date: '2023-12-27'
   description: A brief description of your post
   ---
   ```
3. Write your post content in Markdown

### Building for Production

```bash
npm run build
# or
pnpm build
```

### Deployment

The site is automatically deployed to GitHub Pages when changes are pushed to the main branch.

## License

MIT
