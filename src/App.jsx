import { ThemeProvider } from "styled-components"
import { BodyContainer } from "./components/BodyContainer"
import { GlobalStyle } from "./styles/global"
import { defaultTheme } from "./styles/themes/default"

function App() {

  return (
    <ThemeProvider theme={ defaultTheme }>
      <GlobalStyle />
       <BodyContainer />
    </ThemeProvider>
  )
}

export default App
