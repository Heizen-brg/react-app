import React, { Component } from 'react';
import Product from './Product';
import Title from './Title';
import { storeProducts } from '../data';
import { ProductConsumer } from '../context';
import styled from 'styled-components';

export class ProductList extends Component {
  state = {
    products: storeProducts
  };
  
  render() {
    return (
      <React.Fragment>
        <ProductListWrapper className="py-5">
          <div className="container">
            <Title name="our " title="product" />
            <div className="row">
              <ProductConsumer>
                {value => {
                  return value.products.map(product => {
                    return <Product
                      key={product.id}
                      product={product}
                    />
                  })
                }
                }
              </ProductConsumer>
            </div>
          </div>
        </ProductListWrapper>
      </React.Fragment>
    );
  }
}

export default ProductList;

const ProductListWrapper = styled.div`

`