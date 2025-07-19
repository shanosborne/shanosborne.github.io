import { Container, ThemeProvider } from '@mui/material'
import './App.css'
import Header from './components/Header'
import Site from './components/Site'
import { PortfolioTheme } from './theme'

function App() {
  return (
    <ThemeProvider theme={PortfolioTheme}>
      <Container maxWidth={false} disableGutters>
        <header>
          <Header />
        </header>
        <main>
          <Site />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
