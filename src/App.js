import Header from "./Components/Header/Header";
import SellArWork from "./Components/SellArWork/SellArWork";
import Discover from "./Components/Discover/Discover";
import Footer from "./Components/Footer/Footer";

import "./App.css";
import Artsper from "./Components/Artsper/Artsper";

function App() {
  return (
    <div className="App">
      <Header />
      <SellArWork />
      <Discover />
      <Artsper />
      <Footer />
    </div>
  );
}

export default App;
