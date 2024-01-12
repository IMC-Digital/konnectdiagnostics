import React from 'react';
import { Container, Card, ProgressBar } from 'react-bootstrap';

const MySampleTracing = () => {
  return (
    <Container className="px-1 px-md-4 py-5 mx-auto">
      <Card>
        <Card.Header className='d-flex align-items-center justify-content-between'>
          <h2 className="text-k-accent text-k-clr-secondary mb-0">
            Order Id: #KO-10000
          </h2>
          <button variant="primary" className='btn btn-sm btn-outline-secondary'> View Details </button>
        </Card.Header>
        <Card.Body>
          <div className='w-100 border rounded bg-white d-flex justify-content-around p-3'>
            <div className=''>
              <p className="text-k-accent mb-0">Placed On:</p>
              <p className="text-k-text small mb-0">12 Dec 2024, Mon</p>
            </div>
            <div className=''>
              <p className="text-k-accent mb-0">Estimated Report Delivery:</p>
              <p className="text-k-text small mb-0">13 Dec 2024, Tue</p>
            </div>
            <div className=''>
              <p className="text-k-accent mb-0">Test:</p>
              <p className="text-k-text small mb-0">Allergen Panel-Veg + Inhalant</p>
            </div>
            <div className=''>
              <p className="text-k-accent mb-0">Member Name:</p>
              <p className="text-k-text small mb-0">Shaik Mahmood Sameer</p>
            </div>
          </div>

          <div className=' d-flex-cc flex-column position-relative py-3'>

            <div className='progressBarLine bg-light overflow-hidden'>
              <ProgressBar now={50} className='' />
            </div>

            <div className='d-flex justify-content-between align-items-center w-100' style={{zIndex: "1"}}>
              <div className="w-20 d-flex-cc">
                <div className='bg-k-secondary rounded-circle d-flex-cc' style={{ width: "25px", height: "25px" }}>
                  <i class="fa-solid fa-check text-white"></i>
                </div>
              </div>
              <div className="w-20 d-flex-cc">
                <div className='bg-k-secondary rounded-circle d-flex-cc' style={{ width: "25px", height: "25px" }}>
                  <i class="fa-solid fa-check text-white"></i>
                </div>
              </div>
              <div className="w-20 d-flex-cc">
                <div className='bg-k-secondary rounded-circle d-flex-cc' style={{ width: "25px", height: "25px" }}>
                  <i class="fa-solid fa-check text-white"></i>
                </div>
              </div>
              <div className="w-20 d-flex-cc">
                <div className='bg-light rounded-circle d-flex-cc' style={{ width: "25px", height: "25px" }}>
                  <i class="fa-regular fa-circle text-primary"></i>
                </div>
              </div>
              <div className="w-20 d-flex-cc">
                <div className='bg-light rounded-circle d-flex-cc' style={{ width: "25px", height: "25px" }}>
                  <i class="fa-regular fa-circle text-primary"></i>
                </div>
              </div>
            </div>
          </div>

          <div className='d-flex justify-content-between align-items-center w-100'>
            <div className="w-20 d-flex-cc flex-column">
              <div className='d-flex-cc flex-column'>
                <svg xmlns="http://www.w3.org/2000/svg" id="line_expanded" height="30" viewBox="0 0 16 16" width="30"><g><path d="m14.064 9.499c-.268-.074-.542.081-.616.347l-.217.78c-.066.22-.264.374-.481.374h-7.45c-.229 0-.432-.164-.482-.389l-1.252-5.611h1.934c.276 0 .5-.224.5-.5s-.224-.5-.5-.5h-2.157l-.184-.827c-.148-.679-.762-1.173-1.459-1.173h-1.2c-.276 0-.5.224-.5.5s.224.5.5.5h1.2c.23 0 .433.163.482.389l1.66 7.44c.151.678.764 1.171 1.458 1.171h7.45c.654 0 1.246-.446 1.441-1.096l.22-.79c.075-.266-.08-.542-.347-.615z"/><path d="m6.5 13c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5zm0 2c-.276 0-.5-.224-.5-.5s.224-.5.5-.5.5.224.5.5-.224.5-.5.5z"/><path d="m11.5 13c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5zm0 2c-.276 0-.5-.224-.5-.5s.224-.5.5-.5.5.224.5.5-.224.5-.5.5z"/><path d="m11.5 0c-2.481 0-4.5 2.019-4.5 4.5s2.019 4.5 4.5 4.5 4.5-2.019 4.5-4.5-2.019-4.5-4.5-4.5zm0 8c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"/><path d="m12.646 3.146-2.146 2.147-.646-.647c-.195-.195-.512-.195-.707 0s-.195.512 0 .707l1 1c.097.098.225.147.353.147s.256-.049.354-.146l2.5-2.5c.195-.195.195-.512 0-.707s-.512-.196-.708-.001z"/></g></svg>
                <h2 className="text-k-text text-center mt-2">Order Placed</h2>
              </div>
            </div>
            <div className="w-20 d-flex-cc flex-column">
              <div className='d-flex-cc flex-column'>
              <svg xmlns="http://www.w3.org/2000/svg" id="Layer_3" height="30" viewBox="0 0 64 64" width="30" data-name="Layer 3"><path d="m6 11h2v44a8 8 0 0 0 16 0v-44h2a1 1 0 0 0 1-1v-8a1 1 0 0 0 -1-1h-20a1 1 0 0 0 -1 1v8a1 1 0 0 0 1 1zm10 50a6.006 6.006 0 0 1 -6-6v-32h12v32a6.006 6.006 0 0 1 -6 6zm6-40h-12v-10h12zm-15-18h18v6h-18z"/><path d="m19 52.884h2v1.098h-2z"/><path d="m17 57v2a4 4 0 0 0 4-4h-2a2 2 0 0 1 -2 2z"/><path d="m20 46v-18a1 1 0 0 0 -1-1h-6a1 1 0 0 0 -1 1v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1zm-2-1h-4v-16h4z"/><path d="m42.293 30.707a1 1 0 0 0 1.414 0l11-11a1 1 0 0 0 0-1.414l-3-3a1 1 0 0 0 -1.414 0l-7.293 7.293-2.293-2.293a1 1 0 0 0 -1.414 0l-3 3a1 1 0 0 0 0 1.414zm-2.293-8.293 2.293 2.293a1 1 0 0 0 1.414 0l7.293-7.293 1.586 1.586-9.586 9.586-4.586-4.586z"/><path d="m37 35h17a5.006 5.006 0 0 0 5-5v-14a5.006 5.006 0 0 0 -5-5h-17a5.006 5.006 0 0 0 -5 5v1h-3a1 1 0 0 0 -.707 1.707l3.707 3.707v7.586a5.006 5.006 0 0 0 5 5zm-5.586-16h1.586a1 1 0 0 0 1-1v-2a3 3 0 0 1 3-3h17a3 3 0 0 1 3 3v14a3 3 0 0 1 -3 3h-17a3 3 0 0 1 -3-3v-8a1 1 0 0 0 -.293-.707z"/></svg>
                <h2 className="text-k-text text-center mt-2">Sample Recieved</h2>
              </div>
            </div>
            <div className="w-20 d-flex-cc flex-column">
              <div className='d-flex-cc flex-column'>
                <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" height="30" width="30" data-name="Layer 1" viewBox="0 0 512 512"><path d="M249.992,158.591A100.713,100.713,0,1,0,350.705,259.3,100.825,100.825,0,0,0,249.992,158.591Zm0,187.425A86.713,86.713,0,1,1,336.705,259.3,86.811,86.811,0,0,1,249.992,346.016Zm237.044,99.562-85.321-85.32a22.777,22.777,0,0,0-22.348-5.779l-22.025-22.025A129.893,129.893,0,0,0,183.327,147.795V85.418a27.872,27.872,0,0,0,24.541-27.634V36.831A27.867,27.867,0,0,0,180.032,9H46.15A27.866,27.866,0,0,0,18.315,36.831V57.784A27.87,27.87,0,0,0,42.856,85.418V432.761a70.236,70.236,0,0,0,140.471,0V370.81a129.689,129.689,0,0,0,139.818-4.157l22.027,22.027a22.968,22.968,0,0,0-.874,6.245,22.613,22.613,0,0,0,6.65,16.1l85.321,85.322a22.8,22.8,0,0,0,32.2,0l18.567-18.567a22.818,22.818,0,0,0,0-32.2ZM120.04,259.3a129.738,129.738,0,0,0,4.126,32.54H56.856V245.322H75.8a7,7,0,0,0,0-14H56.856V196.2h43.779a7,7,0,1,0,0-14H56.856V147.074H75.8a7,7,0,0,0,0-14H56.856V85.62H169.327v71.872A129.782,129.782,0,0,0,120.04,259.3ZM32.315,57.784V36.831A13.85,13.85,0,0,1,46.15,23H180.032a13.851,13.851,0,0,1,13.836,13.835V57.784A13.852,13.852,0,0,1,180.032,71.62H46.15A13.851,13.851,0,0,1,32.315,57.784ZM169.327,432.761a56.236,56.236,0,0,1-112.471,0V305.843h71.808a130.56,130.56,0,0,0,40.663,55.27ZM134.04,259.3A115.952,115.952,0,1,1,249.992,375.255,116.083,116.083,0,0,1,134.04,259.3Zm214.713,84.362,18.677,18.677-14.4,14.4-18.677-18.677A130.932,130.932,0,0,0,348.753,343.665ZM477.135,467.88,458.57,486.446a8.781,8.781,0,0,1-12.4,0l-85.32-85.321a8.813,8.813,0,0,1,0-12.4l18.568-18.567a8.778,8.778,0,0,1,12.4,0l85.32,85.321a8.813,8.813,0,0,1,0,12.4ZM255.959,211.85a7,7,0,0,0-11.933,0l-20.1,32.764c-9.9,16.133-12.321,41.8,1.018,55.141a35.5,35.5,0,0,0,50.1,0c13.339-13.339,10.915-39.008,1.018-55.141Zm9.183,78.006a21.509,21.509,0,0,1-30.3,0c-8.125-8.126-5.985-26.506,1.018-37.921L249.993,228.9l14.131,23.039C271.127,263.35,273.267,281.73,265.142,289.856Z"/></svg>
                <h2 className="text-k-text text-center mt-2">Testing Done</h2>
              </div>
            </div>
            <div className="w-20 d-flex-cc flex-column">
              <div className='d-flex-cc flex-column'>
                <svg xmlns="http://www.w3.org/2000/svg" id="Line_stroke_cut_Ex" height="30" viewBox="0 0 512 512" width="30" data-name="Line stroke cut Ex"><g><path d="m409.01 480h-17.01v16h23.762a8 8 0 0 0 7.886-6.656l59.972-352-15.773-2.688z"/><path d="m489.389 56.122-96-16.928-2.778 15.757 88.167 15.549-8.205 48.159 15.772 2.688 9.541-56a8 8 0 0 0 -6.497-9.225z"/><path d="m368 16h-344a8 8 0 0 0 -8 8v328h16v-320h328v448h-328v-112h-16v120a8 8 0 0 0 8 8h344a8 8 0 0 0 8-8v-464a8 8 0 0 0 -8-8z"/><path d="m93.657 282.343-11.314 11.314 24 24a8 8 0 0 0 5.657 2.343c.1 0 .2 0 .307-.006a8 8 0 0 0 5.767-2.787l48-56-12.148-10.414-42.378 49.441z"/><path d="m56 316a28.032 28.032 0 0 0 28 28h40a28.032 28.032 0 0 0 28-28v-4h-16v4a12.013 12.013 0 0 1 -12 12h-40a12.013 12.013 0 0 1 -12-12v-40a12.013 12.013 0 0 1 12-12h36v-16h-36a28.032 28.032 0 0 0 -28 28z"/><path d="m93.657 402.343-11.314 11.314 24 24a8 8 0 0 0 5.657 2.343c.1 0 .2 0 .307-.006a8 8 0 0 0 5.767-2.787l48-56-12.148-10.414-42.378 49.441z"/><path d="m56 436a28.032 28.032 0 0 0 28 28h40a28.032 28.032 0 0 0 28-28v-4h-16v4a12.013 12.013 0 0 1 -12 12h-40a12.013 12.013 0 0 1 -12-12v-40a12.013 12.013 0 0 1 12-12h36v-16h-36a28.032 28.032 0 0 0 -28 28z"/><path d="m184 368h120v16h-120z"/><path d="m184 408h40v16h-40z"/><path d="m240 408h64v16h-64z"/><path d="m184 248h120v16h-120z"/><path d="m184 288h40v16h-40z"/><path d="m240 288h64v16h-64z"/><path d="m275.058 80.754-71.9-32.061a8 8 0 0 0 -6.516 0l-71.9 32.061a8 8 0 0 0 -4.644 8.551l5.993 38.051c.01.062.02.125.032.187a130.946 130.946 0 0 0 51.657 82.117l17.441 12.845a8 8 0 0 0 9.448.029l16.616-12.079a130.907 130.907 0 0 0 52.331-82.6c.011-.062.022-.124.031-.186l6.053-38.361a8 8 0 0 0 -4.642-8.554zm-17.2 44.329a114.976 114.976 0 0 1 -45.981 72.43l-11.877 8.637-12.727-9.373a115.012 115.012 0 0 1 -45.388-72l-5.025-31.9 63.04-28.118 63.042 28.111z"/><path d="m173.466 122.4-11.313 11.313 24 24a8 8 0 0 0 11.313 0l48-48-11.313-11.313-42.343 42.347z"/><path d="m56 48h48v16h-48z"/><path d="m56 80h32v16h-32z"/><path d="m296 48h16v16h-16z"/><path d="m328 48h16v16h-16z"/></g></svg>
                <h2 className="text-k-text text-center mt-2">Report Generated</h2>
              </div>
            </div>
            <div className="w-20 d-flex-cc flex-column">
              <div className='d-flex-cc flex-column'>
                <svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 0 48 48" width="30"><g id="report_19" data-name="report 19"><path d="m22 33h-1a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2z"/><path d="m37 33h-11a1 1 0 0 0 0 2h11a1 1 0 0 0 0-2z"/><path d="m22 37h-1a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2z"/><path d="m37 37h-11a1 1 0 0 0 0 2h11a1 1 0 0 0 0-2z"/><path d="m40 5h-29a6 6 0 0 0 -6 6v8a3 3 0 0 0 3 3h7v18a3 3 0 0 0 3 3h22a3 3 0 0 0 3-3v-32a3 3 0 0 0 -3-3zm-25 15h-7a1 1 0 0 1 -1-1v-8a4 4 0 0 1 8 0zm26 20a1 1 0 0 1 -1 1h-22a1 1 0 0 1 -1-1v-29a6 6 0 0 0 -1.54-4h24.54a1 1 0 0 1 1 1z"/><path d="m37 31a1 1 0 0 0 0-2h-11a1 1 0 0 0 0 2z"/><path d="m22 31a1 1 0 0 0 0-2h-1a1 1 0 0 0 0 2z"/><path d="m37 20.6a1 1 0 0 0 -1 1 2.41 2.41 0 0 1 -2.4 2.4h-9.17a2.42 2.42 0 0 1 -2.43-2.4 1 1 0 0 0 -2 0 4.43 4.43 0 0 0 4.43 4.4h9.17a4.42 4.42 0 0 0 4.4-4.4 1 1 0 0 0 -1-1z"/><path d="m28.21 21.47a1 1 0 0 0 1.61 0l2.89-3.89a1 1 0 0 0 -1.61-1.2l-1.1 1.47v-7.85a1 1 0 1 0 -2 0v7.89l-1.09-1.47a1 1 0 0 0 -1.6 1.2z"/></g></svg>
                <h2 className="text-k-text text-center mt-2">Report Available</h2>
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default MySampleTracing;