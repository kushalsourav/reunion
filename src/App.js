import Home from './components/Home/Home';
import { DataProvider } from './DataContext/DataContext';
function App() {

  return (
  
    <DataProvider>
       <Home />
    </DataProvider>
  );
}

export default App;
