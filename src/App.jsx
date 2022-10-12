import TopBar from "./components/topBar/TopBar";
import Home from "./components/home/Home";
import Meal from "./components/meals/Meal";
import Footer from "./components/footer/Footer";
import { useEffect, useState } from "react";
import { breakfast, lunch, dinner } from "./components/data"
import './app.css'



function App() {
  const [selected, setSelected] = useState("breakfast")
  const [data, setData] = useState([])

  useEffect(() => {
    switch(selected){
      case "breakfast":
        setData(breakfast)
        break;
        case "lunch":
        setData(lunch)
        break;
        case "dinner":
        setData(dinner)
        break;
        default:
          setData(breakfast)
    }

  },[selected])
  return (
    <div className="app">
      <TopBar setSelected = {setSelected} selected = {selected} />
      <Home />
      <Meal data = {data} />
      <Footer />
    </div>
  );
}

export default App;
