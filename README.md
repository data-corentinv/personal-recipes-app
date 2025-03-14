# Personal Recipes App

<div align="center">
  <img src="assets/icon.png" alt="App Logo" width="120" height="120" style="border-radius: 20px"/>
</div>

A modern React Native mobile application for managing and discovering recipes. Built with Expo and featuring a beautiful, intuitive user interface.

<div align="center">
  <table>
    <tr>
      <td align="center">
        <img src="screenshot/Iphone/Simulator%20Screenshot%20-%20iPhone%2016%20Pro%20Max%20-%202025-03-13%20at%2021.29.30.png" width="250" alt="iPhone App Screenshot"/>
        <br>
        <em>iPhone View</em>
      </td>
      <td align="center">
        <img src="screenshot/Ipad/Simulator%20Screenshot%20-%20iPad%20Air%2013-inch%20(M2)%20-%202025-03-13%20at%2021.32.05.png" width="300" alt="iPad App Screenshot"/>
        <br>
        <em>iPad View</em>
      </td>
    </tr>
  </table>
</div>

## Table of Contents
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Development](#development)
  - [Project Structure](#project-structure)
  - [Available Scripts](#available-scripts)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [Acknowledgments](#acknowledgments)

## Features

- 📱 Beautiful and intuitive user interface
- 🍳 Comprehensive recipe management
- 📑 Detailed recipe information and instructions
- 🖼️ Photo gallery for each recipe
- 🔍 Advanced search functionality
- 📋 Ingredient-based recipe discovery
- 🗂️ Category-based organization
- 🍽️ Detailed ingredient lists
- 📱 Cross-platform compatibility
- 🔄 Real-time updates
- 🎨 Modern UI/UX design
- �� Responsive layout
- ⭐ Recipe starring system
  - Star/unstar recipes with a single tap
  - Access starred recipes from the drawer menu
  - Visual feedback with filled/empty star icons
  - Consistent starring state across all screens

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or higher)
- [Yarn](https://yarnpkg.com/) (v1.22 or higher)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- [iOS Simulator](https://developer.apple.com/simulator/) (for iOS development)
- [Android Studio](https://developer.android.com/studio) (for Android development)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/personal-recipes-app.git
cd personal-recipes-app
```

2. Install dependencies:
```bash
yarn install
```

3. Start the development server:
```bash
yarn expo start
```

4. Run on your preferred platform:
- iOS: Press `i` or run `yarn expo start --ios`
- Android: Press `a` or run `yarn expo start --android`
- Web: Press `w` or run `yarn expo start --web`

## Development

### Project Structure

```
personal-recipes-app/
├── src/
│   ├── components/     # Reusable UI components
│   ├── screens/        # Screen components
│   ├── navigation/     # Navigation configuration
│   ├── data/          # Data management
│   ├── hooks/         # Custom React hooks
│   ├── utils/         # Utility functions
│   └── assets/        # Images, fonts, etc.
├── App.js             # Root component
└── package.json       # Project dependencies
```

### Available Scripts

- `yarn start` - Start the Expo development server
- `yarn android` - Start the app on Android
- `yarn ios` - Start the app on iOS
- `yarn web` - Start the app in web browser
- `yarn test` - Run tests
- `yarn lint` - Run ESLint

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any questions or feedback, please contact:
- vasseur.corentin@gmail.com

## Acknowledgments

- [Expo](https://expo.dev/) for the amazing development platform
- [React Native](https://reactnative.dev/) for the mobile framework
- All contributors and users of the app

## [WIP] Android (macos)

```bash
# If you already have the SDK installed but Expo can't find it, set the environment variables manually:

echo 'export ANDROID_HOME=$HOME/Library/Android/sdk' >> ~/.zshrc
echo 'export PATH=$ANDROID_HOME/emulator:$ANDROID_HOME/tools:$ANDROID_HOME/tools/bin:$ANDROID_HOME/platform-tools:$PATH' >> ~/.zshrc
source ~/.zshrc

echo $ANDROID_HOME
adb devices
# If adb is missing:
brew install android-platform-tools

# Then restart your terminal and run:
adb start-server
yarn expo start --android

# Restart Metro Bundler & Expo
# If the issue persists, try cleaning up Expo and Metro Bundler:
expo doctor --fix-dependencies
expo start --clear
```