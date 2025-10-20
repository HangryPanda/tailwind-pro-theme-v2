# Theme Audit: Missing Styles for Professional Productivity Tool

**Audit Date:** October 19, 2025  
**Designer:** Senior UI/UX Specialist (20+ years experience)  
**Product Context:** Template & Sales Campaign Management Tool  
**Design Philosophy:** Efficiency-first, inspired by Notion, Linear, and Superhuman

---

## Executive Summary

Your current theme provides a solid foundation with well-defined color variables and basic components. However, to build a **best-in-class productivity tool**, you're missing critical UI patterns that enable speed, efficiency, and professional workflows.

### What You Have ✓
- Strong color system with semantic tokens
- Basic components (buttons, cards, chips, kbd)
- Theme switching capability (root/light/dark)
- Good contrast ratios

### What's Missing ✗
- **Navigation & Layout structures**
- **Data-dense UI components** (tables, lists, grids)
- **Interactive states** (hover, focus, active, disabled, loading)
- **Form components** (inputs, selects, checkboxes, radio, toggles)
- **Feedback mechanisms** (toasts, alerts, modals, tooltips)
- **Typography hierarchy** for content scanning
- **Spacing & density controls** for information architecture
- **Action patterns** (dropdowns, command palette, contextual menus)

---

## 1. Typography System

### Missing: Content Hierarchy
Professional tools need scannable content with clear visual hierarchy.

```css
/* MISSING: Typography scale for productivity apps */
.text-display-lg { font-size: 2.5rem; line-height: 1.1; font-weight: 700; }
.text-display { font-size: 2rem; line-height: 1.2; font-weight: 700; }
.text-headline { font-size: 1.5rem; line-height: 1.3; font-weight: 600; }
.text-title-lg { font-size: 1.25rem; line-height: 1.4; font-weight: 600; }
.text-title { font-size: 1.125rem; line-height: 1.4; font-weight: 600; }
.text-body-lg { font-size: 1rem; line-height: 1.5; font-weight: 400; }
.text-body { font-size: 0.875rem; line-height: 1.5; font-weight: 400; }
.text-body-sm { font-size: 0.8125rem; line-height: 1.5; font-weight: 400; }
.text-caption { font-size: 0.75rem; line-height: 1.4; font-weight: 400; }
.text-overline { font-size: 0.6875rem; line-height: 1.3; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; }
```

### Missing: Semantic Text Colors
```css
.text-success { color: var(--brand-green); }
.text-warning { color: var(--brand-orange); }
.text-error { color: var(--brand-red); }
.text-info { color: var(--brand-blue); }
.text-highlight { color: var(--brand-purple); }
.text-subtle { color: var(--fg-muted); opacity: 0.6; }
.text-disabled { color: var(--fg-muted); opacity: 0.4; }
```

---

## 2. Layout & Navigation Components

### Missing: Application Shell
```css
/* Sidebar navigation (critical for template management) */
.sidebar {
  width: 240px;
  background: var(--bg-section);
  border-right: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}

.sidebar-compact { width: 64px; }

/* Navigation items */
.nav-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem 0.75rem;
  border-radius: 0.5rem;
  color: var(--fg-muted);
  transition: all 150ms ease;
  cursor: pointer;
}

.nav-item:hover {
  background: color-mix(in oklab, var(--bg-section) 85%, var(--fg-default) 15%);
  color: var(--fg-default);
}

.nav-item.active {
  background: color-mix(in oklab, var(--brand-blue) 15%, transparent);
  color: var(--brand-blue);
  font-weight: 500;
}

.nav-item.active::before {
  content: '';
  position: absolute;
  left: 0;
  width: 3px;
  height: 100%;
  background: var(--brand-blue);
  border-radius: 0 2px 2px 0;
}

/* Header/Topbar */
.topbar {
  height: 56px;
  border-bottom: 1px solid var(--border);
  background: var(--bg-app);
  display: flex;
  align-items: center;
  padding: 0 1.5rem;
  gap: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
}

/* Breadcrumbs for navigation context */
.breadcrumb {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
}

.breadcrumb-item {
  color: var(--fg-muted);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.breadcrumb-item:hover { color: var(--fg-default); }
.breadcrumb-item.active { color: var(--fg-default); font-weight: 500; }
.breadcrumb-separator { opacity: 0.4; }
```

---

