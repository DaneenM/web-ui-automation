# 🌐 Web UI Automation with Playwright

This repository contains automated UI tests built with [Playwright](https://playwright.dev/) in JavaScript. It's designed to showcase professional, maintainable test automation for web applications—ideal for portfolio projects, learning, or real-world use.

---

## 🚀 Project Purpose

✅ Demonstrate professional UI automation practices  
✅ Build a maintainable Playwright testing framework  
✅ Test user flows on demo or real websites  
✅ Showcase hands-on automation engineering skills

---

## ⚡️ Features

- 📌 Playwright Test Runner
- ✅ Modern JavaScript (ESM)
- 🌐 Cross-browser support (Chromium, Firefox, WebKit)
- 📋 Easy to extend with new test cases
- 🗂️ Clear project structure
- 📈 HTML test reports

---

## 📑 Current Test Cases

### ✅ T01: Verify User Login
- Navigates to the login page
- Enters valid user credentials
- Clicks the login button
- Confirms the user lands on the inventory/dashboard page
  
--- 

## 🛠️ Getting Started

### 1️⃣ Clone the repo
```bash
git clone https://github.com/DaneenM/web-ui-automation.git
cd web-ui-automation
2️⃣ Install dependencies
npm install

3️⃣ Install browsers
npx playwright install
🧪 Running Tests
✅ Run all tests headlessly

npx playwright test
✅ Run all tests in headed (visible browser) mode

npx playwright test --headed
✅ Run a specific test file

npx playwright test tests/login.spec.js
✅ Watch mode / UI

npx playwright test --ui
📊 Viewing HTML Reports
✅ Generate report

npx playwright test --reporter html
✅ View report

npx playwright show-report
🔮 Coming Soon
✅ T02: Invalid Login
✅ T03: Missing Credentials Validation
✅ ... More advanced test cases and best practices

🤝 Contributions
Want to learn or practice? Feel free to fork, clone, and submit a PR!

⚡️ About
Created by Daneen Mays as part of a portfolio project to demonstrate UI test automation skills using Playwright.

