import Header from "./components/header";
import Leverage from "./components/leverage";
import Pool from "./components/pool";
import SpecialFeature from "./components/specialFeature";
import Stake from "./components/stake";
import Start from "./components/start";

function Mainpage() {
    return (
        <div>
            <Header></Header>
            <Stake></Stake>
            <Leverage></Leverage>
            <SpecialFeature></SpecialFeature>
            <Start></Start>
            <Pool></Pool>
        </div>
    )
}

export default Mainpage;