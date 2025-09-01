import './App.css';
import Header from './components/header/Header';
import LogIn from './components/logIn/logIn';
import Presentation from "./components/landing-page/Presentation";
import LandingOptions from './components/landing-page/LandingOptions';
import GuestsSection from './components/landing-page/DiscoverSection.tsx';
import Footer from './components/utils/Footer.tsx';
const App = () => {
  return (
    <>
      {/*<Header></Header>*/}
      {/*<LogIn></LogIn>*/}
      <LandingOptions></LandingOptions>
      <Presentation></Presentation>
     <Footer></Footer>
    </>
  )
}

export default App
