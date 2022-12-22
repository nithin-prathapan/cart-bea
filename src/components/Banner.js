import React from 'react'
import { Carousel } from 'react-responsive-carousel'
const Banner = () => {
  return (
    <div className='w-full [h-300px] drop-shadow-md mt-[56px]'>
      <Carousel autoPlay={true} centerMode={true}
        showArrows={false}
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        centerSlidePercentage={100} infiniteLoop={true}>
        <div>
          <img className='max-w-[960px] min-w-[960px] max-h-[360px] min-h-[360px] rounded-md' src="https://www.mansours.com.au/wp-content/uploads/2015/01/sofa-banner.jpg" />

        </div>
        <div>
          <img className='max-w-[960px] min-w-[960px] max-h-[360px] min-h-[360px] rounded-md' src="https://i.pinimg.com/originals/02/cf/cf/02cfcffac595c832c514d58704cd82ce.jpg" />

        </div>
        <div>
          <img className='max-w-[960px] min-w-[960px] max-h-[360px] min-h-[360px] rounded-md' src="https://th.bing.com/th/id/R.73bee55a9a1c630d559424d651bff475?rik=YrVjaeReRO4VLA&riu=http%3a%2f%2fwww.magicappliances.co.in%2fimg%2fslider%2fbanner5.jpg&ehk=WsxGaawC2mOWffUsKsH56TTHVwqyZ%2bxXKRE171Tre2U%3d&risl=&pid=ImgRaw&r=0" />

        </div>
      </Carousel>
    </div>
  )
}

export default Banner