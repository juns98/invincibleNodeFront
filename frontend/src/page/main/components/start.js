import styled from "styled-components";


const StartButton = styled.button` 
width: 385px;
height: 50px;
background-color: #1F53FF;
color: white;
margin: auto;
display: block ;
text-align: center;
`;

const Start = () => {

    // const doStake = async(amount) => {
    //     console.log("account: ", account); 
    //     web3.eth.sendTransaction({
    //         from: account,
    //         to: liquidStakingContractAddress,
    //         value: amount
    //     })
    //     .then(function(receipt){
    //        console.log(receipt);
    //     });
        
    //     console.log("stake amount: " + amount);
    //     const realAmount = amount;
    //     console.log("liquidstakingContract: ", liquidStakingContract.methods);
    //     // const dstake = await liquidStakingContract.methods.stake(realAmount).send({from: account});
    //     // console.log("stake result: ", dstake);
    // }
    // const receiveReward = async() => {
    //     const rreward = await liquidStakingContract.methods.receiveReward().send({from: account});
    //     console.log(rreward);
    // }
    // const withdraw = async(amount) => {
    //     const wd = await liquidStakingContract.methods.withdraw(amount).send({from: account});
    //     console.log(wd);
    // }
    // const rewardRateSetUp = async(rewardRate) => {
    //     const rRate = await liquidStakingContract.methods.setRewardRate(rewardRate).send({from: account});
    //    // setCurrentRewardRate(rewardRate);
    // }

    // //---------------get methods-----------------------//
    //  const getRewardRate = async() => {
    //     const gRate = await liquidStakingContract.methods.rewardRate().call();
    //     setCurrentRewardRate(gRate);
    // }
    // const getStaked = async() => {
    //     const gStaked = await liquidStakingContract.methods.balanceOf(account).call();
    //     setStakedAmount(gStaked);
    //     console.log("staked amount: ", gStaked);
    // }
    // const getTotalSupply = async() => {
    //     const tsupply = await liquidStakingContract.methods.totalSupply().call();
    //     setTotalSupply(tsupply);
    //     console.log("total supply: ", tsupply);
    // }
    // const getContractOwner = async() => {
    //     const cOwner = await liquidStakingContract.methods.owner().call();
    //     setContractOwner(cOwner);
    // }

    // function getValues() {
    //     getTotalSupply();
    //     getContractOwner();
    //     getRewardRate();
    //     getStaked();
    // }


    // useEffect(()=> {
    //     load();
    // }, []);

    // if (liquidStakingContract == null) {
    //     console.log("Liquid staking contract uploading"); 
    //     return (
    //         <div>
    //             {connected ? (
    //                 <Submit onClick={() => {doStake(stakeAmount);}}>execute</Submit>
    //                 ) : (
    //                 <WalletConnect onClick={() =>{ setConnected( ConnectToMetamask() )}} >Connect Wallet</WalletConnect>
    //             )}
    //         </div>
    //     );
    // }
    // getStaked();
    


    return(
        <>
            <StartButton>Start Invincible Stake</StartButton>
        </>
    );
}

export default Start;