<<<<<<< HEAD
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
=======
import react from '@vitejs/plugin-react'

import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    react(),

    tailwindcss(),
  ],
>>>>>>> 7d407f7015e4d83d8849d6c136458eed869d7b06
})
