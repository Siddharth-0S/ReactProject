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
            <div style={{
                fontSize:'30px',
                color:'black',
                fontStyle:'italic',
            }}> About myself
                </div>

            <h1 style={{
            color: 'pale white',
            fontSize: '25px',
            backgroundColor: 'fbfffe',
            textAlign:'center',
            fontWeight:'normal',
            paddingBottom:'2px',
            display:'contents',
        }}> Third Year Undergraduate Student <br/>
            at Bharti Vidhyapeeth deemed University <br/>
                College of Engineering,Pune.<br/> </h1>
            
            <p style={{
            color: 'pale white',
            fontSize: '24px',
            backgroundColor: 'fbfffe',
            textAlign:'center',
            fontWeight:'normal',
            display:'contents'}}>
                To be Engineer.<br/> 
                Inquisitive, 
                Team player, 
                have good communication skills, 
                and a detail-oriented person.</p>
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