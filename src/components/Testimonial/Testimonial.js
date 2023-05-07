import React from 'react';
import './Testimonial.css';
import img1 from '../../images/image-emily.jpg';
import img2 from '../../images/image-jennie.jpg';
import img3 from '../../images/image-thomas.jpg';

const Testimonial = () => {
   return (
    <section id='testimonial'>
      <div id='general'>
      <h2>Testimonies</h2>
      <div id='testimonial'>
        <div id='one'>
          <img className='image' src={img1} alt="yo" />
            <p>Big Bird</p>
            <b>Editor RekordNau</b>
            <p id='tet'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia nostrum commodi vel ipsa ipsum maxime, sapiente recusandae fuga quisquam, distinctio, repellat similique qui quaerat tempora magni et quam facilis ullam?
          Lorem
        </p>
        </div>
        <div id='two'>
        <img className='image' src={img3} alt="yo" />
            <p>Aakah Vish</p>
            <b>PR Manager</b>
            <p id='tet'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia nostrum commodi vel ipsa ipsum maxime, sapiente recusandae fuga quisquam, distinctio, repellat similique qui quaerat tempora magni et quam facilis ullam?
          Lorem ipsum dol
        </p>
        </div>
        <div id='three'>
         <img className='image' src={img2} alt="yo" />
            <p>Sabrina Howard</p>
            <b>Head of HR</b>
            <p id='tet'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia nostrum commodi vel ipsa ipsum maxime, sapiente recusandae fuga quisquam, distinctio, repellat similique qui quaerat tempora magni et quam facilis ullam?
          Lorem ipsum
        </p>
        </div>
    </div>
  </div>
    </section>
   )
}

export default Testimonial;