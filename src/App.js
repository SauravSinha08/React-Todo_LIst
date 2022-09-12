import React from 'react'
import { useState } from 'react'
import './App.css';

const App = () => {

  const[data, setdata] = useState(" ");
  const[iteam,setiteam] = useState([ ]);

  const additeam = () => {
    if(data === " "){

    }else
    setiteam([data, ...iteam]);
    setdata(" ")
  }

  const inputEvent = (event) => {
    setdata(event.target.value)
  }

  const deleteiteam = (id) => {
    const updatediteam = iteam.filter((elem, index) => {
      return index !== id;
    });

    setiteam(updatediteam);
  }

  const deleteAll = () => {
    setiteam([]);
  }

  return (
    <>
    <h1>TODOLIST</h1>
      <div className='main_div'>
        <div className='box_div'>
            <figure className='logo_box'>       
              <figcaption>ADD YOUR LIST HERE...</figcaption>
            </figure>
            <div className='add_iteam'>
                <input type="text" 
                placeholder='Add Iteam...' 
                value={data} 
                onChange={inputEvent}/>
                <i className="fa-solid fa-plus" onClick={additeam} title="Add Iteam"></i>
            </div>
            <div className='show_iteam'>
              {iteam.map((elem, index) => {
                return(
                  <div className='each_iteam' key={index}>
                    <span>{elem}</span>
                    <i className="fa fa-trash" aria-hidden="true" onClick={() => deleteiteam(index) } title="Delete"></i>
                </div>
                );
              })}
            </div>
            <div className='btn'>
                <button onClick={deleteAll} title="Delete All">Remove All</button>
            </div>
        </div>
      </div>
    </>
  )
}

export default App;
