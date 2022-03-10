import axios from "axios";
import React, { useState } from "react";

const Validate = () => {
    const[details, SetDetails]=useState(
        {
            name:"",
            email:"",
            mobileNumber:""
        }
    );
    const{name,email,mobileNumber}=details;
    const Changing= (e) =>{
        SetDetails({...details,[e.target.name]:[e.target.value]});
    }
    const enter =async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8000/data",details)
        console.log(details)
    }
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-sm-6 m-auto">
          <div className="card w-7 bg-light mt-3">
          <div className="card-header bg-success text-white">
            <h2 className="text-center">Login</h2>
            </div>
            <div className="card-body">
            <form onSubmit={(e) => enter(e)}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="name"
                  name="name"
                  value={name}
                  onChange={(e) => Changing(e)}
                />
                </div>
    
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="email"
                  name="email"
                  value={email}
                  onChange={(e) => Changing(e)}
                />
              </div>
              <div className="form-group">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Mobile Number"
                  name="mobileNumber"
                  value={mobileNumber}
                  onChange={e => Changing(e)}
                />
              </div>
              <div className="button">
                <input type="submit" value="submit"/>
              </div>
            </form>
            </div>
          </div>
          
          
        </div>
      </div>
      </div>
      {/*<table className="table">
            <thead>
              <tr>
                <th>name</th>
                <th>email</th>
                <th>mobileNo</th>
              </tr>
            </thead>
            <tbody>
            {details.map((datas,index)=>(
              <tr>
                <td>{details.name}</td>
                <td>{details.email}</td>
                <td>{details.mobileNumber}</td>
              </tr>


            ))
          };
            </tbody>
        </table>*/}
        {/*<div className="ajju">
        {details.map((data,index)=>(
          <li>
            <h2>{details.name}</h2>
            <h2>{details.email}</h2>
            <h2>{details.mobileNumber}</h2>
            </li>
        ))}
        </div>*/}
    </div>
  );
};

export default Validate;
