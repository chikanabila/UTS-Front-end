import React from 'react';

function PlaceSection() {
  const places = [
    {
      id: 1,
      image: './img/place1.jpg',
      rating: '4,8',
      title: 'Bali',
      subtitle: 'Indonesia',
      price: '$2499',
    },
    {
      id: 2,
      image: './img/place2.jpg',
      rating: '5,0',
      title: 'Bora Bora',
      subtitle: 'Polinesia',
      price: '$1599',
    },
    {
      id: 3,
      image: './img/place3.jpg',
      rating: '4,9',
      title: 'Hawaii',
      subtitle: 'EE.UU',
      price: '$3499',
    },
    {
      id: 4,
      image: './img/place4.jpg',
      rating: '4,8',
      title: 'Whitehaven',
      subtitle: 'Australia',
      price: '$2499',
    },
    {
      id: 5,
      image: './img/place5.jpg',
      rating: '4,8',
      title: 'Hvar',
      subtitle: 'Croacia',
      price: '$1999',
    },
  ];

  return (
    <section className="place section" id="place">
      <h2 className="section__title">Choose Your Place</h2>

      <div className="place__container container grid">
        {places.map((place) => (
          <div key={place.id} className="place__card">
            <img src={place.image} alt={place.title} className="place__img" />

            <div className="place__content">
              <span className="place__rating">
                <i className="ri-star-line place__rating-icon"></i>
                <span className="place__rating-number">{place.rating}</span>
              </span>

              <div className="place__data">
                <h3 className="place__title">{place.title}</h3>
                <span className="place__subtitle">{place.subtitle}</span>
                <span className="place__price">{place.price}</span>
              </div>
            </div>

            <button className="button button--flex place__button">
              <i className="ri-arrow-right-line"></i>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PlaceSection;
