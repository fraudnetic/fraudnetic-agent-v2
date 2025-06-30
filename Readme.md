# Fraudnetic agent usage

## Installation

```bash
npm install fraudnetic-agent
```

## Usage


### Angular usage example
```javascript
import { Component } from '@angular/core';
import fraudnetic from 'fraudnetic-agent';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
  ngOnInit() {
    fraudnetic.init().then((token) => {
      console.log('Fraudnetic initialized');
      console.log('Fraudnetic token: ' + token);
      // use token in each axios header
    });
  }
}

```
