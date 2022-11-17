import styled from "styled-components";
import { BoldText } from "../../../styles/styledComponents/boldText";
import { BorderWrapper } from "../../../styles/styledComponents/borderWrapper";
import { LightText } from "../../../styles/styledComponents/lightText";
import { Wrapper } from "../../../styles/styledComponents/wrapper";

const AssetWrapper = styled.div` 
margin-bottom: 80px;
`;
const AssetBox = styled(BorderWrapper)` 
    border: 1px solid #939393;

;`
const CurrentAssetText = styled(BoldText)` 
    margin-left: 5%;
    margin-top: 30px;
`; 
const MyAssetText = styled(BoldText)`
    margin-left: 13%;
    margin-bottom: 30px;
    margin-top: 50px;
`;
const AssetElementBox = styled.div` 
    display: flex;
    justify-content: space-evenly;
    margin-top: 50px;
    margin-bottom: 50px;
`;
const AssetElements = styled.div` 
`;
const TitleText = styled(LightText)`
    color: #939393;
    font-size: 20px;
`;
const ValueTextBig = styled(BoldText)` 
    margin-top: 8px;
    font-size: 40px;
`;
const ValueTextSmall = styled(BoldText)` 
    font-size: 25px;
`;
const CurrentAssets = () => {

    return(
        <>
            <AssetWrapper>
                <MyAssetText>My Asset</MyAssetText>
                <AssetBox>
                    <CurrentAssetText>Your Assets</CurrentAssetText>
                    <AssetElementBox>
                        <AssetElements>
                            <TitleText>Total</TitleText>
                            <ValueTextBig>$10,111</ValueTextBig>
                        </AssetElements>
                        <AssetElements>
                            <TitleText>You Staked</TitleText>
                            <ValueTextSmall>10 ETH</ValueTextSmall>
                            <TitleText>You staked -- 10months ago</TitleText>
                        </AssetElements>
                        <AssetElements>
                            <TitleText>Accumulated Rewards</TitleText>
                            <ValueTextSmall>0.3236 ETH</ValueTextSmall>
                            <TitleText>APR --------- 7%</TitleText>
                        </AssetElements>
                        <AssetElements>
                            <TitleText>ETH Price</TitleText>
                            <ValueTextBig>$1,263.32</ValueTextBig>
                        </AssetElements>
                    </AssetElementBox>
                </AssetBox>
            </AssetWrapper>
        </>
    );
}

export default CurrentAssets;