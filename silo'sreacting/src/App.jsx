import React, { useState } from 'react'

function App() {
  var [a,b] = useState(69);
  return (
    <>
    <div className='w-full h-screen bg-zinc-500 p-4'>
      <h1>{a}</h1>
      <button onClick={()=> b(a+1)} className='py-1 px-3 rounded-md bg-green-600 text-white cursor-pointer'>click</button>
      {/* here b is updator  */}
    </div>
    </>
  ) 
}

export default App 