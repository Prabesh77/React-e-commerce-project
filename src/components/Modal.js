import React, { Component } from "react";
import styled from "styled-components";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";

export class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const { modalOpen, closeModal } = value;
          const { img, title, price } = value.modalProduct;

          if (!modalOpen) {
            return null;
          } else {
            return (
              <ModalContainer>
                <div className="container">
                  <div className="row">
                    <div
                      id="modal"
                      className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-4">
                      <h5>Modal</h5>
                      <img src={img} alt="img" className="img-fluid" />
                      <h5>{title}</h5>
                      <h5 className="text-muted">Price: ${price}</h5>
                      <Link to="/">
                        <button
                          className="btn btn-primary btn-sm"
                          onClick={() => closeModal()}>
                          Continue Shopping
                        </button>
                      </Link>
                      <Link to="/cart">
                        <button
                          className="btn btn-warning btn-sm mt-3 btn-block"
                          onClick={() => closeModal()}>
                          Go to Cart
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </ModalContainer>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;

  #modal {
    background: var(--mainWhite);
  }
`;

export default Modal;
