# 💌 Romantic Letter Website Template

A beautiful, customizable romantic letter website built with Next.js and TypeScript. Perfect for Valentine's Day, anniversaries, or any special occasion where you want to share a heartfelt message in a stunning way.

## ✨ Features

- 🎨 Elegant beige design with white paper-like letter
- 📸 4 photos displayed around the letter with artistic rotation
- ⏰ **Countdown timer** - reveal your message at a specific date/time
- 🎁 **Surprise box** - unlock a YouTube video/gift at a second date/time
- ✍️ Beautiful typography: Dancing Script (cursive) + Crimson Text (serif)
- 📱 Fully responsive (desktop and mobile)
- 🚀 Ready for deployment on Vercel
- 🔒 Privacy-focused (.gitignore protects your photos)

## 🚀 Quick Start (5 Minutes)

**IMPORTANT:** This is a template with placeholders. You MUST personalize it before deployment!

1. **Clone or fork this repository**
   ```bash
   git clone YOUR_FORK_URL
   cd letters-valentines
   npm install
   ```

2. **Replace photos** (FIRST - before committing!)
   - Add 4 photos to `public/images/`
   - Name them: `photo1.jpeg`, `photo2.jpeg`, `photo3.jpeg`, `photo4.jpeg`
   - Photos are git-ignored for privacy

