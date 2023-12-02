import React from 'react'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import  {FaStar} from 'react-icons/fa';
import { useState } from 'react';



function Images({src}) {
    const [curRate,setCurRate]=useState(null)
    const [hover,setHover]=useState(null);
    return (
        <Container>
          <Row>
            <Col xs={6} md={4}>
              <Image src={src} thumbnail alt="should add content"/>
              <div className="facepile">
  <div className="facepile-item">
  <Image src={src}  />
    <span className="badge">1</span>
  </div>
  <div className="facepile-item">
  <Image src={src} />
    <span className="badge">2</span>
  </div>
  <div className="facepile-item">
  <Image src={src} alt="User 3" />
    <span className="badge">3</span>
  </div>
</div>
              {[...Array(5)].map((star,index)=>{ const currentRate=index+1;
                return (
                <label>
                <input 
                key={index}
                type="radio"
                name="rating"
                value={currentRate}
                onClick={()=>setCurRate(currentRate)}
                />
                <FaStar 
                color={currentRate<=(hover || curRate)?"#ffc107":"#e4e5e9"}
                onMouseEnter={()=>setHover(currentRate)}
                onMouseLeave={()=>setHover(null)}
                
                size={20}/>
              </label>
              );})}
             
            </Col>

          </Row>
        </Container>
      );
}

export default Images
