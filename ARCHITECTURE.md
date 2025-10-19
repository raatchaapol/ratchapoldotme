# Project Architecture Documentation

## 📁 Folder Structure

```
src/
├── components/          # Shared UI Components
│   ├── layout/         # Layout components (MainLayout, Navbar, Footer)
│   ├── gamification/   # Gamification UI (GlitchText, NeonText, TerminalBox, etc.)
│   ├── ui/             # Base UI components (Chakra wrappers)
│   └── shared/         # Shared components (ProjectCard, SectionHeader, SkillBadge)
│
├── modules/            # Feature modules (Domain-Driven Design)
│   ├── home/
│   │   ├── components/      # Home-specific components
│   │   │   ├── HeroSection/
│   │   │   ├── ExpertisePanel/
│   │   │   ├── KeyHighlightsPanel/
│   │   │   └── DashboardCards/
│   │   ├── constants/       # Home-specific data
│   │   ├── Home.styles.ts   # Page-level styles
│   │   ├── HomePage.tsx     # Main page component
│   │   └── index.ts         # Barrel export
│   │
│   ├── about/
│   ├── projects/
│   ├── skills/
│   └── contact/
│
├── shared/             # Shared across all features
│   ├── types/         # Global TypeScript types
│   ├── constants/     # Global constants (routes, config)
│   ├── hooks/         # Reusable hooks (future)
│   ├── utils/         # Utility functions (future)
│   └── styles/        # Global styles & animations
│
├── theme/             # Theme configuration
│   └── colors.ts
│
└── pages/             # Route pages (thin routing layer)
    ├── index.tsx      # → imports HomePage from modules/home
    ├── about.tsx      # → imports AboutPage from modules/about
    ├── projects.tsx   # → imports ProjectsPage from modules/projects
    ├── skills.tsx     # → imports SkillsPage from modules/skills
    └── contact.tsx    # → imports ContactPage from modules/contact
```

## 🎯 Architecture Principles

### 1. **Modular Design (Feature-Based)**
Each module is self-contained with its own:
- Components
- Constants/Data
- Styles
- Types (if needed)
- Business logic (hooks, utils)

### 2. **Single Responsibility Principle (SRP)**
- Each component has ONE clear purpose
- Atomic components are composable
- Separation of concerns: UI, logic, styling, data

### 3. **Dependency Inversion Principle (DIP)**
- Modules depend on shared abstractions (`shared/types`, `shared/constants`)
- Components import from barrel exports (`index.ts`)
- Loose coupling between modules

### 4. **Open/Closed Principle (OCP)**
- Components are open for extension via props/composition
- Closed for modification through proper abstraction

### 5. **Component Composition**
Example from Home module:
```tsx
// HeroSection composed of atomic components
<HeroSection>
  <TerminalHeader />
  <HeroTitle />
  <BiographyText />
  <QuickStats />
  <AvailabilityBadge />
  <CTAButtons />
</HeroSection>
```

## 📦 Module Structure Example

Each module follows this pattern:

```
module-name/
├── components/              # Module-specific components
│   ├── ComponentA/
│   │   ├── ComponentA.tsx
│   │   ├── SubComponent.tsx (if needed)
│   │   └── index.ts
│   ├── ComponentB/
│   └── index.ts            # Barrel export
├── constants/              # Module-specific data
│   └── moduleData.ts
├── hooks/                  # Module-specific hooks (future)
├── types/                  # Module-specific types (if needed)
├── ModuleName.styles.ts    # Module-level styles
├── ModuleNamePage.tsx      # Main page component
└── index.ts                # Module barrel export
```

## 🎨 Naming Conventions

### Files
- **Components**: `PascalCase.tsx` (e.g., `HeroSection.tsx`)
- **Hooks**: `camelCase.ts` with "use" prefix (e.g., `useHomeData.ts`)
- **Styles**: `PascalCase.styles.ts` (e.g., `Home.styles.ts`)
- **Types**: `camelCase.types.ts` (e.g., `project.types.ts`)
- **Constants**: `camelCase.ts` with "Data" suffix (e.g., `homeData.ts`)
- **Barrel Exports**: Always `index.ts`

### Code
- **Components**: `PascalCase` (e.g., `const HeroSection`)
- **Functions/Hooks**: `camelCase` (e.g., `const useHomeData`)
- **Constants**: `UPPER_SNAKE_CASE` (e.g., `const MAX_PROJECTS = 10`)
- **Types/Interfaces**: `PascalCase` (e.g., `interface ProjectCardProps`)

## 🔄 Data Flow

```
pages/index.tsx
    ↓ (imports)
modules/home/HomePage.tsx
    ↓ (imports)
modules/home/components/HeroSection/HeroSection.tsx
    ↓ (imports)
modules/home/components/HeroSection/TerminalHeader.tsx
    ↓ (uses)
shared/constants/config.ts
```