## 3. Form Components

### Missing: Input Fields
```css
/* Text inputs */
.input {
  width: 100%;
  padding: 0.5rem 0.75rem;
  border: 1px solid var(--border);
  border-radius: 0.5rem;
  background: var(--bg-section);
  color: var(--fg-default);
  font-size: 0.875rem;
  transition: all 150ms ease;
}

.input:hover { border-color: color-mix(in oklab, var(--border) 70%, var(--fg-default) 30%); }

.input:focus {
  outline: none;
  border-color: var(--brand-blue);
  box-shadow: 0 0 0 3px color-mix(in oklab, var(--brand-blue) 15%, transparent);
}

.input:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  background: color-mix(in oklab, var(--bg-section) 90%, var(--border) 10%);
}

.input.error {
  border-color: var(--brand-red);
}

.input.error:focus {
  box-shadow: 0 0 0 3px color-mix(in oklab, var(--brand-red) 15%, transparent);
}

/* Input sizes */
.input-sm { padding: 0.375rem 0.625rem; font-size: 0.8125rem; }
.input-lg { padding: 0.625rem 1rem; font-size: 1rem; }

/* Select dropdown */
.select {
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%23BBBBBB' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 0.75rem center;
  padding-right: 2.5rem;
}

/* Checkbox & Radio */
.checkbox, .radio {
  width: 1.125rem;
  height: 1.125rem;
  border: 1.5px solid var(--border);
  background: var(--bg-section);
  cursor: pointer;
  transition: all 150ms ease;
}

.checkbox { border-radius: 0.25rem; }
.radio { border-radius: 50%; }

.checkbox:checked, .radio:checked {
  background: var(--brand-blue);
  border-color: var(--brand-blue);
  background-image: url("data:image/svg+xml,%3Csvg width='12' height='10' viewBox='0 0 12 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 5L4.5 8.5L11 1' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: center;
}

/* Toggle switch (essential for settings) */
.toggle {
  position: relative;
  width: 2.75rem;
  height: 1.5rem;
  background: color-mix(in oklab, var(--border) 80%, transparent);
  border-radius: 9999px;
  cursor: pointer;
  transition: background 200ms ease;
}

.toggle::after {
  content: '';
  position: absolute;
  top: 2px;
  left: 2px;
  width: 1.25rem;
  height: 1.25rem;
  background: var(--fg-default);
  border-radius: 50%;
  transition: transform 200ms ease;
}

.toggle.checked {
  background: var(--brand-blue);
}

.toggle.checked::after {
  transform: translateX(1.25rem);
}

/* Search input (critical for template discovery) */
.search-input {
  padding-left: 2.5rem;
  background-image: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M7 12C9.76142 12 12 9.76142 12 7C12 4.23858 9.76142 2 7 2C4.23858 2 2 4.23858 2 7C2 9.76142 4.23858 12 7 12Z' stroke='%23BBBBBB' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M14 14L10.5 10.5' stroke='%23BBBBBB' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: 0.75rem center;
}
```

### Missing: Field Labels & Helpers
```css
.field-label {
  display: block;
  font-size: 0.8125rem;
  font-weight: 500;
  color: var(--fg-default);
  margin-bottom: 0.375rem;
}

.field-label.required::after {
  content: '*';
  color: var(--brand-red);
  margin-left: 0.25rem;
}

.field-hint {
  font-size: 0.75rem;
  color: var(--fg-muted);
  margin-top: 0.25rem;
}

.field-error {
  font-size: 0.75rem;
  color: var(--brand-red);
  margin-top: 0.25rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
}
```

---

## 4. Data Display Components

### Missing: Tables (Essential for Template Lists)
```css
.table-container {
  border: 1px solid var(--border);
  border-radius: 0.75rem;
  overflow: hidden;
  background: var(--bg-section);
}

.table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.875rem;
}

.table thead {
  background: color-mix(in oklab, var(--bg-section) 90%, var(--border) 10%);
  border-bottom: 1px solid var(--border);
}

.table th {
  padding: 0.75rem 1rem;
  text-align: left;
  font-weight: 600;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--fg-muted);
}

.table td {
  padding: 0.875rem 1rem;
  border-top: 1px solid var(--border);
  color: var(--fg-default);
}

.table tbody tr {
  transition: background 100ms ease;
}

.table tbody tr:hover {
  background: color-mix(in oklab, var(--bg-section) 92%, var(--fg-default) 8%);
}

.table tbody tr.selected {
  background: color-mix(in oklab, var(--brand-blue) 10%, transparent);
}

/* Compact table variant */
.table-sm td { padding: 0.5rem 0.75rem; }
.table-sm th { padding: 0.5rem 0.75rem; }

/* Sortable column headers */
.table-sortable {
  cursor: pointer;
  user-select: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.table-sortable:hover { color: var(--fg-default); }
```

