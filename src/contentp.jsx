import React from 'react'
import './contentp.css'
import IMAGES from './images/img.js';
import Footer from './footer';
const Content = () => {
  return (
    <div className="cont">
        <div className="logo">
          <h1>D</h1>
          #YourSafety&HealthIsOurPriority
      </div>
      <br />
      <br />
      <div className="content">
              <p>The Grand New Delhi, nestled in the heart of Delhi NCR, is the city's most distinguished luxury hotel.
                  An ideal destination for the discerning business and leisure traveller, this 5 Star business hotel in Delhi, boasts modern facilities and a resort-like feel with its luscious greens & magnificent waterscape.</p>
              <p>When you visit the capital of India, you will witness the glory of Indian history in its magnificent monuments and beautiful parks.
                  Be it Akshardham, a spiritual-cultural campus to the devotional experience of Nizamuddin Dargah, or be it the beautiful gardens, or the Red Fort that reminds us of the last phase of the Mughal Empire.
                  These tourist attractions can be conveniently reached from our 5 Star hotel in New Delhi.</p>
              <p>Our 5-star hotel in Delhi is approximately 9 km from the Indira Gandhi International Airport and within close proximity to the major travel hubs of Delhi. It is also very close to DLF Promenade and many popular shopping destinations such as DLF Emporio, Ambience Mall, and Diplomatic Enclave.</p>

          </div><br /><div>
              
<div class="slider">
        <div class="imagebox">
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide"><img src={IMAGES.pic1} alt=" " /></div>
                    <div class="swiper-slide"><img src={IMAGES.pic2} alt=" " /></div>
                    <div class="swiper-slide"><img src={IMAGES.pic3} alt=" " /></div>
                    <div class="swiper-slide"><img src={IMAGES.pic4} alt=" " /></div>
                    <div class="swiper-slide"><img src={IMAGES.pic5} alt=" " /></div>
                    <div class="swiper-slide"><img src={IMAGES.pic6} alt=" " /></div>
                    <div class="swiper-slide"><img src={IMAGES.pic7} alt=" " /></div>
                    <div class="swiper-slide"><img src={IMAGES.pic8} alt=" " /></div>
                </div>
            </div>
        </div>
       </div>
    </div>
    <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
    <script>
        var swiper= new Swiper('.swiper-container',{
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 500,
        modifier: 1,
        slidesShadows: true,
    },
    pagination: {
        el: '.swiper-pagination',
    },
    loop:true,
});

    </script>
          {/* <Footer/> */}
          </div>
  )
}

export default Content
