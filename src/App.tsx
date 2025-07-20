import { Container, ThemeProvider } from '@mui/material'
import Site from './components/Site'
import { PortfolioTheme } from './theme'

function App() {
  return (
    <ThemeProvider theme={PortfolioTheme}>
      <Container maxWidth={false} disableGutters>
        <Site />
      </Container>
    </ThemeProvider>
  )
}

export default App
