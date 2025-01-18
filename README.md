# Social Media App

A modern social media application built with Ionic Framework and Angular 19. This mobile-first application leverages the power of Capacitor for native functionality and Ionic components for a polished UI/UX experience.

## Features

- Cross-platform compatibility (iOS, Android, Web)
- Native device integration
- Modern UI components with Ionic
- Responsive design
- Native keyboard handling
- Haptic feedback support
- Status bar customization

## Prerequisites

Before you begin, ensure you have installed:
- Node.js (LTS version recommended)
- npm (comes with Node.js)
- Ionic CLI
- Android Studio (for Android development)
- Xcode (for iOS development, Mac only)

## Installation

1. Clone the repository:
```bash
git clone [your-repository-url]
cd [your-project-name]
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
ionic serve
```

## Technology Stack

### Core Framework
- Angular 19.0.0
- Ionic Framework 8.0.0
- Capacitor 6.2.0

### Key Dependencies
```json
{
    "@angular/animations": "^19.0.0",
    "@angular/common": "^19.0.0",
    "@angular/compiler": "^19.0.0",
    "@angular/core": "^19.0.0",
    "@angular/forms": "^19.0.0",
    "@angular/platform-browser": "^19.0.0",
    "@angular/platform-browser-dynamic": "^19.0.0",
    "@angular/router": "^19.0.0",
    "@capacitor/android": "^6.2.0",
    "@capacitor/app": "6.0.2",
    "@capacitor/core": "6.2.0",
    "@capacitor/haptics": "6.0.2",
    "@capacitor/keyboard": "6.0.3",
    "@capacitor/status-bar": "6.0.2",
    "@ionic/angular": "^8.0.0",
    "ionicons": "^7.0.0",
    "rxjs": "~7.8.0"
}
```

## Building for Mobile

### Android
```bash
ionic capacitor add android
ionic capacitor copy android
ionic capacitor open android
```

### iOS
```bash
ionic capacitor add ios
ionic capacitor copy ios
ionic capacitor open ios
```

## Development Commands

- `npm start` - Start development server
- `npm run build` - Build the application
- `npm run test` - Run unit tests
- `npm run lint` - Run linting
- `ionic capacitor copy` - Copy web assets to native platform
- `ionic capacitor sync` - Sync native platform dependencies

## Project Structure

```
├── src/
│   ├── app/
│   ├── assets/
│   ├── theme/
│   └── environments/
├── www/
├── android/
├── capacitor.config.ts
└── package.json
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## Acknowledgments

- Ionic Framework Team
- Angular Team
- Capacitor Team
