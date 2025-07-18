# Echo - Anonymous Student Reporting Platform

A secure, anonymous reporting platform for Nigerian university students to report incidents of harassment, fraud, safety concerns, and discrimination.

## 🌟 Features

- **Anonymous Reporting**: Submit reports without revealing your identity
- **AI Content Scoring**: Intelligent scoring system to assess report credibility
- **Community Verification**: Peer review and validation system
- **Evidence Upload**: Support for images, videos, and documents
- **Real-time Feed**: Browse and interact with published reports
- **Email Verification**: .edu email domain verification for authenticity
- **Dark/Light Mode**: Modern UI with theme switching
- **Mobile Responsive**: Optimized for all devices

## 🚀 Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS, Radix UI
- **Backend**: Firebase (Auth, Firestore, Storage)
- **API Integration**: MantaHQ API for report management
- **Deployment**: Vercel

## 📦 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or pnpm
- Firebase account
- MantaHQ API access

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Timeless-Dave/Echo.git
cd Echo
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Configure your `.env.local` file with:
```env
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_measurement_id

# MantaHQ API
NEXT_PUBLIC_MANTAHQ_API_URL=https://api.mantahq.com/api/workflow/your_endpoint
```

5. Start the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

```
Echo/
├── app/                    # Next.js app directory
│   ├── reports/           # Reports listing and details
│   ├── submit/            # Report submission form
│   ├── login/             # Authentication pages
│   └── ...
├── components/            # Reusable UI components
│   ├── ui/               # Shadcn/ui components
│   └── ...
├── lib/                  # Utility functions and APIs
│   ├── firebase.ts      # Firebase configuration
│   ├── mantahq-api.ts   # MantaHQ API integration
│   └── ...
└── styles/               # Global styles
```

## 🔐 Security Features

- **Anonymous Reporting**: No personal data stored with reports
- **Email Verification**: .edu domain validation
- **Content Moderation**: AI-powered content scoring
- **Secure File Upload**: Firebase Storage integration
- **Data Encryption**: All sensitive data encrypted

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support, email support@echo-platform.com or join our Discord community.

## 🌍 Impact

Echo aims to create safer university environments by providing a secure platform for students to report incidents and seek help anonymously.

---

**Made with ❤️ for Nigerian University Students** 