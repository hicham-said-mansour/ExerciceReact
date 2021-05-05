import React from 'react';
import Image from '../data/photochourouktv.jpg'

const styleMain ={
  display: "flex",
  heigth: "100%",
  width: "70%",
  position: "relative",
  left: "15%",
  top: "10%",
 }

const stylePicture ={
  width: "40%",
  borderBottomLeftRadius: 400,
  borderBottomRightRadius: 400,
  borderTopRightRadius: 400,
  borderTopLeftRadius: 400,
  marginLeft: "20%",
  paddingTop: "35px",
  
}

const styleText={
  display: 'flex',
  flexDirection: 'column',
  justifyContent:'space-between',
  position: "relative",
  right: "150px",
  width: "200%",
  marginTop: '54px',
}

const styleSkills= {
  display:"flex",
  flexDirection:"row",
  justifyContent: "space-between",
 
}

const styleTexteP1={
  backgroundColor: "blue",
  height: "100px",
  width: "100px",
  justifyContent: 'center',
  flexDirection: 'column',
  display:"flex",
  borderBottomLeftRadius: 50,
  borderBottomRightRadius: 50,
  borderTopRightRadius: 50,
  borderTopLeftRadius: 50,
  
}

const styleTexteP2={
  backgroundColor: "pink",
  height: "100px",
  width: "100px",
  justifyContent: 'center',
  flexDirection: 'column',
  display:"flex",
  borderBottomLeftRadius: 50,
  borderBottomRightRadius: 50,
  borderTopRightRadius: 50,
  borderTopLeftRadius: 50,
}

const styleTexteP3={
  backgroundColor: "yellow",
  height: "100px",
  width: "100px",
  justifyContent: 'center',
  flexDirection: 'column',
  display:"flex",
  borderBottomLeftRadius: 50,
  borderBottomRightRadius: 50,
  borderTopRightRadius: 50,
  borderTopLeftRadius: 50,
}

function Main() {
  return(
    <div className='container'>
      
      <div style={styleMain}>
            <div>
                <img src= {Image} style= {stylePicture} ></img>
            </div>
        <div style={styleText}>
            <div >
                <h1>Hello,</h1>
                <h3>a bit about me:</h3>
            </div>
            <div style={styleSkills}>
                <p style={styleTexteP1}>MY RESUME</p>
                <p style={styleTexteP2}>MY WORKS</p>
                <p style={styleTexteP3}>MY SKILLS</p>
            </div>
            <div>
                <p>Iam here to show you why management is powerful to built
                  your professional univers to be an future manager.
                  And why you should become a Manager</p>
            </div>
        </div>
     </div>
    </div>
  );
}

export default Main;
