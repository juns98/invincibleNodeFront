import { React, useState, useEffect } from "react";
import styled from "styled-components";
import zeroImg  from '../../../assets/images/zero.png';
import oneImg from '../../../assets/images/one.png';
import { useDispatch, useSelector } from "react-redux";
import { selectStakeAmount } from "../../../redux/reducers/stakeAmountReducer";
import { setAmount } from "../../../redux/reducers/stakeAmountReducer";
import { BoldText } from "../../../styles/styledComponents/boldText";
import { LightText } from "../../../styles/styledComponents/lightText";
import { NumberImg } from "../../../styles/styledComponents/numberImg";
import { BasicInput } from "../../../styles/styledComponents/basicInput";
import { Wrapper } from "../../../styles/styledComponents/wrapper";
import { Form } from "../../../styles/styledComponents/form";

import Web3 from "web3";

const StakeForm = styled(Form)` 
display: grid;
grid-template-columns: 1fr 4fr;
grid-template-rows: 1fr 2fr 1fr 1fr 2fr;
`;
const StakeWrapper = styled(Wrapper)`
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
const BalanceText = styled(LightText)` 
    grid-column-start: 2;
    grid-column-end: 2;
    grid-row-start: 4;
    grid-row-end: 4;
    text-align: right;
    font-size: 10px;
    margin-top: 10px;
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
const Stake = () => {
    const [ stakeAmount, setStakeAmount ] = useState(0);
    const [ ethBalance, setEthBalance ] = useState(null);

    const stakeAmountRedux = useSelector(selectStakeAmount);
    const dispatch = useDispatch();

    const web3 = new Web3(window.ethereum);
    console.log("stake reducer: ", stakeAmountRedux);
    const handleStakeAmountChange = event => {
        setStakeAmount(event.target.value);
        console.log(dispatch(setAmount(event.target.value)));
    }

    const getEthBalance = async (account) => {
        try {
            console.log("Account for balance: ", account);
            const getEthBalance = await web3.eth.getBalance(account);
            setEthBalance(getEthBalance);
            console.log("eth balance: ", getEthBalance)
        } catch(error) {
            return error;
        } 
    }
    const getAccount = async() => {
        try {
            const getAccount = await web3.eth.getAccounts();
            getEthBalance(getAccount[0]);
            console.log('account :', getAccount[0]);
        } catch(error) {
            return error;
        }
    }

    useEffect(()=> {
        getAccount();
    }, []);

    if (ethBalance == null ) {
        return(
            <div>
                <StakeWrapper>
                    <StakeForm>
                        <SelectTokenText>Select Token to stake </SelectTokenText><br />
                        <ZeroImage src={zeroImg}></ZeroImage>
                        <TokenToStake></TokenToStake><br />
                        <StakeAmountText>Stake Amount</StakeAmountText><br />
                        <OneImage src={oneImg}></OneImage>
                        <BalanceText>Available: (loading) ETH</BalanceText>
                        <AmountToStake type="text" value={stakeAmount} onChange={handleStakeAmountChange}></AmountToStake>
                    </StakeForm>
                </StakeWrapper>
            </div>
        )
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
                    <BalanceText>Available: {ethBalance/10**18} ETH</BalanceText>
                    <AmountToStake type="text" value={stakeAmount} onChange={handleStakeAmountChange}></AmountToStake>
                </StakeForm>
            </StakeWrapper>
        </div>
    );
}

export default Stake;