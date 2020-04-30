import React, {FC} from 'react';
import './App.css';
import NavigationBar from './components/navigation-bar';
import Connect from './components/connect';

const App: FC = () => {
  
  return (
    <div className="App">
      <NavigationBar />
      <Connect />
    </div>
  );
}

export default App;
