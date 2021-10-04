import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart,faTags } from '@fortawesome/free-solid-svg-icons';

const Service = (props) => {
    const {name,Duration,Lectures,dataImg,skillLevel,taka} = props.service;
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    const tk = <FontAwesomeIcon icon={faTags} />
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
       <button className="btn btn-success btn-lg" data-bs-toggle="modal" data-bs-target="#exampleModal">{element} Buy Now</button><div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        Are you sure you want to buy this course?
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div><button className="btn btn-primary btn-lg m-3">{tk}{taka}</button></div>
       </div>
        </div>
    </div>
  </div>
</div>
    );
};

export default Service;