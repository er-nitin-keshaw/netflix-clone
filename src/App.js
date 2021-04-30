import './App.css';
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";
import Nav from "./Nav";


function App() {
  console.log('check develop branch execution 111')
  console.log('hii1')
  console.log("1224");
  console.log("1227");
console.log("feature1 addition");
//changes in local
  
  return (
    <div className="App">


    <Nav />
    <Banner />
    <Row title="Netflix original" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
    <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
    <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
    <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
    <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
    <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
    <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
    <Row title="Documentries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
