# Customer Data Explorer – Backend

This is the backend for the Customer Data Explorer app, built using **AWS SAM** and **Node.js (CommonJS)**. It exposes a Lambda-powered API endpoint to serve paginated customer data.

---

## Features

- AWS Lambda (Node.js 22)
- API Gateway integration (`/customers`)
- Pagination support via query parameters
- Local testing with mock event
- Jest unit tests

---

## Project Structure

```
customers-api/
├── template.yaml              # SAM template for Lambda + API Gateway
├── src/
│   ├── handler.js             # Main Lambda handler
│   └── utils/
│       └── paginate.js        # Pagination logic
├── events/
│   └── get-customers.json     # Sample event for local testing
├── __tests__/
│   └── handler.test.js        # Unit test for the Lambda
├── package.json
└── jest.config.js
```

---

## Run Locally

### 1. Install dependencies
```bash
npm install
```

### 2. Build the app
```bash
sam build
```

### 3. Start local API
```bash
sam local start-api
```
→ Test: [http://localhost:3000/customers?page=1&limit=5](http://localhost:3000/customers?page=1&limit=5)

---

## 🧪 Run Unit Tests
```bash
npm test
```

---

## 🔌 Invoke with Event
```bash
sam local invoke CustomerApiFunction --event events/get-customers.json
```

---

## 🔧 Deployment (optional)

```bash
sam deploy --guided
```

---

## 📌 Requirements

- Node.js 22.x
- AWS SAM CLI
- Docker (for local emulation)
