import React from 'react'

const Faq = () => {
  return (
    <div className="questions">
          <h1>Frequently asked Questions</h1>
          <div className="questions-content">
            <div className="accordion accordion-flush border" id="accordionFlushExample">
            <div className="accordion-item"> 
              <h2 className="accordion-header" id="flush-headingOne">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                I have an upcoming interview. Can I take long-term mentorship package?
                </button>
              </h2>
              <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, illum earum esse officiis vitae quidem repudiandae vel provident porro perspiciatis expedita recusandae sed? Dignissimos cumque repudiandae accusantium earum in voluptatibus.</div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                  Who are Preplaced mentors?
                </button>
              </h2>
              <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam ducimus ad fugit recusandae qui magnam nisi adipisci aspernatur quod possimus, perferendis molestias minima! Culpa odit provident eveniet debitis mollitia repellendus ipsum sit itaque commodi in velit assumenda excepturi, qui fuga illum incidunt, ipsa laboriosam tenetur. Temporibus ab suscipit et eaque.</div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                  What are the advantages of interview prepration through mentorship?
                </button>
              </h2>
              <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, eligendi? Aperiam vel maiores, rerum earum quos exercitationem sed voluptates sunt?</div>
              </div>
            </div>
          </div>
          </div>
          
        </div>
  )
}

export default Faq