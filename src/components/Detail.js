import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../context';
export class Detail extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const { id, title, img, price, inCart, company, info } = value.detail;
          return (
            <div className="container py-5">
              {/* title */}
              <div className="row">
                <div className="col-10 mx-auto text-center textslanted my-5">
                  <h1>{title}</h1>
                </div>
              </div>
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3 ">
                  <img src={img} className="img-fluid" />
                </div>
                <div className="col-10 mx-auto col-md-6 my-3 ">
                  <h2>Model: {title}</h2>
                  <h4 className="text-muted mt-3 mb-2 text-title">Made by : {company}</h4>
                  <h4> <strong>Price: ${price}</strong> </h4>
                  <h3 className="text-capitalize mt-3 mb-0">Info:</h3>
                  <p className="text-muted lead">{info}</p>
                  <div className="col-10 mx-auto col-md-10 my-3 ">
                    <Link to="/">
                      <button type="button"
                        className="btn btn-outline-primary btn-lg px-5 "
                      >
                        Back</button>
                    </Link>
                    <button type="button"
                      className="btn btn-outline-warning btn-lg mx-2 "
                      disabled={inCart ? true : false}
                      onClick={() => {
                        value.addToCart(id)
                      }}
                    >
                      {inCart ? "In Cart" : "Add to Cart"}</button>
                  </div>
                </div>
              </div>
            </div>
          )

        }
        }
      </ProductConsumer>
    );
  }
}

export default Detail;
