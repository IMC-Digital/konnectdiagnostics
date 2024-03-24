import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Card } from 'react-bootstrap';

const CardCarousel = () => {
    const items = [
        {
          title: 'Enhanced Reputation',
          description: 'By partnering with Konnect Diagnostics, you align yourself with a reputable and trusted brand in the healthcare industry. Our commitment to excellence and adherence to strict quality standards will enhance your reputation and instill confidence in your patients.',
          image: '/images/benf1.jpg',
        },
        {
          title: 'Comprehensive Services',
          description: 'As a partner, you gain access to our comprehensive range of diagnostic services. This includes radiology, pathology, and a range of specialized tests, allowing you to offer a wide spectrum of healthcare solutions to your patients.',
          image: '/images/benf2.jpg',
        },
        {
          title: 'Collaborative Approach',
          description: 'We believe in fostering strong partnerships based on collaboration and mutual growth. We work closely with our partners to understand their specific needs and develop tailored solutions that meet the unique requirements of their patient base.',
          image: '/images/benf3.jpg',
        },
        {
          title: 'Continuous Support',
          description: 'Our dedicated team is committed to providing ongoing support to our partners, offering comprehensive training, education, technical assistance, and marketing support to ensure your success as our valued partner.',
          image: '/images/benf4.jpg',
        }
      ];

      const settings = {
        dots: false,
        controls: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,
      };

  return (
    <Slider {...settings}>
      {items.map((item, index) => (
        <div key={index} className="p-2">
          <Card>
            <Card.Img variant="top" src={item.image} />
            <Card.Body>
              <Card.Title>
                <h2 className="text-k-accent text-k-clr-secondary">
                  {item.title}
                </h2>
              </Card.Title>
              <Card.Text>
                <p className="text-k-text">
                  {item.description}
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      ))}
    </Slider>
  );
};

export default CardCarousel;
