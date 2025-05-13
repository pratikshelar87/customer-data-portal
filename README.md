# Customer Data Portal

A full-stack customer data explorer built with **Next.js (SSR)** and **AWS Lambda (SAM)**, deployed via **Vercel** and **API Gateway**.



## 🌐 Live Demo

**The working application is** deployed on Vercel:  
🔗 [https://customer-data-portal.vercel.app/](https://customer-data-portal.vercel.app/)




## 📦 API Endpoint

The customer data API is hosted on AWS Lambda behind API Gateway. API key will be shared with you in email.

**Base URL**:  
https://qhxx3y3229.execute-api.ap-southeast-2.amazonaws.com/prod/customers

**Query Parameters**:

| Parameter | Type   | Description                     |
|-----------|--------|---------------------------------|
| `page`    | number | Page number (default: `1`)      |
| `limit`   | number | Items per page (default: `10`)  |

## 🔐 API Authentication

The API is protected using an **API key**. You must include the key in the request headers when calling the endpoint. The API key would be shared with you via email.

### Header Format

x-api-key: YOUR_API_KEY_HERE

### Example with `curl`

```bash
curl "https://qhxx3y3229.execute-api.ap-southeast-2.amazonaws.com/prod/customers?page=1&limit=10" \
  -H "x-api-key: YOUR_API_KEY_HERE"
```


## 🗂 Project Structure
```
customer-data-portal/
├── customers-api/ # AWS SAM backend (Lambda + API Gateway)
├── customer-ui/ # Next.js frontend (SSR, deployed on Vercel)
├── postman/ # Postman collection (optional)
└── README.md
```

## ⚙️ Tech Stack

- **Frontend**: Next.js 15 (App Router, SSR), Tailwind CSS, shadcn/ui
- **Backend**: AWS Lambda (Node.js 22), API Gateway, AWS SAM
- **Deployment**: Vercel (UI), AWS (API)



## 🧱 Local Development

### Run backend locally (SAM)

```
cd customers-api
sam local start-api --port 3001
```

### Run frontend locally (Next.js)
```
cd customer-ui
npm install
npm run dev
```