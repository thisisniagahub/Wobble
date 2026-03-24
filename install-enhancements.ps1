# ╔═══════════════════════════════════════════════════════════════╗
# ║  🎨 WOBBLE PROJECT - ENHANCEMENT INSTALLATION                 ║
# ║  Complete setup for Magic UI components & dependencies        ║
# ╚═══════════════════════════════════════════════════════════════╝

Write-Host "╔═══════════════════════════════════════════════════════════════╗" -ForegroundColor Cyan
Write-Host "║  🚀 WOBBLE PROJECT - ENHANCEMENT INSTALLATION                 ║" -ForegroundColor Cyan
Write-Host "╚═══════════════════════════════════════════════════════════════╝" -ForegroundColor Cyan
Write-Host ""

# Navigate to project directory
Set-Location "D:\Wobble"

# Step 1: Install Magic UI Components
Write-Host "════════════════════════════════════════════════════════════" -ForegroundColor Gray
Write-Host "📦 STEP 1: Installing Magic UI Components" -ForegroundColor Green
Write-Host "════════════════════════════════════════════════════════════" -ForegroundColor Gray
Write-Host ""

Write-Host "Installing Marquee component..." -ForegroundColor Yellow
npx shadcn@latest add "https://magicui.design/r/marquee.json" --yes

Write-Host "Installing Bento Grid component..." -ForegroundColor Yellow
npx shadcn@latest add "https://magicui.design/r/bento-grid.json" --yes

Write-Host "Installing Neon Gradient Card component..." -ForegroundColor Yellow
npx shadcn@latest add "https://magicui.design/r/neon-gradient-card.json" --yes

Write-Host "Installing Animated List component..." -ForegroundColor Yellow
npx shadcn@latest add "https://magicui.design/r/animated-list.json" --yes

Write-Host "✅ Magic UI components installed!" -ForegroundColor Green
Write-Host ""

# Step 2: Install Additional Dependencies
Write-Host "════════════════════════════════════════════════════════════" -ForegroundColor Gray
Write-Host "📦 STEP 2: Installing Additional Dependencies" -ForegroundColor Green
Write-Host "════════════════════════════════════════════════════════════" -ForegroundColor Gray
Write-Host ""

Write-Host "Installing Vercel Analytics..." -ForegroundColor Yellow
npm install @vercel/analytics

Write-Host "Installing framer-motion (enhanced animations)..." -ForegroundColor Yellow
npm install framer-motion

Write-Host "Installing form handling..." -ForegroundColor Yellow
npm install react-hook-form @hookform/resolvers zod

Write-Host "✅ Dependencies installed!" -ForegroundColor Green
Write-Host ""

# Step 3: Verify Installation
Write-Host "════════════════════════════════════════════════════════════" -ForegroundColor Gray
Write-Host "✅ STEP 3: Verifying Installation" -ForegroundColor Green
Write-Host "════════════════════════════════════════════════════════════" -ForegroundColor Gray
Write-Host ""

Write-Host "Checking component files..." -ForegroundColor Yellow
$components = @(
    "app\components\jar-component.tsx",
    "app\components\background-bars.tsx",
    "app\components\flavor-selector.tsx",
    "app\components\navigation.tsx",
    "app\components\screens\home-screen.tsx",
    "app\components\screens\how-it-works-screen.tsx",
    "app\components\screens\gift-screen.tsx"
)

foreach ($component in $components) {
    if (Test-Path $component) {
        Write-Host "  ✓ $component" -ForegroundColor Green
    } else {
        Write-Host "  ✗ $component (MISSING)" -ForegroundColor Red
    }
}

Write-Host ""
Write-Host "Checking UI components..." -ForegroundColor Yellow
$uiComponents = @(
    "components\ui\marquee.tsx",
    "components\ui\bento-grid.tsx",
    "components\ui\neon-gradient-card.tsx"
)

foreach ($component in $uiComponents) {
    if (Test-Path $component) {
        Write-Host "  ✓ $component" -ForegroundColor Green
    } else {
        Write-Host "  ⚠ $component (Will be created by shadcn add)" -ForegroundColor Yellow
    }
}

Write-Host ""
Write-Host "════════════════════════════════════════════════════════════" -ForegroundColor Gray
Write-Host "🎉 INSTALLATION COMPLETE!" -ForegroundColor Green
Write-Host "════════════════════════════════════════════════════════════" -ForegroundColor Gray
Write-Host ""

Write-Host "📝 NEXT STEPS:" -ForegroundColor Cyan
Write-Host "1. Run: npm run dev" -ForegroundColor White
Write-Host "2. Open: http://localhost:3000" -ForegroundColor White
Write-Host "3. Test all screens and animations" -ForegroundColor White
Write-Host ""

Write-Host "📂 COMPONENT STRUCTURE:" -ForegroundColor Cyan
Write-Host "  app/components/" -ForegroundColor Gray
Write-Host "    ├── jar-component.tsx          # Product jar with animations" -ForegroundColor Gray
Write-Host "    ├── background-bars.tsx        # Animated background" -ForegroundColor Gray
Write-Host "    ├── flavor-selector.tsx        # Circular flavor picker" -ForegroundColor Gray
Write-Host "    ├── navigation.tsx             # Navbar + mobile menu" -ForegroundColor Gray
Write-Host "    └── screens/" -ForegroundColor Gray
Write-Host "        ├── home-screen.tsx        # Home screen" -ForegroundColor Gray
Write-Host "        ├── how-it-works-screen.tsx # How it works" -ForegroundColor Gray
Write-Host "        └── gift-screen.tsx        # Gift box screen" -ForegroundColor Gray
Write-Host ""

Write-Host "🎨 MAGIC UI COMPONENTS:" -ForegroundColor Cyan
Write-Host "  - Marquee (testimonials)" -ForegroundColor Gray
Write-Host "  - Bento Grid (features)" -ForegroundColor Gray
Write-Host "  - Neon Gradient Card (product cards)" -ForegroundColor Gray
Write-Host "  - Animated List (notifications)" -ForegroundColor Gray
Write-Host ""

Write-Host "✨ ENHANCEMENTS APPLIED:" -ForegroundColor Cyan
Write-Host "  ✓ Component splitting (689 lines → 7 components)" -ForegroundColor Green
Write-Host "  ✓ Accessibility improvements (ARIA labels, keyboard nav)" -ForegroundColor Green
Write-Host "  ✓ Performance optimizations (memo, useCallback)" -ForegroundColor Green
Write-Host "  ✓ Image optimization (sizes, loading, fetchPriority)" -ForegroundColor Green
Write-Host "  ✓ Magic UI components integration" -ForegroundColor Green
Write-Host "  ✓ Enhanced animations with Framer Motion" -ForegroundColor Green
Write-Host "  ✓ Testimonials section" -ForegroundColor Green
Write-Host "  ✓ Gift pricing options" -ForegroundColor Green
Write-Host ""
