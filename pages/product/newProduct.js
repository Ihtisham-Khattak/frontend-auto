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
import confirmation from "../../src/components/confirmation";

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
                  name={productName}
                  placeholder="Product name"
                  type="text"
                  onChange={(e) => setProductName(e.target.value)}
                />
              </FormGroup>

              <FormGroup>
                <Label for="exampleText">Description</Label>
                <Input
                  id="exampleText"
                  name={productDescription}
                  type="textarea"
                  placeholder="Product Description"
                  onChange={(e) => setProductDescription(e.target.value)}
                />
              </FormGroup>

              <FormGroup>
                <Label for="examplePassword">Price</Label>
                <Input
                  name={productPrice}
                  placeholder="Product Price"
                  type="number"
                  min="0"
                  onChange={(e) => setProductPrice(e.target.value)}
                />
              </FormGroup>

              <Button type="button">Submit</Button>
              <confirmation
                show={showModal}
                onClose={handleCloseModal}
                onConfirm={handleConfirmAction}
              />
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default newProduct;
