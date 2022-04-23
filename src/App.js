import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from './footer';
import Header from './header';
import Registration from './registration';
import Query from './query';
import Content from './contentp';
import IMAGES from './images/img.js'
function App() {
  return (
    
   //<Section/>
   <div className="Learning">
      <Header/>
      {/* <Registration/> */}
      <Content/>
      <Footer/>
    <Query/>
      
      
   </div>


  );
}

export default App;
