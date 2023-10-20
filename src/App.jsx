import Header from "./components/Header";
import Landing from "./components/Landing";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import Divider from "./components/Divider";
import Centered from "./components/Centered";
import Cta from "./components/Cta";
import Partner from "./components/Partner";

function App() {
    return (
        <>
            <Header />
            <Landing />
            <Divider />
            <Menu />
            <Divider />
            <Centered />
            <Divider />
            <Cta />
            <Partner />
            <Footer />
        </>
    );
}

export default App;
