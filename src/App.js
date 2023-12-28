import holeImg from './assets/hole.png';
import moleImg from './assets/mole.png'
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const[hole,setHole] = useState([false,false,false,false,false,false,false,false,true]);
  const[activeHole,setActiveHole] = useState(8);
  const[score,setScore] = useState(0);

  useEffect(()=>{
    const interval=setInterval(()=>{
      
      let arrHole = hole;
      arrHole=hole.map(h=>false);//set all images as hole
      console.log(arrHole);
      setActiveHole(()=>getRandom());//choose an image randomly which will be set to mole
      arrHole[activeHole]=true;//set the choosed image as mole
      setHole([...arrHole]);
      
    },1200);

    return () => clearInterval(interval);
  },[hole,activeHole])

  function getRandom(){
    return Math.floor(Math.random() * 9);
  }
  
  return (
    <>
      <div className='centered'>
        <h1>Score: {score}</h1>
      </div>
      
      <div className="grid">
        
          {hole.map((item,idx)=>{
            return <img alt="mole-hole" key={idx} onClick={()=>{
              item && setScore((prev)=>prev+1)
            }} src={item ? moleImg:holeImg}/>
          })}
      </div>
      <div className='centered'>
        <button className='reset-button' onClick={()=>{
          setScore(0);
        }}>Reset</button>
      </div>
    </>
    
  );
}

export default App;
