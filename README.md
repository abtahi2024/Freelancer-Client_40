# 🧑‍💻 Freelancer Platform (Frontend)

This is the **frontend** of the Freelancer Platform — a web application where users can browse services, hire freelancers, and manage their own services.  
Built using **React**, **React Router**, and **Tailwind CSS**, with authentication and payment integration via a Django REST API backend.


Backend API: [https://freelancer-platform-27.vercel.app/api/v1/](https://freelancer-platform-27.vercel.app/api/v1/)


---

## 🚀 Features

- 🏠 **Home Page** – Overview and navigation to services  
- 🛍️ **Shop Services** – Browse all available freelance services  
- 🔍 **Service Detail** – View details, ratings, and user reviews  
- 💬 **Review System** – Authenticated users can add and edit reviews  
- 🔐 **Authentication** – JWT-based login, registration, and account activation  
- 💳 **Payment Integration** – Secure payment process with success & failure redirection  
- 🧾 **Dashboard** – Personalized user dashboard with profile, orders, and service management  
- ⚙️ **Admin Options** – Add new categories or services from dashboard  

---

## 🧩 Tech Stack

| Category        | Technology Used              |
|-----------------|------------------------------|
| **Frontend**    | React, React Router, Tailwind CSS |
| **State Mgmt**  | React Hooks, Context API (if used) |
| **Backend API** | Django REST Framework (DRF) |
| **Auth System** | Djoser + JWT Authentication |
| **Payment**     | SSLCOMMERZ or Stripe (as integrated) |

---

## ⚙️ Installation Guide

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/freelancer-platform-frontend.git
cd freelancer-platform-frontend

npm install

VITE_API_BASE_URL=https://freelancer-platform-27.vercel.app/api/v1

npm run dev

| Path                         | Component         | Description                              |
| ---------------------------- | ----------------- | ---------------------------------------- |
| `/`                          | `Home`            | Landing page                             |
| `/shopservice`               | `ShopService`     | Browse all freelance services            |
| `/shopservice/:serviceId`    | `ServiceDetail`   | View single service details with reviews |
| `/login`                     | `Login`           | User login form                          |
| `/register`                  | `Register`        | New user registration                    |
| `/activate/:uid/:token`      | `ActivateAccount` | Activate user account via email          |
| `/about`                     | `About`           | About the platform                       |
| `/dashboard`                 | `Deshboard`       | Main dashboard (Protected)               |
| `/dashboard/profile`         | `Profile`         | View and edit user profile               |
| `/dashboard/orders`          | `Orders`          | View all orders made by the user         |
| `/dashboard/payment/success` | `PaymentSuccess`  | Payment confirmation page                |
| `/dashboard/categories/add`  | `AddCategory`     | Add a new service category               |
| `/dashboard/service/add`     | `AddServices`     | Add a new service                        |

src/
 ┣ components/
 ┃ ┣ PrivateRoute.jsx
 ┃ ┣ Registration/
 ┃ ┃ ┗ ActivateAccount.jsx
 ┣ layouts/
 ┃ ┣ MainLayout.jsx
 ┃ ┗ DeshboardLayout.jsx
 ┣ pages/
 ┃ ┣ Home.jsx
 ┃ ┣ ShopService.jsx
 ┃ ┣ ServiceDetail.jsx
 ┃ ┣ Login.jsx
 ┃ ┣ Register.jsx
 ┃ ┣ Deshboard.jsx
 ┃ ┣ Profile.jsx
 ┃ ┣ Orders.jsx
 ┃ ┣ AddCategory.jsx
 ┃ ┣ AddServices.jsx
 ┃ ┗ About.jsx
 ┣ routes/
 ┃ ┗ AppRoutes.jsx
 ┗ main.jsx

| Endpoint                   | Method   | Description                       |
| -------------------------- | -------- | --------------------------------- |
| `/auth/jwt/create/`        | POST     | Login user                        |
| `/auth/users/`             | POST     | Register new user                 |
| `/auth/users/activation/`  | POST     | Activate account                  |
| `/services/`               | GET      | Fetch all services                |
| `/services/:id/`           | GET      | Get single service details        |
| `/services/:id/reviews/`   | GET/POST | Fetch or create reviews           |
| `/orders/has-ordered/:id/` | GET      | Check if user purchased a service |
| `/orders/`                 | GET      | Fetch user orders                 |
