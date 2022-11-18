import Footer from "../common/footer"
import Title from "./components/title";
import Header from "../common/header";
import Leverage from "./components/leverage";
import Pool from "./components/pool";
import SpecialFeature from "./components/specialFeature";
import Stake from "./components/stake";
import Start from "./components/start";

function Mainpage() {
    return (
        <div>
            <Header home={0}></Header>
            <Title></Title>
            <Stake></Stake>
            <Leverage></Leverage>
            <SpecialFeature></SpecialFeature>
            <Start></Start>
            <Pool></Pool>
            <Footer></Footer>
        </div>
    )
}

export default Mainpage;