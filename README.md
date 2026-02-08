# Olivia's Portfolio - README

## 🎨 Overview
This is your updated portfolio website with a professional structure optimized for internship/job hunting while keeping your aesthetic.

## 📁 File Structure
```
├── index.html          # Main portfolio page
├── style.css           # All styling
├── script.js           # JavaScript for navbar and interactions
├── proj/               # Folder for project detail pages
│   ├── fitness-app.html
│   ├── internet-study.html
│   └── ... (your other projects)
├── creative/           # Folder for creative work pages
├── images/             # Photos and images
└── cover/              # Project preview images
```

## 🔄 How to Update

### Adding a New Vibe Code Project

In `index.html`, find the `#vibe-code` section and add this template:

```html
<a href="https://github.com/o-derby/your-repo-name" class="vibe-card" target="_blank">
    <div class="vibe-header">
        <h3>📊 Your Project Name</h3>
        <span class="vibe-date">Feb 10, 2026</span>
    </div>
    <p>Brief description of what you built</p>
    <div class="vibe-tech">
        <span class="tech-tag">Python</span>
        <span class="tech-tag">Streamlit</span>
    </div>
</a>
```

### Adding a New Full Project

1. In `index.html`, add a new card to the `#projects` section:

```html
<a href="proj/your-project.html" class="project-card">
    <img src="cover/your-image.png" alt="Project preview" class="card-image" />
    <h3>Your Project Name</h3>
    <p>Description of what you built and why it matters</p>
    <div class="project-tags">
        <span class="tag">Python</span>
        <span class="tag">Data Analysis</span>
    </div>
</a>
```

2. Create a detail page in the `proj/` folder using `fitness-app-template.html` as a template

### Updating Your Experience

In `index.html`, find the `#experience` section and add/edit:

```html
<div class="experience-item">
    <div class="experience-header">
        <h3>Your Job Title</h3>
        <span class="experience-period">Month Year - Present</span>
    </div>
    <p class="experience-company">Company Name • Location</p>
    <ul class="experience-details">
        <li>Achievement with metrics</li>
        <li>Another achievement</li>
    </ul>
</div>
```

## 🎨 Color Scheme
- Primary Green: `#5f7262`
- Dark: `#162A2C`
- Cream: `#EDE9DF`
- White: `#fff`

## 📱 Responsive Design
The site is fully responsive and works on:
- Desktop (1200px+)
- Tablet (768px - 1200px)
- Mobile (< 768px)

## 🚀 Deploying to GitHub Pages

1. Upload these files to your GitHub repo `o-derby.github.io`
2. Make sure your images are in the correct folders
3. Push to GitHub
4. Your site will be live at `https://o-derby.github.io`

## ✨ Features

### Sections
1. **Hero/About** - Introduction with photo and quick links
2. **Experience** - Your jobs/internships with timeline
3. **Projects** - Main portfolio pieces with tags
4. **Vibe Code** - Quick experimental projects
5. **Creative** - Art and fun side projects
6. **Skills** - Tools and technologies
7. **Contact** - Links to reach you

### Interactive Elements
- Navbar hides on scroll down, shows on scroll up
- Click your photo to toggle between two images
- Cards have hover animations
- Mobile-responsive menu

## 💡 Tips

### For Each New Vibe Code Project:
- Keep descriptions to 1-2 sentences
- Add 2-3 relevant tech tags
- Link directly to the GitHub repo
- Include the build date

### For Full Projects:
- Write a detailed case study page
- Include screenshots/images
- Explain your process and results
- Add metrics if you have them

### Updating Your Resume:
- Replace `Olivia_Derby_Resume.pdf` with your latest version
- Make sure the filename matches what's in index.html

## 🎯 What Makes This Portfolio Good

1. **Experience First** - Shows you have real work history
2. **Clear Hierarchy** - Main projects vs experiments vs creative work
3. **Active/Updated** - Vibe code section shows you're currently building
4. **Professional but Personal** - Clean design with your personality
5. **Easy to Scan** - Recruiters can find what they need quickly

## 📝 To-Do List

- [ ] Replace placeholder images with real screenshots
- [ ] Create detail pages for existing projects
- [ ] Add your first vibe code project
- [ ] Update resume PDF
- [ ] Add user research findings to fitness app page (as you get them)
- [ ] Consider adding testimonials/recommendations later

## 🐛 Troubleshooting

**Navbar overlapping content?**
- The navbar is fixed and content is padded - should auto-adjust

**Images not showing?**
- Check file paths match your folder structure
- Make sure images are in the right folders

**Mobile menu not working?**
- Make sure script.js is linked correctly
- Check browser console for errors

---

Good luck with the internship search! 🚀
