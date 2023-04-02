import React from 'react'
import SRILAP from '../Component/SRILAP.jpeg';

export default function About(props) {
  return (
    <div className={`bg-${props.mode} height-10 text-${props.text}`}>
      <h2 className='text-center py-3'> Hare Krishna dear Devotees</h2>
      <div className='text-center'>
          <img src={SRILAP} width="25%" height="5%" alt=''/>
          <h5>A.C. Bhaktivedanta Swami Prabhupada</h5>
        </div>
      <h4 className='container'>
        In this page you can get spritual books which is authorized by ISKCON. We will try to give more and more books
        so that you get progress in your devotional path.<br/>
        If you like this page so please share more and more.<br/>
        kindly give us feedback🙏
      </h4>
    </div>
  )
}
