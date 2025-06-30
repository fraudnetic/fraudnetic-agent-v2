# 🛡️ fraudnetic-agent-v2

`fraudnetic-agent-v2` is a lightweight JavaScript SDK that collects browser fingerprint data and returns a secure token used for fraud protection. This token can be attached to every HTTP request to help backend systems detect and prevent bots, abuse, and fraudulent behavior.

> ✅ This SDK is part of the **Fraudnetic Software Suite** — an advanced toolkit for fraud detection, behavioral analysis, and secure session tracking.

---

## 📦 Installation

Install with npm or yarn:

```bash
npm install fraudnetic-agent-v2
# or
yarn add fraudnetic-agent-v2
```

---

## 🚀 Quick Start

Initialize Fraudnetic when your app loads. It returns a secure token you can attach to outgoing HTTP requests.

```ts
import fraudnetic from 'fraudnetic-agent-v2';

fraudnetic.init().then((token) => {
  console.log('Fraudnetic initialized');
  console.log('Fraud Token:', token);

  // Example usage with Fetch
  fetch('/api/secure', {
    method: 'POST',
    headers: {
      'X-Fraud-Token': token,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ data: 'hello' })
  });
});
```

---

## 🔧 Integration Examples

### Angular

```ts
import { Component, OnInit } from '@angular/core';
import fraudnetic from 'fraudnetic-agent-v2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit() {
    fraudnetic.init().then((token) => {
      console.log('Fraud Token:', token);
      // Attach to HTTP headers in your services
    });
  }
}
```

### React

```tsx
import React, { useEffect } from 'react';
import fraudnetic from 'fraudnetic-agent-v2';
import axios from 'axios';

export default function App() {
  useEffect(() => {
    fraudnetic.init().then((token) => {
      axios.defaults.headers.common['X-Fraud-Token'] = token;
    });
  }, []);

  return <div>React + Fraudnetic</div>;
}
```

### Vue 3

```ts
import { createApp } from 'vue';
import fraudnetic from 'fraudnetic-agent-v2';
import App from './App.vue';
import axios from 'axios';

fraudnetic.init().then((token) => {
  axios.defaults.headers.common['X-Fraud-Token'] = token;
  createApp(App).mount('#app');
});
```

### Plain JavaScript

```html
<script type="module">
  import fraudnetic from 'fraudnetic-agent-v2';

  fraudnetic.init().then((token) => {
    fetch('/api/submit', {
      method: 'POST',
      headers: {
        'X-Fraud-Token': token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ example: 'data' })
    });
  });
</script>
```

---

## 📌 Notes

- Use any custom header name, like `X-Client-Token`, `X-Secure-ID`, or randomized strings.
- Backend must be configured to read the header and validate the token.

---

## 📬 Support

For advanced usage, integration help, or backend verification logic, please contact the Fraudnetic team or your service provider.

---

## 📃 License

Fraudnetic Agent SDK License Agreement
Version 1.0 – © [2025] Fraudnetic Technologies

This software is the proprietary property of Fraudnetic Technologies and is licensed, not sold.

Permission is hereby granted to use the `fraudnetic-agent-v2` SDK strictly within:
1. The official Fraudnetic SaaS platform, or
2. Platforms, products, or systems operated by officially licensed partners with written authorization from Fraudnetic Technologies.

Redistribution, sublicensing, modification, reverse engineering, or use of this software outside the above scope is strictly prohibited without express written permission.

This SDK is provided "as is", without warranty of any kind, express or implied.

By installing, copying, or using this software, you agree to be bound by the terms above. Unauthorized use may result in legal action.

For licensing inquiries, please contact:
📩 legal@fraudnetic.com

