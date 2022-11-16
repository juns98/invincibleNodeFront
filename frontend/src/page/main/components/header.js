import {React, useState, useEffect } from 'react';
import styled from 'styled-components';
import headerImg  from '../../../assets/images/headerImg.png';
import headerImg2 from '../../../assets/images/headerImg2.png';


import Web3 from 'web3';


//--------------------Styles--------------------------//
const Top = styled.div`

`;
const HeaderWrapper = styled.div`
text-align: center;
margin-top: 232px;
margin-bottom: 100px;
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
font-weight: 900;
font-size: 30px;
line-height: 36px;
color: #333333;
`;
const Text2 = styled.div`
font-style: normal;
font-weight: 900;
font-size: 65px;
line-height: 55px;
color: #146DD8;
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
            <Top>
                <div>
                    INVI
                </div>
                <div>
                    {connected ? (
                            <WalletAddress>Address: {account}</WalletAddress>
                        ) : (
                            <WalletConnect onClick={() =>{ setConnected( ConnectToMetamask() )}} >Connect Wallet</WalletConnect>
                    )}
                </div>
            </Top>
            
            <HeaderWrapper>
                <Text1>InNode</Text1>
                <Text2>Invincible Node</Text2>
                <Text3>
                    Maximize your earning<br />
                    With following steps : Liquid - Leverage - Risk Hedge 
                </Text3>
            </HeaderWrapper>
        </>
    )
}

export default Header;