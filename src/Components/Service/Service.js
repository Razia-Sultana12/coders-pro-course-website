import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Service = (props) => {
    const {name,Duration,Lectures,dataImg,skillLevel} = props.service;
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div>
            <div className="col">
    <div className="card h-100">
      <img src={dataImg} className="card-img-top" height="250" width="250" alt="..."/>
      <div className="card-body">
        <h2 className="card-title text-center">{name}</h2>
        <p className="text-center">Skill Level:{skillLevel}</p><hr/>
        <div className="container">
       <p className="text-center">Duration:{Duration}</p>
       <p className="text-center">Lectures:{Lectures[0]}</p>
       <div className="text-center">
       <button className="btn btn-success btn-lg">{element} Buy Now</button></div>
       </div>
        </div>
    </div>
  </div>
</div>
    );
};

export default Service;