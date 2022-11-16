import { React, useState, useEffect } from "react";
import styled from "styled-components";
import Web3 from "web3";
import liquidStaking from '../../../artifacts/contracts/LiquidStaking.sol/LiquidStaking.json';
import rewardToken from '../../../artifacts/contracts/RewardToken.sol/RewardToken.json';
import contractAddress from "../../../addresses/contractAddress.json";
import threeImg  from '../../../assets/images/threeGray.png';


import { useDispatch, useSelector } from "react-redux";
import { selectStakeAmount } from "../../../redux/reducers/stakeAmountReducer";
import { setAmount } from "../../../redux/reducers/stakeAmountReducer";
import { NumberImg } from "../../../styles/styledComponents/numberImg";
import { BoldText } from "../../../styles/styledComponents/boldText";
import { LightText } from "../../../styles/styledComponents/lightText";
import { Wrapper } from "../../../styles/styledComponents/wrapper";
import { Form } from "../../../styles/styledComponents/form";

const liquidStakingContractAddress = contractAddress.liquidStaking;
console.log("contract Addr: ", liquidStakingContractAddress)
const rewardTokenContractAddress = contractAddress.rewardToken;

//--------------------------style-----------------------------//
const SpecialFeatureWrapper = styled(Wrapper)`
`;
const SpecialFeatureForm = styled(Form)` 
display: grid;
grid-template-columns: 1fr 4fr;
grid-template-rows: repeat(8, 1fr);
`;
const SpecialFeatureText = styled(BoldText)` 
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 1;
`;
const HedgeAmountText = styled(LightText)` 
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 3;
    grid-row-end: 3;
`;
const ThreeImg = styled(NumberImg)` 
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 2;
    grid-row-end: 4;
`;
const ExpectedAprBox = styled.div` 
    background: #F1F1F1;
    border-radius: 5px;
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 5;
    grid-row-end: 8;
`;
const ExpectedAprText = styled.div` 
    padding: 3% 3% 3% 3%;
`

//--------------------------------------------------------------//

const SpecialFeature = () => {    
    const [ connected, setConnected ] = useState(false);
    const [ liquidStakingContract, setLiquidStakingContract ] = useState(null);
    const [ rewardTokenContract, setRewardTokenContract ] = useState(null);
    const [ account, setAccount ] = useState(null);
    const [ stakeAmount, setStakeAmount ] = useState(0);
    const [ totalSupply, setTotalSupply ] = useState(null);
    const [ contractOwner, setContractOwner ] = useState(null);
    const [ stakedAmount, setStakedAmount ] = useState();
    const [ currentRewardRate, setCurrentRewardRate ] = useState(0);

    const stakeAmountRedux = useSelector(selectStakeAmount);
    const dispatch = useDispatch();

    return(
        <div>
            <SpecialFeatureWrapper>
                <SpecialFeatureForm>
                    <ThreeImg src={threeImg}></ThreeImg>
                    <SpecialFeatureText>Special Feature</SpecialFeatureText>
                    <HedgeAmountText>Hedge Amount</HedgeAmountText>
                    <ExpectedAprBox>
                        <ExpectedAprText>Established ratio for hedge</ExpectedAprText>
                        <ExpectedAprText>Expected APR</ExpectedAprText>
                    </ExpectedAprBox>
                </SpecialFeatureForm>
            </SpecialFeatureWrapper>
        </div>
    );
}

export default SpecialFeature;