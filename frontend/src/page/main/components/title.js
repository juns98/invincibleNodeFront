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


//--------------------------------------------------------------//

function Title() {

    return (
        <> 
            <HeaderWrapper>
                <BoldText>InNode</BoldText>
                <BoldText>Invincible Node</BoldText>
                <BoldText>Maximize your earning</BoldText>
                <LightText>With following steps : Liquid - Leverage - Risk Hedge </LightText>
            </HeaderWrapper>
        </>
    )
}
export default Title;