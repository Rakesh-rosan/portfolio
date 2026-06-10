import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { motion } from "framer-motion";

export default defineConfig({
  plugins: [react(), tailwindcss()],
})