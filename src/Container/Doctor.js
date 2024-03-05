import React, { Component } from 'react';
import Doctor_Card from '../component/Card/Doctor_Card';
class Doctor extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [
                {
                  "id": 1,
                  "name": "Dr.rohit shah",
                  "appoiment": 1,
                  "fees":4000,
                  "appoiment_number": 1,
                 "desc": "nonsteroidal anti-inflammatory drug used to treat pain, menstrual cramps, inflammatory diseases such as rheumatoid arthritis, gout and fever."
                },
                {
                  "id": 2,
                  "name": "Dr.mahesh mehta",
                  "appoiment": 3,
                  "fees":5000,
                  "appoiment_number": 1,
                  "desc": "Ruxolitinib, sold under the brand name Jakafi among others"
                },
                {
                  "id": 3,
                  "name": "Dr.mayur vasoya",
                  "appoiment": 3,
                  "fees":3000,
                  "appoiment_number": 1,
                  "desc": " resistant chronic myelocytic leukemia, and recurrent, metastatic, or inoperable carcinoma of the ovary and primary squamous cell (epidermoid) carcinomas of the head and neck."
                },
                {
                  "id": 4,
                  "name": "Dr.vishakha vaghani",
                  "appoiment": 3,
                  "fees":5000,
                  "appoiment_number": 1,
                  "desc": " This white crystalline compound is highly soluble in water and polar organic solvents. It has a cage-like structure similar to adamantane"
                },
                {
                  "id": 5,
                  "name": "Dr.akash  kanani",
                  "appoiment": 3,
                  "fees":2000,
                  "appoiment_number": 1,
                  "desc": " This medicine is used for relieving pain and spasm in the abdomen and during or before menses (periods)."
                },
                {
                  "id": 6,
                  "name": "Dr.viraj shiroya",
                  "appoiment": 3,
                  "fees":1000,
                  "desc":"who also have weight-related medical problems to help them lose weight and keep it off. "
                  
                },
                {
                  "id": 7,
                  "name": "Dr.mayur patel",
                  "appoiment": 3,
                  "fees":1500,
                  "appoiment_number": 1,
                  "desc": "Aripiprazole is used to treat certain mental/mood disorders (such as bipolar disorder, schizophrenia, Tourette's syndrome, and irritability associated with autistic disorder)."
                },
                {
                  "id": 8,
                  "name": "Dr.avish shah",
                  "appoiment": 3,
                  "fees":2500,
                  "appoiment_number": 1,
                  "desc": "Orlistat, sold under the brand name Xenical among others, is a medication used to treat obesity. "
                }
            
            ]
        }
    }

    render() {
        return (
            <div className='conatiner'>

          
            <div className='row'>
               {
                this.state.data.map((v,i) => (
                    <Doctor_Card data={v}></Doctor_Card>
                ))
               } 
            </div>
            </div>
        );
    }
}

export default Doctor;