import React from "react";
import Navigation from "./Navigation";


function Contact() {
    return(
       <>
       <Navigation/>
        <div  style={{
            color:'#14213d',
            fontSize: '50px',
            backgroundColor: 'white',
            textAlign:'center',
            boxFlex: 'normal',
            padding:'5px',
        }}>Contact Me!
            <h1 style={{
                color: '#14213d',
                fontSize:'20px',
                textAlign:'left',
                fontStyle:'inherit'
            }}>LinkdIn Profile:
                </h1>
            <h2 style={{
                color: '#14213d',
                fontSize:'20px',
                textAlign:'left',
            }}>
                Email address:</h2>
        </div>
        </>
    );
}
export default Contact;