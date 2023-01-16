
### Turismarca  |  ![Logo](https://user-images.githubusercontent.com/65699208/212762146-e6e64f7f-2623-416d-b8a2-daee79956bda.svg)

Turismarca is a project designed to bring tourism closer to people, in which we are going to give a modern and attractive design to the user

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install the project dependencies.

```bash
npm install 
```

## Stack used
```javascript
import React from 'react' //JavaScript & React
# "react-icons"

@type {import('tailwindcss').Config} //Tailwindcss for Styling
# extend: {
    }
  },
  plugins: [
    require('tailwind-scrollbar'),
    require('tailwindcss-animated') //Plugins used by Tailwind
  ],
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {}
  }
}

import { defineConfig } from 'vite'  
import react from '@vitejs/plugin-react' //Vite Environment & Node.JS Runtime

// https://vitejs.dev/config/
# export default defineConfig({
  plugins: [react()],
})
 
```

## Design

For this project, the client has made certain priorities clear to us to take into account with the product they want:

- An optimized and accessible Application
- Attractive user interface and good experience in it

## Folder Structure: 

![image](https://user-images.githubusercontent.com/65699208/212761723-c9dad368-d638-4e8f-b36f-9dddcd873e5b.png)

## License
- All images used are under license:

[Creative Commons (CC)](http://creativecommons.org/licenses/by/4.0/)
