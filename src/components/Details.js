import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";

export default class Details extends Component {
  render() {
    return (
      <div>
        <ProductConsumer>
          {value => {
            const {
              id,
              company,
              img,
              info,
              price,
              title,
              inCart
            } = value.detailProduct;
            return (
              <div className="container py-3">
                <div className="row">
                  <div className="col-10 mx-auto text-center text-slanted text-blue my-3">
                    <h1>{title}</h1>
                  </div>
                </div>
                <div className="row">
                  <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                    <img src={img} className="img-fluid" alt="product" />
                  </div>
                  <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                    <h4>model: {title}</h4>
                    <h5 className="text-title text-capitalize text-muted mt-1 mb-1">
                      Made By: <span className="text-uppercase">{company}</span>
                    </h5>
                    <h4 className="text-blue">
                      <strong>Price: ${price}</strong>
                    </h4>
                    <h5 className="text-underlined">
                      <u>Description</u>
                    </h5>
                    <p className="text-muted">{info}</p>
                    <div>
                      <Link to="/">
                        <button className="btn btn-warning btn-sm">
                          Back to Products
                        </button>
                      </Link>
                      <button
                        className="btn btn-primary btn-sm ml-3"
                        onClick={() => {
                          value.addToCart(id);
                          value.openModal(id);
                        }}
                        disabled={inCart ? true : false}>
                        {inCart ? "In Cart" : "Add To Cart"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          }}
        </ProductConsumer>
      </div>
    );
  }
}
