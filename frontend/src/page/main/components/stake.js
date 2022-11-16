import { React, useState, useEffect } from "react";
import styled from "styled-components";
import Web3 from "web3";
import liquidStaking from '../../../artifacts/contracts/LiquidStaking.sol/LiquidStaking.json';
import rewardToken from '../../../artifacts/contracts/RewardToken.sol/RewardToken.json';
import contractAddress from "../../../addresses/contractAddress.json";
import zeroImg  from '../../../assets/images/zero.png';
import oneImg from '../../../assets/images/one.png';

import { useDispatch, useSelector } from "react-redux";
import { selectStakeAmount } from "../../../redux/reducers/stakeAmountReducer";
import { setAmount } from "../../../redux/reducers/stakeAmountReducer";
import { BoldText } from "../../../styles/styledComponents/boldText";
import { NumberImg } from "../../../styles/styledComponents/numberImg";
import { BasicInput } from "../../../styles/styledComponents/basicInput";
import { Wrapper } from "../../../styles/styledComponents/wrapper";
import { Form } from "../../../styles/styledComponents/form";

const liquidStakingContractAddress = contractAddress.liquidStaking;
console.log("contract Addr: ", liquidStakingContractAddress)
const rewardTokenContractAddress = contractAddress.rewardToken;

//--------------------------style-----------------------------//
const StakeWrapper = styled(Wrapper)`

`;
const StakeForm = styled(Form)` 
display: grid;
grid-template-columns: 1fr 4fr;
grid-template-rows: 1fr 2fr 1fr 1fr 2fr
`;
const SelectTokenText = styled(BoldText)`
    grid-column-start: 2;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 1;
`;
const StakeAmountText = styled(BoldText)`
    grid-column-start: 2;
    grid-column-end: 2;
    grid-row-start: 4;
    grid-row-end: 4;
`;
const TokenToStake = styled(BasicInput)`
 grid-column-start: 2;
    grid-column-end: 2;
    grid-row-start: 2;
    grid-row-end: 3;
`;
const AmountToStake = styled(BasicInput)`
 grid-column-start: 2;
    grid-column-end: 2;
    grid-row-start: 5;
    grid-row-end: 5;
`;
const ZeroImage = styled(NumberImg)` 
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 2;
    grid-row-end: 2;
`;
const OneImage = styled(NumberImg)` 
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 5;
    grid-row-end: 5;
`;
//--------------------------------------------------------------//

let web3; 

function Stake() {    
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

    function load() {
        web3 = new Web3(window.ethereum);
        const liquidStakingContract = new web3.eth.Contract(liquidStaking.abi, liquidStakingContractAddress);
        const rewardTokenContract = new web3.eth.Contract(rewardToken.abi, rewardTokenContractAddress);
        console.log("liquid staking: ", liquidStakingContract);
        console.log("reETH: ", rewardTokenContract);
    
        //콜백 함수
        if (liquidStakingContract == null ||  rewardTokenContract == null) {
            console.log("liquid staking contract Still null");
        } 
        else {
            setLiquidStakingContract(liquidStakingContract);
            setRewardTokenContract(rewardTokenContract);
        }
    }

    const handleStakeAmountChange = event => {
        setStakeAmount(event.target.value);
        console.log(dispatch(setAmount(event.target.value)));
        console.log("hhe")
    }

    return(
        <div>
            <StakeWrapper>
                <StakeForm>
                    <SelectTokenText>Select Token to stake </SelectTokenText><br />
                    <ZeroImage src={zeroImg}></ZeroImage>
                    <TokenToStake></TokenToStake><br />
                    <StakeAmountText>Stake Amount</StakeAmountText><br />
                    <OneImage src={oneImg}></OneImage>
                    <AmountToStake type="text" value={stakeAmount} onChange={handleStakeAmountChange}></AmountToStake>
                </StakeForm>
            </StakeWrapper>
        </div>
    );
}

export default Stake;