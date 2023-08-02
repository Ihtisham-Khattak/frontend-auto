import React from "react";
import {
  Row,
  Card,
  CardBody,
  CardTitle,
  Col,
  Label,
  Input,
  FormText,
  Button,
  Form,
  FormGroup,
} from "reactstrap";

const newProduct = () => {
  return (
    <Row>
      <Col>
        <Card>
          <CardTitle tag="h6" className="mt-3 p-3 font-bold white">
            Add New Product
          </CardTitle>
          <CardBody>
            <Form>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input
                  id="exampleEmail"
                  name="email"
                  placeholder="with a placeholder"
                  type="email"
                />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input
                  id="examplePassword"
                  name="password"
                  placeholder="password placeholder"
                  type="password"
                />
              </FormGroup>

              <FormGroup>
                <Label for="exampleText">Text Area</Label>
                <Input id="exampleText" name="text" type="textarea" />
              </FormGroup>

              <Button>Submit</Button>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default newProduct;
