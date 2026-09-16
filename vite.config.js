import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { cpSync, existsSync } from 'node:fs'
import { fileURLToPath } from 'node:url'

function copyLegacyImagePaths() {
  return {
    name: 'copy-legacy-image-paths',
    closeBundle() {
      const sourceDir = fileURLToPath(new URL('./src/Images', import.meta.url))
      const targetDir = fileURLToPath(new URL('./dist/src/Images', import.meta.url))

      if (existsSync(sourceDir)) {
        cpSync(sourceDir, targetDir, { recursive: true })
      }
    },
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), copyLegacyImagePaths()],
})
