# Implementation Plan: Flutter Developer Portfolio

## Overview

This implementation plan breaks down the development of a modern, professional portfolio website for Debabrata Dutta into sequential, actionable tasks. The portfolio will be built using React, Vite, Tailwind CSS, and Framer Motion, featuring responsive design, smooth animations, and comprehensive accessibility support.

The implementation follows a bottom-up approach: starting with project setup and foundational components, then building individual sections, integrating animations, and finally adding testing, optimization, and deployment configuration.

## Tasks

- [x] 1. Initialize project structure and dependencies
  - Create new Vite + React project
  - Install dependencies: tailwindcss, framer-motion, react-icons
  - Configure Tailwind CSS with custom theme (colors, fonts, animations)
  - Set up project directory structure (components, data, hooks, utils)
  - Create base index.html with SEO meta tags and favicon links
  - _Requirements: 12.1, 12.2, 12.3, 12.4, 14.1, 14.2, 14.3, 14.4_

- [x] 2. Create data configuration files
  - [x] 2.1 Create profile data configuration
    - Create src/data/profile.js with developer information (name, role, tagline, experience, location, contact)
    - Include social links array with platform, URL, and icon mappings
    - _Requirements: 2.2, 2.3, 2.4, 3.1, 3.2, 8.1, 8.2, 8.3_
  
  - [x] 2.2 Create skills data configuration
    - Create src/data/skills.js with four skill categories
    - Include Mobile Development skills (Flutter, Dart, Android, iOS)
    - Include State Management skills (GetX, Riverpod, Provider, BLoC)
    - Include Backend & APIs skills (REST APIs, Firebase, Firestore, Authentication, Socket.IO, WebSockets)
    - Include Cloud & AI skills (Google Cloud Platform, LLM Integration, RAG Systems)
    - Map each skill to appropriate React Icon component
    - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5_
  
  - [x] 2.3 Create projects data configuration
    - Create src/data/projects.js with project entries
    - Include project name, description, technologies, image URL, optional demoUrl and codeUrl
    - _Requirements: 5.1, 5.2, 5.3, 5.4_
  
  - [x] 2.4 Create experience data configuration
    - Create src/data/experience.js with work history entries
    - Include job title, company, duration, responsibilities, technologies, and optional achievements
    - Order entries in reverse chronological order (most recent first)
    - _Requirements: 6.1, 6.2, 6.4_
  
  - [x] 2.5 Create achievements data configuration
    - Create src/data/achievements.js with achievements, awards, and certifications
    - Include title, organization, date, and optional verificationUrl
    - _Requirements: 7.1, 7.2, 7.3_

- [x] 3. Implement utility functions and custom hooks
  - [x] 3.1 Create scroll utility function
    - Create src/utils/scrollTo.js with smooth scroll implementation
    - Include offset parameter for fixed header compensation
    - Add fallback for browsers without smooth scroll support
    - _Requirements: 1.2, 1.7_
  
  - [x] 3.2 Create animation variants utility
    - Create src/utils/animations.js with Framer Motion animation variants
    - Include fadeInVariants, slideUpVariants, slideInVariants, staggerContainerVariants, scaleOnHoverVariants
    - Ensure all animation durations are ≤ 500ms
    - _Requirements: 10.1, 10.2, 10.4_
  
  - [x] 3.3 Create useScrollSpy hook
    - Create src/hooks/useScrollSpy.js using Intersection Observer API
    - Track currently visible section and return active section ID
    - Configure threshold for section activation
    - _Requirements: 1.3_
  
  - [x] 3.4 Create useIntersectionObserver hook
    - Create src/hooks/useIntersectionObserver.js for generic element visibility tracking
    - Return isIntersecting and hasIntersected states
    - _Requirements: 10.1_
  
  - [x] 3.5 Create useMobileMenu hook
    - Create src/hooks/useMobileMenu.js for mobile menu state management
    - Implement open, close, toggle functions
    - Add body scroll lock when menu is open
    - _Requirements: 1.5, 1.6, 1.7_

