import React from "react";
import "./App.css";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import Counter from "./components/counter";

class App extends Counters {
  state = {
    counters: [
      { id: 1, value: 3 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };
  constructor(){
    super();
    console.log('App-Constructor');
  }

  componentDidMount()
  {
    console.log('App-Mounted');
  }
  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const selCounter = counters.filter(c => c.id == counter.id);
    const index = counters.indexOf(selCounter[0]);
    counters[index] = { ...selCounter[0] };
    counters[index].value++;
    this.setState({ counters });
  };
  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
  handleDelete = counterID => {
    const counters = this.state.counters.filter(c => c.id !== counterID);
    this.setState({ counters });
  };
  render() {
    console.log('App-Rendered');
    return (
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length} />

        <main className="Container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
