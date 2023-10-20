import Header from "./components/Header";
import Landing from "./components/Landing";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import Divider from "./components/Divider";
import Centered from "./components/Centered";
import Cta from "./components/Cta";
import Partner from "./components/Partner";
import Awards from "./components/Awards";

function App() {
    return (
        <>
            <Header />
            <Landing />
            <main>
                <Divider />
                <Menu />
                <Divider />
                <Centered />
                <Divider />
                <Cta />
                <Partner />
                <Divider />
                <Awards />
                <Divider />
            </main>
            <Footer />
        </>
    );
}

export default App;
