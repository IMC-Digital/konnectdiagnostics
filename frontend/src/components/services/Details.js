import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { hcContentData } from "../../assets/data/HcContentData";

const DetailsPages = () => {
  const { slug } = useParams();
  const [conditions, setconditions] = useState(null);

  useEffect(() => {
    let conditions = hcContentData.find(
      (conditions) => conditions.slug === slug
    );
    if (conditions) {
      setconditions(conditions);
    }
    console.log("sss");
  }, [slug]);

  return (
    <Wrapper>
      {conditions ? (
        <section className="singlePage">
          <div className="container d-flex gap-5">
            <div className="art_sec pe-5">
              <div className="fi_box" style={{ backgroundImage: `url("${conditions.cover}")`}}>
                <h2 className="text-k-primary text-white bg-k-primary p-2 px-sm-5 mb-0"> {conditions.title} </h2>
              </div>
              {/* <AiOutlineTags className="icon" /> */}
              <div>{conditions.component}</div>
            </div>

            <div className="related_art_sec">
              <h2 className="text-k-primary">Related</h2>
              <hr />
              <div className="scroll-box-right">
                {hcContentData.map((item, index) => (
                  <Link key={index} to={`/health-conditions/${item.slug}`}>
                    <div className="related">
                      <div className="item d-flex gap-2">
                        <div className="rel_art_fi">
                          <div className="fi_box_related" style={{backgroundImage: `url("${item.cover}")`}}>
                          </div>
                        </div>
                        <div className="rel_art_info px-2">
                          <h2 className="title text-k-accent">{item.title}</h2>
                          <p className="excrpt text-k-text text-muted small">{item.excerpt.slice(0,60)}...</p>
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

export default DetailsPages;

const Wrapper = styled.section`
  .symptoms-box {
    display: flex;
    flex-direction: column;
    display: flex;
    .symptoms {
      display: flex;
      border: 2px solid red;
      width: 100px;
      .symptom-image {
        height: auto;
        padding: 10px;
        background-color: yellowgreen;
      }
    }
  }

  .singlePage {
    a{ text-decoration: none; }
    li, p{
      color: var(--text-color);
      font-weight: 300;
      line-height: 1.5rem;
      margin-bottom: 10px !important;
      font-size: 16px;
      font-weight: 300;
      strong{
        font-weight: 600;
      }
    }
    .art_sec{width: 65%;}
    .related_art_sec{width: 35%;}
    .rel_art_fi{width: 40%}
    .rel_art_info{width: 60%}
    .fi_box {
      width: 100%;
      height: 400px;
      background-size: cover;
      background-position: center;
      display: flex;
      align-items: flex-end;
      padding: 0;
    }
    .fi_box_related{
      background-size: cover;
      height: 100px;
      width: 100%; 
    }
      .content {
        margin: 1.5rem auto;
        .questions{
          border: 1px solid red
        }
        .question {
          font-size: 1.5rem;
          font-weight: 600;
        }
        .desc {
          font-size: 1rem;
          font-weight: 500;
        }
      }
      img {
        width: 50%;
        height: auto;
      }
      .related {
        .item {
          display: flex;
          margin-bottom: 15px;
          .info {
            margin: 5px;
            width: 55%;
          }
          .title{
            color: var(--primary-color);
            transition: 0.5s;
          }
        }
        &:hover{
          .title{
            color: var(--secondary-color)
          }
        }
      }
  }
`;
