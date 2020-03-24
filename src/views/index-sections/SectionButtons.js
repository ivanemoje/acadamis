/*!

=========================================================
* Paper Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// react plugin used to create switch buttons
import Switch from "react-bootstrap-switch";
// plugin that creates slider
import Slider from "nouislider";

// reactstrap components
import {
  Button,
  Label,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

function SectionButtons() {
  React.useEffect(() => {
    if (
      !document
        .getElementById("sliderRegular")
        .classList.contains("noUi-target")
    ) {
      Slider.create(document.getElementById("sliderRegular"), {
        start: [37.5],
        connect: [true, false],
        step: 0.5,
        range: { min: 0, max: 100 }
      });
    }
    if (
      !document.getElementById("sliderDouble").classList.contains("noUi-target")
    ) {
      Slider.create(document.getElementById("sliderDouble"), {
        start: [20, 80],
        connect: [false, true, false],
        step: 1,
        range: { min: 0, max: 100 }
      });
    }
  });
  return (
    <>
      <div className="section section-buttons">
        <Container>
          <div className="title">
            
          </div>
          <div id="buttons">
            <div className="title">
              <h3>
                Buttons <br />
                <small>Pick your style</small>
              </h3>
            </div>
            <Row>
          
            </Row>
            <div className="title">
              <h3>
                <small>Pick your size</small>
              </h3>
            </div>
            <Row>
             
            </Row>
            <br />
            
          </div>
          <div className="title">
            <h3>Links</h3>
          </div>
          <Row>
            <Col md="8">
              
             
            </Col>
          </Row>
      
    
          <br />
          <Row>
           
            <Col lg="3" sm="6"> </Col>
            <Col lg="3" sm="6"> </Col>
            <Col lg="3" sm="6">
              <div className="title">
                <h3>Sliders</h3>
              </div>
              <div className="slider" id="sliderRegular" />
              <br />
              <div className="slider slider-primary" id="sliderDouble" />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SectionButtons;
