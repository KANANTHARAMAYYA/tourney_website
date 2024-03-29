import styled from "styled-components";

export const Cusdiv = styled.div`
    height : ${(props)=>props.height};
    width : ${(props)=>props.width};
    margin-top : ${(props)=>props.mtop}%;
    margin-left : ${(props)=>props.mleft}%;
    display: flex;
    flex-direction: column;
    padding : 2px;
    justify-content: space-around;
    align-items: center;
    position: relative;
    box-shadow:
    -7px -7px 20px 0px #fff9,
    -4px -4px 5px 0px #fff9,
    7px 7px 20px 0px #0002,
    4px 4px 5px 0px #0001,
    inset 0px 0px 0px 0px #fff9,
    inset 0px 0px 0px 0px #0001,
    inset 0px 0px 0px 0px #fff9,        
    inset 0px 0px 0px 0px #0001;
    transition:box-shadow 0.6s cubic-bezier(.79,.21,.06,.81);
    border-radius: 10px;
`;