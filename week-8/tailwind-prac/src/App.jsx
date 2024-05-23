import { RevenueCard } from "./components/RevenueCard"

function App() {

  return (
    <>
      {/* <div className="grid grid-cols-5">
        <div className="bg-red-500">Hi</div>
        <div className="bg-yellow-500">Hi</div>
        <div className="bg-green-500">Hi</div>
        <div className="bg-green-500">Hi</div>
        <div className="bg-red-500">Hi</div>
        <div className="bg-yellow-500">Hi</div>
        <div className="bg-green-500">Hi</div>
        <div className="bg-green-500">Hi</div>
      </div> */}

      {/* <div className="flex justify-center">
        <div className="bg-red-500">Hi</div>
        <div className="bg-yellow-500">Hi</div>
        <div className="bg-green-500">Hi</div>
        <div className="bg-green-500">Hi</div>

      </div> */}

      {/* Responsiveness */}
      {/* Means by default it remains red and above the md brealpoint it'll be blue */}
      {/* <div className="bg-red-500 md:bg-blue-500">
        Hey
      </div>

      <FirstTask /> */}


      <div className="grid grid-cols-4">
        <RevenueCard title={"Amount pending"} amount={"92,312.20"} orderCount={13} />

      </div>

    </>
  )
}

// function FirstTask() {
//   return (
//     <>
//       <div className="grid grid-cols-1 md:grid-cols-3">
//         <div className="bg-red-500">Hi there</div>
//         <div className="bg-blue-500">Hi there</div>
//         <div className="bg-green-500">Hi there</div>
//       </div>
//     </>
//   )
// }

export default App
