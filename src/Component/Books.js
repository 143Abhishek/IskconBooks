import React from 'react';
import CAT from '../Component/CAT.jpg';
import EKC from './EKC.jpeg';
import SSR from './SSR.jpeg';
import LCFL from './LCFL.jpg';
import KTRP from './K-TRP.jpeg';
import TOP from './TOP.jpeg';

import bookCAT from './CAT.pdf';
import bookEKC from './EKC.pdf';
import bookSSR from './SSR.pdf';
import bookLCFL from './LCFL.pdf';
import bookKTRP from './K-TRP.pdf';
import bookTOP from './TOP.pdf';

export default function Books(props) {
  return (
    <div className={`bg-${props.mode}`}>
      <div className='d-grid container'>
        <div className='row my-1'>
          <d1v className='col-md-4 mt-2 col-sm-12'>
            <a href={bookCAT} target='_blank' rel=''>
            <img src={CAT} alt="img" width="80%" height="70%"/>
            </a>
          </d1v>
          <d1v className='col-md-4 mt-2 col-sm-12'>
            <a href={bookEKC} target='_blank' rel=''>
            <img src={EKC} alt="img" width="80%" height="70%"/>
            </a>
          </d1v>
          <div className='col-md-4 mt-2 col-sm-12'>
            <a href={bookSSR} target='_blank' rel=''>
            <img src={SSR} alt="img" width="80%" height="70%"/>
            </a>
          </div>
        </div>
        <div className='row my-1'>
          <div className='col-md-4 mt-2 col-sm-12'>
            <a href={bookLCFL} target='_blank' rel=''>
            <img src={LCFL} alt="img" width="80%" height="70%"/>
            </a>
          </div>
          <div className='col-md-4 mt-2 col-sm-12 '>
            <a href={bookKTRP} target='_blank' rel=''>
            <img src={KTRP} alt="img" width="80%" height="70%"/>
            </a>
          </div>
          <div className='col-md-4 mt-2 col-sm-12 '>
            <a href={bookTOP} target='_blank' rel=''>
            <img src={TOP} alt="img" width="80%" height="70%"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
