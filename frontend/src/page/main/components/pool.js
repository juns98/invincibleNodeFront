import React from "react";
import styled from "styled-components";
import { BoldText } from "../../../styles/styledComponents/boldText";
import { Wrapper } from "../../../styles/styledComponents/wrapper";


const PoolWrapper = styled.div` 
    text-align: center;
    margin-top: 100px;
    width: 70%;
    margin:auto ;
`;
const HeadText = styled(BoldText)` 
    text-align: left;
`;
const LeftPoolBox = styled.div`    
    background: #FFFFFF;
    border: 1px solid #BABABA;
    border-radius: 5px;
`;
const RightPoolBox = styled.div` 
    background: #FFFFFF;
    border: 1px solid #BABABA;
    border-radius: 5px;
`;


const Pool = () => {
    return (
        <>
            <PoolWrapper>
                <HeadText>Pool Catalyst</HeadText>
                <LeftPoolBox></LeftPoolBox>
                <RightPoolBox></RightPoolBox>
            </PoolWrapper>
        </>
    )   
}

export default Pool;