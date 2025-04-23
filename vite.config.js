import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' // 新增 path 模块导入

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src') // 添加路径别名配置
    }
  }
})
