import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../assets/sprinkleboy.jpeg';

export default function NoMatch() {
  return (
    <section className="NoMatch">
      <section className="no-match-link">
        <h3>Sorry! That page doesn't exist.</h3>
        <Link className="back-btn" to='/'>
          <button>Go Back</button>
        </Link>
      </section>
      <img src={image} alt="boys face covered in sprinkles" />
    </section>
  )
}
