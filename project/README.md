# Doctor Listing Application

A modern, responsive web application for finding and booking doctor appointments. Built with React, TypeScript, and Tailwind CSS.

## 🌟 Features

- **Smart Search**: Real-time doctor search with autocomplete suggestions
- **Advanced Filtering**:
  - Filter by consultation mode (Video/In-clinic)
  - Filter by medical specialties
  - Sort by fees (low to high) or experience (high to low)
- **Responsive Design**: Optimized for all devices with a mobile-first approach
- **URL Persistence**: All filters are synchronized with the URL for easy sharing
- **Clean UI**: Modern, professional interface with intuitive navigation

## 🚀 Tech Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Vite
- **State Management**: React Hooks

## 📦 Getting Started

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

## 🏗️ Project Structure

```
src/
├── api/           # API integration
│   └── doctorApi.ts
├── components/    # React components
│   ├── AutocompleteSearch.tsx
│   ├── DoctorCard.tsx
│   ├── DoctorList.tsx
│   └── FilterPanel.tsx
├── types/        # TypeScript interfaces
│   └── doctor.ts
├── utils/        # Utility functions
│   └── filterUtils.ts
└── App.tsx       # Main application component
```

## 🔍 Core Features

### Search
- Real-time search with suggestions
- Case-insensitive matching
- Debounced input handling

### Filtering
- Multiple specialty selection
- Consultation type toggle (Video/In-clinic)
- Sort by fees or experience
- URL-synchronized filters

### Doctor Cards
- Professional display of doctor information
- Consultation mode indicators
- Experience and fee information
- Booking button

## 🛠️ Available Scripts

- **Development**:
  ```bash
  npm run dev
  ```

- **Build**:
  ```bash
  npm run build
  ```

- **Preview**:
  ```bash
  npm run preview
  ```

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

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
- [Lucide Icons](https://lucide.dev/)