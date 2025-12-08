# Sweet Cafe 🍩

![CI/CD](https://github.com/rostyslavcheremys/sweet-cafe/actions/workflows/ci-cd.yml/badge.svg)

## Live Demo
https://sweet-cafe-sand.vercel.app/

A modern, responsive web application for a cafe that allows customers to browse menu items, place orders, and manage their accounts. Built with React 19 and Vite, featuring a Material-UI design and comprehensive ordering system.

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

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run deploy` | Deploy to GitHub Pages |

## 🔧 Configuration

### API Configuration
The application communicates with a backend API through configured endpoints in `src/api/axios.js`:

```javascript
export const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL
});
```

### Authentication
JWT-based authentication is handled through:
- Local storage for token persistence
- Axios interceptors for automatic token attachment
- Protected routes with authentication guards

### Environment Variables
- `VITE_API_URL` - Backend API base URL

## 📱 Key Features Explained

### Menu System
- **Category Navigation**: Dynamic category loading and filtering
- **Item Details**: Rich product information with images and descriptions
- **Search & Filter**: Easy discovery of menu items

### Shopping Cart
- **Real-time Updates**: Immediate reflection of quantity changes
- **Persistent Storage**: Cart state maintained across sessions
- **Price Calculations**: Automatic totals and tax calculations

### Order Management
- **Checkout Process**: Step-by-step order placement
- **Delivery Options**: Choice between pickup and courier delivery
- **Payment Integration**: Support for card and cash payments
- **Order Tracking**: Real-time order status updates

### User Experience
- **Responsive Design**: Optimized for mobile and desktop
- **Loading States**: Visual feedback during API operations
- **Error Handling**: Graceful error management with user feedback
- **Form Validation**: Real-time validation with helpful error messages

## 🎨 UI/UX Design

### Design System
- **Material-UI Components**: Consistent component library
- **Custom Styling**: Brand-specific styling with CSS modules
- **Typography**: Google Fonts (Titan One, Poppins)
- **Color Scheme**: Warm, cafe-inspired color palette

### Responsive Layout
- **Mobile-First**: Optimized for mobile devices
- **Breakpoints**: Responsive design for all screen sizes
- **Touch-Friendly**: Large tap targets and intuitive navigation

## 🔒 Security Features

- **JWT Authentication**: Secure token-based authentication
- **Protected Routes**: Route guards for authenticated pages
- **Input Validation**: Client and server-side validation
- **HTTPS Ready**: SSL/TLS encryption support

## 🚀 Deployment

### Production Build
```bash
npm run build
```

### GitHub Pages Deployment
```bash
npm run deploy
```

### Environment Setup for Production
Ensure proper environment variables are set:
- `VITE_API_URL` - Production API endpoint
- Configure CORS settings on backend
- Set up SSL certificates

## 🧪 Testing

### Running Tests
```bash
npm test
```

### ESLint
```bash
npm run lint
```

### Code Quality
- ESLint configuration for React best practices
- Consistent code formatting
- Component architecture following React patterns

## 📚 API Integration

### Endpoints Used
- **Authentication**: `/auth/login`, `/auth/signup`, `/auth/me`
- **Menu**: `/menu_items`, `/categories`
- **Cart**: `/cart` (GET, POST, PUT, DELETE)
- **Orders**: `/orders` (GET, POST)
- **Delivery**: `/deliveries`

### Data Flow
1. User actions trigger API calls through service layers
2. Custom hooks manage loading states and error handling
3. Response data is transformed through mapper utilities
4. UI components receive clean, formatted data

---

**Sweet Cafe** - Bringing the cafe experience to your fingertips! ☕️🍰
