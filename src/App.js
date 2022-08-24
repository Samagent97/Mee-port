import React from 'react'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Intro from './Components/Intro/Intro'
import ProductList from './Components/Product-list/ProductList'
// import Toggle from './Components/toggle/Toggle'
//import { ThemeContext } from './Context'


 
function App() {
  //  const theme = useContext(ThemeContext);
  // const darkMode = theme.state.darkMode;
  return (
    <div 
    // style={{
    //   backgroundColor: darkMode ? "#222" : "white",
    //   color: darkMode && "white",
    //  }}
    >
      {/* <Toggle /> */}
  <Intro />
  <About />
  <ProductList />
  <Contact />
  <Footer />

    </div>
  )
}

export default App