- [x] 4. Build reusable UI components
  - [x] 4.1 Create Button component
    - Create src/components/ui/Button.jsx with variant and size props
    - Support primary, secondary, and outline variants
    - Support sm, md, lg sizes
    - Add hover and active state animations with Framer Motion
    - Support both button and link (href) behavior
    - Include proper ARIA attributes for accessibility
    - Ensure minimum 44x44px touch target on mobile
    - _Requirements: 2.5, 10.2, 10.3, 13.2, 9.5_
  
  - [ ]* 4.2 Write property test for Button component
    - **Property 13: Interactive Element Hover Effects**
    - **Property 16: Button Click Feedback**
    - **Property 20: Keyboard Accessibility**
    - **Property 14: Touch Target Minimum Size**
    - **Validates: Requirements 4.7, 10.2, 10.3, 13.2, 9.5**
  
  - [x] 4.3 Create Card component
    - Create src/components/ui/Card.jsx with children and className props
    - Add optional hoverable prop for lift effect
    - Apply consistent padding, border radius, shadow, and background
    - _Requirements: 3.5_
  
  - [x] 4.4 Create AnimatedSection component
    - Create src/components/ui/AnimatedSection.jsx using useIntersectionObserver hook
    - Support fade, slideUp, slideLeft, slideRight animation types
    - Add configurable delay prop for staggered animations
    - Trigger animation once when section enters viewport
    - _Requirements: 10.1, 10.4_
  
  - [ ]* 4.5 Write property test for AnimatedSection component
    - **Property 15: Section Entry Animations**
    - **Property 17: Animation Duration Limit**
    - **Validates: Requirements 10.1, 10.4**
  
  - [x] 4.6 Create SkillCard component
    - Create src/components/ui/SkillCard.jsx displaying skill icon and name
    - Add hover animation effect
    - _Requirements: 4.6, 4.7_
  
  - [x] 4.7 Create ProjectCard component
    - Create src/components/ui/ProjectCard.jsx displaying project information
    - Include project image with lazy loading (loading="lazy" attribute)
    - Display project name, description, and technology tags
    - Conditionally render "View Demo" button if demoUrl exists
    - Conditionally render "View Code" button if codeUrl exists
    - Add hover overlay effect
    - Ensure all images have alt text
    - Open external links in new tab (target="_blank" rel="noopener noreferrer")
    - _Requirements: 5.2, 5.3, 5.4, 5.5, 5.6, 11.2, 13.1_
  
  - [ ]* 4.8 Write property tests for ProjectCard component
    - **Property 3: Project Information Completeness**
    - **Property 4: Conditional Demo Button Display**
    - **Property 5: Conditional Code Button Display**
    - **Property 6: External Links Open in New Tab**
    - **Property 18: Image Lazy Loading**
    - **Property 19: Image Alt Text Presence**
    - **Validates: Requirements 5.2, 5.3, 5.4, 5.5, 5.6, 11.2, 13.1**
  
  - [x] 4.9 Create ExperienceCard component
    - Create src/components/ui/ExperienceCard.jsx displaying experience entry
    - Display job title, company name, duration, and responsibilities list
    - Display technology tags
    - Conditionally display achievements if present
    - Use timeline or card-based layout
    - _Requirements: 6.2, 6.4_
  
  - [ ]* 4.10 Write property tests for ExperienceCard component
    - **Property 8: Experience Entry Completeness**
    - **Property 9: Experience Achievements Display**
    - **Validates: Requirements 6.2, 6.4**

