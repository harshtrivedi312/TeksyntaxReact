import React from 'react';

const TestimonialCard = ({ imgSrc, name, rating, description }) => {
  return (
    <div className='col-md-8'>
      <div style={{marginLeft:'250px'}}>
      <div className="card" style={{width:'50rem'}}>
        <div className='text-center'>
        <img src={imgSrc} className="card-img-top" alt="testimonialImage" style={{height:'150px',width:'auto'}} />
        </div>
        <div className="card-body">
          <h5 className="card-title text-center">{name}</h5>
          <div className="rating text-center">
            {Array.from({ length: rating }, (_, index) => (
              <i key={index} className="fa-solid fa-star"></i>
            ))}
          </div>
          <p className="card-text text-center">{description}</p>
        </div>
      </div>
      </div>
      </div>
  );
};

export default TestimonialCard;
