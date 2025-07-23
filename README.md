# 🛍️ Food Delivery App

This project is a food ordering application with JWT authentication and multi-step checkout flow. version 15.1.3.

## Project Structure

```bash
login-app/
│
├── angular-jwt-app/                     # Angular frontend
│   └── src/
│       └── app/
│           ├── app.component.ts
│           ├── app.module.ts
│           ├── app-routing.module.ts    # Lazy loading routes
│
│           ├── core/                    # Singleton services & guards
│           │   ├── core.module.ts
│           │   ├── services/
│           │   │   └── auth.service.ts
│           │   ├── guards/
│           │   │   └── auth.guard.ts
│           │   └── interceptors/
│           │       └── jwt.interceptor.ts
│
│           ├── auth/                    # Auth feature module
│           │   ├── auth.module.ts
│           │   ├── auth-routing.module.ts
│           │   └── login.component.ts
│
│           ├── dashboard/               # Dashboard feature module
│           │   ├── dashboard.module.ts
│           │   ├── dashboard-routing.module.ts
│           │   └── dashboard.component.ts
│
│       └── environments/                # Environment config
│           ├── environment.ts
│           └── environment.prod.ts
│
├── jwt-api/                             # Node.js JWT backend
│   ├── server.js                        # Express server setup
│   ├── package.json
│   └── .env                             # Secret key and configs
│
└── README.md   
```

## 🛠️ Technologies Used

🌐 Frontend – Angular 15
    Angular 15: Robust SPA framework for scalable client-side development

    Angular Material: Pre-built UI components for accessible design

    Bootstrap: Utility-first CSS toolkit to enhance responsive layout and styling

    RxJS: Reactive programming library for asynchronous data streams

    JWT Authentication (via HttpInterceptor): Secure token-based auth with expiry tracking

    Feature Modules with Lazy Loading: Modular architecture using Auth and Dashboard modules

    Forms: Supports ReactiveFormsModule for flexible form handling

🔧 Backend – Express.js
    Express.js: Minimalist Node.js framework for handling API routes

    JSON Web Tokens (JWT): Stateless auth implementation with token expiration logic

    CORS & Body Parser: Handles cross-origin requests and JSON payloads

    Environment-based Configs: Secure storage for secrets like JWT signing key


## 📸 Screenshots
  Login Screen
    <img width="1434" height="477" alt="loginScreen" src="https://github.com/user-attachments/assets/7924d5e2-55a6-4d6b-8dca-7dd80aa2b4a6" />

    
  Dashboard / Food List Screen
    <img width="1436" height="756" alt="dashboard" src="https://github.com/user-attachments/assets/5a01f1b5-721e-423c-aa8a-90311e7eac0e" />


  Address Screen
    <img width="1436" height="756" alt="Address" src="https://github.com/KM329/food-delivery/blob/master/screenshots/address.png" />

  Order Summary Page
    <img width="1436" height="756" alt="OrdeerSummary" src="https://github.com/KM329/food-delivery/blob/master/screenshots/orderSummary.png" />


## Development server

Run `ng serve` in login-app for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

Run `node server.js` in jwt-api for node server. Navigate to `http://localhost:3000`

## Upcoming Enhancements
    Refresh Token
    Cart Page
    Push notifications for orders
    Add Step Guard from directly bookmarking steps
