import { React, useState, useEffect } from "react";
import styled from "styled-components";
import Web3 from "web3";
import liquidStaking from '../../../artifacts/contracts/LiquidStaking.sol/LiquidStaking.json';
import rewardToken from '../../../artifacts/contracts/RewardToken.sol/RewardToken.json';
import contractAddress from "../../../addresses/contractAddress.json";

const liquidStakingContractAddress = contractAddress.liquidStaking;
console.log("contract Addr: ", liquidStakingContractAddress)
const rewardTokenContractAddress = contractAddress.rewardToken;

//--------------------------style-----------------------------//
const StakeWrapper = styled.div`
text-align: center;
margin-top: 232px;
font-family: 'Pretendard';
font-style: normal;
background: #FFFFFF;
box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
border-radius: 50px;
width: 80%;
height: 560px;
margin:auto ;
`;
const StakeForm = styled.div` 
text-align: left;
width:70%;
margin: auto ;
padding-top: 100px;
`;
const InputText = styled.div`
font-weight: 500;
font-size: 23px;
line-height: 27px;
`;
const AmountToStake = styled.input`
width: 100%;
background: #F5F5F5;
border: 1px solid #BFBFBF;
border-radius: 5px;
height: 70px;
margin-bottom: 30px;
`;
const YouWillGet = styled.input`
width: 100%;
background: #F5F5F5;
border: 1px solid #BFBFBF;
border-radius: 5px;
height: 70px;
margin-bottom: 30px;
`;
const TransactionFee = styled.div` 
font-weight: 500;
font-size: 15px;
line-height: 18px;
color: #828282;
`;
const WalletConnect = styled.button`
width: 50%;
height: 65px;
left: 506px;
top: 1369px;
background: #ED4E33;
border-radius: 5px;
`;
const Submit = styled.button` 
width: 50%;
height: 65px;
left: 506px;
top: 1369px;
background: blue;
border-radius: 5px;
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

    const ConnectToMetamask = async() => {
        if (window.ethereum) {
           await window.ethereum.request({ method: "eth_requestAccounts" });
           const web3 = new Web3(window.ethereum);
           const account = web3.eth.accounts;
           //Get the current MetaMask selected/active wallet
           const walletAddress = account.givenProvider.selectedAddress;
           console.log(`Wallet Address: ${walletAddress}`);
           setAccount(walletAddress);
           return true;
        } else {
            console.log("No wallet");
            return false;
        }
    }

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

    //---------------contract methods----------------------//
    const doStake = async(amount) => {
        console.log("account: ", account); 
        web3.eth.sendTransaction({
            from: account,
            to: liquidStakingContractAddress,
            value: amount
        })
        .then(function(receipt){
           console.log(receipt);
        });
        
        console.log("stake amount: " + amount);
        const realAmount = amount;
        console.log("liquidstakingContract: ", liquidStakingContract.methods);
        // const dstake = await liquidStakingContract.methods.stake(realAmount).send({from: account});
        // console.log("stake result: ", dstake);
    }
    const receiveReward = async() => {
        const rreward = await liquidStakingContract.methods.receiveReward().send({from: account});
        console.log(rreward);
    }
    const withdraw = async(amount) => {
        const wd = await liquidStakingContract.methods.withdraw(amount).send({from: account});
        console.log(wd);
    }
    const rewardRateSetUp = async(rewardRate) => {
        const rRate = await liquidStakingContract.methods.setRewardRate(rewardRate).send({from: account});
       // setCurrentRewardRate(rewardRate);
    }

    //---------------get methods-----------------------//
     const getRewardRate = async() => {
        const gRate = await liquidStakingContract.methods.rewardRate().call();
        setCurrentRewardRate(gRate);
    }
    const getStaked = async() => {
        const gStaked = await liquidStakingContract.methods.balanceOf(account).call();
        setStakedAmount(gStaked);
        console.log("staked amount: ", gStaked);
    }
    const getTotalSupply = async() => {
        const tsupply = await liquidStakingContract.methods.totalSupply().call();
        setTotalSupply(tsupply);
        console.log("total supply: ", tsupply);
    }
    const getContractOwner = async() => {
        const cOwner = await liquidStakingContract.methods.owner().call();
        setContractOwner(cOwner);
    }

    function getValues() {
        getTotalSupply();
        getContractOwner();
        getRewardRate();
        getStaked();
    }


    useEffect(()=> {
        load();
    }, []);

    if (liquidStakingContract == null) {
        console.log("Liquid staking contract uploading"); 
        return (
            <div>
                {connected ? (
                    <Submit onClick={() => {doStake(stakeAmount);}}>execute</Submit>
                    ) : (
                    <WalletConnect onClick={() =>{ setConnected( ConnectToMetamask() )}} >Connect Wallet</WalletConnect>
                )}
            </div>
        );
    }
    getStaked();
    const handleStakeAmountChange = event => {
        setStakeAmount(event.target.value);
    }
    // getValues();
    return(
        <div>
            <StakeWrapper>
                <StakeForm>
                    <InputText>Amount to stake: </InputText><br />
                    <AmountToStake  type="text" value={stakeAmount} onChange={handleStakeAmountChange}></AmountToStake><br />
                    <InputText>You will get:</InputText><br />
                    <YouWillGet></YouWillGet>
                </StakeForm>
                <TransactionFee>Transaction Fee: 0.001 ETH</TransactionFee>
                {connected ? (
                    <Submit onClick={() => {doStake(stakeAmount);}}>execute</Submit>
                    ) : (
                    <WalletConnect onClick={() =>{ setConnected( ConnectToMetamask() )}} >Connect Wallet</WalletConnect>
                )}
            </StakeWrapper>
        </div>
    );
}

export default Stake;