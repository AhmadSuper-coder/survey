import React from 'react'
import { Link } from "react-router-dom";
function Srart() {

 

  return (
    <>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6 mt-5 text-center p-5 border border-info rounded-4 m-auto">
                    <h1 >Welcome to survey page</h1>
                    <Link to="/start"><button className='btn mt-3 btn-success'>start survey</button></Link>
                    
                </div>
            </div>
        </div>
    </>
  )
}

export default Srart