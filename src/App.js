
import './App.css';
import CelebratyGrid1 from './components/CelebrityGrid1/CelebratyGrid1';
//  import Footer from './components/Footer';
//  import Section3 from './components/tabsInReacts/Section3';
//  import Youtube from './components/Sec2-ifram/Youtube';
//  import Section1 from './components/section1/Section1';
//  import Firstcrousal from './components/carousal/Firstcrousal';
 import Home1 from './components/Home1/Home1';
 import Home2 from './components/Home2/Home2';
 import MovieGrid from './components/MovieGrid/MovieGrid';
 import MovieGridFullWidth from './components/MovieGridFullWidth/MovieGridFullWidth';


import Navbar from './components/Navbar/Navbar';
import MovieList from './components/MovieList/MovieList';
import MovieSingle from './components/MovieSingle/MovieSingle';
import SeriesSingle from './components/SeriesSingle/SeriesSingle'



function App() {
  return (
    <div className="App">
      <Navbar/>
       {/* <Firstcrousal/> */}
       {/* <Section1/>  */}
       {/* <Youtube/>  */}
       {/* <Section3/>  */}
       {/* <Footer/>   */}
       {/* <Home1/>  */}
       {/* <Home2/>  */}
       {/* <MovieGrid/>  */}
       {/* <MovieGridFullWidth/>  */}
       {/* <MovieSingle/> */}
       {/* <MovieList/> */}
       <SeriesSingle/>
      {/* <CelebratyGrid1/> */}
    

    </div>
  );
}

export default App;
