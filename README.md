# Doctor Listing Application

A modern, responsive web application for finding and booking doctor appointments. Built with React, TypeScript, and Tailwind CSS.

![Doctor Listing App](project/Screenshot%202025-04-25%20at%2017.33.09.png)

## 🌟 Features

- **Advanced Search**: Search doctors by name with real-time suggestions
- **Smart Filtering**: Filter doctors by:
  - Consultation mode (Video/In-clinic)
  - Medical specialties
  - Experience
  - Consultation fees
- **Responsive Design**: Fully responsive layout that works on all devices
- **URL-based Filters**: All filters are synchronized with the URL for easy sharing and navigation
- **Modern UI**: Clean and professional interface with smooth transitions

## 🚀 Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS for utility-first styling
- **Icons**: Lucide React for beautiful, consistent icons
- **State Management**: React Hooks for local state management
- **Build Tool**: Vite for fast development and optimized builds

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/doctor-listing.git
   ```

2. Install dependencies:
   ```bash
   cd doctor-listing
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## 🛠️ Development

- **Development Mode**:
  ```bash
  npm run dev
  ```

- **Production Build**:
  ```bash
  npm run build
  ```

- **Preview Production Build**:
  ```bash
  npm run preview
  ```

## 🧪 Project Structure

```
src/
├── api/           # API integration
├── components/    # React components
├── types/        # TypeScript interfaces
├── utils/        # Utility functions
└── App.tsx       # Main application component
```

### Key Components

- `DoctorCard`: Individual doctor listing card
- `FilterPanel`: Filtering options sidebar
- `AutocompleteSearch`: Search with suggestions
- `DoctorList`: Main listing component

## 🔍 Features in Detail

### Search Functionality
- Real-time search suggestions
- Debounced search input
- Case-insensitive matching

### Filtering System
- Multiple specialty selection
- Consultation type toggle
- Sort by fees or experience
- URL-synchronized filters

### Responsive Design
- Mobile-first approach
- Collapsible filter panel on mobile
- Adaptive layout for all screen sizes

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
