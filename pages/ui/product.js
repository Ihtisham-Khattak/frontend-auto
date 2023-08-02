import React from "react";
import { Col, Card, CardTitle, CardBody, Table, Button } from "reactstrap";

const product = () => {
  return (
    <Col lg="12">
      <Card>
        <CardTitle
          tag="h6"
          className="border-bottom p-3 mb-0 d-inline-flex align-items-center justify-content-between"
        >
          <div>
            <i className="bi bi-card-text me-2"> </i>
            Products
          </div>
          <Button className="" href="/product/newProduct">Add Product</Button>
        </CardTitle>
        <CardBody className="">
          <Table bordered>
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </Col>
  );
};

export default product;
