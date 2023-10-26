import "./App.css";
import Header2 from "./Components/Header2";
import SideDiv from "./Components/SideDiv";
import Heading from "./Components/Heading";
import Imagediv from "./Components/Image-div";
import Silder from "./Components/Silder";
import Cardpart from "./Components/Cardpart";
import Cardpart2 from "./Components/Cardpart2";
import LocalStatePart from "./Components/LocalStatePart";
import NPRnews from "./Components/NPRnews";
import Footer from "./Components/Footer";

// import data from "./data.js";

function App() {
  // console.log("data", data.posts);

  return (
    <div className="App">
      <Header2 />
      <Heading />
      <SideDiv />
      <Imagediv />
      <Silder />
      <Cardpart />
      <Cardpart2 />
      <LocalStatePart />
      <NPRnews />
      <Footer />
    </div>
  );
}

export default App;
