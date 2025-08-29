import React from 'react'
import {Navigate, useNavigate} from 'react-router-dom'



const Settingdashboard = () => {
   
  const Navigate=useNavigate()
    

  return (
    
    <div>
       <form>
      <div style={{textAlign:'center',height:'400px',width:'100%',paddingTop:'130px',backgroundColor:'black'}}>  
    
       <button style={{width:'100px',height:'60px',backgroundColor:'dodgerblue',borderRadius:'10px'}} onClick={()=>Navigate('/')}>Log Out</button><br /><br /><br />
       <button  style={{width:'100px',height:'60px',backgroundColor:'dodgerblue',borderRadius:'10px'}}>Themes</button><br />
      </div>
      </form>
      


    </div>
  )
}

export default Settingdashboard