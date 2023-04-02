import React from 'react';
import prabhupada from '../Component/srilaPrabhupada.jpeg';
import '../App.css';

export default function Home(props) {
  return (
    <>
      <div className={`d-flex flex-column text-center bg-${props.mode} text-${props.text}`}>
        <div>
          <img src={prabhupada} width='500px' alt=''/>
          <h5>A.C. Bhaktivedanta Swami Prabhupada</h5>
        </div>
        <br />
        <div>
          <h3>
            <a href='/' className={`MyName text-${props.text}`}>
            Hare Krishna Hare Krishna <br />
            Krishna Krishna Hare Hare <br />
            Hare Ram Hare Ram <br />
            Ram Ram Hare Hare
          </a>
          </h3>
        </div>
      </div>
    </>
  )
}
