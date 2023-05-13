import { MyContext } from "../../Hooks/Usefetch"
import { useContext } from "react"
import { Link } from "react-router-dom";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper";



const Home = (props) => {
  const {data,loading,searchTitle} = useContext(MyContext);

  return (
    <>  
    <div className="bg-white  dark:bg-black dark:text-white">
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        // modules={[Pagination]}
        className="mySwiper "
      >
        {
          data.filter((el) => {
            if (!searchTitle.trim()) {
              return el
            } else if (data?.snippet?.channelTitle.toLowerCase().includes(searchTitle.toLowerCase())) {
              return el
            }

          }).slice(0.19).map(data => {
            return  <SwiperSlide key={data} className=" mt-[120px] max-md:w-[400px]">
              <Link to="/singlepage">
                <Link to={`https://www.youtube.com/embed/${data[2]?.id?.videoId}`}>
                <img  src={data?.snippet?.thumbnails?.medium?.url} alt={data?.snippet?.channelTitle} />
                </Link>
              

              <h2 className="text-sm text-left">{data?.snippet?.channelTitle}</h2>

              <p className="text-xs text-right pt-2">{data?.snippet?.publishedAt}</p>
              </Link>
            </SwiperSlide>

            
            
             
          })
        }
      
      </Swiper>
  
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        // modules={[Pagination]}
        className="mySwiper"
      >
        {
          data.filter((el) => {
            if (!searchTitle.trim()) {
              return el
            } else if (data?.snippet?.channelTitle.toLowerCase().includes(searchTitle.toLowerCase())) {
              return el
            }
          }).slice(20.39).map(data => {
            return  <SwiperSlide key={data} className="mt-[30px]">
              <Link  to="/singlepage">
              <img  src={data?.snippet?.thumbnails?.medium?.url} alt={data?.snippet?.channelTitle} />

              <h2 className="text-sm text-left">{data?.snippet?.channelTitle}</h2>

              <p className="text-xs text-right pt-2">{data?.snippet?.publishedAt}</p>
              </Link>
            </SwiperSlide>

            
            
             
          })
        }
      
      </Swiper>

      <Swiper
        slidesPerView={3.5}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        // modules={[Pagination]}
        className="mySwiper"
      >
        {
          data.filter((el) => {
            if (!searchTitle.trim()) {
              return el
            } else if (data?.snippet?.channelTitle.toLowerCase().includes(searchTitle.toLowerCase())) {
              return el
            }
          }).slice(30.50).map(data => {
            return  <SwiperSlide className="mt-[30px]">
              <Link  to="/singlepage">
              <img  src={data?.snippet?.thumbnails?.medium?.url} alt={data?.snippet?.channelTitle} />

              <h2 className="text-sm text-left">{data?.snippet?.channelTitle}</h2>

              <p className="text-xs text-right pt-2">{data?.snippet?.publishedAt}</p>
              </Link>
            </SwiperSlide>

            
            
             
          })
        }
      
      </Swiper>

      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        // modules={[Pagination]}
        className="mySwiper"
      >
        {
          data.filter((el) => {
            if (!searchTitle.trim()) {
              return el
            } else if (data?.snippet?.channelTitle.toLowerCase().includes(searchTitle.toLowerCase())) {
              return el
            }
          }).slice(0.19).map(data => {
            return  <SwiperSlide className=" mt-[30px]">
              <Link  to="/singlepage">
              <img  src={data?.snippet?.thumbnails?.medium?.url} alt={data?.snippet?.channelTitle} />

              <h2 className="text-sm text-left">{data?.snippet?.channelTitle}</h2>

              <p className="text-xs text-right pt-2">{data?.snippet?.publishedAt}</p>
              </Link>
            </SwiperSlide>

            
            
             
          })
        }
      
      </Swiper>

      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        // modules={[Pagination]}
        className="mySwiper"
      >
        {
          data.filter((el) => {
            if (!searchTitle.trim()) {
              return el
            } else if (data?.snippet?.channelTitle.toLowerCase().includes(searchTitle.toLowerCase())) {
              return el
            }
          }).slice(20.39).map(data => {
            return  <SwiperSlide  className="mt-[30px]">
              <Link  to="/singlepage">
              <img  src={data?.snippet?.thumbnails?.medium?.url} alt={data?.snippet?.channelTitle} />

              <h2 className="text-sm text-left">{data?.snippet?.channelTitle}</h2>

              <p className="text-xs text-right pt-2">{data?.snippet?.publishedAt}</p>
              </Link>
            </SwiperSlide>

            
            
             
          })
        }
      
      </Swiper>

      <Swiper
        slidesPerView={3.5}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        // modules={[Pagination]}
        className="mySwiper"
      >
        {
          data.filter((el) => {
            if (!searchTitle.trim()) {
              return el
            } else if (data?.snippet?.channelTitle.toLowerCase().includes(searchTitle.toLowerCase())) {
              return el
            }
          }).slice(30.50).map(data => {
            return  <SwiperSlide className="mt-[30px]">
              <Link  to="/singlepage">
              <img  src={data?.snippet?.thumbnails?.medium?.url} alt={data?.snippet?.channelTitle} />

              <h2 className="text-sm text-left">{data?.snippet?.channelTitle}</h2>

              <p className="text-xs text-right pt-2">{data?.snippet?.publishedAt}</p>
              </Link>
            </SwiperSlide>

            
            
             
          })
        }
      
      </Swiper>
    </div>
    </>
  )
}

export default Home;

