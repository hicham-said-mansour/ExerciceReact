import React from 'react'


const styleFooter ={
  display:'flex',
  justifyContent : 'space-between',
  backgroundColor:"orange",
  paddingTop: '30px',
  paddingButtom: '30px',
  color: 'white',
  padding: '2% 10%',
 }

 const styleIcon1 ={
   display:'flex',
   flexDirection: 'row',

 }


function Footer(){
  return(
   <div style={styleFooter}>
     <div style={styleIcon1}>
         <i class="fas fa-phone-square fa-4x" style={{color:'green'}}></i>
         <div>
        <p style={{paddingTop:'25px'}}>CALL</p>
        <p>+213.550.848.414</p>
        </div>
     </div>
     <div style={styleIcon1}>
         <i class="fas fa-envelope fa-4x" style={{color:'green'}}></i>
         <div style={{paddingTop:'25px'}}>
        <p>EMAIL</p>
        <p>h.saidmansour@gmail.com</p>
        </div>
     </div>
     <div style={styleIcon1}>
     <i class="fas fa-plus-square fa-4x" style={{color:'green'}}></i>
      <div style={{paddingTop:'25px'}}>
         <p>Follow me on</p>
         <div style={{display: 'flex', justifyContent:'space-between'}}>
        <i class="fab fa-linkedin"></i>
        <i class="fab fa-skype"></i>
        <i class="fab fa-github"></i>
        <i class="fab fa-facebook"></i>
        </div>
        </div>
     </div>
     <div style={styleIcon1}>
     <i class="fas fa-user-tie fa-4x" style={{color:'green'}}></i>
         <div style={{paddingTop:'25px'}}>
        <p>ELECTRO-DISTRIPOWER, MAI, 2021</p>
        <p>Recreated By Me</p>
        </div>
     </div>
   </div>
  )
}

export default Footer;