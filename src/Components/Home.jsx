import React from "react";
import Navigation from "./Navigation";


function Home() {
   
    return(
       <>
        <Navigation/>
        <div style={{
            color: 'black',
            height:'80%',
            margin:'30px',
            fontSize: '60px',
            backgroundColor: '14213d',
            textAlign:'center',
            boxFlex: 'normal',
            paddingBottom:'10px',
        }}
        >
            Siddharth Kabra
            
        <div className='center'>
            <img src ={process.env.PUBLIC_URL +'/download.png'}  width='192' alt='logo' />
        </div>
        <div style={{
                fontSize:'30px',
                color:'black',
                fontStyle:'italic',
            }}> About myself
                </div>
            <h1 style={{
            color: 'pale white',
            fontSize: '25px',
            backgroundColor: '#fbfffe',
            fontWeight:'normal',
            paddingBottom:'2px',
            paddingTop:'10px',
            margin:'auto',
            display:'block',
            width:'fit-content',
            textAlign:'center',
        }}> Third Year Undergraduate Student <br/>
            at Bharti Vidhyapeeth (deemed) University <br/>
                College of Engineering,Pune.<br/> </h1>
            
            <p1 style={{
            color: 'pale white',
            fontSize: '24px',
            backgroundColor: 'fbfffe',
            fontWeight:'normal',
            display:'block',
            margin:'auto',
            width:'fit-content',
            textAlign:'center',
            paddingBottom:'20px',
            paddingTop:'3px',}}>
                To be Engineer.<br/>
                Inquisitive, 
                Team player, 
                have good communication skills,<br/> 
                and a detail-oriented person.</p1>
               <div className='foot'>
                  <p style={{
                fontSize:'13px',
                color:'black',
                fontStyle:'italic',
                paddingTop:'52px',
                }}> Created by Siddharth!</p>

               </div>
                 </div>
            
        </>
    );
}
export default Home;