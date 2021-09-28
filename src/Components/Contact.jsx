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
                width:'fit-content',
                textAlign:'left',
                margin:'auto',
            }}>
                <a href=' https://www.linkedin.com/in/siddharth-maheshwari-85697b202?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bw86%2BRfmFRQy9RC9dnehvpA%3D%3D'>
            LinkedIn Profile </a>
                </h1>
                   
            <h2 style={{
                color: '#14213d',
                fontSize:'20px',
                width:'fit-content',
                textAlign:'left',
                margin:'auto',
            }}>
                <a href='mailto: siddmhswri5@gmail.com'>Email me!</a>
                </h2>
            
                <div className='foot'>
                  <p style={{
                fontSize:'13px',
                color:'black',
                fontStyle:'italic',
                paddingTop:'350px',
                }}> Created by Siddharth!</p>

               </div>
        </div>
        </>
    );
}
export default Contact;