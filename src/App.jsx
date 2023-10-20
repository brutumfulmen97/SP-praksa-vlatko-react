import Header from "./components/Header";
import Landing from "./components/Landing";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import Divider from "./components/Divider";
import Centered from "./components/Centered";

function App() {
    return (
        <>
            <Header />
            <Landing />
            <Divider />
            <Menu />
            <Divider />
            <Centered />
            <Footer />
        </>
    );
}

export default App;