- [x] 5. Implement layout components
  - [x] 5.1 Create Navigation component
    - Create src/components/layout/Navigation.jsx with sticky positioning
    - Display developer name as logo
    - Display menu items for Home, About, Skills, Projects, Experience, Achievements, Contact
    - Highlight active section using useScrollSpy hook
    - Implement smooth scroll on menu item click
    - Show hamburger menu icon on mobile (viewport < 768px)
    - Add backdrop blur effect
    - Use semantic <nav> element
    - Ensure keyboard accessibility for all menu items
    - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 13.2, 13.4_
  
  - [ ]* 5.2 Write property tests for Navigation component
    - **Property 1: Menu Navigation Scrolling**
    - **Property 2: Navigation Bar Visibility**
    - **Property 22: Semantic HTML Usage**
    - **Validates: Requirements 1.2, 1.3, 1.7, 13.4**
  
  - [x] 5.3 Create MobileMenu component
    - Create src/components/layout/MobileMenu.jsx with slide-in animation
    - Display full-height menu with navigation items
    - Add backdrop overlay with click-to-close functionality
    - Close menu on navigation item click
    - Trap focus within menu when open
    - _Requirements: 1.6, 1.7_
  
  - [x] 5.4 Create Footer component
    - Create src/components/layout/Footer.jsx with copyright and links
    - Use semantic <footer> element
    - _Requirements: 13.4_

- [x] 6. Implement section components
  - [x] 6.1 Create Hero section
    - Create src/components/sections/Hero.jsx with full viewport height
    - Display developer name, role, and tagline with animations
    - Add animated gradient background or particle effect
    - Display three action buttons: "Download Resume", "View Projects", "Contact Me"
    - Implement resume download on button click
    - Implement smooth scroll to Projects section on "View Projects" click
    - Implement smooth scroll to Contact section on "Contact Me" click
    - Use semantic <section> element with appropriate heading hierarchy
    - Ensure responsive text sizing
    - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8, 2.9, 13.4_
  
  - [x] 6.2 Create About section
    - Create src/components/sections/About.jsx wrapped in AnimatedSection
    - Display professional summary from profile data
    - Display years of experience, domains, and specializations
    - Use card-based layout for information presentation
    - Use semantic <section> element
    - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5, 13.4_
  
  - [x] 6.3 Create Skills section
    - Create src/components/sections/Skills.jsx wrapped in AnimatedSection
    - Display four skill categories in grid layout
    - Render SkillCard components for each skill with icon
    - Add staggered entry animations
    - Implement responsive grid (1 col mobile, 2 col tablet, 4 col desktop)
    - Use semantic <section> element
    - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5, 4.6, 4.7, 9.1, 9.2, 9.3, 13.4_
  
  - [ ]* 6.4 Write property test for Skills section
    - **Property 12: Skill Icon Presence**
    - **Validates: Requirements 4.6**
  
  - [x] 6.5 Create Projects section
    - Create src/components/sections/Projects.jsx wrapped in AnimatedSection
    - Display project list using ProjectCard components
    - Implement responsive grid (1 col mobile, 2 col tablet, 3 col desktop)
    - Use semantic <section> element
    - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5, 5.6, 9.1, 9.2, 9.3, 13.4_
  
  - [x] 6.6 Create Experience section
    - Create src/components/sections/Experience.jsx wrapped in AnimatedSection
    - Display experience entries using ExperienceCard components
    - Ensure chronological ordering (most recent first)
    - Use semantic <section> element
    - _Requirements: 6.1, 6.2, 6.4, 13.4_
  
  - [ ]* 6.7 Write property test for Experience section
    - **Property 7: Experience Chronological Ordering**
    - **Validates: Requirements 6.1**
  
  - [x] 6.8 Create Achievements section
    - Create src/components/sections/Achievements.jsx wrapped in AnimatedSection
    - Display achievement list with title, organization, and date
    - Conditionally display verification link if verificationUrl exists
    - Open verification links in new tab
    - Use semantic <section> element
    - _Requirements: 7.1, 7.2, 7.3, 13.4_
  
  - [ ]* 6.9 Write property tests for Achievements section
    - **Property 10: Achievement Information Completeness**
    - **Property 11: Conditional Verification Link Display**
    - **Validates: Requirements 7.2, 7.3**
  
  - [x] 6.10 Create Contact section
    - Create src/components/sections/Contact.jsx wrapped in AnimatedSection
    - Display location, phone number, and portfolio link
    - Display social media links with icons
    - Make phone number and links clickable
    - Open external links in new tab
    - Use semantic <section> element
    - _Requirements: 8.1, 8.2, 8.3, 8.4, 8.5, 13.4_

