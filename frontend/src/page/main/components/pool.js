import React from "react";
import styled from "styled-components";
import { BoldText } from "../../../styles/styledComponents/boldText";
import { Wrapper } from "../../../styles/styledComponents/wrapper";
import poolImg1 from "../../../assets/images/poolImg.png";
import { Button } from "../../../styles/styledComponents/button";


const PoolWrapper = styled.div` 
    text-align: center;
    margin-top: 100px;
    width: 50%;
    margin:auto;
    display: flex;
    justify-content: space-between;
`;
const HeadText = styled(BoldText)` 
    text-align: left;
    margin-left: 25%;
    margin-top: 100px;
`;
const PoolBox = styled.div`    
    background: #FFFFFF;
    border: 1px solid #BABABA;
    border-radius: 5px;
    width: 40%;
    height: 250px;
    margin-bottom: 50px;
`;
const PoolImg = styled.img`
    width: 20%;
    margin-top: 5%;
`;
const TokenName = styled.div` 
    text-align: center;
    margin-bottom: 50px;
`;
const TokenAmount = styled.div` 
    text-align: left;
    margin-top: 10px;
    margin-left: 5%;
`;
const LiquidProvideButton = styled(Button)` 
margin-bottom: 100px;
`;
const LiquidProvideText = styled.div` 
    color: #146DD8;
    font-size: 5px;
    text-align: center;
`;

const Pool = () => {
    return (
        <>
            <HeadText>Pool Catalyst</HeadText>
            <PoolWrapper>
                <PoolBox>
                    <PoolImg src={poolImg1}></PoolImg>
                    <TokenName>ATOM</TokenName>
                    <TokenAmount>Total Amount</TokenAmount>
                    <TokenAmount>My Amount</TokenAmount>
                </PoolBox>
                <PoolBox>
                    <PoolImg src={poolImg1}></PoolImg>
                    <TokenName>inATOM</TokenName>
                    <TokenAmount>Total Amount</TokenAmount>
                    <TokenAmount>My Amount</TokenAmount>
                </PoolBox>
            </PoolWrapper>
            <LiquidProvideText>Put your assets to work</LiquidProvideText>
            <LiquidProvideButton>Liquid Provide</LiquidProvideButton>
        </>
    )   
}

export default Pool;