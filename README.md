# Sweet Cafe 🍩

![CI/CD](https://github.com/rostyslavcheremys/sweet-cafe/actions/workflows/ci-cd.yml/badge.svg)

A modern, responsive web application for a cafe that allows customers to browse menu items, place orders, and manage their accounts. Built with React 19 and Vite, featuring a Material-UI design and comprehensive ordering system.

## Live Demo
https://sweet-cafe-sand.vercel.app/

## 🌟 Features

### Customer Features
- **Menu Browsing**: Browse items by categories (pastries, drinks, etc.)
- **Shopping Cart**: Add, update, and remove items from cart
- **Order Placement**: Complete checkout with delivery/pickup options
- **Order History**: View past orders and order details
- **Account Management**: User registration, login, and profile updates
- **Authentication**: Secure JWT-based authentication system

### Admin Features
- **Menu Management**: Admin panel for managing menu items
- **Order Management**: View and manage customer orders
- **User Management**: Access to user accounts and settings

### Technical Features
- **Responsive Design**: Mobile-first approach with Material-UI components
- **Real-time Updates**: Dynamic cart updates and order status
- **Form Validation**: Comprehensive client-side validation
- **Error Handling**: User-friendly error messages and loading states
- **Local Storage**: Persistent user sessions and cart data

## 🛠️ Tech Stack

### Frontend
- **React 19.1.1** - Modern React with latest features
- **Vite 7.1.12** - Fast build tool and dev server
- **React Router DOM 7.10.1** - Client-side routing
- **Material-UI 7.3.5** - Component library for consistent UI
- **React Hook Form 7.67.0** - Efficient form handling
- **Axios 1.13.2** - HTTP client for API communication
- **GSAP 3.13.0** - Animation library

### Development Tools
- **ESLint 9.36.0** - Code linting and formatting
- **Vite React Plugin** - Hot module replacement
- **GitHub Pages** - Deployment platform

## 🚀 Getting Started

### Prerequisites
- **Node.js 18+** - JavaScript runtime
- **npm or yarn** - Package manager
- **Backend API** - Sweet Cafe backend service (separate repository)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/rostyslavcheremys/sweet-cafe.git
   cd sweet-cafe
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment setup**
   Create a `.env` file in the root directory:
   ```env
   VITE_API_URL=https://sweetcafeapi.onrender.com/api/v1
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:5173`

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
# sweet-cafe
