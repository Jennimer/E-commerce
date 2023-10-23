import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components';

import Product from './Product';
import axios from "axios";

const Container = styled.div`
padding: 20px;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
`

const Products = ({ category, filters, sort }) =>
{
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() =>
  {
    const getProducts = async () =>
    {
      try
      {
        const res = await axios.get(

          category
            ? `${process.env.REACT_APP_BACK_URL}/api/products?category=${category}`
            : `${process.env.REACT_APP_BACK_URL}/api/products`);
        setProducts(res.data);
        console.log(res);

      } catch (err) { }
    };
    getProducts();
  }, [category]);

  useEffect(() =>
  {
    category &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, category, filters]);




  return (
    <Container>
      {category
        ? filteredProducts.map((item) => <Product item={item} key={item._id} />)
        : products
          .slice(0, 8)
          .map((item) => <Product item={item} key={item._id} />)}
    </Container>
  );
};
export default Products;