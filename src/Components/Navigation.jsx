import React from 'react'
import styles from "./navigation.module.css" ;
import {Link} from "react-router-dom";

function Navigation() {
    return (
        <div className= {styles.navigation}>
           <h1 style={{color:'14213d'}}> Portfolio</h1>
           <div className='navigationButtonContainer'>
               <Link to='/'>
               <button className={styles.navigationButton}>Home</button>
                </Link>
                <Link to='/Contact'>
                <button className={styles.navigationButton}>Contact</button>
                </Link>
                </div>
        </div>
    )
}

export default Navigation;
