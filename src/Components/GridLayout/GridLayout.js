import styled from "styled-components";

const GridLayout = styled.div`
    display: grid;
    grid-template-areas:
      'Header Header Header Header'
      'Sidebar Content Content Content'
      'Footer Footer Footer Footer';
      grid-template-rows: auto auto auto;				
      grid-template-columns: auto auto auto auto;
    background-color: #ddd;
    `;

export default GridLayout; 