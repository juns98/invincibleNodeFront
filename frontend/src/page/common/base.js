import styled from "styled-components";
import { BoldText } from '../../styles/styledComponents/boldText';
import { LightText } from '../../styles/styledComponents/lightText';

const BaseWrapper = styled.div` 
    display: flex;
    justify-content: space-between;
    margin-left: 5vw;
    margin-right: 5vw;
    margin-top: 50px;
`;
const TitleWrapper = styled.div` 
    width: 30vw;
    height: 80vh;
`;

const FunctionWrapper = styled.div` 
width: 70vw;
height: 80vh;
background: rgba(38, 38, 38, 0.95);
box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.25);
border-radius: 25px;
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

const Base = ({component}) => {
    return (
        <BaseWrapper>
            <TitleWrapper>
                <InvincibleNodeText>Invincible Evmos</InvincibleNodeText>
                <MaximizeEarningText>Maximize Profit, Saving Value</MaximizeEarningText>
            </TitleWrapper>
            <FunctionWrapper>
                {component}
            </FunctionWrapper>
        </BaseWrapper>
    );
}

export default Base;