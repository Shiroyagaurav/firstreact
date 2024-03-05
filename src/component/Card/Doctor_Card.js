import React, { Component } from 'react';
import styles from './Doctorcard.module.css'

class Doctor_Card extends Component {
    
    render() {
        const {data} = this.props;
   
        return (
            <div className={styles.card}>
                <h1>{data.name}</h1>
                <p>Fees:{data.fees}</p>
               <p> spicialist:{data.desc}</p>
           

            </div>
        );
    }
}

export default Doctor_Card;