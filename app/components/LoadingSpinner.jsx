import React from 'react'
import Image from 'next/image'
import loader from '../assets/images/spinner.gif'

const LoadingSpinner = () => {
  return (
    <>
    <div className='spinner-container'>
     <Image className='spinner' width={100} height={100} src={loader} alt=''/>
    </div>
    </>
  )
}

export default LoadingSpinner