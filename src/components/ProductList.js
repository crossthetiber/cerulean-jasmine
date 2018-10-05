import React from 'react';
import './ProductList.css';
import Product from './Product';

class ProductList extends React.Component {
  render() {
    let products = [
      {code:"P01", name: "Traditional Merlot", description: "A bottle of middle weight wine, lower in tannins (smoother), with a more red-fruited flavor profile."},
      {code:"P02", name: "Classic Chianti", description: "A medium-bodied wine characterized by a marvelous freshness with a lingering, fruity finish"},
      {code:"P03", name: "Chardonnay", description: "A dry full bodied white wine with spicy, bourbony notes in an elegent bottle."},
      {code:"P04", name: "Brunello di Montalcino", description: "A bottle of red wine with exceptionally bold flavors, high tanin, and high acidity."}
    ];
    let productComponents = [];

    for (let product of products) {
      productComponents.push(<Product item={product}/>);
    }

    return <ul className="wine-list">
      {productComponents}
    </ul>;
  }
}

export default ProductList;
