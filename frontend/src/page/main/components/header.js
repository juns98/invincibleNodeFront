import {React, useState, useEffect } from 'react';
import styled from 'styled-components';
import headerImg  from '../../../assets/images/headerImg.png';
import headerImg2 from '../../../assets/images/headerImg2.png';


import Web3 from 'web3';


//--------------------Styles--------------------------//
const HeaderWrapper = styled.div`
text-align: center;
margin-top: 232px;
font-family: 'Pretendard';
font-style: normal;
`;
const WalletConnect = styled.button`
position: absolute;
width: 251px;
height: 50px;
right: 112px;
top: 56px;
background-color: #ED4E33;
`;
const WalletAddress = styled.div`
position: absolute;
width: 251px;
height: 50px;
right: 112px;
top: 56px;

`;
const HeaderImg = styled.img`
height: 15%;
width: 50%;
left: 418px;
top: 528px;
border-radius: 0px;
margin-top: 90px;
`;
const HeaderImg2 = styled.img`
width: 32px;
height: 32px;
margin-top: 80px;
margin-bottom: 80px;
`;

const Text1 = styled.div`
text-align: center;
font-weight: 900;
font-size: 30px;
line-height: 36px;

`;
const Text2 = styled.div`
color: #ED4E33;
font-weight: 900;
font-size: 65px;
line-height: 55px;
`;
const Text3 = styled.div`
font-weight: 500;
font-size: 18px;
line-height: 21px;
`;
//--------------------------------------------------------------//

function Header() {
    const [ connected, setConnected ] = useState(false);
    const [ account, setAccount ] = useState();

    const ConnectToMetamask = async() => {
        if (window.ethereum) {
           await window.ethereum.request({ method: "eth_requestAccounts" });
           const web3 = new Web3(window.ethereum);
           const account = web3.eth.accounts;
           //Get the current MetaMask selected/active wallet
           const walletAddress = account.givenProvider.selectedAddress;
           console.log(`Wallet Address: ${walletAddress}`);
           return true;
        } else {
            console.log("No wallet");
            return false;
        }
    }
    
    const getWeb3 = async() => {
        if (connected) {
            const web3 = new Web3(window.ethereum);
            try {
                const getaccount = await web3.eth.getAccounts();
                setAccount(getaccount[0]);
                console.log('getaccount[0] :', getaccount[0]);
            } catch(error) {
                return error;
            }
        }
    }
    // Use Effect
    useEffect(() => {
        getWeb3();
    }, []);

    return (
        <>
            {connected ? (
                    <WalletAddress>Address: {account}</WalletAddress>
                ) : (
                    <WalletConnect onClick={() =>{ setConnected( ConnectToMetamask() )}} >Connect Wallet</WalletConnect>
            )}
            <HeaderWrapper>
                <Text1>Stake your ETH and receive reETH</Text1>
                <Text2>Liquid Staking<br />with Real Estate</Text2>
                <Text3>Sanji-ro 43, Jeju-si, Jeju-do, Republic of Korea</Text3>
                <HeaderImg src={headerImg}  /><br />
                <HeaderImg2 src={headerImg2} />
            </HeaderWrapper>
        </>
    )
}

export default Header;