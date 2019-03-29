import React, { Component } from "react";
import Sender from "../src/components/Sender/Sender";
import Logo from "../src/components/Logo/Logo";
import SendedMsg from "../src/components/SendedMsg/SendedMsg";
import MsgInQueue from "../src/components/MsgInQueue/MsgInQueue";
import { connect } from "react-redux";

class App extends Component {
  render() {
    const { queue } = this.props;
    return (
      <>
        <Logo />
        {queue ? <Sender /> : <MsgInQueue />}
        <SendedMsg />
      </>
    );
  }
}

export default connect(
  state => ({
    queue: state.queue
  }),
  {}
)(App);
