import React, { useEffect, useState } from "react";
import styled from "styled-components";

function CounterBox2() {
  const [counts, setCounts] = useState({
    linesOfCode: 0,
    projectsDone: 0,
    happyClients: 0,
    cupsOfCoffee: 0,
  });

  useEffect(() => {
    const animateCounting = (targetCount, key) => {
      let currentCount = 0;
      const duration = 3000;
      const increment = Math.ceil(targetCount / (duration / 15));

      const counterInterval = setInterval(() => {
        currentCount += increment;
        if (currentCount >= targetCount) {
          currentCount = targetCount;
          clearInterval(counterInterval);
        }
        setCounts((prevCounts) => ({ ...prevCounts, [key]: currentCount }));
      }, 15);
    };

    // Usage
    animateCounting(2000, "numb1");
    animateCounting(480, "numb2");
    animateCounting(120, "numb3");
    animateCounting(5, "numb4");
  }, []);

  return (
    <Wrapper className="bg_primary py-5">
      <section id="counter-stats" className="wow fadeInRight" data-wow-duration="1.4s">
        <div className="container">
          <div className="d-flex gap-2 flex-wrap justify-content-center align-items-center">
            <div className="stats">
              <img src="/images/icons/tests-white.svg" alt="statIcon1" />
              <h2 className="text-white my-3" data-count={counts.numb1}>
                {counts.numb1}+
              </h2>
              <h5 className="text-white">Tests</h5>
            </div>

            <div className="stats">
              <img src="/images/icons/test-bottle.svg" alt="statIcon2" />
              <h2 className="text-white my-3" data-count={counts.numb2}>
                {counts.numb2}+
              </h2>
              <h5 className="text-white">Types of tests</h5>
            </div>

            <div className="stats">
              <img src="/images/icons/hospital-white.svg" alt="statIcon3" />
              <h2 className="text-white my-3" data-count={counts.numb3}>
                {counts.numb3}+
              </h2>
              <h5 className="text-white">Centers</h5>
            </div>

            <div className="stats">
              <img src="/images/icons/customers-white.svg" alt="statIcon4" />
              <h2 className="text-white my-3" data-count={counts.numb4}>
                {counts.numb4}M+
              </h2>
              <h5 className="text-white">Customers</h5>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
}

export default CounterBox2;

const Wrapper = styled.section`
  .stats {
    width: 180px;
    border: 1px solid rgba(255,255,255,0.2);
    text-align: center;
    border-radius: 8px;
    font-size: 35px;
    font-weight: 700;
    padding: 20px;
    img {
      width: 50px;
    }
  }

  /*/ end count stats /*/
  @media only screen and (max-width: 600px) {
    .stats {
      font-size: 32px;
      font-weight: 600;
    }
    .row {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 25px;
    }
  }
`;
