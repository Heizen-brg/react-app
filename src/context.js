import React, { Component } from 'react';
import { storeProducts, detailProduct } from './data';
const ProductContext = React.createContext()

class ProductProvider extends Component {
  state = {
    products: [],
    detail: detailProduct
  }
  componentDidMount() {
    this.setProducts();
  }
  
  setProducts = () => {
    let products = [];
    storeProducts.forEach(item => {
      const singleItem = { ...item };
      products = [...products, singleItem];
    });
    this.setState(() => {
      return {products}
    })
  }
  getItem = (id) => {
    const phones = this.state.products.find(item => item.id === id);
    return phones
  }
  handleDetail = (id) => {
    const product = this.getItem(id)
    this.setState(()=>{
      return {detail : product}
    })
  }
  addToCart = (id) => {
    console.log(`addTo Cart ${id}`);

  }



  render() {
    return (
      <ProductContext.Provider value={{
        ...this.state,
        handleDetail: this.handleDetail,
        addToCart: this.addToCart,
      }}>
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;
export { ProductProvider, ProductConsumer };
