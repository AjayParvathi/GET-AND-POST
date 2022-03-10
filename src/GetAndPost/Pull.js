import React, { useEffect } from 'react';
import axios from 'axios';

const Pull = () => {
  
   const a=useEffect(()=>axios.get("http://localhost:9000/data").then(ajju=>console.log(ajju)));
  return ( 
    
    <div>
   
    <h1>welcome to JSON</h1>
    
    </div>
    );
};

export default Pull;
