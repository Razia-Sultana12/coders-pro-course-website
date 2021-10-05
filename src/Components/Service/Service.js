import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart,faTags,faClock } from '@fortawesome/free-solid-svg-icons';
import './Service.css'

const Service = (props) => {
    const {name,Duration,Lectures,dataImg,skillLevel,taka} = props.service;
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    const tk = <FontAwesomeIcon icon={faTags} />
    const clock = <FontAwesomeIcon icon={faClock} />
    return (
        <div>
            <div className="col">
    <div className="card h-100">
      <img src={dataImg} className="card-img-top" height="250" width="250" alt="..."/>
      <div className="card-body">
        <h2 className="card-title text-center">{name}</h2>
        <p className="text-center">Skill Level:{skillLevel}</p><hr/>
        <div className="container">
       <p className="text-center">{clock} Duration:{Duration}</p>
       <p className="text-center">Lectures:{Lectures[0]}</p>
       <div className="text-center">
       <button className="btn btn-success btn-lg" data-bs-toggle="modal" data-bs-target="#exampleModal">{element} Buy Now</button><div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h3 class="modal-title text-dark" id="exampleModalLabel">Confirmation</h3>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body text-dark">
        Are you sure you want to buy this course?
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-success" data-bs-dismiss="modal">Yes</button>
        <button type="button" class="btn btn-secondary">Cancel</button>
      </div>
    </div>
  </div>
</div><button className="btn btn-lg m-3 btn-tk">{tk}{taka}</button></div>
       </div>
        </div>
    </div>
  </div>
</div>
    );
};

export default Service;