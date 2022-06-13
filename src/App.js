import "./App.css";
import HeaderImage from "./components/Header/HeaderImage";
import Header from "./components/Header/Header";
import Meals from "./components/Meals/Meals";

function App() {
  return (
    <>
      <Header />
      <HeaderImage />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
