import React, { useState, useEffect } from 'react';
import ImageData from '../../../Assets/Data/imageData.json';

const ImageMarquee = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const imageUrls = ImageData.Clients.map((client) => client.path);
    setImages(imageUrls);
  }, []);

  return (
    <div className="image-marquee" style={{backgroundColor:"rgb(240,240,240)", height:"400px"}}>
      <div>
        <h2 className='text-center'>Our Clients</h2>
     <section className="marquee my-4 p-3" style={{backgroundColor:"white", marginTop:"300px"}} >
      {images.length > 0 && (
        <marquee scrollamount="10">
          {images.map((imageUrl, index) => (
            <img
              key={index}
              src={imageUrl}
              alt={`Image ${index}`}
              style={{ width: 'auto', height: '200px' }}
            />
          ))}
        </marquee>
      )}
      </section>
       </div>
    </div>
  );
};

export default ImageMarquee;
