# Olivia's Portfolio - README

## 🎨 Overview
This is my updated portfolio website!!.

## 📁 File Structure
```
├── index.html          # Main portfolio page
├── style.css           # All styling
├── script.js           # JavaScript for navbar and interactions
├── proj/               # Folder for project detail pages
│   ├── fitness-app.html
│   ├── internet-study.html
│   └── ... (other projects)
├── creative/           # Folder for creative work pages
├── images/             # Photos and images
└── cover/              # Project preview images
```

## Reminders on How to Update

### Adding a New Vibe Code Project

In `index.html`, find the `#vibe-code` section and add this template:

```html
<a href="https://github.com/o-derby/repo-name" class="vibe-card" target="_blank">
    <div class="vibe-header">
        <h3>Project Name</h3>
        <span class="vibe-date">Feb 10, 2026</span>
    </div>
    <p>Brief description of what was built</p>
    <div class="vibe-tech">
        <span class="tech-tag">Python</span>
        <span class="tech-tag">Streamlit</span>
    </div>
</a>
```

### Adding a New Full Project

1. In `index.html`, add a new card to the `#projects` section:

```html
<a href="proj/project.html" class="project-card">
    <img src="cover/image.png" alt="Project preview" class="card-image" />
    <h3>Project Name</h3>
    <p>Description of what was built and why it matters</p>
    <div class="project-tags">
        <span class="tag">Python</span>
        <span class="tag">Data Analysis</span>
    </div>
</a>
```

2. Create a detail page in the `proj/` folder using `fitness-app-template.html` as a template

### Updating Experience

In `index.html`, find the `#experience` section and add/edit:

```html
<div class="experience-item">
    <div class="experience-header">
        <h3>Job Title</h3>
        <span class="experience-period">Month Year - Present</span>
    </div>
    <p class="experience-company">Company Name • Location</p>
    <ul class="experience-details">
        <li>Achievement with metrics</li>
        <li>Another achievement</li>
    </ul>
</div>
```

## Color Scheme
- Primary Green: `#5f7262`
- Dark: `#162A2C`
- Cream: `#EDE9DF`
- White: `#fff`

## Responsive Design
The site is fully responsive and works on:
- Desktop (1200px+)
- Tablet (768px - 1200px)
- Mobile (< 768px)

## ✨ Features

### Sections
1. **Hero/About** - Introduction with photo and quick links
2. **Experience** - Jobs/internships with timeline
3. **Projects** - Main portfolio pieces with tags
4. **Vibe Code** - Quick experimental projects
5. **Creative** - Art and fun side projects
6. **Skills** - Tools and technologies
7. **Contact** - Links to reach me

### Interactive Elements
- Navbar hides on scroll down, shows on scroll up
- Click photo to toggle between two images
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
- Explain process and results
- Add metrics
