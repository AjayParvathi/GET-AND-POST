

//POST METHOD

import axios from "axios";
import React, { useEffect } from "react";
import Validate from "./GetAndPost/Validate";
import SingUp from "./GetAndPost/FireBase/SingUp";

const App = () => {
  useEffect(() =>
    axios
      .get(
        "https://crud-operations-f066e-default-rtdb.firebaseio.com/data.json"
      )
      .then((res) => console.log(res.data))
  );
  return (
    <div>
      <Validate />
      <SingUp />
    </div>
  );
};

export default App;


