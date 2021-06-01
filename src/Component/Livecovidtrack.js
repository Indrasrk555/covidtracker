import React,{useState, useEffect} from 'react';
import axios from 'axios';
import { Card, Row, Col, Container, Carousel } from "react-bootstrap";

import { RiVirusFill } from "react-icons/ri";
import './Livecovid.css';




export default function Livecovidtrack() {

    const [myUser, setmyUser] = useState([]);
    const [search,setSearch] = useState("");

    useEffect(()=>{
        axios.get("https://api.covid19india.org/data.json")
        .then((res)=>{
            setmyUser(res.data.statewise);
            console.log(res.data.statewise);
        })
        .catch((err)=> console.log(err));
    }, []);

   
   
    
    return (
        <>
        <div>
        <h1 id="heading"><u> Live COVID-19 Tracker of INDIA </u></h1>
        </div>

        
        <section className="topone"> 
          <Container>
          {/* <div className="container"> */}
          <fieldset>
          <legend id="impds"> Important information :- </legend>
          <p id="title"><RiVirusFill id="icn"/> Coronavirus disease (COVID-19) is an infectious disease caused by severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2). </p>
          <p id="title"><RiVirusFill id="icn"/> Symptoms of COVID-19 are variable, but often include fever, cough, headache, fatigue, breathing difficulties, and loss of smell and taste. Symptoms may begin one to fourteen days after exposure to the virus. </p>
          <p id="title"><RiVirusFill id="icn"/> Preventive measures include use of face masks, physical or social distancing, quarantining, ventilation of indoor spaces, covering coughs and sneezes, hand washing, and keeping unwashed hands away from the face. </p>
          </fieldset>
         {/* </div> */}
         </Container>
        </section>

         
    <section className="stop">
      <div>
    <img
      className="d-block w-100"
      src="https://www.daymarcollege.edu/sites/default/files/CDC%20graphic%20stop-the-spread-disinfect-1200x675_0.jpg"
      alt="First slide"
    />
    </div>
    </section>

  
    <section className="vac">
    <div>
    <img
      className=""
      src="https://answers.childrenshospital.org/wp-content/uploads/2020/11/Vaccine_Cover.jpg"
      alt="Third slide"
    />
    </div>
    </section>
         
        <section className="searchimage">
        <img src="https://www.a-brest.net/local/cache-vignettes/L480xH220/ccsearchpng-39eb-df5c2.png?1524000438" id="srcimg" alt="" />
        </section>


        <section className="searchbar">
        <div>
          <input
            type="text"
            name=""
            id="myInput"
            placeholder="SEARCH FOR STATE"
            onChange={(e) => setSearch(e.target.value)}
          />
          </div>
        </section>
          
             <section className="tble">
             <div>
              <table>
                <thead>
                <tr className="row">
                <th scope="col" id="state"> STATE </th>
                <th scope="col" id="active"> ACTIVE CASES </th>
                <th scope="col" id="confirm"> CONFIRMED CASES </th>
                <th scope="col" id="death"> DEATHS </th>
                <th scope="col" id="recovered"> TOTAL RECOVERED </th>
                <th scope="col" id="lut"> Last Updated Time </th>
                </tr>
                </thead> 
                {
                    
                }
                  {
                      myUser.filter((val) => {
                        if(search === ""){
                          return val;
                        } else if(val.state.toLowerCase().includes(search.toLowerCase())){
                          return val;
                        }
                      }).map((e,i)=>{
                          return(
                              <>
                              <tbody>
                                <tr className="abc" key={i}>
                                  <td id="listofst">{e.state}</td>  
                                  <td id="lstofac">{e.active}</td>  
                                  <td id="confirm1">{e.confirmed}</td>  
                                  <td id="death1">{e.deaths}</td>  
                                  <td id="recovered1">{e.recovered}</td>  
                                  <td id="lut1">{e.lastupdatedtime}</td>  
                                </tr>
                              </tbody>
                              </>
                          );
                      })
                  }

              </table>
              </div>
              </section>

    <section className="foot">
       <div>
        <fieldset>
        <legend id="impds"> HOW IT SPREADS ?? </legend>
        <p id="title"><RiVirusFill id="icn"/>The virus that causes COVID-19 is mainly transmitted through droplets generated when an infected person coughs, sneezes, or exhales. These droplets are too heavy to hang in the air, and quickly fall on floors or surfaces.</p>

        <p id="title"><RiVirusFill id="icn"/>You can be infected by breathing in the virus if you are within close proximity of someone who has COVID-19, or by touching a contaminated surface and then your eyes, nose or mouth.</p>
        </fieldset>
        </div>
    </section>
          
           
        </>
    )
}