## 🎯 Benefits of This Architecture

1. **Scalability**: Easy to add new features without affecting existing ones
2. **Maintainability**: Clear structure, easy to find and modify code
3. **Testability**: Each component/hook can be tested in isolation
4. **Reusability**: Shared components and utilities reduce duplication
5. **Team Collaboration**: Clear boundaries, multiple devs can work in parallel
6. **Performance**: Code splitting by feature improves load times
7. **Type Safety**: TypeScript types organized by domain
8. **Consistency**: Naming conventions and patterns throughout

## 🚀 How to Add a New Feature

1. Create new module folder: `src/modules/new-feature/`
2. Create components subfolder with atomic components
3. Create constants file for data
4. Create main page component
5. Add barrel exports (`index.ts`)
6. Create page route in `src/pages/new-feature.tsx`
7. Import and export from module

Example:
```tsx
// src/modules/blog/BlogPage.tsx
export const BlogPage = () => { /* ... */ }

// src/modules/blog/index.ts
export { BlogPage } from "./BlogPage";

// src/pages/blog.tsx
export { BlogPage as default } from "@/modules/blog";
```

## 📝 Component Design Patterns

### Pattern 1: Atomic Components
Break down complex UI into smallest reusable pieces.

```tsx
// ❌ Before: Monolithic component
<HeroSection>
  {/* 200+ lines of mixed UI */}
</HeroSection>

// ✅ After: Atomic components
<HeroSection>
  <TerminalHeader path={terminal} />
  <HeroTitle {...titleData} />
  <BiographyText {...bioData} />
  <QuickStats stats={stats} />
  <AvailabilityBadge {...availability} />
  <CTAButtons />
</HeroSection>
```

### Pattern 2: Data-Driven Components
Separate data from presentation.

```tsx
// constants/homeData.ts
export const HERO_DATA = { /* ... */ };

// HomePage.tsx
<HeroSection {...HERO_DATA} />
```

### Pattern 3: Smart Barrel Exports
Only use barrel exports (`index.ts`) when they provide real value.

**✅ Use for:**
- Multi-component folders (3+ exports)
- Module-level exports
- Type/constant groupings

**❌ Don't use for:**
- Single-component folders
- Unnecessary indirection

```tsx
// ✅ Good: Multi-component folder
// HeroSection/index.ts exports 7 components
import { HeroSection, CTAButtons } from "@/modules/home/components/HeroSection";

// ✅ Good: Group-level barrel
import { MainLayout, Navbar, Footer } from "@/components/layout";

// ❌ Avoid: Single-component barrel
// AboutHeader/index.ts only exports AboutHeader.tsx (unnecessary layer)
import { AboutHeader } from "./AboutHeader/AboutHeader"; // Direct is better
```

## 🎨 Style Management

Styles are extracted to `.styles.ts` files:

```typescript
// Home.styles.ts
export const homeStyles = {
  cyberButton: {
    position: "relative" as const,
    // ... styles
  },
};

export const homeKeyframes = `
  @keyframes scan-line { /* ... */ }
`;
```

## 🔧 TypeScript Types Organization

```
shared/types/
├── common.types.ts     # Base types (ColorVariant, DifficultyLevel)
├── project.types.ts    # Project-specific types
├── skill.types.ts      # Skill-specific types
├── social.types.ts     # Social link types
└── index.ts            # Barrel export
```

## 📈 Migration from Old Structure

**Before** (827-line file):
```
pages/index.tsx (827 lines)
```

**After** (Modular):
```
modules/home/
├── HomePage.tsx (50 lines)
├── components/
│   ├── HeroSection/ (7 atomic components)
│   ├── ExpertisePanel/
│   ├── KeyHighlightsPanel/
│   └── DashboardCards/ (5 sub-components)
└── constants/homeData.ts (150 lines)
```

## ✅ Quality Checklist

- ✅ No linter errors or warnings
- ✅ All imports use absolute paths with `@/`
- ✅ Barrel exports (`index.ts`) for all modules
- ✅ TypeScript types properly defined
- ✅ Constants extracted from components
- ✅ Styles separated into `.styles.ts` files
- ✅ Single Responsibility per component
- ✅ Proper component composition
- ✅ Consistent naming conventions
- ✅ No code duplication

## 🎓 Best Practices

1. **Keep components small** (<100 lines)
2. **Use barrel exports** for cleaner imports
3. **Extract constants** from components
4. **Separate styles** into `.styles.ts` files
5. **Type everything** with TypeScript
6. **Follow naming conventions** consistently
7. **Use atomic design** for component composition
8. **Keep modules independent** (loose coupling)
9. **Document complex logic** with comments
10. **Write testable code** with clear boundaries

---

**Last Updated**: October 2025  
**Architecture Version**: 1.0.0  
**Refactored By**: Buldak (Principal Software Engineer)

