import { AppContainer } from "./components/styles";
import { Card } from "./components/Card";
import AddNewMatch from "./components/AddNewMatch";

const App = () => {
  return (
    <AppContainer>
      <Card text="Match" />
      <AddNewMatch />      
    </AppContainer>
  )
}

export default App;