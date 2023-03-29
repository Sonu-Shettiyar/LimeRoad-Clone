
import { Container } from '@chakra-ui/react';
import './App.css';
import MainContainer from "./components/MainContainer"
import Navbar from './components/Navbar';
function App() {
  return (
    <div className="App">
      <Navbar />

      <MainContainer />



    </div>
  );
}
//  <Icon as={SpinnerIcon} w={8} h={8} color='red.500' /> loading icon
export default App;
