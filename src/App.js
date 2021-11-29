
import './App.css';
import PaginationComponent from './components/PaginationComponent';
import useGaTracker from './components/useGaTracker';
function App() {
  useGaTracker();
  return (
    <div className="App">
      <header className="App-header">
       <PaginationComponent />
      </header>
    </div>
  );
}

export default App;
/*
import { Component } from "react";
import "./App.css";
import ReactGA from 'react-ga';

class App extends Component {

  initReactGA = () => {
    ReactGA.initialize('UA-213618899-1');
    ReactGA.pageview('test-init-pageview');
  };

  componentDidMount(){
    this.initReactGA();
  }

  render() {
    return (
      <div className="App container">
        <h2>Google Analytics Example</h2>
      </div>
    );
  }
}
export default App;
*/