### Missing: List Views (Alternative to Tables)
```css
.list-group {
  border: 1px solid var(--border);
  border-radius: 0.75rem;
  overflow: hidden;
  background: var(--bg-section);
}

.list-item {
  padding: 0.875rem 1rem;
  border-top: 1px solid var(--border);
  display: flex;
  align-items: center;
  gap: 0.75rem;
  transition: background 100ms ease;
  cursor: pointer;
}

.list-item:first-child { border-top: none; }

.list-item:hover {
  background: color-mix(in oklab, var(--bg-section) 92%, var(--fg-default) 8%);
}

.list-item.active {
  background: color-mix(in oklab, var(--brand-blue) 10%, transparent);
}

.list-item-content {
  flex: 1;
  min-width: 0;
}

.list-item-title {
  font-weight: 500;
  color: var(--fg-default);
  margin-bottom: 0.125rem;
}

.list-item-meta {
  font-size: 0.75rem;
  color: var(--fg-muted);
}
```

### Missing: Empty States
```css
.empty-state {
  text-align: center;
  padding: 3rem 1.5rem;
  color: var(--fg-muted);
}

.empty-state-icon {
  width: 3rem;
  height: 3rem;
  margin: 0 auto 1rem;
  opacity: 0.5;
}

.empty-state-title {
  font-size: 1rem;
  font-weight: 600;
  color: var(--fg-default);
  margin-bottom: 0.5rem;
}

.empty-state-description {
  font-size: 0.875rem;
  margin-bottom: 1.5rem;
}
```

---

## 5. Interactive Components

### Missing: Dropdown Menus
```css
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-menu {
  position: absolute;
  top: calc(100% + 0.5rem);
  right: 0;
  min-width: 12rem;
  background: var(--bg-section);
  border: 1px solid var(--border);
  border-radius: 0.5rem;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
  padding: 0.375rem;
  z-index: 50;
}

.dropdown-item {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  padding: 0.5rem 0.75rem;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  color: var(--fg-default);
  cursor: pointer;
  transition: background 100ms ease;
}

.dropdown-item:hover {
  background: color-mix(in oklab, var(--bg-section) 85%, var(--fg-default) 15%);
}

.dropdown-item.danger { color: var(--brand-red); }
.dropdown-item.danger:hover { background: color-mix(in oklab, var(--brand-red) 10%, transparent); }

.dropdown-divider {
  height: 1px;
  background: var(--border);
  margin: 0.375rem 0;
}

.dropdown-label {
  padding: 0.375rem 0.75rem;
  font-size: 0.6875rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--fg-muted);
  font-weight: 600;
}
```

### Missing: Tabs
```css
.tabs {
  display: flex;
  gap: 0.125rem;
  border-bottom: 1px solid var(--border);
}

.tab {
  padding: 0.625rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--fg-muted);
  border-bottom: 2px solid transparent;
  cursor: pointer;
  transition: all 150ms ease;
  position: relative;
  top: 1px;
}

.tab:hover { color: var(--fg-default); }

.tab.active {
  color: var(--brand-blue);
  border-bottom-color: var(--brand-blue);
}

/* Pill variant (for tight spaces) */
.tabs-pills {
  display: flex;
  gap: 0.375rem;
  background: color-mix(in oklab, var(--bg-section) 90%, var(--border) 10%);
  padding: 0.25rem;
  border-radius: 0.5rem;
}

.tab-pill {
  padding: 0.375rem 0.75rem;
  font-size: 0.8125rem;
  font-weight: 500;
  color: var(--fg-muted);
  border-radius: 0.375rem;
  cursor: pointer;
  transition: all 150ms ease;
}

.tab-pill:hover { color: var(--fg-default); }

.tab-pill.active {
  background: var(--bg-section);
  color: var(--fg-default);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}
```

