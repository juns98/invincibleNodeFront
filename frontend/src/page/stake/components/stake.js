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


import Select from 'react-select';
import Web3 from "web3";
import { Button } from "../../../styles/styledComponents/button";

const StakeForm = styled(Form)` 

`;
const StakingWrapper = styled(Wrapper)`
margin-top: 10vh;
`;
const SelectTokenText = styled(BoldText)`
    font-size: 2vh;
`;
const StakeAmountWrapper = styled.div` 
    display: flex;
    justify-content: space-between;
    margin-top: 5%;
`;
const StakeAmountText = styled(BoldText)`
   font-size: 2vh;
`;
const BalanceText = styled(LightText)` 
   font-size: 0.5vh;
`;
const TokenToStake = styled(Select)`
    
`;
const AmountToStake = styled(BasicInput)`
    width: 100%;
    margin-top: 5%;
`;
const StakeWrapper = styled.div` 
    display: flex;
    justify-content: space-between;
    margin-bottom: 3%;
`;
const YouWillStake = styled(LightText)` 

`;
const EvmosAmount = styled(LightText)` 

`;
const GetWrapper = styled.div` 
    display: flex;
    justify-content: space-between;
    margin-bottom: 5%;
`;
const YouWillGet = styled(LightText)` 

`;
const InEvmosAmount = styled(LightText)` 

`;
const ZeroImage = styled(NumberImg)` 
 
`;
const OneImage = styled(NumberImg)` 
    
`;
const StakeButton = styled(Button)` 
    width: 90%;
    margin: auto;
`;
const options = [
    { value: 'ethereum', label: 'Ethereum' },
    { value: 'atom', label: 'Atom' },
];

const Stake = ({openModal}) => {
    const [ pressStake, setPressStake ] = useState(false);
    const [ selectedOption, setSelectedOption] = useState(null);
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

    const liquidStake = () => {
        openModal();
    }

    useEffect(()=> {
        getAccount();
        console.log("Token type: ", selectedOption);
    }, []);

    const Wrapper = ({value}) => {
        return (
            <>
                {/* <ZeroImage src={zeroImg}></ZeroImage>
                <OneImage src={oneImg}></OneImage> */}
                <StakingWrapper>
                    <StakeForm>
                        <SelectTokenText>Select Token to stake </SelectTokenText><br />
                        {/* <TokenToStake   
                            defaultValue={options[0]}
                            options={options}
                            onChange={setSelectedOption}
                        ></TokenToStake><br /> */}
                        { !pressStake ? <TokenToStake
                             defaultValue={options[0]}
                             options={options}
                             onChange={setSelectedOption}
                        ></TokenToStake> : <div></div>}
                        <StakeAmountWrapper>
                            <StakeAmountText>Stake Amount</StakeAmountText><br />
                            <BalanceText>Available: {value} ETH</BalanceText>
                        </StakeAmountWrapper>
                        <AmountToStake type="text" value={stakeAmount} onChange={handleStakeAmountChange}></AmountToStake>
                        <StakeWrapper>
                            <YouWillStake>
                                You will stake
                            </YouWillStake>
                            <EvmosAmount>
                                Evmos
                            </EvmosAmount>
                        </StakeWrapper>
                        <GetWrapper>
                            <YouWillGet>
                                You will get
                            </YouWillGet>
                            <InEvmosAmount>
                                inEvmos
                            </InEvmosAmount>
                        </GetWrapper>
                        <StakeButton onClick={() => {liquidStake(); setPressStake(true)}}>Liquid Stake</StakeButton>
                    </StakeForm>
                </StakingWrapper>
            </>
        )
    }

    if (ethBalance == null ) {
        return(
            <div>
                <Wrapper value={"loading"}></Wrapper>
            </div>
        )
    }

    return(
        <Wrapper value={ethBalance/10**18}></Wrapper>
    );
}

export default Stake;