import styled from 'styled-components';
import React from 'react'


const SearchDiv = styled.div`
display: inline-flex;
padding-left: 5px;

`;

const SearchForm = styled.form `

`;

const SearchInput = styled.input`
background-color: ${({ theme }) => theme.input};
border-radius:  20px;
padding-left: 10px;
border: none;
color: ${({ theme }) => theme.text};

`;


export default function SearchBar() {
    return (
    <SearchDiv>
        <SearchForm>
            <SearchInput type="Search" placeholder="Search..." name="search">
            </SearchInput>
        </SearchForm>
    </SearchDiv>
)}
