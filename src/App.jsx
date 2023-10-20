import Header from "./components/Header";
import Landing from "./components/Landing";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import Divider from "./components/Divider";
import Centered from "./components/Centered";
import Cta from "./components/Cta";
import Partner from "./components/Partner";
import Awards from "./components/Awards";
import Kurs from "./components/Kurs";
import Spices from "./components/Spices";
import Dryaged from "./components/Dryaged";
import Slider from "./components/Slider";

function App() {
    return (
        <>
            <Header />
            <Landing />
            <main>
                <Dryaged />
                <Kurs />
                <Centered />
                <Divider />
                <Menu />
                <Spices />
                <Cta />
                <Partner />
                <Divider />
                <Awards />
                <Divider />
                <Slider />
            </main>
            <Footer />
        </>
    );
}

export default App;
