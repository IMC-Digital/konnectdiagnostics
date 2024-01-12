import React from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { hcContentData } from "../../assets/data/HcContentData";

const HcCard = () => {
  return (
    <Wrapper>
      <section className="conditions pb-5">
        <div className="hc-card d-flex gap-3 justify-content-between flex-wrap col container">
          {hcContentData.map((item) => (
            <div className="box bg-white rounded p-0 overflow-hidden shadow-sm" key={item.id}>
              <Link to={`/health-conditions/${item.slug}`}>
                <div className="fi_box" style={{backgroundImage: `url("${item.cover}")`}}>
                </div>

                <div className="p-3 ">
                  <a href="/">{item.category}</a>
                  <h2 className="text-k-secondary">{item.title}</h2>
                  <p className="text-secondary">{item.excerpt.slice(0,40)}...</p>
                  <button className="btn btn-outline-secondary btn-sm">Know More</button>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </Wrapper>
  );
};

export default HcCard;

const Wrapper = styled.section`
  .hc-card {
    a {text-decoration: none;}
    .box {width: 24%;}
    .fi_box{
      background-size: cover;
      height: 200px;
      width: 100%; 
    }
  }
`;
