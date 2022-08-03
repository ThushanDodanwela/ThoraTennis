import React from "react";
import { Component } from "react";
import Card from "./CardUI";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

class Lessons extends Component {
  render() {
    return (
      <div id="NEWS" style={{ marginTop: "5%" }}>
        <h1 style={{ textAlign: "center", fontWeight: "500" }}>
          {" "}
          Latest Videos{" "}
        </h1>

        {/* <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={4}
          navigation
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <div className="container-fluid d-flex justify-content-center">
            {LessonsDB.map((lesson) => {
              <SwiperSlide>
                <Card imgsrc={lesson.imgsrc} Name="Daniel" key={lesson.id} />
              </SwiperSlide>;
            })}
          </div>
        </Swiper> */}
      </div>
    );
  }
}

export default Lessons;
