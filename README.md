# 🌍 The Uwezo Network Initiative Portal

![The Uwezo Network Initiative Logo](/public/images/new-uwezo-logo.jpeg)

**The Uwezo Network Initiative** is a registered National Non-Governmental Organization (NGO) in Kenya that bridges high-level technology capabilities with grassroots community empowerment. We co-design, build, and deploy digital and social infrastructures that eliminate period poverty, bridge the digital divide through AI and STEM learning, and turn youth civic energy into structured public participation.

This repository hosts the official frontend portal of the organization, designed with a premium, high-contrast Neo-Brutalist design language.

---

## 📌 Core Pillars & Programs

### 1. 🩸 Days for Dignity (Health Equity & Digital Dignity)
- **Problem**: Over 65% of girls in rural/slum areas miss school due to a lack of sanitary towels.
- **Solution**: An offline-first digital voucher and loyalty system that allows girls to redeem sanitary towels securely from local shopkeepers.
- **Impact**: 100+ girls mentored, 800+ classroom days saved, and 3+ SRHR workshops held.

### 2. 💻 Tech for Tomorrow (STEM & AI Learning)
- **Problem**: 67% of Kenyan youth face unemployment due to systemic digital and computing skill gaps.
- **Solution**: Rural-friendly mobile makerspaces, hardware labs, and digital literacy instruction directly in public classrooms.
- **Impact**: 30+ students reached, IoT smart agriculture kits deployed, and a 92% program completion rate.

### 3. 🗳️ Civic Power in Motion (Civic & Democratic Engagement)
- **Problem**: Translating youth online engagement into formal policy representation and county-level accountability.
- **Solution**: Micro-workshops, inclusive voter registration tools, and budget transparency bots.
- **Impact**: 25+ community leaders mentored for public offices, and active budget tracking in counties.

---

## 🚀 Performance Optimizations & Features

- ⚡ **Neo-Brutalist Aesthetic**: Premium custom typography, vibrant color palettes, retro borders, and interactive card designs.
- 📱 **Mobile-First Responsiveness**: Horizontal scroll-snapping on mobile viewports for all grid components (UN SDGs, Leadership Cards, Blog Articles, Impact Metrics) to optimize vertical space.
- 🕒 **Dynamic Periodic Counters**: Smooth counting animations on mount that continue to fluctuate/increment from time to time, simulating live, real-time data feeds.
- 📁 **Optimized Bundle Size**: Deleted 38 unused component files and Shadcn UI primitives, reducing the production CSS bundle size by **38%** (down to `51.86 kB` from `83.91 kB`).
- 🔒 **Newsletter route tracking**: LocalStorage modal state listening combined with route change detectors to ensure popups close on navigation and respect user dismissal preferences.

---

## 🏗️ Technical Architecture

| Component | Technology |
|---|---|
| **Core Framework** | React 18 + TypeScript + Vite |
| **Styling** | Tailwind CSS (Neo-brutalist theme configuration) |
| **Icons** | Lucide React |
| **Animation** | Framer Motion + Custom CSS transitions |
| **Routing** | React Router DOM v6 |

---

## 📂 Directory Layout

```bash
📦 uwezo-connect-hub
├── 📁 public                 # Static assets (images, PDFs, favicons)
│   └── 📁 downloads          # Organization policy frameworks and toolkits
├── 📁 src
│   ├── 📁 components         # Core reusable components (Header, Footer, LazyImage)
│   │   └── 📁 ui             # Core Tailwind UI primitives (Button, Input, Dialog, etc.)
│   ├── 📁 data               # Static databases and datasets (team profiles, program specs)
│   ├── 📁 hooks              # Custom React hooks (use-toast)
│   ├── 📁 pages              # Route views (Index, AboutUs, Programs, Blog, Careers)
│   ├── 📁 types              # Global TypeScript interfaces
│   ├── 📄 App.tsx            # Routes configuration & global context providers
│   ├── 📄 index.css          # Design system stylesheet
│   └── 📄 main.tsx           # Vite entrypoint
├── 📄 index.html             # HTML shell & Favicon setup
├── 📄 package.json           # Project dependencies
└── 📄 vite.config.ts         # Vite compilation settings
```

---

## 💻 Setup & Local Development

### 1️⃣ Clone the repository
```bash
git clone https://github.com/koja254/uwezo-connect-hub.git
cd uwezo-connect-hub
```

### 2️⃣ Install dependencies
```bash
npm install
```

### 3️⃣ Start local development server
```bash
npm run dev
```
The application will run locally at [http://localhost:5173/](http://localhost:5173/).

### 4️⃣ Verify production build
```bash
npm run build
```

---

## 📧 Contacts & General Inquiries

- 📩 **General Email**: [info@uwezolinkinitiative.org](mailto:info@uwezolinkinitiative.org)
- ✉️ **Gmail Secondary**: [uwezolinkinitiative@gmail.com](mailto:uwezolinkinitiative@gmail.com)
- 📞 **Phone number**: +254 789 914 719
- 🌍 **Portal Link**: [uwezolinkinitiative.org](https://689b51b9c619e0fa72707073--gorgeous-seahorse-93fdcc.netlify.app/)
