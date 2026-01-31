# Client-Side Documentation

Welcome to the frontend documentation for the **Assignment** project. This client application is built using **Next.js**, **React**, and **Tailwind CSS**, providing a modern, responsive, and interactive user interface.

## 🚀 Tech Stack

-   **Framework**: [Next.js](https://nextjs.org/) (App Router)
-   **Library**: [React](https://react.dev/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **Animations**: [Framer Motion](https://www.framer.com/motion/)
-   **Icons**: [Lucide React](https://lucide.dev/)
-   **HTTP Client**: [Axios](https://axios-http.com/)
-   **Language**: [TypeScript](https://www.typescriptlang.org/)

## 🛠 Prerequisites

Ensure you have the following installed:

-   [Node.js](https://nodejs.org/) (v18 or higher recommended)
-   [npm](https://www.npmjs.com/)

## 📥 Installation

1.  **Navigate to the client directory**:
    ```bash
    cd client
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

## ⚙️ Configuration

Create a `.env` file in the root of the `client` directory to configure environment variables.

**File:** `.env`
```env
# URL of the backend API
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

> **Note**: Update `NEXT_PUBLIC_API_URL` if your backend server is running on a different port or host.

## 🏃‍♂️ Running the Application

### Development Mode
To start the development server with hot-reloading:
```bash
npm run dev
```
*Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.*

### Production Build
To create an optimized production build:
```bash
npm run build
```

### Start Production Server
To run the production build locally:
```bash
npm start
```

### Linting
To run ESLint and check for code quality issues:
```bash
npm run lint
```

## 📂 Project Structure

```text
client/
├── .next/              # Next.js build output
├── public/             # Static assets (images, icons)
├── src/
│   ├── app/            # Next.js App Router pages and layouts
│   ├── components/     # Reusable UI components
│   └── ...             # Other source files (hooks, utils, types)
├── .env                # Environment variables
├── next.config.ts      # Next.js configuration
├── tailwind.config.ts  # Tailwind CSS configuration (if present or inside postcss)
├── package.json        # Dependencies and scripts
└── tsconfig.json       # TypeScript configuration
```

## 🎨 UI & Features

-   **Responsive Design**: Built with Tailwind CSS to ensure compatibility across devices.
-   **Dynamic Forms**: Interactive forms with validation and smooth transitions using Framer Motion.
-   **Component-Based**: Modular architecture for easy maintenance and scalability.

## 📝 Scripts Overview

| Script | Description |
| :--- | :--- |
| `npm run dev` | Starts the development server on `localhost:3000`. |
| `npm run build` | Builds the application for production usage. |
| `npm start` | Runs the built application in production mode. |
| `npm run lint` | Runs the linter to catch errors and enforce code style. |
