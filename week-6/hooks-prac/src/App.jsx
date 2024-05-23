import React, { useEffect, useState } from 'react';
import './App.css'

function App() {

  const [render, setRender] = useState(true)

  useEffect(() => {
    setInterval(() => {
      setRender(r => !r)
    }, 5000)
  }, [])

  return (

    <>
      {render ? <MyComponent /> : <div></div>}
    </>
  )
}


// function MyComponent() {
//   useEffect(() => {
//     // Perform setup or data fetching here
//     console.log("compon mounted")

//     return () => {
//       // Cleanup code (similar to componentWillUnmount)
//       console.log("compo unmounted")
//     };
//   }, []);

//   // Render UI
//   return (
//     <div>
//       From inside my component
//     </div>
//   )
// }

class MyComponent extends React.Component {
  componentDidMount() {
    console.log("compo mounted")
  }

  componentWillUnmount() {
    console.log("unmounted")
  }

  render() {
    return <div>Hi there</div>
  }
}

export default App
