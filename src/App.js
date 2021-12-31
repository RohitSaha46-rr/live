import { useState } from "react";


function App() {
  
    let d=new Date().toLocaleTimeString();
    const state=useState();
    const[intial,final]=useState(d);
    const fun=()=>{
      let new_time=new Date().toLocaleTimeString();
      final(new_time);
    }
    return (
    <header>
      <div className="time">
        <h1>{intial}</h1>
      </div>
      <div className="btn">
        <button onClick={fun}>Click</button>
      </div>
    </header>
        );
}

export default App;
