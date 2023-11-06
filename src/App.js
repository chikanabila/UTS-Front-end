import "./App.css";
import About from "./components/About/About";
import Discover from "./components/Discover/Discover";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer.js";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import PlaceSection from "./components/Places/PlaceSection";
import SubscribeSection from "./components/Subscribe/Subscribe";
import VideoSection from "./components/Video/VideoSection.js";


function App() {
  return (
    <main className="main">
      <Header logoTulisan ="Abil Travel"></Header>
      <Home></Home>
      <About titelnyaAbout="More Information About The Best Beaches" ></About>
      <Discover></Discover>
      <Experience></Experience>
      <VideoSection></VideoSection>
      <PlaceSection></PlaceSection>
      <SubscribeSection></SubscribeSection>
      <Footer></Footer>
  </main>
  );
}

export default App;
