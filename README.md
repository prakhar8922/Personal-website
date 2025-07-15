# Prakhar Goel | Software Engineer Portfolio

A modern, responsive personal portfolio website built with React.js, featuring smooth animations, beautiful design, and comprehensive sections to showcase Prakhar Goel's professional profile as a Software Engineer specializing in Cloud, DevOps, Security, and AI solutions.

## 🚀 Features

- **Modern Design**: Clean, professional design with gradient backgrounds and glass-morphism effects
- **Responsive Layout**: Fully responsive design that works perfectly on all devices
- **Smooth Animations**: Powered by Framer Motion for engaging user interactions
- **Interactive Components**: Hover effects, scroll animations, and dynamic content
- **Contact Form**: Functional contact form with validation
- **Social Integration**: Links to GitHub, LinkedIn, LeetCode, and other platforms
- **Project Showcase**: Filterable project gallery with live demos and GitHub links
- **Skills Visualization**: Animated skill progress bars and technology icons
- **Experience Timeline**: Professional experience displayed in an attractive timeline
- **SEO Optimized**: Meta tags and structured content for better search visibility

## 📋 Sections

1. **Hero Section**: Eye-catching introduction with animated text and social links
2. **About Section**: Personal information, statistics, and professional highlights
3. **Skills Section**: Categorized skills with progress indicators and technology icons
4. **Projects Section**: Filterable project showcase with live demos and GitHub links
5. **Experience Section**: Professional timeline with achievements and technologies used
6. **Contact Section**: Contact form and social media links
7. **Footer**: Quick links and additional social connections

## 🛠️ Technologies Used

- **React.js**: Modern JavaScript library for building user interfaces
- **Framer Motion**: Animation library for smooth transitions and interactions
- **React Icons**: Comprehensive icon library
- **CSS3**: Advanced styling with gradients, animations, and responsive design
- **HTML5**: Semantic markup for better accessibility and SEO

## 📦 Installation

1. **Clone the repository**:

   ```bash
   git clone <your-repo-url>
   cd personal-portfolio
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start the development server**:

   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:5173` (or the port shown in your terminal)

## 🔧 Customization

### Personal Information

Update the following files with your personal information:

- **Hero Section** (`src/components/Hero.js`):

  - Your name and title
  - Personal description
  - Social media links (GitHub, LinkedIn, LeetCode, Email)

- **About Section** (`src/components/About.js`):

  - Personal background and story
  - Statistics (years of experience, projects completed, etc.)
  - Mission and approach statements

- **Skills Section** (`src/components/Skills.js`):

  - Add/remove skill categories
  - Update skill levels and technologies
  - Customize skill descriptions

- **Projects Section** (`src/components/Projects.js`):

  - Add your actual projects
  - Update GitHub repository links
  - Add live demo URLs
  - Include project screenshots

- **Experience Section** (`src/components/Experience.js`):

  - Add your work experience
  - Update company information and achievements
  - Include relevant technologies for each role

- **Contact Section** (`src/components/Contact.js`):
  - Update contact information
  - Add your actual email and phone number
  - Update location information

### Styling

- **Colors**: Update the color scheme in `src/index.css` and component CSS files
- **Fonts**: Change fonts by updating the Google Fonts link in `public/index.html`
- **Layout**: Modify grid layouts and spacing in component CSS files

### Images

- Replace placeholder images with your actual photos
- Add project screenshots to the `public` folder
- Update image paths in the components

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify

1. Build the project: `npm run build`
2. Upload the `build` folder to Netlify
3. Configure custom domain if needed

### GitHub Pages

1. Add `"homepage": "https://yourusername.github.io/repo-name"` to `package.json`
2. Install gh-pages: `npm install --save-dev gh-pages`
3. Add deploy scripts to `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
4. Deploy: `npm run deploy`

## 📱 Responsive Design

The website is fully responsive and optimized for:

- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🎨 Design Features

- **Dark Theme**: Modern dark color scheme with gradient accents
- **Glass Morphism**: Translucent elements with backdrop blur effects
- **Smooth Scrolling**: Seamless navigation between sections
- **Hover Effects**: Interactive elements with smooth transitions
- **Loading Animations**: Staggered animations for better user experience
- **Custom Scrollbar**: Styled scrollbar matching the theme

## 🔍 SEO Optimization

- Semantic HTML structure
- Meta tags for social sharing
- Open Graph tags
- Structured data markup
- Optimized images and assets
- Fast loading times

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have any questions or need help customizing the portfolio, please open an issue on GitHub.

---

**Happy Coding! 🎉**
