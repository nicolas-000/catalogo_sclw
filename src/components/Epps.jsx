import React, { useEffect, useState } from "react";
import { CardEpp } from "./CardEpp";


const Epps = () => {
    const [epps, setEpps] = useState([]);
    useEffect(() => {
       fetch('http://localhost/api_sclw/api')
          .then((response) => response.json())
          .then((data) => {
             console.log(data);
             setEpps(data);
          })
          .catch((err) => {
             console.log(err.message);
          });
    }, []);
 
 return (
    <div className="row">
        {epps.map((epp) => {
         return (
            <div className="col">
               <CardEpp epp={epp} key={epp.id_epp} />
            </div>
         );
        })}
    </div>
 );
};

export default Epps;
