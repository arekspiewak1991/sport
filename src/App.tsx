import { Card } from "./components/Card";
import AddNewMatch from "./components/AddNewMatch";
import styled from "styled-components"

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const App = () => {
  return (
    <AppContainer>
      <AddNewMatch />      
      <Card />
    </AppContainer>
  )
}

export default App;