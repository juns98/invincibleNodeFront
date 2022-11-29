import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Leverage from "./components/leverage";
import Success from "./components/success"; 

const ModalBackground = styled.div`
    width: 90vw;
    height: 90vh;
    position: fixed;
    left: 5vw; top: 5vh;
    background: rgba(46, 46, 46, 0.92);
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ModalWrapper = styled.div`
    width: 50vw;
    background: #333333;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
    border-radius: 25px;
    display: flex;
    justify-content: center;
`;

function Modal({ closeModal }) {
    const [component, setComponent] = useState(false);
    const modalRef = useRef();

    const clickModalOutside = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            closeModal();
            console.log("모달 닫았음");
        }
    }

    useEffect(()=>{
        document.addEventListener('click', clickModalOutside);
        return () => document.removeEventListener('click', clickModalOutside);
    }, [])

    return (
        <ModalBackground>
            <ModalWrapper>
                { !component ? <Leverage pressStake={() => { setComponent(true)}    } /> : <Success />}
            </ModalWrapper>
        </ModalBackground>        
    )
}
export default Modal;