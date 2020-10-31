// import react from "react";
import React, {Component} from "react";
import MenuKontak from "./Page/MenuKontak.js"
import MenuUtama from "./Page/MenuUtama.js";
import MenuProduct from "./Page/MenuProduct.js";
import MenuTentangKami from "./Page/MenuTentangKami.js";

// Class App
class App extends Component{
  render(){
    return(
      <div>
        <Header/>
        <MenuUtama/>
        <MenuProduct/>
        <MenuKontak/>
        <MenuTentangKami/>
        <Footer/>
      </div>
    )
  }
}

// Function Component - Header
const Header=() =>{
  return(
    <div>
      <h2>Ini adalah Header</h2>
    </div>
  )
}

// Function Component - Footer
const Footer=() =>{
  return(
    <div>
      <h4>Ini adalah Footer</h4>
    </div>
  )
}

export default App;
