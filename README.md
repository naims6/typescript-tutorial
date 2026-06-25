# TypeScript Starter

A simple TypeScript setup

## Getting Started

```bash
# Initialize project
npm init -y

# Install TypeScript and tsx
npm install -D typescript tsx

# Initialize TypeScript config
npx tsc --init
```

## Scripts

| Command        | Description                                    |
| -------------- | ---------------------------------------------- |
| `npm run dev`  | Run `src/app.ts` with hot-reload (via tsx)     |
| `npm run build`| Compile TypeScript to JavaScript (via tsc)     |

Add these to your `package.json`:

```json
"scripts": {
  "dev": "tsx watch src/app.ts",
  "build": "tsc"
}
```

## Usage

```bash
# Development (auto-restarts on changes)
npm run dev

# Production build
npm run build
```
