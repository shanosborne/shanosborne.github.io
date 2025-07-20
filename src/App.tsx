import { Container, ThemeProvider } from '@mui/material'
import Header from './components/Header'
import Site from './components/Site'
import { PortfolioTheme } from './theme'
import SkipToMainButton from './components/SkipToMainButton'

function App() {
  return (
    <ThemeProvider theme={PortfolioTheme}>
      <Container maxWidth={false} disableGutters>
        <SkipToMainButton />
        <header id="header">
          <Header />
        </header>
        <main id="main" tabIndex={-1}>
          <Site />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
