import { React } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BlueButton } from "../../../styles/styledComponents/blueButton";

import { BoldText } from "../../../styles/styledComponents/boldText";
import { Button } from "../../../styles/styledComponents/button";
import { LightText } from "../../../styles/styledComponents/lightText";
import { WhiteButton } from "../../../styles/styledComponents/whiteButton";

//--------------------Styles--------------------------//

const HeaderWrapper = styled.div`
  text-align: left;
  padding: 100px 8vw;
//   margin-top: 100px;
//   margin-bottom: 100px;
//   margin-left: 5vw;
`;
const InvincibleNodeText = styled(BoldText)`
  color: #fdf5e9;
  font-size: 60px;
  //   margin-top: 30px;
  margin-bottom: 12px;
`;

const MainTitle = styled.div`
  color: #fdf5e9;
  font-family: Pretendard;
  font-size: 54px;
  font-weight: 900;
  line-height: 55px;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 12px;
`;
const MaximizeEarningText = styled(LightText)`
  color: #fdf5e9;
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 64px;
  //   margin-top: 3vh;
`;

const Contact = styled(WhiteButton)`
  // width: 10vw;
  width: auto;
  padding-left: 3vw;
  padding-right: 3vw;
`;
const LaunchApp = styled(BlueButton)`
  // width: 10vw;
  width: auto;
  padding-left: 3vw;
  padding-right: 3vw;
  margin-left: 3vw;
`;
//--------------------------------------------------------------//

function Title() {
  let navigate = useNavigate();
  const routeApp = () => {
    let path = `stake`;
    navigate(path);
  };

  return (
    <>
      <HeaderWrapper>
        <MainTitle>Invincible Node</MainTitle>
        <MaximizeEarningText>Maximize Profit, Saving Value</MaximizeEarningText>
        <ButtonWrapper>
          <Contact>Contact us</Contact>
          <LaunchApp
            onClick={() => {
              routeApp();
            }}
          >
            Launch App
          </LaunchApp>
        </ButtonWrapper>
      </HeaderWrapper>
    </>
  );
}
export default Title;
