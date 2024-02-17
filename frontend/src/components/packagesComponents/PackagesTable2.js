import React from 'react';
import { styled } from 'styled-components';

const PackagesTable2 = () => {
  return (
    <Wrapper>
      <div className="table-wrapper d-flex w-100 rounded-4 border">
        <div className="w-30">
          <div className='p-2'>
            <h2 className="text-k-secondary"> Cardiac Packages </h2>
          </div>
          {
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map((item, index) => (
              <div key={index} className={` ${index % 2 === 0 ? 'bg-light2' : 'bg-white'} bg-light`}>
                <p className="mb-0"> test {item} </p>
              </div>
            ))
          }
        </div>
        <div className="w-70 d-flex">
          <div className="w-33">
            <div className='p-2'>
              <h2 className="text-k-secondary"> Basic </h2>
            </div>
            {
              [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map((item, index) => (
                <div key={index} className={` ${index % 2 === 0 ? 'bg-light2' : 'bg-white'} bg-light`}>
                  <p className=""> <i className="fa fa-check"></i> </p>
                </div>
              ))
            }
          </div>
          <div className="w-33">
            <div className='p-2'>
              <h2 className="text-k-secondary"> Executive </h2>
            </div>
            {
              [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map((item, index) => (
                <div key={index} className={` ${index % 2 === 0 ? 'bg-light2' : 'bg-white'} bg-light`}>
                  <p className=""> <i className="fa fa-check"></i> </p>
                </div>
              ))
            }
          </div>
          <div className="w-33">
            <div className='p-2'>
              <h2 className="text-k-secondary"> Advanced </h2>
            </div>
            {
              [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map((item, index) => (
                <div key={index} className={` ${index % 2 === 0 ? 'bg-light2' : 'bg-white'} bg-light`}>
                  <p className=""> <i className="fa fa-check"></i> </p>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default PackagesTable2;

const Wrapper = styled.section`
width: 100%; 

.table-wrapper{
  ${'' /* height: 80vh;
  overflow-y: scroll; */}
  .w-70 .w-33{
    box-shadow: rgba(17, 12, 46, 0.15) -40px 0px 100px 0px;
    p{
      padding: 5px 30px; 
    }
  }
}
`;
