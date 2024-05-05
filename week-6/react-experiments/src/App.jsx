import React, { useState } from 'react'
import './App.css'

function App() {
  return (
    <div>
      <CardWrapper>
        Hi there,
        <h2>Heyy</h2>
        <Hello />
      </CardWrapper>
    </div>
  )
}

function Hello() {
  return <h3>hello from compo</h3>
}

function CardWrapper({ children }) {
  // children means everything that you've 
  return (
    <div style={{ border: "2px solid black", padding: "10px" }}>
      {children}
    </div>
  )
}



export default App