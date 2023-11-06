import React from 'react';


function Discover() {
  return (
    <section className="discover section" id="discover">
      <h2 className="section__title">Discover the most <br /> attractive places</h2>

      <div className="discover__container container swiper-container">
        <div className="swiper-wrapper">
          {/* DISCOVER 1 */}
          <div className="discover__card swiper-slide">
            <img src="./img/discover1.jpg" alt="" className="discover__img" />
            <div className="discover__data">
              <h2 className="discover__title">Bali</h2>
              <span className="discover__description">24 tours available</span>
            </div>
          </div>

          {/* DISCOVER 2 */}
          <div className="discover__card swiper-slide">
            <img src="./img/discover2.jpg" alt="" className="discover__img" />
            <div className="discover__data">
              <h2 className="discover__title">Hawaii</h2>
              <span className="discover__description">15 tours available</span>
            </div>
          </div>

          {/* DISCOVER 3 */}
          <div className="discover__card swiper-slide">
            <img src="./img/discover3.jpg" alt="" className="discover__img" />
            <div className="discover__data">
              <h2 className="discover__title">Hvar</h2>
              <span className="discover__description">18 tours available</span>
            </div>
          </div>

          {/* DISCOVER 4 */}
          <div className="discover__card swiper-slide">
            <img src="/img/discover4.jpg" alt="" className="discover__img" />
            <div className="discover__data">
              <h2 className="discover__title">Whitehaven</h2>
              <span className="discover__description">32 tours available</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Discover;
