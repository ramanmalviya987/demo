
import React from 'react'
import './App.css'
import { Navbar,Brand,Cta } from './components'
import { Blog,Footer,Features,Possibility,WhatGPT3,Header } from './containers'
const App = () => {
  return (
   <div className="App">
     <div className="gradient__bg">
       <Navbar />
       <Header />
     </div>
     <Brand/>
     <WhatGPT3 />
     <Features />
     <Possibility />
     <Cta />
     <Blog />
     <Footer />
   </div>
  )
}

export default App

