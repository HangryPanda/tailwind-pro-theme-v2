# ProTheme - Professional Design System

A complete, production-ready design system built with Tailwind CSS. Features 100+ components, 8 beautiful themes, and best-in-class accessibility.

![ProTheme](https://img.shields.io/badge/version-2.0-blue)
![Components](https://img.shields.io/badge/components-100%2B-success)
![Themes](https://img.shields.io/badge/themes-8-purple)
![Accessibility](https://img.shields.io/badge/a11y-WCAG%20AA-green)

## ✨ Features

- **100+ Components** - Everything you need to build modern web applications
- **8 Beautiful Themes** - From professional dark mode to calming zen themes
- **Fully Accessible** - WCAG AA compliant with proper focus states and ARIA labels
- **Tailwind CSS** - Built on top of the world's most popular utility framework
- **Production Ready** - Battle-tested components with proper error states and loading indicators
- **Interactive** - Modals, dropdowns, command palette, and more with JavaScript
- **Responsive** - Mobile-first design that works on all devices
- **TypeScript Ready** - Easy to integrate with modern frameworks

## 🚀 Quick Start

### 1. Include the CSS

```html
<link rel="stylesheet" href="./theme.css" />
```

### 2. Choose a Theme

Wrap your content with a theme class:

```html
<!-- Default dark theme -->
<body>
  <!-- Your content -->
</body>

<!-- Light theme -->
<body class="t-light">
  <!-- Your content -->
</body>

<!-- Calm theme -->
<body class="t-calm">
  <!-- Your content -->
</body>
```

### 3. Use Components

```html
<!-- Buttons -->
<button class="btn-primary">Primary Action</button>
<button class="btn-secondary">Secondary Action</button>

<!-- Cards -->
<div class="card">
  <h3 class="text-title">Card Title</h3>
  <p class="text-body text-muted">Card content goes here.</p>
</div>

<!-- Alerts -->
<div class="alert alert-success">
  <svg class="alert-icon"><!-- icon --></svg>
  <div class="alert-content">
    <div class="alert-title">Success!</div>
    Your changes have been saved.
  </div>
</div>
```

## 📁 Demo Pages

- **[index.html](./index.html)** - Main showcase with all components and beautiful hero section
- **[components-demo.html](./components-demo.html)** - Interactive components with full JavaScript functionality
- **[theme-demo.html](./theme-demo.html)** - Theme comparison showcase

## 🎨 Available Themes

### 1. Default / Dark
High contrast, vibrant colors for general use. Perfect for most applications.

```html
<body><!-- Default theme --></body>
```

### 2. Light
Crisp and clean for daytime productivity. Optimized for readability.

```html
<body class="t-light"><!-- Content --></body>
```

### 3. 🌊 Calm
Soft blues and greens for reduced eye strain. Ideal for long work sessions.

```html
<body class="t-calm"><!-- Content --></body>
```

### 4. 🍃 Zen
Earth tones and natural colors for a calming experience. Reduces cognitive load.

```html
<body class="t-zen"><!-- Content --></body>
```

### 5. 🎯 Focus
Deep contrast with minimal color for maximum concentration. One primary accent.

```html
<body class="t-focus"><!-- Content --></body>
```

### 6. 🔥 Warm
Amber tones for evening work. Reduces blue light exposure.

```html
<body class="t-warm"><!-- Content --></body>
```

### 7. ❄️ Nord
Cool, professional colors inspired by Nordic design. Low visual fatigue.

```html
<body class="t-nord"><!-- Content --></body>
```

### 8. Dark (Explicit)
Explicit dark mapping (same as default baseline).

```html
<body class="t-dark"><!-- Content --></body>
```

## 🧩 Component Library

### Typography
- Display Large, Display, Headline, Title, Body, Caption, Overline
- Semantic colors: success, warning, error, info, highlight
- Proper line heights and font weights

### Buttons
- **Variants:** Primary, Secondary, Danger, Ghost, Icon
- **Sizes:** Small, Default, Large
- **States:** Hover, Active, Disabled, Loading

### Forms
- Text inputs with error states
- Search inputs with icon
- Select dropdowns with custom styling
- Checkboxes and radio buttons
- Toggle switches
- Field labels, hints, and error messages

### Data Display
- **Tables** with sorting, selection, hover states
- **Lists** with avatars, metadata, and actions
- **Cards** for grouped content
- **Empty states** for zero-data scenarios

### Navigation
- Sidebar with active states
- Top bar / Header
- Breadcrumbs
- Navigation items with icons

### Interactive Components
- **Modals** with multiple sizes
- **Dropdowns** with dividers and icons
- **Tabs** (default and pill variants)
- **Command Palette** with keyboard navigation

### Feedback
- **Toast notifications** (success, error, warning, info)
- **Alert banners** with variants
- **Tooltips** with glass morphism
- **Progress bars** with striped animations
- **Spinners** for loading states
- **Skeleton loaders** for better UX

### Status & Labels
- **Badges** with color variants
- **Status indicators** with pulse animation
- **Chips** for tags
- **Keyboard shortcuts** display (kbd)

### Utilities
- Layout helpers (flex-between, flex-center)
- Text utilities (truncate, line-clamp)
- Dividers (horizontal, vertical)
- Animations (hover-lift, hover-scale, active-press)
- Accessibility helpers (sr-only)

## 📖 Usage Examples

### Modal with Form

```html
<div class="modal-overlay">
  <div class="modal">
    <div class="modal-header">
      <h3 class="modal-title">Create Project</h3>
      <button class="btn-icon btn-icon-sm">×</button>
    </div>
    <div class="modal-body">
      <div class="space-y-4">
        <div>
          <label class="field-label required">Project Name</label>
          <input type="text" class="input" placeholder="My Project" />
        </div>
        <div>
          <label class="field-label">Description</label>
          <textarea class="input" rows="3"></textarea>
        </div>
      </div>
    </div>
    <div class="modal-footer">
      <button class="btn-secondary">Cancel</button>
      <button class="btn-primary">Create</button>
    </div>
  </div>
</div>
```

### Data Table

```html
<div class="table-container">
  <table class="table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Status</th>
        <th>Date</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Project Alpha</td>
        <td><span class="badge badge-success">Active</span></td>
        <td class="text-muted">Oct 15</td>
      </tr>
      <tr class="selected">
        <td>Project Beta</td>
        <td><span class="badge badge-warning">Pending</span></td>
        <td class="text-muted">Oct 18</td>
      </tr>
    </tbody>
  </table>
</div>
```

### Dropdown Menu

```html
<div class="dropdown">
  <button class="btn-primary">Actions</button>
  <div class="dropdown-menu">
    <div class="dropdown-label">Actions</div>
    <div class="dropdown-item">
      <svg class="w-4 h-4"><!-- icon --></svg>
      Edit
    </div>
    <div class="dropdown-item">
      <svg class="w-4 h-4"><!-- icon --></svg>
      Duplicate
    </div>
    <div class="dropdown-divider"></div>
    <div class="dropdown-label">Danger Zone</div>
    <div class="dropdown-item danger">
      <svg class="w-4 h-4"><!-- icon --></svg>
      Delete
    </div>
  </div>
</div>
```

## 🎯 CSS Variables

All themes use CSS variables for easy customization:

```css
:root {
  /* Backgrounds */
  --bg-app: #242526;
  --bg-section: #292A2B;

  /* Foregrounds */
  --fg-default: #E6E6E6;
  --fg-muted: #BBBBBB;

  /* Borders & Rings */
  --border: #222223;
  --ring: #45A9F9;

  /* Brand Colors */
  --brand-blue: #45A9F9;
  --brand-purple: #B084EB;
  --brand-green: #19f9d8;
  --brand-pink: #FF75B5;
  --brand-orange: #FFB86C;
  --brand-red: #FF2C6D;
}
```

## 🔧 Customization

### Override Theme Variables

```css
.my-custom-theme {
  --bg-app: #1a1a1a;
  --bg-section: #252525;
  --brand-blue: #0066ff;
  /* ... other variables */
}
```

### Extend Components

```css
@layer components {
  .my-button {
    @apply btn-primary;
    border-radius: 2rem;
  }
}
```

## 💻 Framework Integration

### React Example

```jsx
import './theme.css';

function MyComponent() {
  return (
    <div className="card">
      <h3 className="text-title">Hello World</h3>
      <button className="btn-primary">Click me</button>
    </div>
  );
}
```

### Vue Example

```vue
<template>
  <div class="card">
    <h3 class="text-title">Hello World</h3>
    <button class="btn-primary">Click me</button>
  </div>
</template>

<style>
@import './theme.css';
</style>
```

## 🎹 Keyboard Shortcuts

The interactive demo includes keyboard navigation:

- **⌘K** or **Ctrl+K** - Open command palette
- **Escape** - Close modals, dropdowns, command palette
- **Arrow Keys** - Navigate command palette items
- **Enter** - Execute selected command

## ♿ Accessibility

- WCAG AA compliant color contrast
- Proper focus states on all interactive elements
- ARIA labels and roles where appropriate
- Keyboard navigation support
- Screen reader friendly markup

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📚 Best Practices

1. **Use Semantic HTML** - Always use proper HTML elements
2. **Add ARIA Labels** - For better accessibility
3. **Test Focus States** - Ensure keyboard navigation works
4. **Mobile First** - Design for mobile, enhance for desktop
5. **Performance** - Use CSS variables for theming without JS overhead

## 🧪 JavaScript Helpers

See [components-demo.html](./components-demo.html) for reference implementations:

- Modal open/close with Escape key support
- Dropdown menus with click-outside-to-close
- Toast notifications with auto-dismiss
- Command palette with keyboard navigation
- Tab switching
- Progress animations
- Theme switching
- Loading state toggles

## 🧠 Science Behind Calming Themes

**Cognitive Load Reduction:**
- Lower contrast reduces visual processing overhead
- Desaturated colors minimize emotional triggers
- Consistent color temperature reduces fatigue

**Color Psychology:**
- **Blues**: Calm, trust, productivity
- **Greens**: Natural, balanced, restful
- **Earth tones**: Grounded, stable, comfortable
- **Warm tones**: Cozy, less alerting than cool blues

## 🗂️ Files Structure

```
├── index.html              # Main showcase page
├── components-demo.html    # Interactive components demo
├── theme-demo.html         # Theme comparison
├── theme.css               # Complete design system
├── THEME_AUDIT.md          # Component audit & roadmap
└── README.md               # This file
```

## 🎨 Design System Principles

1. **Consistency** - All components follow the same design language
2. **Accessibility** - WCAG AA compliant throughout
3. **Flexibility** - Easy to customize and extend
4. **Performance** - Lightweight and optimized
5. **Developer Experience** - Simple API, clear documentation

## 📝 Credits

Built with:
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- Inspired by [Linear](https://linear.app/), [Notion](https://notion.so/), and [Superhuman](https://superhuman.com/)

## 📄 License

MIT License - feel free to use in personal and commercial projects.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 💬 Support

For issues and questions, please open an issue on GitHub.

---

**Made with ❤️ for designers and developers who care about details.**

Portfolio-worthy design system suitable for Dribbble, Behance, and production use.