import {React } from 'react';
import styled from 'styled-components';

import { BoldText } from '../../../styles/styledComponents/boldText';
import { LightText } from '../../../styles/styledComponents/lightText';


//--------------------Styles--------------------------//

const HeaderWrapper = styled.div`
text-align: center;
margin-top: 100px;
margin-bottom: 100px;
`;
const InNodeText = styled(BoldText)` 

`;
const InvincibleNodeText = styled(BoldText)` 
    color: #146DD8;
    font-size: 60px;
    margin-top: 30px;
    margin-bottom: 30px;
`;
const MaximizeEarningText = styled(BoldText)` 

`;
const StepsText = styled(LightText)` 
    
`;


//--------------------------------------------------------------//

function Title() {

    return (
        <> 
            <HeaderWrapper>
                <InNodeText>inNode</InNodeText>
                <InvincibleNodeText>Invincible Node</InvincibleNodeText>
                <MaximizeEarningText>Maximize your earning</MaximizeEarningText>
                <StepsText>With following steps : Liquid - Leverage - Risk Hedge </StepsText>
            </HeaderWrapper>
        </>
    )
}
export default Title;