import React, { useState } from "react";
import {
  Row,
  Card,
  CardBody,
  CardTitle,
  Col,
  Label,
  Input,
  Button,
  Form,
  FormGroup,
} from "reactstrap";

const newProduct = () => {
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");
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
                <Label for="exampleEmail">Name</Label>
                <Input
                  id="exampleEmail"
                  name="productName"
                  placeholder="Product name"
                  type="text"
                  onChange={setProductName((e) => e.target.value)}
                />
              </FormGroup>

              <FormGroup>
                <Label for="exampleText">Description</Label>
                <Input
                  id="exampleText"
                  name="productDescription"
                  type="textarea"
                  placeholder="Product Description"
                  onChange={setProductDescription((e) =>
                    setProductDescription(e.target.value)
                  )}
                />
              </FormGroup>

              <FormGroup>
                <Label for="examplePassword">Price</Label>
                <Input
                  id="examplePassword"
                  name="number"
                  placeholder="Product Price"
                  type="number"
                  min="0"
                />
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
