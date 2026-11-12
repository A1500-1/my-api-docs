import DefaultTheme from 'vitepress/theme'
import { inBrowser } from 'vitepress'
import { startAutoUpdate } from './auto-update'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp() {
    if (inBrowser && import.meta.env.PROD) startAutoUpdate()
  }
}
