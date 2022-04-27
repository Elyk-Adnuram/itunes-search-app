import React, { Component } from 'react'; // Import React.
import './App.css'; //Import CSS File.
import Main from './Components/Main.js' // Import Main Component
import 'bootstrap/dist/css/bootstrap.min.css' //Import Bootstrap styling.



class App extends Component {
    render() {
        return(
          <div>
            <Main />
          </div>     
        )
    }
}

export default App; //Export Component App.
