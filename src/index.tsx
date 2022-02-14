import React from "react"
import ReactDOM from "react-dom"
import reportWebVitals from "./core/reportWebVitals"
import { Provider } from "react-redux"
import { GlobalStyles, theme } from "./styles"
import { ThemeProvider } from "styled-components"
import { Content, Title, NewButton, Card, Grid, Numbers } from "./components"
import { configureStore } from "core"
import { PersistGate } from "redux-persist/integration/react"
const { persistor, store } = configureStore()

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor} />
      <Content data-cy="content">
        <Title data-cy="title">Sudoku</Title>
        <Card>
          <NewButton />
          <Grid />
          <Numbers />
        </Card>
      </Content>
    </Provider>
  </ThemeProvider>,
  document.getElementById("root")
)

reportWebVitals()