### Missing: Modal/Dialog
```css
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  z-index: 100;
}

.modal {
  background: var(--bg-section);
  border: 1px solid var(--border);
  border-radius: 0.75rem;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
  max-width: 32rem;
  width: 100%;
  max-height: 90vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.modal-header {
  padding: 1.25rem 1.5rem;
  border-bottom: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.modal-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--fg-default);
}

.modal-body {
  padding: 1.5rem;
  overflow-y: auto;
  flex: 1;
}

.modal-footer {
  padding: 1rem 1.5rem;
  border-top: 1px solid var(--border);
  display: flex;
  gap: 0.75rem;
  justify-content: flex-end;
}

/* Size variants */
.modal-sm { max-width: 24rem; }
.modal-lg { max-width: 48rem; }
.modal-xl { max-width: 64rem; }
.modal-full { max-width: 95vw; max-height: 95vh; }
```

### Missing: Command Palette (à la Linear/Superhuman)
```css
.command-palette {
  background: var(--bg-section);
  border: 1px solid var(--border);
  border-radius: 0.75rem;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
  max-width: 40rem;
  width: 100%;
  overflow: hidden;
}

.command-input {
  width: 100%;
  padding: 1rem 1.5rem;
  border: none;
  background: transparent;
  font-size: 1rem;
  color: var(--fg-default);
  border-bottom: 1px solid var(--border);
}

.command-input:focus { outline: none; }

.command-results {
  max-height: 20rem;
  overflow-y: auto;
  padding: 0.5rem;
}

.command-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.625rem 0.875rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background 100ms ease;
}

.command-item:hover,
.command-item.selected {
  background: color-mix(in oklab, var(--brand-blue) 15%, transparent);
}

.command-item-icon {
  width: 1.25rem;
  height: 1.25rem;
  opacity: 0.7;
}

.command-item-content {
  flex: 1;
  min-width: 0;
}

.command-item-title {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--fg-default);
}

.command-item-subtitle {
  font-size: 0.75rem;
  color: var(--fg-muted);
}

.command-item-kbd {
  font-size: 0.6875rem;
  opacity: 0.6;
}
```

---

## 6. Feedback Components

### Missing: Toast Notifications
```css
.toast-container {
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 200;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  max-width: 24rem;
}

.toast {
  background: var(--bg-section);
  border: 1px solid var(--border);
  border-radius: 0.5rem;
  padding: 1rem;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: start;
  gap: 0.75rem;
  animation: slideIn 200ms ease;
}

@keyframes slideIn {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.toast-icon {
  width: 1.25rem;
  height: 1.25rem;
  flex-shrink: 0;
}

.toast-content {
  flex: 1;
  min-width: 0;
}

.toast-title {
  font-weight: 600;
  font-size: 0.875rem;
  color: var(--fg-default);
  margin-bottom: 0.125rem;
}

.toast-message {
  font-size: 0.8125rem;
  color: var(--fg-muted);
}

/* Variants */
.toast-success { border-left: 3px solid var(--brand-green); }
.toast-error { border-left: 3px solid var(--brand-red); }
.toast-warning { border-left: 3px solid var(--brand-orange); }
.toast-info { border-left: 3px solid var(--brand-blue); }
```

### Missing: Alert Banners
```css
.alert {
  padding: 0.875rem 1rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: start;
  gap: 0.75rem;
  font-size: 0.875rem;
}

.alert-icon {
  width: 1.125rem;
  height: 1.125rem;
  flex-shrink: 0;
}

.alert-content {
  flex: 1;
  min-width: 0;
}

.alert-title {
  font-weight: 600;
  margin-bottom: 0.25rem;
}

/* Variants */
.alert-info {
  background: color-mix(in oklab, var(--brand-blue) 10%, transparent);
  border: 1px solid color-mix(in oklab, var(--brand-blue) 30%, transparent);
  color: var(--fg-default);
}

.alert-success {
  background: color-mix(in oklab, var(--brand-green) 10%, transparent);
  border: 1px solid color-mix(in oklab, var(--brand-green) 30%, transparent);
  color: var(--fg-default);
}

.alert-warning {
  background: color-mix(in oklab, var(--brand-orange) 10%, transparent);
  border: 1px solid color-mix(in oklab, var(--brand-orange) 30%, transparent);
  color: var(--fg-default);
}

.alert-error {
  background: color-mix(in oklab, var(--brand-red) 10%, transparent);
  border: 1px solid color-mix(in oklab, var(--brand-red) 30%, transparent);
  color: var(--fg-default);
}
```

