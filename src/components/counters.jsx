import React, { Component } from "react";
import Counter from "./counter";
import App from "../App";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 3 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };
  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const selCounter = counters.filter(c => c.id == counter.id);
    const index = counters.indexOf(selCounter[0]);
    counters[index] = { ...selCounter[0] };
    counters[index].value++;
    this.setState({ counters });
  };

  render() {
    console.log('Counters-Rendered');
    const { onReset, counters, onIncrement, onDelete } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            value={counter.value}
            onReset={onReset}
            id={counter.id}
            selected
          />
        ))}
      </div>
    );
  }
}

export default Counters;