3. **Personalize content** - Search for `{{` in your code editor to find all 15+ placeholders
   - **Essential files:** `lib/letterData.ts`, `lib/timerConfig.ts`, `app/layout.tsx`
   - See [Complete Replacement Checklist](#-complete-replacement-checklist) below

4. **Test locally**
   ```bash
   npm run dev
   # Visit http://localhost:3000
   ```

5. **Deploy to Vercel**
   ```bash
   git add .
   git commit -m "Personalized romantic letter"
   git push
   # Then import to Vercel from your GitHub
   ```

---

## ✅ Complete Replacement Checklist

Use this checklist to ensure you've replaced ALL template placeholders. Search your codebase for `{{` to find remaining items.

### Core Content (Most Important!)

- [ ] `{{LETTER_GREETING}}` in `lib/letterData.ts` - Your letter's opening (e.g., "Dear Sarah,")
- [ ] `{{LETTER_BODY}}` in `lib/letterData.ts` - Your personal letter content
- [ ] `{{TARGET_DATE}}` in `lib/timerConfig.ts` - When to reveal the letter
- [ ] `{{COUNTDOWN_MESSAGE}}` in `lib/timerConfig.ts` - Message shown during countdown

### Surprise Box (Optional Feature)

- [ ] `{{SURPRISE_TARGET_DATE}}` in `lib/timerConfig.ts` - When to unlock the surprise
- [ ] `{{SURPRISE_WAITING_MESSAGE}}` in `lib/timerConfig.ts` - Message while locked
- [ ] `{{SURPRISE_UNLOCKED_MESSAGE}}` in `lib/timerConfig.ts` - Message when unlocked
- [ ] `{{SURPRISE_BUTTON_TEXT}}` in `lib/timerConfig.ts` - Button text (e.g., "Open Gift")
- [ ] `{{YOUTUBE_URL}}` in `lib/timerConfig.ts` - Your YouTube video or link

### Site Metadata

- [ ] `{{SITE_TITLE}}` in `app/layout.tsx` - Browser tab title
- [ ] `{{SITE_DESCRIPTION}}` in `app/layout.tsx` - Meta description
- [ ] `{{LANGUAGE_CODE}}` in `app/layout.tsx` - Language code (en, es, fr, etc.)
- [ ] `{{PACKAGE_NAME}}` in `package.json` - Project name

### Photos

- [ ] Replace `public/images/photo1.jpeg` with your photo
- [ ] Replace `public/images/photo2.jpeg` with your photo
- [ ] Replace `public/images/photo3.jpeg` with your photo
- [ ] Replace `public/images/photo4.jpeg` with your photo

---

## 📝 File-by-File Personalization Guide

### 1. `lib/letterData.ts` - Your Letter Content

This is the heart of your message. Replace the placeholders with your personal letter.

```typescript
export const letterData: LetterData = {
  title: "{{LETTER_GREETING}}",
  // Example: "Dear Sarah,", "My Dearest Love,", "Querida María,"

  body: "{{LETTER_BODY}}",
  /*
   * Write your personal letter here. This is the heart of your message!
   *
   * Tips:
   * - Express what you love about them
   * - Share favorite memories
   * - Include inside jokes that are meaningful to you both
   * - Be authentic and speak from the heart
   * - Use \n\n for paragraph breaks
   */

  images: [
    // Keep existing image structure - just replace the actual photo files
    { src: "/images/photo1.jpeg", alt: "Memory 1", position: { top: "10%", left: "8%", rotation: -5 } },
    { src: "/images/photo2.jpeg", alt: "Memory 2", position: { top: "15%", right: "8%", rotation: 6 } },
    { src: "/images/photo3.jpeg", alt: "Memory 3", position: { bottom: "15%", left: "10%", rotation: -4 } },
    { src: "/images/photo4.jpeg", alt: "Memory 4", position: { bottom: "20%", right: "8%", rotation: 7 } }
  ]
};
```

**Example personalized letter:**
```typescript
title: "Dear Sarah,",
body: "Today marks one year since we met, and I wanted to create something special for you.\n\n" +
      "Every moment with you has been an adventure. From our coffee dates to our late-night talks, " +
      "you've made my life infinitely better.\n\n" +
      "I love your laugh, your kindness, and the way you see the world.\n\n" +
      "Happy anniversary, my love.\n\nForever yours,\nJohn"
```

### 2. `lib/timerConfig.ts` - Countdown & Surprise Settings

Configure when your letter and surprise unlock.

**Countdown Timer Configuration:**
```typescript
export const timerConfig: TimerConfig = {
  targetDate: "{{TARGET_DATE}}",
  // Example: "2026-02-14T00:00:00-05:00" for Feb 14, 2026 midnight ET
  // Format: YYYY-MM-DDTHH:mm:ss±HH:mm

  message: "{{COUNTDOWN_MESSAGE}}",
  // Example: "Something special is waiting for you...", "Tu sorpresa está llegando..."

  enabled: true  // Set to false to skip countdown and show letter immediately
};
```

**Surprise Box Configuration:**
```typescript
export const surpriseBoxConfig: SurpriseBoxConfig = {
  targetDate: "{{SURPRISE_TARGET_DATE}}",
  // Example: "2026-02-14T12:00:00-05:00" for Feb 14, 2026 noon ET

  waitingMessage: "{{SURPRISE_WAITING_MESSAGE}}",
  // Example: "A special surprise is waiting...", "Un regalo especial te espera..."

  unlockedMessage: "{{SURPRISE_UNLOCKED_MESSAGE}}",
  // Example: "Your gift is ready!", "¡Tu regalo está listo!"

  buttonText: "{{SURPRISE_BUTTON_TEXT}}",
  // Example: "Open Gift", "Watch Video", "Abrir Regalo"

  youtubeUrl: "{{YOUTUBE_URL}}",
  // Example: "https://www.youtube.com/watch?v=VIDEO_ID"

  enabled: true  // Set to false to disable the surprise box feature
};
```

**Date Format Guide:**

| Timezone | Offset | Example (Feb 14, 2026 midnight) |
|----------|--------|----------------------------------|
| **EST** (Eastern) | `-05:00` | `2026-02-14T00:00:00-05:00` |
| **CST** (Central) | `-06:00` | `2026-02-14T00:00:00-06:00` |
| **MST** (Mountain) | `-07:00` | `2026-02-14T00:00:00-07:00` |
| **PST** (Pacific) | `-08:00` | `2026-02-14T00:00:00-08:00` |
| **UTC** (Universal) | `Z` | `2026-02-14T00:00:00Z` |
| **CET** (Central Europe) | `+01:00` | `2026-02-14T00:00:00+01:00` |

**Testing Tip:** Use `getTimeInMinutes(X)` helper to test countdown:
```typescript
import { getTimeInMinutes } from '@/lib/timerConfig';

targetDate: getTimeInMinutes(2), // Unlocks in 2 minutes
```

### 3. `app/layout.tsx` - Site Metadata

Configure browser tab title, description, and language.

```typescript
export const metadata = {
  title: '{{SITE_TITLE}}',
  // Example: "For My Love", "Sarah's Valentine", "A Special Message"

  description: '{{SITE_DESCRIPTION}}',
  // Example: "A romantic surprise for someone special"
};

// In the RootLayout function:
<html lang="{{LANGUAGE_CODE}}" ...>
  {/* Language codes: "en" (English), "es" (Spanish), "fr" (French), "de" (German) */}
```

### 4. `package.json` - Project Name

```json
{
  "name": "{{PACKAGE_NAME}}",
  "_comment": "Example: romantic-letter-site, valentine-surprise, letters-for-sarah"
}
```

---

## 📸 Photo Replacement Guide

### Step 1: Prepare Your Photos

**Requirements:**
- **Format:** JPEG recommended (PNG/GIF also supported)
- **Size:** 800x600px or larger recommended for best quality
- **Orientation:** Portrait or landscape both work
- **File names:** MUST be `photo1.jpeg`, `photo2.jpeg`, `photo3.jpeg`, `photo4.jpeg`

**Recommended photo selection:**
- Choose meaningful moments together
- Mix of close-ups and wider shots works well
- Consider variety in composition (not all selfies, for example)
- High-quality photos look best (avoid blurry/pixelated images)

### Step 2: Add Photos to Project

1. Navigate to `public/images/` directory
2. Add your 4 photos with exact names:
   - `photo1.jpeg`
   - `photo2.jpeg`
   - `photo3.jpeg`
   - `photo4.jpeg`
3. **IMPORTANT:** Photos are automatically ignored by git (see `.gitignore`)

### Step 3: Adjust Positioning (Optional)

Edit `lib/letterData.ts` to fine-tune photo positions:

```typescript
{
  src: "/images/photo1.jpeg",
  alt: "Memory 1",
  position: {
    top: "10%",      // Distance from top (or use bottom)
    left: "8%",      // Distance from left (or use right)
    rotation: -5     // Rotation in degrees (-10 to 10 looks natural)
  }
}
```

**Positioning tips:**
- Use `top` OR `bottom` (not both)
- Use `left` OR `right` (not both)
- Rotation between -8° and 8° looks most natural
- Desktop: photos appear in corners
- Mobile: photos stack vertically below the letter

---

## 🔒 Privacy & Security

### ⚠️ CRITICAL: Replace Photos BEFORE Your First Commit!

**Why this matters:**
- Git stores file history permanently
- Even deleted files remain in git history
- Anyone with repo access can see old commits

**Safe workflow:**
1. ✅ Fork/clone the repository
2. ✅ **IMMEDIATELY** replace the 4 photos in `public/images/`
3. ✅ Then make your first commit
4. ✅ Photos are now git-ignored (won't be committed)

**If you already committed personal photos:**
```bash
# WARNING: This rewrites git history
git filter-branch --force --index-filter \
  'git rm --cached --ignore-unmatch public/images/*.jpeg' \
  --prune-empty --tag-name-filter cat -- --all

# Force push to remote (if already pushed)
git push origin --force --all
```

### What's Protected by `.gitignore`

The following files are automatically ignored and won't be committed:
```gitignore
public/images/*.jpeg
public/images/*.jpg
public/images/*.png
public/images/*.gif
```

### Repository Visibility

**For private romantic sites:**
- Consider making your fork **private** on GitHub
- Free GitHub accounts can have unlimited private repos
- Private repos prevent strangers from viewing your content

**For sharing the template:**
- Only make public AFTER removing all personal content
- Double-check with: `grep -r "{{" .` to find unreplaced placeholders

---

## 🛠️ Development & Deployment

### Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

### Build for Production

```bash
# Create production build
npm run build

# Test production build locally
npm start
```

### Deploy to Vercel (Recommended)

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Personalized romantic letter site"
   git push
   ```

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel auto-detects Next.js settings
   - Click "Deploy"
   - Your site is live! 🎉

3. **Custom Domain (Optional):**
   - Vercel provides free subdomain: `your-project.vercel.app`
   - Can add custom domain in Vercel settings

### Other Deployment Options

- **Netlify:** Works with Next.js
- **GitHub Pages:** Requires static export (`next export`)
- **Traditional hosting:** Export static HTML or use Node.js hosting

---

## 🐛 Troubleshooting

### Why do I see `{{PLACEHOLDER}}` text on my site?

**Cause:** You haven't replaced template placeholders with your content.

**Fix:**
1. Search your codebase for `{{`
2. Replace all placeholders in:
   - `lib/letterData.ts`
   - `lib/timerConfig.ts`
   - `app/layout.tsx`
   - `package.json`
3. See [Complete Replacement Checklist](#-complete-replacement-checklist)

### Photos not showing up

**Possible causes:**

1. **Wrong file names**
   - MUST be: `photo1.jpeg`, `photo2.jpeg`, `photo3.jpeg`, `photo4.jpeg`
   - Check spelling and extensions (.jpeg not .jpg)

2. **Wrong location**
   - Photos must be in `public/images/` directory
   - NOT in `images/` or `src/images/`

3. **Cache issue**
   - Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
   - Clear browser cache
   - Restart dev server: `npm run dev`

### Countdown timer not working

**Possible causes:**

1. **Date format incorrect**
   - Must be ISO 8601: `YYYY-MM-DDTHH:mm:ss±HH:mm`
   - Example: `2026-02-14T00:00:00-05:00`
   - Verify timezone offset is correct

2. **Date in the past**
   - If target date has passed, letter shows immediately
   - Check your system clock is correct

3. **Timer disabled**
   - Check `enabled: true` in `lib/timerConfig.ts`

### TypeScript errors after editing

**Common fixes:**

1. **Restart dev server:**
   ```bash
   # Stop server (Ctrl+C)
   npm run dev
   ```

2. **Check for typos in property names:**
   - `buttonText` not `buttontext`
   - `targetDate` not `targetdate`

3. **Missing fields in config:**
   - Ensure `buttonText` is in `SurpriseBoxConfig` interface
   - All required fields must be present

### Build errors

**Before deploying, always test:**
```bash
npm run build
```

**Common issues:**
- Unused imports (remove them)
- TypeScript errors (fix type mismatches)
- Missing dependencies (run `npm install`)

---

## 💡 Tips for Making It Extra Special

### Timing Strategy

**Option 1: Progressive Reveal**
1. Set `timerConfig.targetDate` to Valentine's Day midnight
2. Set `surpriseBoxConfig.targetDate` to Valentine's Day noon
3. They wake up to the letter, then unlock the video later

**Option 2: Same-Time Reveal**
1. Set both dates to the same time
2. Letter and surprise unlock together

**Option 3: Testing Mode**
1. Use `getTimeInMinutes(X)` for immediate testing
2. Update to real dates before deployment

### Photo Selection Ideas

- **Chronological:** First photo → most recent
- **Locations:** Different meaningful places
- **Seasons:** One photo from each season together
- **Mix:** Selfies + candid moments + special events

### Content Ideas

**Letter themes:**
- "365 reasons I love you" (one per day)
- Favorite memories from your relationship
- What you're looking forward to together
- How they've changed your life

**Surprise box ideas:**
- Montage video you created
- Song you wrote/recorded
- Video message
- Virtual tour of future trip destination
- Playlist link (unlisted YouTube playlist)

### Multilingual Support

The template supports any language! Just replace:
- Letter content (`lib/letterData.ts`)
- Messages (`lib/timerConfig.ts`)
- Language code (`app/layout.tsx`)

**Example Spanish site:**
```typescript
// layout.tsx
<html lang="es" ...>

// timerConfig.ts
message: "Algo especial te espera...",

// letterData.ts
title: "Querida María,",
body: "Tu carta en español aquí..."
```

### Personalization Beyond Code

1. **Custom domain:** Makes it feel more special than `vercel.app`
2. **Send the link creatively:**
   - QR code on a physical card
   - Text message at midnight
   - Hidden in another gift
3. **Follow-up:** After they view it, have flowers/gift delivered

---

## 🏗️ Project Structure

```
├── app/
│   ├── components/
│   │   ├── Letter.tsx          # Main letter component
│   │   ├── PhotoGallery.tsx    # Photo display component
│   │   ├── CountdownTimer.tsx  # Countdown timer component
│   │   └── SurpriseBox.tsx     # Surprise gift box component
│   ├── layout.tsx               # Root layout (fonts, metadata)
│   ├── page.tsx                 # Main page logic
│   └── globals.css              # Global styles
├── lib/
│   ├── letterData.ts            # Letter content & images
│   └── timerConfig.ts           # Timer & surprise config
├── public/
│   └── images/                  # Your photos go here
│       ├── photo1.jpeg
│       ├── photo2.jpeg
│       ├── photo3.jpeg
│       └── photo4.jpeg
├── .gitignore                   # Protects your photos
├── package.json
└── README.md
```

---

## 🛠️ Technologies Used

- **[Next.js 15](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Google Fonts](https://fonts.google.com/)** - Dancing Script (cursive) + Crimson Text (serif)
- **CSS3** - Styling, animations, responsive design
- **[Vercel](https://vercel.com/)** - Deployment platform (recommended)

---

## 📄 License

This is a template project designed for personal use. Feel free to:
- ✅ Fork and personalize for your own romantic purposes
- ✅ Modify and customize as much as you want
- ✅ Deploy for personal use
- ✅ Share the template (not your personalized version) with others

**Attribution appreciated but not required!**

---

## 🤝 Contributing

Found a bug or have a suggestion for the template?
- Open an issue describing the problem
- Submit a pull request with improvements
- Share your success story! (Feel free to let me know how it went)

---

## ❤️ Final Notes

This template was created with love to help others express their feelings in a beautiful, modern way. Whether it's for Valentine's Day, an anniversary, a proposal, or just because - I hope this helps you create something special.

Remember: The technology is just the delivery method. The real magic is in YOUR words and YOUR feelings. Make it personal, make it authentic, and make it from the heart.

Good luck! 🎉💕

---

## 🔗 Quick Links

- **Vercel Deployment:** [vercel.com](https://vercel.com)
- **Next.js Docs:** [nextjs.org/docs](https://nextjs.org/docs)
- **Google Fonts:** [fonts.google.com](https://fonts.google.com)
- **YouTube Video Privacy Settings:** [support.google.com/youtube/answer/157177](https://support.google.com/youtube/answer/157177)

---

**Need help?** Open an issue on GitHub and I'll do my best to assist!
