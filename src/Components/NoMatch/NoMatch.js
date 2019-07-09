import React from 'react';
import { Link } from 'react-router-dom';

export default function NoMatch() {
  return (
    <section className="NoMatch">
      <h3>Sorry! That page doesn't exist.</h3>
      <Link className="back-btn" to='/'>
        <button>Go Back</button>
      </Link>
    </section>
  )
}