- [x] 7. Integrate components in main App
  - [x] 7.1 Create main App component
    - Create src/App.jsx importing all section components
    - Render Navigation component at top
    - Render all sections in order: Hero, About, Skills, Projects, Experience, Achievements, Contact
    - Render Footer component at bottom
    - Use semantic <main> element to wrap main content
    - Ensure logical document structure with proper heading hierarchy
    - _Requirements: 13.4, 14.5_
  
  - [ ]* 7.2 Write property test for semantic HTML structure
    - **Property 22: Semantic HTML Usage**
    - **Validates: Requirements 13.4, 14.5**
  
  - [x] 7.3 Create main entry point
    - Create src/main.jsx with React root rendering
    - Import and apply global Tailwind CSS styles
    - _Requirements: 12.1, 12.2_

- [x] 8. Checkpoint - Ensure all components render correctly
  - Ensure all tests pass, ask the user if questions arise.

- [x] 9. Implement responsive design
  - [x] 9.1 Configure Tailwind responsive breakpoints
    - Verify mobile-first breakpoints (sm: 640px, md: 768px, lg: 1024px, xl: 1280px)
    - _Requirements: 9.1, 9.2, 9.3, 9.4_
  
  - [x] 9.2 Add responsive classes to all components
    - Apply mobile-first responsive classes for layout, typography, and spacing
    - Test mobile layout (< 640px), tablet layout (640-1024px), desktop layout (> 1024px)
    - Ensure all interactive elements have minimum 44x44px touch targets on mobile
    - _Requirements: 9.1, 9.2, 9.3, 9.5_
  
  - [ ]* 9.3 Write property test for touch target sizes
    - **Property 14: Touch Target Minimum Size**
    - **Validates: Requirements 9.5**

- [x] 10. Implement accessibility features
  - [x] 10.1 Add ARIA labels and attributes
    - Add aria-label to icon-only buttons and navigation elements
    - Add aria-current to active navigation item
    - Add aria-expanded to mobile menu toggle
    - _Requirements: 13.2_
  
  - [x] 10.2 Implement keyboard navigation
    - Ensure all interactive elements are focusable with Tab key
    - Ensure all buttons/links respond to Enter and Space keys
    - Add visible focus indicators with focus-visible styles
    - Implement focus trap in mobile menu
    - _Requirements: 13.2, 13.3_
  
  - [ ]* 10.3 Write property tests for keyboard accessibility
    - **Property 20: Keyboard Accessibility**
    - **Property 21: Logical Tab Order**
    - **Validates: Requirements 13.2, 13.3**
  
  - [x] 10.3 Add skip-to-content link
    - Add "Skip to main content" link at top of page for keyboard users
    - Style with sr-only class, visible on focus
    - _Requirements: 13.2_
  
  - [x] 10.4 Verify color contrast ratios
    - Ensure all text meets WCAG AA contrast requirements (4.5:1 for normal text, 3:1 for large text)
    - Test with browser DevTools or contrast checker tool
    - _Requirements: 13.5_
  
  - [ ]* 10.5 Write property test for color contrast
    - **Property 23: Text Color Contrast**
    - **Validates: Requirements 13.5**

