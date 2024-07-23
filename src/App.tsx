import logo_with_text from "./assets/images/logo_with_text.svg";
import PWABadge from './PWABadge.tsx'
import './styles/App.css'

function App() {
  return (
    <div className="App">
      <PWABadge />
      <header className="App-header">
        <img src={logo_with_text} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </header>
    </div>
  )
}

export default App
