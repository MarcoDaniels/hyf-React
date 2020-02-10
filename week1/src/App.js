import React, { Component, useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Welcome to React</h1>
      <MyClassComponent city="Odense" />
      <hr />
      <MyStateClassComponent title="Class: you clicked: " />
      <hr />
      <MyStateFunctionalComponent title="Func: you clicked: " />
    </div>
  );
}

class MyClassComponent extends Component {
  render() {
    return (
      <>
        <div>This is a class Component</div>
        <MyFunctionalComponent name="Daniel" age="31" />
        <div>I live in {this.props.city}</div>
      </>
    );
  }
}

const MyFunctionalComponent = ({ name, age }) => {
  return (
    <div>
      Hi, my name is: {name}, my age is {age}
    </div>
  );
};

class MyStateClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  render() {
    const title = this.props.title;
    return (
      <div>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          {title} {this.state.count} times
        </button>
      </div>
    );
  }
}

const MyStateFunctionalComponent = ({ title }) => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Marco");

  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
          setName("Martins");
        }}
      >
        {title} {count} times
      </button>
      <br />
      <span>{name}</span>
    </div>
  );
};
