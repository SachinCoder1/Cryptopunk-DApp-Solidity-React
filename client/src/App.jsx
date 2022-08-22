import { EthProvider } from "./contexts/EthContext";
import Main from "./components/main/Main";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <EthProvider>
      <div>
        <Navbar />
        <div className="my-20 text-center">
        <Main />
        </div>
      </div>

    </EthProvider>
  );
}

export default App;
