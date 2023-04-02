import { Card } from "./components/Card";
import AddNewMatch from "./components/AddNewMatch";
import styled from "styled-components"

export const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
  background: #49c5b6
`

const App = () => {
  return (
    <AppContainer>
      <Card text="Match" />
      <AddNewMatch />      
    </AppContainer>
  )
}

export default App;