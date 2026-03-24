# 🎬 Wobble Remotion - Video Creation Guide

## 📋 Overview

**Remotion** has been integrated into the Wobble project to create **programmatic video content** for marketing and social media using React components!

### What You Can Create

✅ **Product Promo Videos** - Single flavor showcases (10 seconds)  
✅ **All Flavors Showcase** - Complete product line (15 seconds)  
✅ **Social Media Content** - TikTok, Instagram Reels, YouTube Shorts  
✅ **Marketing Videos** - Automated, scalable video generation  

---

## 🚀 Quick Start

### 1. Start Remotion Studio (Preview Mode)

```bash
npm run remotion
```

This opens **Remotion Studio** at http://localhost:3001 where you can:
- Preview all video compositions
- Adjust parameters in real-time
- Test animations
- Export videos

### 2. Render Videos

#### Render Single Flavor Promo
```bash
npm run video:promo
```
Output: `out/promo.mp4` (1080x1920, 10 seconds)

#### Render All Flavors Showcase
```bash
npm run video:all
```
Output: `out/all-flavors.mp4` (1080x1920, 15 seconds)

#### Custom Render
```bash
npx remotion render WobblePromo out/custom.mp4 --fps=30 --width=1080 --height=1920
```

---

## 📁 Project Structure

```
D:\Wobble\
├── remotion/
│   ├── Root.tsx              # Main entry - register compositions
│   ├── index.tsx             # Remotion entry point
│   ├── WobbleVideo.tsx       # Single flavor video component
│   └── WobbleAllFlavors.tsx  # All flavors showcase component
├── remotion.config.ts        # Remotion configuration
├── out/                      # Rendered videos (auto-created)
└── package.json              # Scripts added
```

---

## 🎨 Available Compositions

### 1. WobblePromo
- **Duration**: 10 seconds (300 frames @ 30fps)
- **Format**: Vertical (1080x1920) - TikTok/Reels/Shorts
- **Features**:
  - Animated product name
  - Floating jar animation
  - Gradient background
  - Call-to-action button
  - Smooth transitions

### 2. WobbleAllFlavors
- **Duration**: 15 seconds (450 frames @ 30fps)
- **Format**: Vertical (1080x1920)
- **Features**:
  - All 6 flavors showcase
  - Staggered entrance animations
  - Grid layout
  - Branding elements

### 3. WobbleSquare
- **Duration**: 10 seconds (300 frames @ 30fps)
- **Format**: Square (1080x1080) - Instagram Posts
- **Features**: Same as WobblePromo but square format

---

## 🎯 Customization Guide

### Change Flavor

Edit `remotion/Root.tsx`:

```tsx
<Composition
  id="WobblePromo"
  component={WobbleVideo}
  durationInFrames={300}
  fps={30}
  width={1080}
  height={1920}
  defaultProps={{
    flavor: {
      name: 'Pandan Gula Melaka',  // Change name
      category: 'The Local Hero',   // Change category
      description: 'Fragrant pandan meets deep gula melaka...',
      bgColor: '#3A7D44',          // Change color
      accentColor: '#2C5F2D',      // Change accent
    },
  }}
/>
```

### Adjust Duration

```tsx
<Composition
  id="WobblePromo"
  durationInFrames={600}  // 20 seconds (600 / 30fps)
  fps={30}
  // ... other props
/>
```

### Change Format

```tsx
// Instagram Story
width={1080}
height={1920}

// Instagram Post
width={1080}
height={1080}

// YouTube Landscape
width={1920}
height={1080}

// TikTok
width={1080}
height={1920}
```

---

## 🎬 Render Options

### Video Quality

```bash
# High quality
npx remotion render WobblePromo out/promo.mp4 --quality=100

# Web optimized
npx remotion render WobblePromo out/promo.mp4 --quality=80

# Codec options
--codec=h264     # Most compatible (default)
--codec=h265     # Better quality, smaller
--codec=prores   # Professional editing
```

### Audio

```bash
# Add background music
--audio-bitrate=192k
--audio-codec=aac
```

### Frame Range

```bash
# Render specific frames only
npx remotion render WobblePromo out/promo.mp4 --frames=0-150
```

---

## ☁️ Cloud Rendering (AWS Lambda)

For faster rendering at scale:

### 1. Deploy to Lambda

```bash
npm run video:lambda
# or
npx remotion lambda deploy
```

### 2. Render on Lambda

```bash
npx remotion lambda render WobblePromo out/promo.mp4
```

### 3. Scale with Concurrency

```bash
npx remotion lambda render WobblePromo out/promo.mp4 --concurrency=10
```

**Benefits**:
- ⚡ 10x faster rendering
- 📊 Parallel processing
- 💰 Pay per render
- 🔧 No local setup

---

## 🎨 Animation System

### Built-in Animations

| Animation | Duration | Description |
|-----------|----------|-------------|
| Title Fade In | 0-1s | Opacity + Y position |
| Jar Scale Up | 0-2s | Scale + Rotation |
| Description | 2-3s | Fade + Slide up |
| CTA Button | 4-5s | Scale + Rotate |
| Background | Loop | Pulse animation |

### Customize Timing

Edit `remotion/WobbleVideo.tsx`:

```tsx
const frame = useCurrentFrame();
const { fps } = useVideoConfig();

// Adjust animation timing
const titleOpacity = interpolate(
  frame,
  [0, 20],      // Start frame, End frame
  [0, 1],       // Start value, End value
  { extrapolateRight: 'clamp' }
);
```

---

## 📊 Use Cases

### 1. Social Media Marketing

```bash
# TikTok/Reels
npm run video:promo

# Instagram Post
npx remotion render WobbleSquare out/instagram-post.mp4
```

### 2. Product Launches

```bash
# Create videos for all flavors
for flavor in mango jagung pandan teh caramel pistachio; do
  npx remotion render WobblePromo out/${flavor}.mp4 \
    --input-props="{\"flavor\":{\"name\":\"${flavor}\"}}"
done
```

### 3. Automated Campaigns

Use Remotion programmatically:

```tsx
import { renderVideo } from '@remotion/renderer';

await renderVideo({
  composition: 'WobblePromo',
  inputProps: { flavor: selectedFlavor },
  output: 'out/campaign.mp4',
  codec: 'h264',
  fps: 30,
  width: 1080,
  height: 1920,
});
```

---

## 🛠️ Troubleshooting

### Issue: Video renders slowly

**Solution**: Use Lambda rendering
```bash
npx remotion lambda render WobblePromo out/promo.mp4 --concurrency=10
```

### Issue: Colors look different

**Solution**: Ensure color profile consistency
```bash
npx remotion render WobblePromo out/promo.mp4 --color-space=srgb
```

### Issue: Audio out of sync

**Solution**: Check FPS consistency
```bash
# Ensure all compositions use same FPS
fps={30}
```

---

## 📚 Resources

- **Remotion Docs**: https://remotion.dev/docs
- **Examples**: https://github.com/remotion-dev/examples
- **Discord**: https://discord.gg/6VwajKwSXk
- **License**: https://remotion.pro/license

---

## ✅ Next Steps

1. **Preview in Studio**: `npm run remotion`
2. **Render Test Video**: `npm run video:promo`
3. **Customize Colors/Text**: Edit `remotion/WobbleVideo.tsx`
4. **Export for Social Media**: Use appropriate format
5. **Deploy to Lambda** (optional): For faster rendering

---

## 🎉 Ready to Create!

```bash
# Start studio
npm run remotion

# Or render directly
npm run video:promo
```

**Your Wobble videos are ready for social media!** 🚀📱
