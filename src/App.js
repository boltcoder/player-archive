import ReduxProvider from "appSmartComponents/ReduxProvider";
import MUIProvider from "appSmartComponents/MUIProvider";
import Container from 'appContainers';


const App = () => {
  return (
    <ReduxProvider>
    <MUIProvider>
      <Container></Container>
    
    </MUIProvider>
    </ReduxProvider>
  );
}

export default App;
