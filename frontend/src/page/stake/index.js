import { useState } from "react";
import Modal from "./Modal";
import Stake from "./components/stake";
import Header from "../common/header";
import Base from "../common/base";

const StakePage = () => {
    const [showModal, setShowModal] = useState(false);
    
    return (
        <div>
            {
                showModal &&
                <Modal closeModal={()=>{setShowModal(false)} } />
            }
            <Header></Header>
            <Base component={<Stake openModal={()=> {setShowModal(true)}}></Stake>}></Base>
            {/* <button onClick={()=>{setShowModal(true)}}>모달 열기</button> */}
        </div>
    )

}

export default StakePage;