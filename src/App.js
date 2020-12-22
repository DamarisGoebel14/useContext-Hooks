import React from 'react'
import ComponentC from './ComponentC'
import './App.css';

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

function App() {
  return (
    <div className="App">
<UserContext.Provider value={'Damaris'}>
  <ChannelContext.Provider value={'Be happy'}>
      <ComponentC/>
  </ChannelContext.Provider>
</UserContext.Provider>
    </div>
  );
}

export default App;
