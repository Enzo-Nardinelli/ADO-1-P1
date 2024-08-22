import Produtos from "./Produtos";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    justified-content: center;
`

export default Container;

//Não foi possível fazer uso desse prop, não achei soluções para o erro: Cannot read properties of null (reading 'useContext')
//TypeError: Cannot read properties of null (reading 'useContext')