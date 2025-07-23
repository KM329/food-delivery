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
    ### Login Screen
    <img src="https://github.com/KM329/food-delivery/blob/master/screenshots/loginScreen.png" alt="Login screen" width="600"/>

    ### Dashboard / Food List Screen
    <img src="https://github.com/KM329/food-delivery/blob/master/screenshots/dashboard.png" alt="Dashboard screen" width="600"/>

    ### Address Screen
    <img src="https://github.com/KM329/food-delivery/blob/master/screenshots/address.png" alt="Address screen" width="600"/>

    ### Order Summary Page
    <img src="https://github.com/KM329/food-delivery/blob/master/screenshots/orderSummary.png" alt="Order summary screen" width="600"/>


## Development server

Run `ng serve` in login-app for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

Run `node server.js` in jwt-api for node server. Navigate to `http://localhost:3000`

## Upcoming Enhancements
    Refresh Token
    Cart Page
    Push notifications for orders
    Add Step Guard from directly bookmarking steps
