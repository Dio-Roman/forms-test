import React, { Component, } from 'react';
import Sender from '../src/components/Sender/Sender';
// import AttachBtn from '../src/components/AttachBtn/AttachBtn';
// import SendBtn from '../src/components/SendBtn/SendBtn';
import Logo from '../src/components/Logo/Logo';
import SendedMsg from '../src/components/SendedMsg/SendedMsg';
import MsgInQueue from '../src/components/MsgInQueue/MsgInQueue';
import DragAndDrop from '../src/components/DragAndDrop/DragAndDrop';
import FileList from '../src/components/FileList/FileList';
import {connect} from 'react-redux';

class App extends Component {
  render() {
    const {queue} = this.props;
    return (
      <>
        <Logo/>
        {queue ? <Sender/> : <MsgInQueue/>}
        
        {/* <DragAndDrop/> */}
        {/* <FileList/> */}
        <SendedMsg/>
      </>
    );
  }
}

// export default App;
export default connect (state => ({
  // input: state.formFields,
  queue: state.queue
  }), {})(App);
