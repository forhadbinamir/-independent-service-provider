// import React, { useRef, useState } from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";


// // import required modules
// import { EffectCoverflow, Pagination } from "swiper";

// const Reviews = () => {
//     return (
//         <>
//             <Swiper
//                 effect={"coverflow"}
//                 grabCursor={true}
//                 centeredSlides={true}
//                 slidesPerView={"auto"}
//                 coverflowEffect={{
//                     rotate: 50,
//                     stretch: 0,
//                     depth: 100,
//                     modifier: 1,
//                     slideShadows: true,
//                 }}
//                 pagination={true}
//                 modules={[EffectCoverflow, Pagination]}
//                 className="mySwiper"
//             >
//                 <SwiperSlide>
//                     <div className="">
//                         <img className="h-[400px]" src="https://swiperjs.com/demos/images/nature-1.jpg" />
//                         <h1>heoo</h1>
//                         <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum minus voluptas, labore obcaecati consequuntur quos culpa aperiam. Omnis, aut soluta eaque fuga eligendi asperiores atque possimus porro suscipit nisi cum?</p>
//                     </div>
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <div className="">
//                         <img className="h-[400px]" src="https://swiperjs.com/demos/images/nature-1.jpg" />
//                         <h1>heoo</h1>
//                         <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum minus voluptas, labore obcaecati consequuntur quos culpa aperiam. Omnis, aut soluta eaque fuga eligendi asperiores atque possimus porro suscipit nisi cum?</p>
//                     </div>
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <div className="">
//                         <img className="h-[400px]" src="https://swiperjs.com/demos/images/nature-1.jpg" />
//                         <h1>heoo</h1>
//                         <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum minus voluptas, labore obcaecati consequuntur quos culpa aperiam. Omnis, aut soluta eaque fuga eligendi asperiores atque possimus porro suscipit nisi cum?</p>
//                     </div>
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <img className=" h-[400px]" src="https://swiperjs.com/demos/images/nature-4.jpg" />
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
//                 </SwiperSlide>
//             </Swiper>
//         </>
//     );
// }
// export default Reviews;