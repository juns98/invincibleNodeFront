import styled from "styled-components";
import { BasicInput } from "../../../styles/styledComponents/basicInput";
import { BoldText } from "../../../styles/styledComponents/boldText";
import { LightText } from "../../../styles/styledComponents/lightText";

const EvmosInputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  align-items: center;
`;
const EvmosInput = styled(BasicInput)`
  width: 100%;
  margin-right: 13px;
  height: 30px;
  background-color: #292929;
  border-radius: 5px;
  border: hidden;
  color: #f1f1f1;
  text-align: right;
  padding-right: 10px;
  font-family: Pretendard;
  font-size: 18px;
  font-weight: 400;
  &: focus {
    outline: none;
  }
`;
const InEvmosAmount = styled(LightText)`
  font-size: 20px;
  font-weight: 400;
  white-space: nowrap;
  //   width: 300px;
`;

const ResultContainer = styled.div`
  //   width: 100%;
  max-width: 468px;
  margin: 0px auto;
  padding: min(34px, 5vw);
  //   padding: 34px;
`;

const StakeWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 3%;
  max-width: 400px;
  align-items: center;
`;
const YouWillStake = styled(LightText)`
  font-size: 20px;
  font-weight: 400;
`;
const EvmosAmount = styled(LightText)`
  font-size: 20px;
  font-weight: 400;
`;
const GetWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 5%;
  max-width: 400px;
  align-items: center;
`;
const YouWillGet = styled(LightText)`
  font-size: 20px;
  font-weight: 400;
`;

const StakeInput = ({ status, token, stakeAmount, getAmount }) => {
  return (
    <>
      <ResultContainer>
        <StakeWrapper>
          <YouWillStake>
            {status == "success" ? "You staked" : "You will stake"}
          </YouWillStake>
          <EvmosInputWrapper>
            <EvmosInput value={stakeAmount} />
            <EvmosAmount>{token}</EvmosAmount>
          </EvmosInputWrapper>
        </StakeWrapper>
        <GetWrapper>
          <YouWillGet>
            {status == "success" ? "You can get" : "You will get"}
          </YouWillGet>
          <EvmosInputWrapper>
            <EvmosInput value={getAmount} />
            <InEvmosAmount>in {token}</InEvmosAmount>
          </EvmosInputWrapper>
        </GetWrapper>
      </ResultContainer>
    </>
  );
};

export default StakeInput;
