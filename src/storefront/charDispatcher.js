import React, { useEffect } from "react";


import { useDispatch, useSelector } from "react-redux";

import * as actions from "../store/characterActions.js";


import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';





export default function CharacterDispatcher() {

  const dispatch = useDispatch();

  const charState = useSelector((state) => state.characterCombiner);
  console.log('why lord why', charState)


  // function handleClick(item) {
  //   dispatch(actions.getCharacters(item));
  // }

  useEffect(() => {
    dispatch(actions.getCharacters());
  }, []);

  // const classes = useStyles();

  return (
    <>
      <h2>My Heroes and Quirks </h2>
      <ul>
        <Container>

          <Row md={4}>
            {charState.map((item) =>

              <Col style={{Width: '18px'}} md={4}>



                <Card key={item.id} style={{ width: '18rm' }}>

                  <Card.Img variant="top" src="holder.js/50px180" src={item.images[0]} />


                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                      </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>

                </Card>

              </Col>
            )}
          </Row>
        </Container>
      </ul>
    </>
  )
}
