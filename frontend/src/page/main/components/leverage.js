import { React, useState, useEffect } from "react";
import styled from "styled-components";
import Web3 from "web3";
import liquidStaking from '../../../artifacts/contracts/LiquidStaking.sol/LiquidStaking.json';
import rewardToken from '../../../artifacts/contracts/RewardToken.sol/RewardToken.json';
import contractAddress from "../../../addresses/contractAddress.json";
import twoImg  from '../../../assets/images/twoGray.png';
import leverageImg from '../../../assets/images/leverage.png'


import { useDispatch, useSelector } from "react-redux";
import { selectStakeAmount } from "../../../redux/reducers/stakeAmountReducer";
import { setAmount } from "../../../redux/reducers/stakeAmountReducer";
import { LightText } from "../../../styles/styledComponents/lightText";
import { NumberImg } from "../../../styles/styledComponents/numberImg";
import { BoldText } from "../../../styles/styledComponents/boldText";
import { Wrapper } from "../../../styles/styledComponents/wrapper";
import { Form } from "../../../styles/styledComponents/form";

const liquidStakingContractAddress = contractAddress.liquidStaking;
console.log("contract Addr: ", liquidStakingContractAddress)
const rewardTokenContractAddress = contractAddress.rewardToken;

//--------------------------style-----------------------------//
const LeverageWrapper = styled(Wrapper)`

`;
const LeverageForm = styled(Form)` 
    display: grid;
    grid-template-columns: 1fr 4fr;
    grid-template-rows: repeat(6, 1fr);;
`;
const LeverageText = styled(BoldText)`
    grid-column-start: 2;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 1;
`;
const TwoImage = styled(NumberImg)` 
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 3;
    grid-row-end: 4;
`;
const LeverageLine = styled.img`
    grid-column-start: 2;
    grid-column-end: 2;
    grid-row-start: 2;
    grid-row-end: 3;
    color: blue;
`;
const StakeText = styled(LightText)`
    grid-column-start: 2;
    grid-column-end: 2;
    grid-row-start: 3;
    grid-row-end: 4;
`;
const GetText = styled(LightText)`
    grid-column-start: 2;
    grid-column-end: 2;
    grid-row-start: 4;
    grid-row-end: 5;
`;
const ExpectedAprBox = styled.div` 
    background: #F1F1F1;
    border-radius: 5px;
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 5;
    grid-row-end: 6;
`;
const ExpectedAprText = styled.div` 
    padding: 5% 5% 5% 5%;
`;

//--------------------------------------------------------------//


const Leverage = () => {    
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

    console.log("stake reducer: ", stakeAmountRedux);
                              

    const handleStakeAmountChange = event => {
        setStakeAmount(event.target.value);
        console.log(dispatch(setAmount(event.target.value)));
        console.log("hhe")
    }
    return(
        <div>
            <LeverageWrapper>
                <LeverageForm>
                    <TwoImage src={twoImg}></TwoImage>
                    <LeverageText>Leverage</LeverageText><br />
                    <LeverageLine src={leverageImg}></LeverageLine>
                    <StakeText>You will Stake</StakeText>
                    <GetText>You will get</GetText>
                    <ExpectedAprBox>
                        <ExpectedAprText>Expected APR ........................... %</ExpectedAprText>
                    </ExpectedAprBox>
                </LeverageForm>
            </LeverageWrapper>
        </div>
    );
}

export default Leverage;