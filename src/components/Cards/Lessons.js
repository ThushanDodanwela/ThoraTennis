import React from "react";
import { Component } from "react";
import Card from "./CardUI";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import LessonsDB from "../../db/lessons.json";

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
              // width: 576,
              slidesPerView: 2,
            },
            768: {
              // width: 768,
              slidesPerView: 4,
            },
          }}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          navigation
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <div className="container">
            {LessonsDB.map((lesson) => (
              <SwiperSlide key={lesson.id}>
                <div className="row">
                  <Card
                    imgsrc={lesson.YoutubeURL}
                    Name={lesson.Title}
                    text={lesson.Author}
                  />
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    );
  }
}

export default Lessons;
