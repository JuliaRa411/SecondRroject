 
import './App.css';
 
import { TravelPlanner } from './TravelPlanner';
 
 
function App(){
  return(
<div className='app'>
<div className='containerText'>
 
    <h1> Travel Planner </h1>
    


    </div>
 
 <TravelPlanner/>
   
 <hr className="footer"/>
  
 <div className="social"> 
    <a href="https://ra411.glitch.me/" target="blank">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="35" fill="currentColor" className="bi bi-house-door-fill" viewBox="0 0 16 16">
        <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z"></path>
    </svg>
  </a>  
   
    <a href="mailto:juliarakitianska@gmail.com" target="blank">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="35" fill="currentColor" className="bi bi-envelope-fill m-2" viewBox="0 0 16 16">
          <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"></path>
      </svg>
        
  </a>
    </div>
    </div>
 
 
  )
}
export default App;
 
