# Finance Dashboard

## Overview

The Finance Dashboard is a comprehensive web application designed to help users manage and track their investments. The dashboard offers real-time stock price updates, detailed graphs, and user authentication features including login and logout, implemented using Redux.

## Features

Open [http://localhost:8000](http://localhost:8000) with your browser to see the result.

- **User Authentication**: Secure login and logout functionality powered by Redux.
- **Real-Time Stock Prices**: View current stock prices with live updates.
- **Graph Information**: Visualize stock data through detailed and interactive graphs.
- **Responsive Design**: Optimized for both desktop and mobile devices.


## Installation

To run this project locally, follow these steps:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/dhruv8433/finance-dashboard.git
    cd finance-dashboard
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Set up environment variables**:
    Create a `.env` file in the root directory and add the following environment variables:
    ```env
    MONGO_URI=your-mongodb-uri
    JWT_SECRET=your-jwt-secret
    ```

4. **Start the development server**:
    ```bash
    npm run dev
    ```

5. **Build for production**:
    ```bash
    npm run build
    npm start
    ```

## Usage

### Authentication

- **Sign Up**: Users can sign up by providing their username, password, name, and address.
- **Login**: Existing users can log in using their credentials.
- **Logout**: Users can log out, ending their session securely.

### Stock Prices

- The dashboard displays current stock prices, which are updated in real-time.
- Users can search for specific stocks to view their current prices.

### Graphs

- The application provides detailed and interactive graphs for visualizing stock performance.
- Users can view historical data and trends for better investment decisions.

## Technologies Used

- **Frontend**:
  - Next.js
  - React
  - Redux
  - Tailwind CSS

- **Backend**:
  - Node.js
  - Express
  - MongoDB
  - Mongoose

- **Authentication**:
  - JSON Web Tokens (JWT)
  - Bcrypt

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Create a pull request.

## Acknowledgements

- Special thanks to the contributors of the open-source libraries used in this project.

Enjoy using the Finance Dashboard! 🚀