### Missing: Tooltip
```css
.tooltip {
  position: absolute;
  background: color-mix(in oklab, var(--bg-app) 95%, transparent);
  backdrop-filter: blur(12px);
  border: 1px solid var(--border);
  border-radius: 0.375rem;
  padding: 0.375rem 0.625rem;
  font-size: 0.75rem;
  color: var(--fg-default);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  z-index: 150;
  pointer-events: none;
  max-width: 16rem;
}

.tooltip-arrow {
  position: absolute;
  width: 0.5rem;
  height: 0.5rem;
  background: var(--bg-app);
  border: 1px solid var(--border);
  transform: rotate(45deg);
}
```

### Missing: Loading States
```css
.skeleton {
  background: linear-gradient(
    90deg,
    color-mix(in oklab, var(--bg-section) 90%, var(--fg-default) 10%) 25%,
    color-mix(in oklab, var(--bg-section) 95%, var(--fg-default) 5%) 50%,
    color-mix(in oklab, var(--bg-section) 90%, var(--fg-default) 10%) 75%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  border-radius: 0.25rem;
}

@keyframes shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

.skeleton-text { height: 0.875rem; }
.skeleton-title { height: 1.25rem; }
.skeleton-button { height: 2.5rem; }
.skeleton-avatar { width: 2.5rem; height: 2.5rem; border-radius: 50%; }

/* Spinner */
.spinner {
  width: 1.25rem;
  height: 1.25rem;
  border: 2px solid color-mix(in oklab, var(--brand-blue) 30%, transparent);
  border-top-color: var(--brand-blue);
  border-radius: 50%;
  animation: spin 600ms linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.spinner-sm { width: 1rem; height: 1rem; border-width: 2px; }
.spinner-lg { width: 2rem; height: 2rem; border-width: 3px; }
```

---

## 7. Button Enhancements

### Missing: Button States & Variants
```css
/* Add to existing buttons */
.btn-primary:active { transform: translateY(1px); }
.btn-primary:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}

.btn-primary.loading {
  position: relative;
  color: transparent;
}

.btn-primary.loading::after {
  content: '';
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  /* Add spinner */
}

/* Secondary button (outlined) */
.btn-secondary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  border: 1px solid var(--border);
  background: transparent;
  color: var(--fg-default);
  font-weight: 500;
  font-size: 0.875rem;
  transition: all 150ms ease;
  cursor: pointer;
}

.btn-secondary:hover {
  background: color-mix(in oklab, var(--bg-section) 92%, var(--fg-default) 8%);
  border-color: color-mix(in oklab, var(--border) 70%, var(--fg-default) 30%);
}

/* Danger button */
.btn-danger {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  background: var(--brand-red);
  color: white;
  font-weight: 500;
  font-size: 0.875rem;
  border: none;
  transition: all 150ms ease;
  cursor: pointer;
}

.btn-danger:hover { filter: brightness(1.1); }

/* Ghost button (minimal) */
.btn-ghost {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  border-radius: 0.375rem;
  background: transparent;
  color: var(--fg-muted);
  font-weight: 500;
  font-size: 0.875rem;
  border: none;
  transition: all 150ms ease;
  cursor: pointer;
}

.btn-ghost:hover {
  background: color-mix(in oklab, var(--bg-section) 85%, var(--fg-default) 15%);
  color: var(--fg-default);
}

/* Icon button (for toolbars) */
.btn-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 0.375rem;
  background: transparent;
  color: var(--fg-muted);
  border: none;
  transition: all 150ms ease;
  cursor: pointer;
}

.btn-icon:hover {
  background: color-mix(in oklab, var(--bg-section) 85%, var(--fg-default) 15%);
  color: var(--fg-default);
}

.btn-icon-sm { width: 1.75rem; height: 1.75rem; }
.btn-icon-lg { width: 2.5rem; height: 2.5rem; }

/* Button sizes */
.btn-sm {
  padding: 0.375rem 0.75rem;
  font-size: 0.8125rem;
}

.btn-lg {
  padding: 0.625rem 1.25rem;
  font-size: 1rem;
}
```

---

## 8. Badge & Status Indicators

