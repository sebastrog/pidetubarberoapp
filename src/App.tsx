import { Provider } from 'react-redux'
import './App.css'
import { Navbar } from './components/Navbar'
import { Home } from './pages'
import store from './redux/store'
import { LayoutContainer } from './styled-components/layout.styled.component'

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <LayoutContainer>
        <Home />
      </LayoutContainer>
    </Provider>
  )
}

export default App
