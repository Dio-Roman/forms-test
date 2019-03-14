import React, { Component, } from 'react';
import Sender from '../src/components/Sender/Sender';
// import AttachBtn from '../src/components/AttachBtn/AttachBtn';
// import SendBtn from '../src/components/SendBtn/SendBtn';
import Logo from '../src/components/Logo/Logo';
import SendedMsg from '../src/components/SendedMsg/SendedMsg';

class App extends Component {
  render() {
    return (
      <>
        <Logo/>
        <Sender/>
        {/* <AttachBtn/>
        <SendBtn/> */}
        <SendedMsg/>
      </>
    );
  }
}

export default App;
