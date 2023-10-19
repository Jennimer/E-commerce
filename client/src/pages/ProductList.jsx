import React from 'react'
import { styled } from 'styled-components'
import Navbar from '../components/Navbar';
import Announcements from '../components/Announcement';
import Newsletter from '../components/Newsletter';
import Products from '../components/Products';
import Footer from '../components/Footer';
import { useLocation } from "react-router";
import { useState } from "react";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
  Font-weight: 300;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  @media only screen and (max-width: 400px) {
    width: "0px 20px";
     display: "flex";
    flex-direction: "column";
    
  }
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  @media only screen and (max-width: 400px) {
    margin-left: 0px;
    
  }
  
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  @media only screen and (max-width: 400px) {
    margin-left: 10px 0px;
    
  }`;
const Option = styled.option``;



export const ProductList = () =>
{
  const location = useLocation();
  const category = location.pathname.split('/')[2];
  const [filters, setFilters] = useState({});



  const handleFilters = (e) =>
  {
    const value = e.target.value;
    setFilters(
      {
        ...filters,
        [e.target.name]: value,
      });
  };
  console.log(filters);

  return (
    <Container>
      <Navbar />
      <Announcements />
      <Title>{category}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter by color</FilterText>
          <Select name="color" onChange={handleFilters}>
            <Option disabled>Choose Color</Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
            <Option>Multi</Option>
          </Select>
        </Filter>

      </FilterContainer>
      <Products category={category} filters={filters} />
      <Newsletter />
      <Footer />
    </Container>
  );
};
