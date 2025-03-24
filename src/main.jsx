import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router-dom'
import ConfigProviderAntd from './styles/ConfigProviderAntd.jsx'
import GlobalStyles from './styles/GlobalStyles.jsx'

createRoot(document.getElementById('root')).render(
  <Router>
    <ConfigProviderAntd>
      <App />
    </ConfigProviderAntd>
  </Router>
)
