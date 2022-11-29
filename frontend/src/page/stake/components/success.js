import styled from "styled-components";
import { BoldText } from "../../../styles/styledComponents/boldText";
import { Button } from "../../../styles/styledComponents/button";
import StakeInput from "../utils/stakeInput";


const SuccessWrapper = styled.div` 

`;
const FirstText = styled(BoldText)` 

`;
const SecondText = styled(BoldText)` 

`;
const CurrentStatus = styled.div` 

`;
const ConfirmButton = styled(Button)` 

`;

const Success = () => {


    return (
        <SuccessWrapper>
            <FirstText>Transfer Success</FirstText>
            <SecondText>Current status</SecondText>
            <CurrentStatus></CurrentStatus>
            <StakeInput></StakeInput>
            <ConfirmButton>OK</ConfirmButton>
        </SuccessWrapper>
    )

}

export default Success;