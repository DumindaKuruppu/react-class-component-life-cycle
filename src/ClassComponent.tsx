import React from 'react';
import ErrorComponent from "./ErrorComponent";

export default class ClassComponent extends React.Component<any, any> {
  private readonly increment: () => void;
  private readonly decrement: () => void;

  // Constructor
  constructor(props: any) {
    super(props);

    this.state = {
      count: 0
    }

    this.increment = () => {
      this.setState({count: this.state.count + 1})
    }

    this.decrement = () => {
      this.setState({count: this.state.count - 1})
    }
  }

  // getDerivedStateFromProps
  static getDerivedStateFromProps(props: any, state: any) {
  }

  // componentDidMount
  componentDidMount() {
    console.log("=======START=======")
    console.log("Component Did Mount")
    console.log("========END========")
    console.log("")
  }

  // componentDidUpdate
  componentDidUpdate(prevProps: any, prevState: any, snapshot?: any) {
    console.log("=======START=======")
    console.log("Component Did Update")
    console.log("========END=========")
    console.log("")
  }

  // componentWillUnmount
  componentWillUnmount() {
    console.log("========START=========")
    console.log("Component Will Unmount")
    console.log("=========END==========")
    console.log("")
  }

  // shouldComponentUpdate
  shouldComponentUpdate(nextProps: Readonly<any>, nextState: Readonly<any>, nextContext: any): boolean {
    if (this.props.enableShouldComponentUpdate) {
      console.log("Should Component Update set to true")
      return true
    } else {
      console.log("Should Component Update set to false")
      return false
    }
  }

  // getSnapshotBeforeUpdate
  getSnapshotBeforeUpdate(prevProps: Readonly<any>, prevState: Readonly<any>): any {
    console.log("========getSnapshotBeforeUpdate=========")
    console.log("")
  }

  // componentDidCatch
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.log(error)
    this.setState({error, errorInfo})
  }

  render() {

    console.log("==== Render ====")

    if (this.state.error) {
      return <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 20,
          border: "1px solid red",
          borderRadius: 5,
          padding: 50,
          margin: 5,
          alignItems: "center",
          justifyContent: "center",
          height: 150,
          color: "red"
        }}
      >{this.state.error.message}</div>
    }


    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 20,
          border: "1px solid white",
          borderRadius: 5,
          padding: 50,
          margin: 5,
          alignItems: "center",
          height: 150,
        }}
      >
        {this.state.count}
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        {this.props.isRenderComponentRendered && <ErrorComponent/>}
      </div>
    );
  }
}


// Constructor
// componentDidMount
// componentDidUpdate
// componentWillUnmount
// shouldComponentUpdate
// getSnapshotBeforeUpdate
// componentDidCatch

