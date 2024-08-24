Spinz Casino

Table of Contents

Introduction
Features
Technology Stack
Project Structure
Getting Started
Prerequisites
Installation
Running the Application
Environment Variables
Deployment
Contributing
License
Introduction

Spinz Casino is an online social sweeps coins casino application inspired by industry-leading platforms. This app combines social gaming with a sophisticated sweeps coins economy, allowing users to engage in various casino-style games, including slots, with options to earn, spend, and convert sweeps coins. The platform offers a modern and responsive user interface, designed to provide an engaging and smooth user experience.

Features

Authentication: Users can log in using Google, Facebook, or email/password.
Profile Management: Users can create profiles and manage their accounts.
Sweeps Coins Economy: Earn, spend, and convert sweeps coins within the app.
Responsive Design: Optimized for both desktop and mobile users.
Third-Party Game Integration: Supports integration with third-party game providers.
Technology Stack

Frontend: React.js, React Router DOM, Styled Components
Backend: Node.js (express), MongoDB (for user data), Firebase (for authentication)
Authentication: Firebase Authentication (Google, Facebook, Email/Password)
Deployment: AWS (EC2, S3, RDS), Docker, Kubernetes (EKS)
Project Structure

css
Copy code
frontend/
  ├── public/
  ├── src/
  │   ├── components/
  │   │   ├── Header.js
  │   │   ├── Sidebar.js
  │   │   ├── GamePreview.js
  │   │   ├── SlidableTiles.js
  │   │   ├── PromotionalBanner.js
  │   │   ├── Login.js
  │   │   ├── EmailLogin.js
  │   │   ├── CreateProfile.js
  │   │   ├── Home.js
  │   ├── App.js
  │   ├── index.js
  │   ├── firebaseConfig.js
  │   └── App.css
backend/
  ├── services/
  │   ├── auth/
  │   ├── game-management/
  │   ├── payment/
  │   ├── social/
  ├── Dockerfile
  ├── docker-compose.yml
  └── ...
Getting Started

Prerequisites
Make sure you have the following installed:

Node.js (version 14.x or higher)
npm or Yarn
Docker and Docker Compose (for running backend services)
Firebase CLI (for managing Firebase services)
AWS CLI (for deployment)
Installation
Clone the repository:
bash
Copy code
git clone https://github.com/your-username/spinz-casino.git
cd spinz-casino
Install frontend dependencies:
bash
Copy code
cd frontend
npm install
Set up the backend:
Ensure Docker is running, then build and start the backend services:

bash
Copy code
docker-compose up --build
Running the Application
Frontend:
Start the React development server:

bash
Copy code
cd frontend
npm start
The app should now be running at http://localhost:3000.
Backend:
The backend services should be running via Docker. You can interact with them using the configured API endpoints.
Environment Variables

Create a .env file in the frontend/ directory and add the following:

env
Copy code
REACT_APP_FIREBASE_API_KEY=your-firebase-api-key
REACT_APP_FIREBASE_AUTH_DOMAIN=your-firebase-auth-domain
REACT_APP_FIREBASE_PROJECT_ID=your-firebase-project-id
REACT_APP_FIREBASE_STORAGE_BUCKET=your-firebase-storage-bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-firebase-messaging-sender-id
REACT_APP_FIREBASE_APP_ID=your-firebase-app-id
In the backend, ensure your .env file includes:

env
Copy code
MONGODB_URI=your-mongodb-uri
JWT_SECRET=your-jwt-secret
AWS_ACCESS_KEY_ID=your-aws-access-key-id
AWS_SECRET_ACCESS_KEY=your-aws-secret-access-key
S3_BUCKET_NAME=your-s3-bucket-name
Deployment

The application is designed for deployment on AWS using Docker and Kubernetes.

Deploying Backend Services:
Use eksctl to set up an EKS cluster.
Deploy your services using the provided Kubernetes manifests.
Deploying the Frontend:
Build the frontend:
bash
Copy code
npm run build
Deploy the build to an S3 bucket, and set up CloudFront for distribution.
CI/CD:
Set up a CI/CD pipeline using AWS CodePipeline or GitHub Actions to automate deployments.
Contributing

Contributions are welcome! Please follow these steps:

Fork the repository.
Create a new branch (git checkout -b feature-name).
Make your changes.
Commit and push your changes (git push origin feature-name).
Open a pull request.
Please ensure your code follows our Code of Conduct.

License

This project is licensed under the MIT License - see the LICENSE file for details.
