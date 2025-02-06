import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import { AiOutlineTags } from "react-icons/ai";
import { useParams } from "react-router-dom";
import { RsContentData } from "../../assets/data/RsContentData";

const RsDetails = () => {
  const { slug } = useParams();
  const [rs, setRs] = useState(null);

  useEffect(() => {
    let rs = RsContentData.find((rs) => rs.slug === slug);
    if (rs) {
      setRs(rs);
    }
  }, [slug]);

  return (
    <Wrapper>
      {rs ? (
        <section className="container singlePage px-md-0 px-5">
          <div className="row gx-5">
            <div className="left col-md-8 pe-md-5">
              <div className="img mb-5">
                <img src={rs.productImage} alt={rs.title} />
              </div>
              <h2>{rs.title}</h2>
              <hr />
              <div>{rs.component}</div>
            </div>
            <div className="right col-md-4 pt-md-0 pt-5">
              <h3 className="related-heading"> Related </h3>
              <div className="scroll-box-right">
                {RsContentData.map((item) => (
                  <Link to={`/radiology-services/${item.slug}`} className="text-decoration-none">
                    <div className="related">
                      <div className="item d-flex gap-2">
                        <div className="img">
                          <img src={item.productImage} alt="Machine_image" />
                        </div>
                        <div className="info d-flex">
                          <h3>{item.title}</h3>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      ) : null}
    </Wrapper>
  );
};

export default RsDetails;

const Wrapper = styled.section`
  .singlePage {
    .left {
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
      a {
        font-size: 15px;
        font-weight: 500;
        color: var(--primary-clr)
      }
      h2 {
        font-family: "Montserrat Alternates", sans-serif;
        margin-bottom: 15px;
        line-height: 1.5;
        font-size: 2rem;
      }
      .content {
        margin: 1.5rem auto;
        .question {
          font-size: 1.5rem;
          font-weight: 600;
        }
        .desc {
          font-size: 1rem;
          font-weight: 500;
        }
      }
    }
    .right {
      img {
        width: 50px;
        height: 50px;
      }
      .related {
        box-shadow: rgba(149, 157, 165, 0.2) 0px 2px 10px;
        border-radius: 10px;
        margin: 10px;
        .item {
          align-items: center;
          display: flex;
          margin-bottom: 15px;
          padding: 10px;

          .img {
            width: 35%;
            img {
              width: 100%;
              height: auto;
              border-radius: 5px;
            }
          }
          .info {
            /* border: 1px solid red; */
            margin: 5px;
            width: 65%;
            h3 {
              color: ${({ theme }) => theme.colors.dark};
              font-size: 17px;
              font-weight: 600;
            }
            p {
              color: ${({ theme }) => theme.colors.text};
              font-size: 0.925rem;
            }
          }
        }
      }
    }
  }
`;
