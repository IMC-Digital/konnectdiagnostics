import React from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { RsContentData } from "../../assets/data/RsContentData";
// import { AiOutlineTags } from "react-icons/ai";

const RsCard = () => {
  return (
    <Wrapper>
      <section className="conditions">
        <div className="hc-card d-flex flex-wrap justify-content-center row">
          {RsContentData.map((item) => (
            <div className="box rounded col-md-4" key={item.id}>
              <Link to={`/radiology-services/${item.slug}`}>
                <div className="img">
                  <img src={item.productImage} alt={item.slug} />
                </div>
                <div className="details">
                  <div className="catg">
                  </div>
                  <h2 className="title text-k-accent">{item.title}</h2>
                  {/* <p>{item.excerpt.slice(0, 25)}...</p> */}
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </Wrapper>
  );
};

export default RsCard;

const Wrapper = styled.div`
  .hc-card {
    a { text-decoration: none; }
    .box{
      transition: 0.5s;
      .title{
        color: var(--primary-color);
        transition: 0.5s;
      }
      &:hover{
        border: 1px solid #e8f0ff;
        box-shadow: 0 0 1px #e8f0ff, 0 6px 12px #e8f0ff;
        transform: translateY(-1.1rem);
        .title{
          color: var(--secondary-color);
        }
      }
      img {
        width: 100%;
        ${'' /* height: 220px; */}
        border-radius: 1rem;
      }
      .details {
        padding: 15px;
        a {
          font-size: 14px;
        }

        h3 {
          font-size: 1.25rem;
          margin-top: 5px;
          font-weight: 600;
          text-decoration: none;
          text-transform: lowercase;
          &::first-line {
            text-transform: capitalize;
          }
        }
        p {
          font-size: 1rem;
          font-weight: 500;
          color: #858585;
        }
      }
    }
  }
`;
