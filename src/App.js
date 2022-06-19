import IndiaMap from "./components/india";
import InfoBox from "./components/infobox";
import { useState } from "react";
import info from "./Data/info";
import './App.css';

function App() {
  var [place,changePlace] = useState("");
  var [c,changeC] = useState("");
  var [x,changeX] = useState({});
  var [vis,changeVis] = useState("No");

  function ren(event){
    var y;
    changePlace(event.target.title);
    changeC(event.target.alt);
    console.log("Clicked "+event.target.title+"!");
    console.log(info.filter(i => i.State.localeCompare(event.target.title)==0));
    console.log(event.target.title);
    y = info.filter(i => i.State.localeCompare(event.target.title)==0);
    changeX(y[0]);
    console.log(x);
    if(event.target.title=="")
      changeVis("No");
    else
      changeVis("Yes");
  }
  return (
    <div className="App">
      <h1>Cultures Of India!</h1>
      <h2>Click on any of the states and scroll down to know more about their cultures</h2>
      <IndiaMap ren={ren}/>
      <div className="content">
      <div className={c}>
        <h1>{place}</h1>
        <InfoBox x={x} class={vis} pic={c}/>
      </div>
      </div>
    </div>
  );
}

export default App;
