import styled from "styled-components";

const Texto = styled.p`
    color: ${props => props.corDoTexto || 'black'};
    font-size: ${props => props.tamanhoDaFonte || '12px'};
`
export default Texto;

//Não foi possível fazer uso desse prop, não achei soluções para o erro: Cannot read properties of null (reading 'useContext')
//TypeError: Cannot read properties of null (reading 'useContext')