import axios from "axios";
import React, { useState } from "react";
// import { ajju } from "D:\ReactJS\ajju\src\App.js";

const SingUp = () => {
  const [creditionals, setCreditional] = useState({
    name: "",
    email: "",
    mobileNumber: "",
  });
  const { name, email, mobileNumber } = creditionals;

  // const user = async ()=>{
  //   const result=await axios.get( "https://crud-operations-f066e-default-rtdb.firebaseio.com/data.json");
  //   console.log(result.data)
  // }

  const Change = (e) => {
    setCreditional({ ...creditionals, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    
    axios
      .post(
        "https://crud-operations-f066e-default-rtdb.firebaseio.com/data.json",
        creditionals
      )
      .then(() => alert("submitted successfully"));
      (creditionals.current.value = "");
    //   console.log(creditionals)
  };
  return (
    <div>
      {/* <ajju.Consumer>{(value) => <div>{value}</div>}</ajju.Consumer> */}
      <div className="container">
        <div className="row">
          <div className="col-sm-4 -5 m-auto">
            <form className="my-5" onSubmit={(e) => submitHandler(e)}>
              <h1 className="text-center">welcome</h1>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="username"
                  value={name}
                  onChange={(e) => Change(e)}
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="example@gmail.com"
                  value={email}
                  onChange={(e) => Change(e)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="mobileNumber"
                  pattern="{0-10}"
                  className="form-control"
                  placeholder="mobile number"
                  value={mobileNumber}
                  onChange={(e) => Change(e)}
                />
              </div>
              <div className="form-group">
                <input type="submit" className="form-control btn-primary" />
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* {
        creditionals.map((values,index)=>(
          <tr>
            <td>{values.name}</td>
          </tr>

       
          )
 )
      } */}
    </div>
  );
};

export default SingUp;
