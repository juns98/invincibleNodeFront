import styled from "styled-components";
import { BasicInput } from "../../../styles/styledComponents/basicInput";
import { BoldText } from "../../../styles/styledComponents/boldText";
import { LightText } from "../../../styles/styledComponents/lightText";

const StakeWrapper = styled.div` 
display: flex;
    justify-content: space-evenly;
`;
const YouWillStake = styled(LightText)` 

`;
const EvmosInputWrapper = styled.div` 

`;
const EvmosInput = styled(BasicInput)` 

`;
const GetWrapper = styled.div` 
display: flex;
    justify-content: space-evenly;
`;
const YouWillGet = styled(LightText)` 

`;
const InEvmosInputWrapper = styled.div` 

`;
const InEvmosInput = styled(BasicInput)` 

`;

const StakeInput = () => {
    return (
        <>
             <StakeWrapper>
                    <YouWillStake>You will stake</YouWillStake>
                    <EvmosInputWrapper>
                        <EvmosInput></EvmosInput>Evmos
                    </EvmosInputWrapper>
                </StakeWrapper>
                <GetWrapper>
                    <YouWillGet>You will get</YouWillGet>
                    <InEvmosInputWrapper>
                        <InEvmosInput></InEvmosInput>inEvmos
                    </InEvmosInputWrapper>
                </GetWrapper>
        </>
    )
}

export default StakeInput;