import React from "react";
import Header from "../common/header";
import CurrentAssets from "./components/currentAssets";
import QuickSwap from "./components/quickSwap";
import Pool from "../main/components/pool";

const MyAsset = () => {
    
    return(
        <>
            <Header></Header>
            <CurrentAssets></CurrentAssets>
            <QuickSwap></QuickSwap>
            <Pool></Pool>
        </>
    );
}
export default MyAsset;