# harshys_musics
Here is an effort to make a music app through my skills and existing options !!!

### **Music Player Requirement Analysis**

#### **1. Functional Requirements**
- **Core Playback:**
  - **File Support:** Play MP3, WAV, FLAC, AAC, OGG, and other common formats.
  - **Playback Controls:** Play, pause, skip (next/previous), shuffle, repeat, volume adjustment, and seek bar.
  - **Playback Modes:** Loop (single track/playlist), shuffle, crossfade, and sleep timer.

- **Library Management:**
  - **Metadata Handling:** Auto-fetch/edit track details (title, artist, album, genre, artwork).
  - **Organize Music:** Sort by title, artist, album, date added, or custom tags.
  - **Playlist Creation:** Create, edit, delete, import/export playlists (e.g., M3U, PLS formats).

- **User Interface (UI):**
  - **Now Playing Screen:** Display artwork, lyrics, progress bar, and playback controls.
  - **Search:** Quick search by title, artist, or album.
  - **Themes:** Light/dark mode, customizable color schemes.
  - **Accessibility:** Keyboard shortcuts, screen reader support, adjustable font sizes.

- **Advanced Features:**
  - **Equalizer:** Presets and manual adjustments (bass, treble, etc.).
  - **Lyrics Integration:** Auto-fetch and display synchronized lyrics.
  - **Notifications:** Track info in system notifications/status bar.
  - **Cloud Sync:** Backup libraries/playlists to services like Google Drive or Dropbox.

- **User Accounts:**
  - **Authentication:** Sign-up/login via email, social media, or SSO.
  - **Preferences Sync:** Sync settings (playlists, themes) across devices.

#### **2. Non-Functional Requirements**
- **Performance:**
  - Load tracks within 1–2 seconds; handle 10,000+ songs without lag.
  - Use ≤20% CPU during playback on average hardware.

- **Compatibility:**
  - **OS Support:** Android, iOS, Windows, macOS, Linux.
  - **Hardware:** Minimum 2GB RAM, 100MB storage for installation.

- **Security:**
  - Encrypt user credentials and sensitive data (e.g., payment info for premium features).
  - GDPR/CCPA compliance for data privacy.

- **Usability:**
  - Intuitive UI/UX with onboarding tutorials.
  - Responsive design for mobile/desktop screens.

- **Reliability:**
  - Handle corrupted files gracefully (skip/log errors without crashing).
  - 99% uptime for cloud-dependent features.

#### **3. User Roles**
- **End User:** Access playback, library, playlists, and settings.
- **Admin:** Manage user accounts, app updates, and content moderation.
- **Guest:** Limited access (e.g., trial mode with ads).

#### **4. External Requirements**
- **Integrations:**
  - Streaming services (Spotify, YouTube Music) via APIs.
  - Social media sharing (Twitter, Instagram) for track sharing.
  - Hardware integrations (Bluetooth devices, Chromecast).

- **Legal:**
  - Codec licensing (e.g., MP3 patents).
  - Clear terms of service and privacy policy.

#### **5. System Requirements**
- **Mobile:** Android 8+/iOS 13+, 4GB RAM recommended.
- **Desktop:** Windows 10+, macOS Catalina+, 8GB RAM for large libraries.
- **Storage:** 500MB+ for app + space for music files.

#### **6. Constraints**
- Budget limits on third-party API usage (e.g., Spotify integration costs).
- Time constraints for Phase 1 (core features) vs. Phase 2 (cloud sync, social sharing).

#### **7. Assumptions**
- Users have basic tech literacy.
- Primary use case: Personal music libraries (not enterprise).
- Internet optional except for cloud/streaming features.

#### **8. Risks**
- **Third-Party Dependencies:** Codec licensing costs or API changes.
- **Performance:** Slow library scans on low-end devices.

#### **9. Prioritization**
- **High:** Core playback, library management, basic UI.
- **Medium:** Equalizer, cloud sync, themes.
- **Low:** Social sharing, admin dashboard.

---

## **For the PROJECT**
# Project Setup

## Step 1: Setting Up Frontend and Backend

### Frontend Setup

#### Using Vite

To set up the frontend with Vite:

```sh
npm create vite@latest .
```

- Choose **React**
- Select **TypeScript** as the language

#### Installing Tailwind CSS

To install and configure Tailwind CSS with Vite:

1. **Install Tailwind CSS**

   ```sh
   npm install tailwindcss @tailwindcss/vite
   ```

2. **Configure the Vite Plugin**

   Update `vite.config.ts`:

   ```ts
   import { defineConfig } from 'vite'
   import tailwindcss from '@tailwindcss/vite'

   export default defineConfig({
     plugins: [tailwindcss()],
   })
   ```

3. **Import Tailwind CSS**

   Add the following to your CSS file:

   ```css
   @import "tailwindcss";
   ```

4. **Start the Development Server**

   ```sh
   npm run dev
   ```

5. **Using Tailwind in HTML**

   ```html
   <!DOCTYPE html>
   <html>
   <head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <link href="/src/styles.css" rel="stylesheet">
   </head>
   <body>
     <h1 class="text-3xl font-bold underline">
       Hello world!
     </h1>
   </body>
   </html>
   ```

📖 [Tailwind CSS with Vite Documentation](https://tailwindcss.com/docs/installation/using-vite)

---

### Using shadcn/ui for Components

#### Setup and Installation

1. **Create a New Project**

   ```sh
   npm create vite@latest
   ```

2. **Install Tailwind CSS**

   ```sh
   npm install tailwindcss @tailwindcss/vite
   ```

3. **Replace **``** Content**

   ```css
   @import "tailwindcss";
   ```

4. **Update TypeScript Configurations**

   Update `tsconfig.json`:

   ```json
   {
     "files": [],
     "references": [
       { "path": "./tsconfig.app.json" },
       { "path": "./tsconfig.node.json" }
     ],
     "compilerOptions": {
       "baseUrl": ".",
       "paths": {
         "@/*": ["./src/*"]
       }
     }
   }
   ```

   Update `tsconfig.app.json`:

   ```json
   {
     "compilerOptions": {
       "baseUrl": ".",
       "paths": {
         "@/*": ["./src/*"]
       }
     }
   }
   ```

5. **Update **``

   ```ts
   import path from "path";
   import tailwindcss from "@tailwindcss/vite";
   import react from "@vitejs/plugin-react";
   import { defineConfig } from "vite";

   export default defineConfig({
     plugins: [react(), tailwindcss()],
     resolve: {
       alias: {
         "@": path.resolve(__dirname, "./src"),
       },
     },
   });
   ```

6. **Install TypeScript Node Types**

   ```sh
   npm install -D @types/node
   ```

7. **Run shadcn CLI**

   ```sh
   npx shadcn@latest init
   ```

   - Choose a base color (e.g., **Neutral**)

8. **Add Components**

   ```sh
   npx shadcn@latest add button
   ```

   You can now use the Button component in your project:

   ```tsx
   import { Button } from "@/components/ui/button";

   function App() {
     return (
       <div className="flex flex-col items-center justify-center min-h-screen">
         <Button>Click me</Button>
       </div>
     );
   }

   export default App;
   ```

📖 [shadcn UI with Vite Documentation](https://ui.shadcn.com/docs/installation/vite)

