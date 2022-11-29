import {React } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { BlueButton } from '../../../styles/styledComponents/blueButton';

import { BoldText } from '../../../styles/styledComponents/boldText';
import { Button } from '../../../styles/styledComponents/button';
import { LightText } from '../../../styles/styledComponents/lightText';
import { WhiteButton } from '../../../styles/styledComponents/whiteButton';


//--------------------Styles--------------------------//

const HeaderWrapper = styled.div`
text-align: left;
margin-top: 100px;
margin-bottom: 100px;
margin-left: 5vw;
`;
const InvincibleNodeText = styled(BoldText)` 
    color: #FDF5E9;
    font-size: 60px;
    margin-top: 30px;
    margin-bottom: 30px;
`;
const MaximizeEarningText = styled(LightText)` 
    color: #FDF5E9;
`;
const ButtonWrapper = styled.div` 
    display: flex;
    justify-content: flex-start;
    margin-top: 3vh;
`;

const Contact = styled(WhiteButton)` 
    width: 10vw;
`;
const LaunchApp = styled(BlueButton)` 
    width: 10vw;
    margin-left: 3vw;
`;
//--------------------------------------------------------------//

function Title() {
    let navigate = useNavigate(); 
    const routeApp = () =>{ 
      let path = `stake`; 
      navigate(path);
    }

    return (
        <> 
            <HeaderWrapper>
                <InvincibleNodeText>Invincible Node</InvincibleNodeText>
                <MaximizeEarningText>Maximize your earning</MaximizeEarningText>
                <ButtonWrapper>
                    <Contact>Contact Us</Contact>
                    <LaunchApp onClick={() => {routeApp();}}>Launch App</LaunchApp>
                </ButtonWrapper>
            </HeaderWrapper>
        </>
    )
}
export default Title;