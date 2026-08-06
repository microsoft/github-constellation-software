import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import '@primer/primitives/dist/css/base/motion/motion.css'
import '@primer/primitives/dist/css/functional/size/border.css'
import '@primer/primitives/dist/css/functional/size/size.css'
import '@primer/primitives/dist/css/functional/themes/light.css'
import '@primer/primitives/dist/css/functional/themes/dark.css'
import '@primer/primitives/dist/css/functional/typography/typography.css'
import '@primer/css/dist/base.css'
import '@primer/css/dist/markdown.css'
import App from './App'
import './styles.css'

const root = document.getElementById('root')

if (!root) {
  throw new Error('Unable to find the application root element.')
}

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
