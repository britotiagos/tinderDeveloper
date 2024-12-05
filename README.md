# TinDev 👩‍💻👨‍💻

A Tinder-like application for developers to connect based on their GitHub profiles. Match with other developers who share your interests and coding style!

## Features 🚀

- GitHub profile integration
- Like/Dislike developers
- Real-time match notifications
- View developer's bio, repositories, and coding interests
- Cross-platform (Web + Mobile)

## Tech Stack 💻

### Backend

- Node.js with Express
- MongoDB Atlas for database
- ES Modules for modern JavaScript
- Error handling middleware
- Environment-based configuration

### Frontend

- React 18
- React Router v6
- Modern hooks and patterns
- Responsive design

### Mobile

- React Native
- Cross-platform (iOS & Android)

## Getting Started 🏁

### Prerequisites

- Node.js >= 20.x
- MongoDB Atlas account
- GitHub account

### Installation

1. Clone the repository:

```bash
git clone git@github.com:britotiagos/tinderDeveloper.git
cd tinDev
```

2. Backend Setup:

```bash
cd backend
yarn install
cp .env.example .env
# Update .env with your MongoDB and GitHub credentials
yarn dev
```

3. Frontend Setup:

```bash
cd frontend
yarn install
yarn start
```

4. Mobile Setup:

```bash
cd mobile
yarn install
npx react-native run-ios # or run-android
```

## API Endpoints 📡

### Developers

- `GET /api/devs` - List all developers
- `POST /api/devs` - Register new developer (requires GitHub username)

### Interactions

- `POST /api/devs/:devId/likes` - Like a developer
- `POST /api/devs/:devId/dislikes` - Dislike a developer

## Environment Variables 🔐

Create a `.env` file in the backend directory with:

```env
PORT=3333
NODE_ENV=development
MONGODB_URI=your_mongodb_connection_string
FRONTEND_URL=http://localhost:3000
GITHUB_TOKEN=your_github_token (optional)
```

## Contributing 🤝

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License 📝

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments 🙏

- Inspired by Tinder's UX
- Built during the OmniStack Week
- Thanks to all contributors!
