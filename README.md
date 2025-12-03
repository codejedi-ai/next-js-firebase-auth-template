## Next.js + Firebase Auth (Google) Template

Modern starter demonstrating Firebase Authentication with Google Sign‑In using Next.js App Router. It includes a global auth provider, sign‑in/sign‑out UI, and a gated dashboard with user profile details.

### Features
- **Google Sign‑In** via Firebase Authentication
- **Global Auth Context** with `useAuth()` (user + loading state)
- **Forced account selection** on each sign‑in
- **Robust sign‑out** that clears persisted Firebase auth state
- **Dashboard** showing display name, email, photo, verification status, last sign‑in, and full UID
- Clean component organization and Tailwind styles

### Tech
- Next.js (App Router)
- Firebase Web SDK
- TypeScript
- Tailwind CSS

## Getting Started

### 1) Prerequisites
- Node.js 18+
- A Firebase project with Google provider enabled

### 2) Firebase setup
1. Create a Firebase project in the Firebase Console.
2. In Authentication → Sign‑in method, enable Google.
3. Create a Web App in your Firebase project and copy its config.
4. Open `lib/firebase.ts` and replace the `firebaseConfig` values with your own.

Note: Keys here are safe for the client; they identify your project but do not grant admin access.

### 3) Install dependencies
```bash
npm install
```

### 4) Run the dev server
```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

## Project Structure
```
app/
  layout.tsx                 # Wraps the app with the AuthProvider
  page.tsx                   # Sign‑in page
  dashboard/page.tsx         # Protected dashboard (requires auth)
components/
  auth-provider.tsx          # Auth context (useAuth) using onAuthStateChanged
  auth-buttons.tsx           # Sign‑In with Google + Sign‑Out buttons
lib/
  firebase.ts                # Firebase client initialization and Google provider
```

## How it Works
- `components/auth-provider.tsx` subscribes to Firebase auth (`onAuthStateChanged`) and provides `user` and `loading` to the app.
- `components/auth-buttons.tsx` contains:
  - `SignInWithGoogleButton` using `signInWithPopup(auth, googleProvider)`.
  - `SignOutButton` that signs out and clears local persistence (localStorage / sessionStorage / IndexedDB) so account selection is forced on next sign‑in.
- `lib/firebase.ts` configures Firebase and sets Google provider parameters:
  - `prompt: "select_account"` (always show account chooser)
  - Scopes `profile` and `email` to populate `user.photoURL` and other fields.

## Customization
- Update styles in `app/globals.css` and component classNames.
- Adjust dashboard content in `app/dashboard/page.tsx`.
- Swap `signInWithPopup` for `signInWithRedirect` if you prefer full‑page redirects.

## Scripts
- `npm run dev` — Start development server
- `npm run build` — Build for production
- `npm run start` — Start production server

## Deployment
- Deploy anywhere Next.js runs (Vercel recommended). Ensure your Firebase Auth domain is whitelisted in Firebase Console → Authentication → Settings.

## Notes
- If a profile photo doesn’t render, check browser extensions/CSP that may block remote images.
- After sign‑out, persistence is cleared so the Google account chooser appears on next sign‑in.

# Authentication

This is an example using NextAuth.js for authentication.

## Deploy your own

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/vercel/next.js/tree/canary/examples/auth&project-name=auth&repository-name=auth&env=AUTH_GITHUB_ID,AUTH_GITHUB_SECRET,AUTH_SECRET)

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init), [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/), [pnpm](https://pnpm.io), or [Bun](https://bun.sh/docs/cli/bunx) to bootstrap the example:

\`\`\`bash
npx create-next-app --example auth auth-app
\`\`\`

\`\`\`bash
yarn create next-app --example auth auth-app
\`\`\`

\`\`\`bash
pnpm create next-app --example auth auth-app
\`\`\`

\`\`\`bash
bunx create-next-app --example auth auth-app
\`\`\`

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).
