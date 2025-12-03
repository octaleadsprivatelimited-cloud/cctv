# SecureVision - CCTV Equipment Company Website

A modern, full-stack e-commerce website for a CCTV equipment company built with React and Node.js.

## 🚀 Features

### Frontend
- **Home Page** - Hero section, featured products, testimonials, and CTAs
- **Product Catalog** - Filter by category, brand, price with search functionality
- **Product Details** - Detailed specs, reviews, related products
- **Shopping Cart** - Add/remove items, quantity management
- **Checkout** - Multi-step checkout with shipping and payment forms
- **Services Page** - Installation services with quote request form
- **About Page** - Company history, team, and values
- **FAQ Page** - Searchable frequently asked questions
- **Contact Page** - Contact form with Google Maps integration
- **Blog** - Articles on security tips, technology, and guides
- **User Authentication** - Login, register, account management
- **Order Tracking** - Track orders by order number
- **Live Chat** - Floating chat widget for customer support
- **Responsive Design** - Works on desktop, tablet, and mobile

### Backend
- **Express.js REST API** - RESTful endpoints for all features
- **MongoDB Database** - Products, users, orders, blog posts, contacts
- **JWT Authentication** - Secure user authentication
- **Product Management** - CRUD operations with filtering and search
- **Order Processing** - Create, track, and manage orders
- **Contact Forms** - Store inquiries and quote requests

## 🛠️ Tech Stack

### Frontend
- React 18
- React Router DOM
- Framer Motion (animations)
- Zustand (state management)
- Tailwind CSS
- Lucide React (icons)
- React Hot Toast (notifications)
- Axios

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT (jsonwebtoken)
- bcryptjs (password hashing)
- express-validator

## 📦 Installation

### Prerequisites
- Node.js 18+
- MongoDB (local or Atlas)

### Backend Setup

```bash
cd backend
npm install

# Create .env file
cp .env.example .env
# Edit .env with your configuration

# Seed the database with sample data
npm run seed

# Start the server
npm run dev
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

## 🔧 Environment Variables

### Backend (.env)
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/cctv_store
JWT_SECRET=your_super_secret_jwt_key
JWT_EXPIRE=7d

# Email (optional)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password

# Stripe (optional)
STRIPE_SECRET_KEY=sk_test_xxx
```

## 📂 Project Structure

```
cctv/
├── backend/
│   ├── models/          # Mongoose models
│   ├── routes/          # API routes
│   ├── middleware/      # Auth middleware
│   ├── server.js        # Express server
│   └── seed.js          # Database seeder
│
├── frontend/
│   ├── public/          # Static files
│   └── src/
│       ├── components/  # Reusable components
│       ├── pages/       # Page components
│       ├── store/       # Zustand stores
│       └── utils/       # Utilities
│
└── README.md
```

## 🔑 API Endpoints

### Auth
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user
- `PUT /api/auth/updateprofile` - Update profile

### Products
- `GET /api/products` - List products (with filters)
- `GET /api/products/:id` - Get single product
- `GET /api/products/featured` - Featured products
- `GET /api/products/categories` - Product categories

### Orders
- `POST /api/orders` - Create order
- `GET /api/orders` - Get user orders
- `GET /api/orders/track/:orderNumber` - Track order

### Contact
- `POST /api/contact` - Submit contact form
- `POST /api/contact/quote` - Request quote

### Blog
- `GET /api/blog` - List blog posts
- `GET /api/blog/:slug` - Get single post

## 🎨 Design Features

- Dark theme with blue accents
- Modern glassmorphism effects
- Smooth animations with Framer Motion
- Grid backgrounds and gradients
- Responsive mobile-first design
- Custom scrollbars
- Loading states and skeletons

## 📱 Pages

1. **Home** (`/`)
2. **Products** (`/products`)
3. **Product Detail** (`/products/:id`)
4. **Services** (`/services`)
5. **About** (`/about`)
6. **Contact** (`/contact`)
7. **FAQ** (`/faq`)
8. **Blog** (`/blog`)
9. **Blog Post** (`/blog/:slug`)
10. **Cart** (`/cart`)
11. **Checkout** (`/checkout`)
12. **Login** (`/login`)
13. **Register** (`/register`)
14. **Account** (`/account`)
15. **Order Tracking** (`/track-order`)

## 🚀 Deployment

### Frontend (Vercel/Netlify)
```bash
cd frontend
npm run build
# Deploy dist folder
```

### Backend (Heroku/Railway)
```bash
cd backend
# Deploy with environment variables configured
```

## 📄 License

MIT License - feel free to use this project for your own purposes.

## 👨‍💻 Author

Built with ❤️ for SecureVision CCTV Equipment Company

