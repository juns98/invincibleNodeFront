import {React, useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import Web3 from 'web3';
import { Button } from '../../styles/styledComponents/button';
import { BoldText } from '../../styles/styledComponents/boldText';
import { LightText } from '../../styles/styledComponents/lightText';
import logo from '../../assets/images/logo.png';

//--------------------Styles--------------------------//
const Top = styled.div`
display: flex;
justify-content: space-between;
`;
const LeftTop = styled.div` 

`;
const RightTop = styled.div` 
    display: grid;
    margin-right: 5%;
    margin-top: 50px;
    white-space:nowrap;
    grid-template-columns: 1fr 2fr;
`;
const WalletConnect = styled(Button)`
width: 80%;
grid-column-start: 2;
grid-column-end: 2;
`;
const WalletAddress = styled.div`

`;
const Logo = styled.img` 
    margin-left: 100%;
    margin-top: 50%;
    width: 140%;
`;
const MyAssetButton = styled.button` 
grid-column-start: 1;
grid-column-end: 1;
font-size: 20px;
`;

//--------------------------------------------------------------//

function Header() {
    const [ connected, setConnected ] = useState(false);
    const [ account, setAccount ] = useState();

    let navigate = useNavigate(); 
    const routeMyAsset = () =>{ 
      let path = `my-asset`; 
      navigate(path);
    }
    const routeMain = () => {
        let path = '/';
        navigate(path);
    }

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
                <LeftTop>
                    <Logo src={logo} onClick={() => {routeMain()}}></Logo>
                </LeftTop>
                <RightTop>
                    <MyAssetButton onClick={() => {routeMyAsset()}}>My Asset</MyAssetButton>
                    {connected ? (
                            <WalletAddress>Address: {account}</WalletAddress>
                        ) : (
                            <WalletConnect onClick={() =>{ setConnected( ConnectToMetamask() )}} >Connect Wallet</WalletConnect>
                    )}
                </RightTop>
            </Top>
        </>
    )
}
export default Header;