- [x] 11. Optimize performance
  - [x] 11.1 Implement code splitting
    - Use React.lazy() for section components
    - Add Suspense boundaries with loading fallbacks
    - _Requirements: 11.4_
  
  - [x] 11.2 Optimize images
    - Convert images to WebP format with fallbacks
    - Add responsive images with srcset for different screen sizes
    - Compress images for web delivery
    - Verify lazy loading on all below-fold images
    - _Requirements: 11.2, 11.3_
  
  - [x] 11.3 Configure Vite build optimization
    - Configure manual chunks for vendor and animation libraries
    - Enable tree-shaking for Tailwind CSS
    - Disable sourcemaps in production build
    - _Requirements: 11.4, 12.7_
  
  - [x] 11.4 Test initial load performance
    - Run Lighthouse audit and verify load time < 3 seconds
    - Verify performance scores > 90
    - _Requirements: 11.1_

- [x] 12. Checkpoint - Ensure performance targets met
  - Ensure all tests pass, ask the user if questions arise.

- [x] 13. Configure build and deployment
  - [x] 13.1 Configure Vite for production
    - Update vite.config.js with base path for deployment
    - Configure build output directory
    - Add React plugin configuration
    - _Requirements: 12.5, 12.6, 12.7_
  
  - [x] 13.2 Add build scripts to package.json
    - Add dev, build, preview, and lint scripts
    - _Requirements: 12.5, 12.6_
  
  - [x] 13.3 Create deployment configuration
    - Add GitHub Pages deployment script or configuration
    - Create .github/workflows/deploy.yml for automated deployment (optional)
    - _Requirements: 12.7_
  
  - [x] 13.4 Test production build
    - Run production build and verify output
    - Test preview build locally
    - Verify all assets load correctly
    - _Requirements: 12.7_

- [ ] 14. Setup testing infrastructure
  - [x] 14.1 Configure Vitest and React Testing Library
    - Install vitest, @testing-library/react, @testing-library/jest-dom
    - Create vitest.config.js with React Testing Library setup
    - Create test setup file with custom matchers
  
  - [x] 14.2 Configure fast-check for property-based testing
    - Install fast-check library
    - Create test data generators (projectGenerator, experienceGenerator, achievementGenerator, skillGenerator)
  
  - [x] 14.3 Configure jest-axe for accessibility testing
    - Install jest-axe and @axe-core/react
    - Add accessibility test utilities
  
  - [ ]* 14.4 Write unit tests for components
    - Write unit tests for Button, Card, SkillCard, ProjectCard, ExperienceCard components
    - Write unit tests for Navigation, MobileMenu, Hero, About, Skills, Projects, Experience, Achievements, Contact sections
    - Test specific content rendering, interactions, and edge cases
    - Aim for 80%+ line coverage

- [x] 15. Final integration and polish
  - [x] 15.1 Add error boundaries
    - Create ErrorBoundary component for graceful error handling
    - Wrap main App with ErrorBoundary
  
  - [x] 15.2 Add loading states
    - Add loading spinners or skeletons for lazy-loaded components
    - Add image loading placeholders
  
  - [x] 15.3 Handle empty data states
    - Display "Coming soon" messages for empty projects, experiences, or achievements arrays
    - Test with empty data configurations
  
  - [x] 15.4 Add reduced motion support
    - Add prefers-reduced-motion media query support
    - Disable animations for users who prefer reduced motion
  
  - [x] 15.5 Final cross-browser testing
    - Test in Chrome, Firefox, Safari, Edge
    - Test on iOS Safari and Android Chrome
    - Verify Intersection Observer and smooth scroll polyfills work

- [x] 16. Final checkpoint - Complete testing and validation
  - Ensure all tests pass, ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP delivery
- Each task references specific requirements for traceability
- Checkpoints ensure incremental validation and provide opportunities for user feedback
- Property tests validate universal correctness properties with 100+ iterations each
- Unit tests validate specific examples, edge cases, and component behavior
- All animations must complete within 500ms per requirement 10.4
- All interactive elements must have minimum 44x44px touch targets on mobile per requirement 9.5
- All external links must open in new tabs with proper security attributes per requirements 5.5, 5.6, 8.5
- The implementation uses JavaScript/JSX with React, Vite, Tailwind CSS, and Framer Motion
