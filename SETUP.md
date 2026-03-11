# Portfolio Setup Guide

## Quick Start

Your portfolio website is ready to run! Follow these steps:

### 1. Start Development Server

The development server is already running at http://localhost:5173/

If you need to restart it:
```bash
npm run dev
```

### 2. Customize Your Content

#### Update Personal Information
Edit `src/data/profile.js`:
- Change name, role, tagline
- Update location, phone, portfolio URL
- Add your social media links (GitHub, LinkedIn, Twitter, Email)

#### Add Your Skills
Edit `src/data/skills.js`:
- Modify skill categories
- Add/remove skills
- Update icons if needed

#### Add Your Projects
Edit `src/data/projects.js`:
- Add your project details
- Include project names, descriptions, technologies
- Add demo URLs and GitHub repository links
- Place project images in `public/projects/` folder

#### Add Work Experience
Edit `src/data/experience.js`:
- Add your work history
- Include job titles, companies, durations
- List responsibilities and achievements

#### Add Achievements
Edit `src/data/achievements.js`:
- Add certifications, awards, recognitions
- Include verification URLs if available

### 3. Add Your Resume

Replace `public/resume.pdf` with your actual resume file.

### 4. Add Project Images

Create project screenshots and save them in `public/projects/`:
- fintech-app.png
- healthcare-app.png
- social-app.png
- erp-app.png
- ai-assistant.png
- video-call-app.png

Recommended image size: 1200x800px (3:2 aspect ratio)

### 5. Test Your Changes

Open http://localhost:5173/ in your browser to see your changes in real-time.

### 6. Build for Production

When you're ready to deploy:
```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

### 7. Deploy to GitHub Pages

1. Create a new GitHub repository
2. Push your code to the repository
3. Go to repository Settings → Pages
4. Select "GitHub Actions" as the source
5. The site will automatically deploy on every push to main branch

Your portfolio will be live at: `https://[your-username].github.io/[repository-name]/`

## Customization Tips

### Change Colors

Edit `tailwind.config.js` to customize the color scheme:
- `primary` colors for accent colors
- `dark` colors for background shades

### Modify Animations

Edit `src/utils/animations.js` to adjust animation speeds and effects.

### Add New Sections

1. Create a new component in `src/components/sections/`
2. Import and add it to `src/App.jsx`
3. Add the section ID to the navigation menu in `src/components/layout/Navigation.jsx`

## Troubleshooting

### Port Already in Use

If port 5173 is already in use, Vite will automatically use the next available port.

### Build Errors

Make sure all dependencies are installed:
```bash
npm install
```

### Images Not Loading

- Check that image paths in data files match actual file names in `public/projects/`
- Image paths should start with `/projects/` (e.g., `/projects/my-app.png`)

## Need Help?

- Check the main README.md for more details
- Review the component files for examples
- All components are well-documented with comments

## Next Steps

1. ✅ Customize your personal information
2. ✅ Add your projects and experience
3. ✅ Upload project images and resume
4. ✅ Test everything locally
5. ✅ Deploy to GitHub Pages
6. ✅ Share your portfolio!

Happy coding! 🚀
