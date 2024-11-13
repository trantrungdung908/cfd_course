import { Empty } from "antd";
import React, { useEffect } from "react";

const HomeGallery = ({ galleriesData = [], loading = false }) => {
  useEffect(() => {
    function teamSlider() {
      let $carouselGallery = $(".gallery .list"),
        $progressBar = $(".gallery .timeline .process");

      $carouselGallery.flickity({
        contain: true,
        freeScroll: true,
        cellAlign: "left",
        lazyLoad: 6,
        imagesLoaded: true,
        wrapAround: true,
        prevNextButtons: false,
      });
      $carouselGallery.on("scroll.flickity", function (event, progress) {
        progress = Math.max(0.05, Math.min(1, progress));
        $progressBar.width(progress * 100 + "%");
      });
    }
    const myTimeout = setTimeout(() => {
      if (galleriesData?.length > 0) {
        teamSlider();
      }
    }, 300);

    return () => {
      clearTimeout(myTimeout);
    };
  }, [galleriesData]);

  return (
    <section className="gallery">
      <div className="heading --noline --center">
        <h2 className="heading__title title --t2">
          <span className="color--primary">CFD Circle</span> Là Một Team
        </h2>
      </div>
      <div className="list">
        {!loading && galleriesData[0]?.images.length === 0 ? (
          <Empty description="Không có dữ liệu" />
        ) : (
          galleriesData[0]?.images?.map((img) => {
            return (
              <img key={img} data-flickity-lazyload={img} alt="list_img" />
            );
          })
        )}
      </div>
      <div className="controls" style={{ display: "block" }}>
        <div className="btn_ctr prev" />
        <span>Trượt qua</span>
        <div className="timeline">
          <div className="process" />
        </div>
        <div className="btn_ctr next" />
      </div>
    </section>
  );
};

export default HomeGallery;