### Missing: Badges
```css
.badge {
  display: inline-flex;
  align-items: center;
  padding: 0.125rem 0.5rem;
  border-radius: 9999px;
  font-size: 0.6875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.025em;
}

.badge-primary {
  background: color-mix(in oklab, var(--brand-blue) 20%, transparent);
  color: var(--brand-blue);
}

.badge-success {
  background: color-mix(in oklab, var(--brand-green) 20%, transparent);
  color: var(--brand-green);
}

.badge-warning {
  background: color-mix(in oklab, var(--brand-orange) 20%, transparent);
  color: var(--brand-orange);
}

.badge-error {
  background: color-mix(in oklab, var(--brand-red) 20%, transparent);
  color: var(--brand-red);
}

.badge-neutral {
  background: color-mix(in oklab, var(--fg-muted) 15%, transparent);
  color: var(--fg-muted);
}

/* Dot variant (for statuses) */
.badge-dot {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  font-size: 0.8125rem;
}

.badge-dot::before {
  content: '';
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background: currentColor;
}
```

### Missing: Status Indicators
```css
.status-indicator {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  display: inline-block;
}

.status-online { background: var(--brand-green); }
.status-offline { background: var(--fg-muted); opacity: 0.4; }
.status-busy { background: var(--brand-red); }
.status-away { background: var(--brand-orange); }

/* Pulsing variant for live status */
.status-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}
```

---

## 9. Progress & Meters

### Missing: Progress Bars
```css
.progress {
  height: 0.5rem;
  background: color-mix(in oklab, var(--border) 50%, transparent);
  border-radius: 9999px;
  overflow: hidden;
}

.progress-bar {
  height: 100%;
  background: var(--brand-blue);
  border-radius: 9999px;
  transition: width 300ms ease;
}

.progress-sm { height: 0.25rem; }
.progress-lg { height: 0.75rem; }

/* Variants */
.progress-bar-success { background: var(--brand-green); }
.progress-bar-warning { background: var(--brand-orange); }
.progress-bar-error { background: var(--brand-red); }

/* Striped variant for loading */
.progress-bar-striped {
  background-image: linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.15) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.15) 50%,
    rgba(255, 255, 255, 0.15) 75%,
    transparent 75%,
    transparent
  );
  background-size: 1rem 1rem;
  animation: progress-stripes 1s linear infinite;
}

@keyframes progress-stripes {
  0% { background-position: 1rem 0; }
  100% { background-position: 0 0; }
}
```

---

## 10. Spacing & Density Controls

### Missing: Density Tokens
```css
/* Add to :root */
:root {
  --spacing-3xs: 0.125rem;  /* 2px */
  --spacing-2xs: 0.25rem;   /* 4px */
  --spacing-xs: 0.5rem;     /* 8px */
  --spacing-sm: 0.75rem;    /* 12px */
  --spacing-md: 1rem;       /* 16px */
  --spacing-lg: 1.5rem;     /* 24px */
  --spacing-xl: 2rem;       /* 32px */
  --spacing-2xl: 3rem;      /* 48px */
  --spacing-3xl: 4rem;      /* 64px */
}

/* Density modes (for power users) */
.density-comfortable {
  --list-item-padding: 0.875rem;
  --table-cell-padding: 0.875rem;
  --button-padding: 0.625rem 1rem;
}

.density-compact {
  --list-item-padding: 0.5rem;
  --table-cell-padding: 0.5rem;
  --button-padding: 0.375rem 0.75rem;
}
```

---

## 11. Accessibility Enhancements

### Missing: Focus States
```css
/* Universal focus ring */
*:focus-visible {
  outline: 2px solid var(--brand-blue);
  outline-offset: 2px;
  border-radius: 0.25rem;
}

/* Skip to content (for keyboard navigation) */
.skip-to-content {
  position: absolute;
  top: -100%;
  left: 0;
  padding: 0.75rem 1rem;
  background: var(--brand-blue);
  color: white;
  font-weight: 600;
  z-index: 9999;
}

.skip-to-content:focus {
  top: 0.5rem;
  left: 0.5rem;
}

/* Screen reader only */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
```

---

## 12. Utility Patterns

