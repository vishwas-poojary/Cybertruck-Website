# Tesla Cybertruck – Frontend Development Assignment Replica

> Pixel-perfect replica of the official [Tesla Cybertruck](https://www.tesla.com/cybertruck) website, built with modern frontend engineering principles, smooth scroll animations, rich interactivity, and responsive design.

---

## ⚡ Live Demonstration
- **Live URL**: [https://GouthamKumar19.github.io/Tesla-Cybertruck/](https://GouthamKumar19.github.io/Tesla-Cybertruck/) *(or your GitHub Pages domain)*
- **Reference Website**: [https://www.tesla.com/cybertruck](https://www.tesla.com/cybertruck)

---

## 🛠 Technical Stack
- **Framework**: [Astro 5](https://astro.build/) (Static Site Generation with zero JavaScript overhead by default)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict type safety, 0 compiler warnings/errors)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + Custom Cybertruck angular clip paths & metallic shaders
- **Smooth Scrolling**: [Lenis](https://lenis.darkroom.engineering/) (Automotive luxury smooth-wheel inertia scroll)
- **Animations**: [GSAP](https://greensock.com/gsap/) + ScrollTrigger (Scroll-driven section transitions & reveals)
- **Interactive Audio**: Custom Web Audio API synthesizer for tactile cybernetic audio feedback (100% offline, 0 external mp3 dependencies)
- **Deployment**: GitHub Pages via automated GitHub Actions CI/CD workflow

---

## 🚀 Key Features & Interactive Replications

### 1. Top Promotional Banner & Header Navigation
- **Gold Trade-In Banner**: Authentic `#dfc397` sand banner highlighting *"Trade In Your Gas Car and Receive 2,000 Free Supercharging Miles"* with *"Get a Trade-In Estimate"* black pill button and pagination toggle.
- **Tesla Wordmark**: Exact letter-spaced vector logo.
- **Header Items**: `Vehicles`, `Energy`, `Charging`, `Robotaxi`, `Semi`, `Discover`, `Shop`.
- **Right Utility Icons**: Help circle `(?)`, Language globe, and Account profile circle.
- **Pixel-Perfect White Mega Menu**: Opens seamlessly on hover with pure white background, exact product renders from Tesla CDN, and categorized right-hand link columns for:
  - **Vehicles**: Model 3, Model Y, Cybertruck, Roadster, Full Self-Driving (Supervised), and Inventory + 13 model/service links.
  - **Energy**: Solar Panels, Powerwall, Megapack + Consultation & utility links.
  - **Charging**: Mobile Connector, Home Charging, Supercharging, Commercial Superchargers + voting and NACS links.
  - **Robotaxi**: Autonomous Cybercab showcase + safety & first responder links.
  - **Semi**: Heavy duty electric hauler specs & fleet inquiries.

### 2. Authentic Cybertruck Hero Section
- **Background**: High-resolution dusk photography of Cybertruck perched on rocky desert terrain (`Cybertruck-Hero-Desktop-v2.jpg`).
- **Official Cybertruck Graffiti Logo**: Pure vector SVG spray-paint graffiti brandmark with *"Lease From $1,129/mo"* link.
- **Hero CTA Buttons**:
  - `Order Now`: Signature Tesla Electric Blue (`#3e6ae1`).
  - `Compare Models`: Clean solid white with dark typography.
- **Rock Ledge Specification Badges**:
  - `5-Star` Safety Rating¹
  - `325 mi` Range (EPA est.)²
  - `6'x4'` Bed
- **Floating Interactive Bar**:
  - *"Ask a Question: 'Where can I drive the Cybertruck?'"* search pill.
  - *"Schedule a Drive Today"* pill with steering wheel icon that triggers the test drive modal.

### 3. Built for Any Adventure (Adaptive Air Suspension)
- 12" air suspension travel and up to 17.4" ground clearance in Extract Mode.
- **Interactive Ride-Height Scrubber**: Switch between Entry (8.0"), Low (10.5"), Medium (12.0"), High (16.0"), and Extract Mode (17.4").
- Live pneumatic suspension hiss audio and vehicle ride-height shift.

### 4. No Paint, No Chips (30X Stainless Steel Exoskeleton)
- SpaceX Starship cold-rolled alloy structural skin.
- **Interactive Durability Simulator**: Test impacts using Sledgehammer, 9mm Tommy Gun, or Shopping Cart with realistic deflection physics, spark ripples, and impact sounds.

### 5. Shatter-Resistant Armor Glass
- Acoustic isolation glass resisting 70 mph baseballs and Class 4 severe hail.
- **Interactive Impact Demo**: Click window target to trigger acoustic sound wave ripple absorption.

### 6. The Vault & Cargo Utility
- 6' x 4' composite truck bed with 2,500 lbs payload capacity and 67 cu. ft. lockable storage.
- **Interactive Motorized Tonneau Cover**: Click to toggle motorized cover open and closed in real-time.

### 7. Power on Tap (PowerShare)
- 120V & 240V bed and cabin outlets with 11.5 kW bidirectional home backup.
- **Interactive Power Load Calculator**: Toggle connected appliances (HVAC, Lighting, Heavy Bed Tools, EV-to-EV Rescue) with real-time kW output and outage backup days calculation.

### 8. Cyber Cabin Interior
- Minimalist cockpit with 18.5" front infinity touchscreen and 9.4" rear display.
- **Interactive Hotspot Tour**: Click numbered radar hotspots for detailed feature breakdowns.
- **Interior Theme Switcher**: Toggle between Tactical Grey and Laser White finishes.

### 9. Beast Mode Performance (0-60 in 2.6s)
- 845 HP Tri-Motor AWD with Steer-by-Wire and rear-wheel steering.
- **Interactive Launch Simulator**: Press the accelerator pedal to experience simulated 0-60 launch with live speedometer revving, G-force meter, timer, and electric motor sound synthesis.

### 10. 800V Architecture & Range Calculator
- 340 miles standard range, up to 470+ miles with bed-mounted Range Extender.
- **Interactive Conditions Estimator**: Adjust cruising speed, ambient temperature, heavy towing trailer, and battery pack configuration.

### 11. Complete Technical Specifications Table
- Comprehensive engineering matrix comparing **Cyberbeast**, **All-Wheel Drive**, and **Rear-Wheel Drive** across acceleration, top speed, towing, curb weight, dimensions, and charging speeds.

### 12. Factory Gear & Accessories
- Filterable product catalog (Adventure, Utility, Interior) featuring Basecamp Tent, 51" Lightbar, Tailgate Ramp, Crossbars, and All-Weather Mats.
- Interactive "Add to Order" build action.

### 13. Interactive Design Studio & Order Configurator
- Real-time custom color wrap visualizer (Bare Stainless Steel, Satin Stealth Black, Satin Ceramic White, Tactical Olive Green, Cyber Crimson).
- Full Self-Driving (Supervised) option toggle.
- Real-time total purchase price & estimated monthly lease calculation.
- Reservation confirmation modal with deposit confirmation.

### 14. Demo Drive Booking Modal
- Complete schedule test drive form with location selector, vehicle model preference, and instant booking confirmation.

### 15. Official Tesla Global Footer
- Full legal links, copyright, privacy policy, vehicle recall notices, and disclosures.

---

## 💻 Local Development Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/<your-username>/Tesla-Cybertruck.git
   cd Tesla-Cybertruck
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:4321](http://localhost:4321) in your browser.

4. **Type Check**:
   ```bash
   npm run build
   ```

---

## 📦 Deployment to GitHub Pages

This repository includes a ready-to-use GitHub Actions workflow (`.github/workflows/deploy.yml`):

1. Push this repository to your GitHub account:
   ```bash
   git init
   git add .
   git commit -m "feat: complete Tesla Cybertruck website replica"
   git branch -M main
   git remote add origin https://github.com/<your-username>/Tesla-Cybertruck.git
   git push -u origin main
   ```

2. Enable GitHub Pages:
   - On GitHub, navigate to **Settings** > **Pages**.
   - Under **Build and deployment** > **Source**, select **GitHub Actions**.

3. The automated workflow will build and deploy the site in ~1 minute.

4. Invite collaborator:
   - Go to **Settings** > **Collaborators** > **Add people**.
   - Search and invite **`GouthamKumar19`**.

---

## 📄 License
This project is created strictly for educational and evaluation purposes as part of a frontend development assignment replicating the Tesla Cybertruck design and interactive UI.

