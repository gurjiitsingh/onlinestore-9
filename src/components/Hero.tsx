import React from 'react'
import Image from 'next/image'
import Container from '@/components/globals/Container'

const Hero = () => {
  return (
    <div className='w-full bg-[#1B1A1D]'>
    <Container>
    <div className='w-full h-full grid grid-cols-1 md:grid-cols-2 overflow-hidden py-0'>
        <div className='w-[50%] py-4 '>

<Image src={'/images/product2.jpg'} width={300} height={300} alt='product image' />


        </div>
<div className='w-full py-[3%] flex justify-end '>
<div className='text-slate-100 flex flex-col  gap-4'>
    <h1 className='text-[3rem] font-semibold text-slate-100'>Buy Best Products</h1>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.ore, molestias eligenaque! Molestias ut repudiandae sit quibusdam.</p>
</div>

</div>


    </div>
    </Container>
    </div>
  )
}

export default Hero