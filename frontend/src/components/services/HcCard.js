import React from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { hcContentData } from "../../assets/data/HcContentData";

const HcCard = () => {
  return (
    <Wrapper>
      <section className="conditions">
        <div className="hc-card d-flex gap-2 justify-content-center flex-wrap container">
          {hcContentData.map((item) => (
            <div className="box bg-white rounded p-0" key={item.id}>
              <Link to={`/health-conditions/${item.slug}`}>
                <div className="fi_box" style={{backgroundImage: `url("${item.cover}")`}}>
                </div>

                <div className="p-3">
                  <a href="/">{item.category}</a>
                  <h2 className="condition-title text-k-accent">{item.title}</h2>
                  <p className="text-k-text small text-muted">{item.excerpt.slice(0,35)}...</p>
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
.conditions{
  .box{
    border: 1px solid transparent;
    transition: 0.5s;
    border: 1px solid #f1f1f1;
    border-radius: 8px;
    overflow: hidden;
  }
  .box:hover{
    box-shadow: 0 0 1px #e8f0ff, 0 6px 12px #e8f0ff;
    border: 1px solid #e8f0ff;
    transform: translateY(-1.1rem);
    .condition-title{
      color: var(--secondary-color);
    } 
  }
}
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
