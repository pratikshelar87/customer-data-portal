# Customer UI

This is the frontend for the **Customer Data Portal**, built using:

- **Next.js 15 (App Router + SSR)**
- **Tailwind CSS**
- **shadcn/ui** (accessible UI components)
- **Deployed via Vercel**


## 🌐 Live Demo

🔗 [https://customer-data-portal.vercel.app/](https://customer-data-portal.vercel.app/)



## 🔧 Getting Started

1. Install dependencies

```
npm install
```

2. Set up environment variables
Create a .env.local file:

```
API_KEY=your-api-key-here
```

3. Start the dev server
```
npm run dev
```

App will be available at:
📍 http://localhost:3000

📦 API Integration
The UI fetches customer data from a secured AWS API Gateway endpoint:
```
GET https://qhxx3y3229.execute-api.ap-southeast-2.amazonaws.com/prod/customers?page=1&limit=10
API requests require an x-api-key header with the valid key.
```

## ✅ Features

Server-side pagination with ?page=1 query param

Clean UI with accessible shadcn components

Vercel auto-deploy from GitHub main branch

📁 Folder Structure
```
customer-ui/
├── app/                # App Router pages
├── components/         # Shared UI components
├── lib/                # API fetch helpers
├── types/              # TypeScript types
├── public/             # Static assets
└── .env.local          # API key (not committed)
```

🧪 Testing
```
npm run test
```