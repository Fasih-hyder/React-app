
import './App.css';
import './component/Header/header';
import './component/Section/TrustedCompanies';
import './component/Creative/service'
import './component/Footer/footer'
import Header from  "./component/Header/header.jsx";
import Section from "./component/Section/TrustedCompanies.jsx";
import  Creative from "./component/Creative/service.jsx";
import Footer from './component/Footer/footer.jsx';
function App() {
  return (
    <>
    <Header />
    <Section />
    <Creative />
    <Footer />
    </>
  );
}

export default App;
