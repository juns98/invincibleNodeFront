import styled from "styled-components";
import { BasicInput } from "../../../styles/styledComponents/basicInput";
import { BoldText } from "../../../styles/styledComponents/boldText";
import { Button } from "../../../styles/styledComponents/button";
import { LightText } from "../../../styles/styledComponents/lightText";
import StakeInput from "../utils/stakeInput";

const LeverageWrapper = styled.div` 
    margin-top: 5vh;
    margin-bottom: 5vh;
`;
const FirstText = styled(BoldText)` 

`;
const SecondText = styled(LightText)` 

`;
const ThirdText = styled(BoldText)` 

`;
const CurrentStatusWrapper = styled.div` 

`;
const FourthText = styled(BoldText)` 

`;
const MaximizeWrapper = styled.div` 

`;
const ButtonWrapper = styled.div` 
display: flex;
    justify-content: space-evenly;
`;
const ComingButton = styled(Button)` 

`;
const StakeButton = styled(Button)` 

`;

const Leverage = ({pressStake}) => {

    const stake = () => {
        pressStake();
    }
    return (
        <LeverageWrapper>
            <FirstText>Enough?</FirstText>
            <SecondText>Go to the next step, boost your profit & save your value up</SecondText>
            <ThirdText>Current Status</ThirdText>
            <CurrentStatusWrapper>
                <StakeInput></StakeInput>
            </CurrentStatusWrapper>
            <FourthText>Simulate your maximized profits</FourthText>
            <MaximizeWrapper>

            </MaximizeWrapper>
            <ButtonWrapper>
                <ComingButton>Coming Soon</ComingButton>
                <StakeButton onClick={() => { stake(); }}>Stake</StakeButton>
            </ButtonWrapper>
        </LeverageWrapper>
    )

}

export default Leverage;