### Missing: Common Layout Patterns
```css
/* Flex patterns */
.flex-between {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.flex-start {
  display: flex;
  align-items: center;
}

/* Truncate text */
.truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Dividers */
.divider-horizontal {
  height: 1px;
  background: var(--border);
  margin: 1rem 0;
}

.divider-vertical {
  width: 1px;
  background: var(--border);
  margin: 0 1rem;
  align-self: stretch;
}

/* Scrollbar styling */
.custom-scrollbar::-webkit-scrollbar {
  width: 0.5rem;
  height: 0.5rem;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: color-mix(in oklab, var(--border) 60%, transparent);
  border-radius: 9999px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: color-mix(in oklab, var(--border) 80%, transparent);
}
```

---

## 13. Animation & Transitions

### Missing: Micro-interactions
```css
/* Smooth transitions */
.transition-all { transition: all 150ms ease; }
.transition-colors { transition: color, background-color, border-color 150ms ease; }
.transition-transform { transition: transform 150ms ease; }

/* Hover effects */
.hover-lift:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.hover-scale:hover {
  transform: scale(1.02);
}

/* Click feedback */
.active-press:active {
  transform: scale(0.98);
}
```

---

## 14. Responsive Patterns

### Missing: Mobile Optimizations
```css
/* Mobile-friendly tap targets */
@media (max-width: 768px) {
  .btn, .btn-primary, .btn-secondary {
    min-height: 2.75rem; /* 44px minimum for touch */
  }
  
  .list-item {
    min-height: 2.75rem;
  }
  
  /* Drawer navigation for mobile */
  .sidebar {
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    transform: translateX(-100%);
    transition: transform 250ms ease;
    z-index: 90;
  }
  
  .sidebar.open {
    transform: translateX(0);
  }
  
  .sidebar-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 80;
  }
}
```

---

## Priority Implementation Roadmap

### Phase 1: Critical (Week 1)
1. **Form components** (inputs, selects, checkboxes) - Users need to create templates
2. **Tables** - Users need to view template lists
3. **Buttons** (all variants + states) - Core interactions
4. **Typography system** - Information hierarchy
5. **Navigation** (sidebar, topbar, breadcrumbs) - App structure

### Phase 2: Essential (Week 2)
1. **Modals** - For create/edit flows
2. **Dropdowns** - For actions & filters
3. **Toast notifications** - Feedback
4. **Alert banners** - Important messages
5. **Loading states** (spinners, skeletons) - Perceived performance
6. **Empty states** - First-run experience

### Phase 3: Enhanced UX (Week 3)
1. **Command palette** - Power user feature
2. **Tabs** - Content organization
3. **Badges & status indicators** - Template states
4. **Tooltips** - Contextual help
5. **Progress bars** - For bulk operations

### Phase 4: Polish (Week 4)
1. **Focus states** - Accessibility
2. **Micro-interactions** - Delight
3. **Mobile responsiveness** - Device support
4. **Density controls** - User preference
5. **Custom scrollbars** - Visual consistency

---

## Design System Best Practices

### 1. Component API Consistency
Every component should follow this pattern:
- Base class: `.component`
- Size variants: `.component-sm`, `.component-lg`
- State variants: `.component.active`, `.component.disabled`
- Theme variants: `.component-primary`, `.component-danger`

### 2. Spacing Scale
Use consistent spacing: 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px

### 3. Animation Timing
- Micro-interactions: 100-150ms
- UI transitions: 200-300ms
- Page transitions: 300-500ms

### 4. Touch Targets
Minimum 44×44px for all interactive elements (WCAG 2.1 AAA)

### 5. Color Contrast
- Text on backgrounds: 4.5:1 minimum (WCAG AA)
- Large text: 3:1 minimum
- UI components: 3:1 minimum

---

## Conclusion

Your theme has a solid foundation, but **you're missing 80% of the components** needed for a professional productivity tool. The gaps are not in visual design - your colors are fine - but in **interaction patterns**, **data display**, and **feedback mechanisms**.

### Immediate Action Items:
1. **Don't add all at once** - Implement based on user stories
2. **Start with forms & tables** - Core CRUD operations
3. **Add feedback components** - Users need to know what's happening
4. **Build a component library** - Storybook or similar
5. **Document patterns** - Team alignment

### Success Metrics:
- Time to complete template creation < 30 seconds
- 0 clicks to access frequently used templates (command palette)
- Clear visual feedback for all state changes
- Mobile-usable on phones (50%+ of users)

This audit should give you a clear roadmap to transform your theme from "has colors" to "enables productivity."
