import React from "react";
import { Component } from "react";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import "swiper/css/scrollbar";
import LessonsDB from "../../db/lessons.json";

import ReactPlayer from "react-player";

class Lessons extends Component {
  render() {
    return (
      <div id="NEWS" style={{ marginTop: "5%" }}>
        <h1
          style={{ textAlign: "center", fontWeight: "500", marginBottom: "5%" }}
        >
          {" "}
          Latest Videos{" "}
        </h1>

        <Swiper
          // install Swiper modules
          breakpoints={{
            480: {
              slidesPerView: 1,
            },
            576: {
              //width: 576,
              slidesPerView: 2,
            },
            768: {
              //width: 768,
              slidesPerView: 3,
            },
          }}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          navigation
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          className="ps-5"
        >
          {LessonsDB.map((lesson) => (
            <SwiperSlide key={lesson.id}>
              <div>
                <div className="card text-center">
                  <div className="">
                    <ReactPlayer url={lesson.YoutubeURL} className="w-100" />
                  </div>
                  <div className="card-body text-dark">
                    <h4 className="card-title">{lesson.Title}</h4>
                    <p className="card-text text-secondary">
                      <small>{lesson.Author}</small>
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  }
}

export default Lessons;
