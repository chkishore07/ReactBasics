import React, { Component } from "react";

class Counter extends Component {
  componentDidUpdate(prevProps, prevState){
    console.log('PrevProps', prevProps);
    console.log('PrevState', prevState);
  }
  componentWillUnmount(){
    console.log('Component-Unmount');
  }
  // state = {
  //   value: this.props.value,
  //   tags: ["abc", "xyg", "mno"]
  // };
  styles = {
    fontSize: 10,
    fontWeight: "bold"
  };
  renderTags() {
    if (this.state.tags.length == 0) return <p>There are no tags!</p>;
    return this.state.tags.map(tag => <li key={tag}>{tag}</li>);
  }

  // handleIncrement = product => {
  //   console.log(product);
  //   this.setState({ value: this.state.value + 1 });
  // };
  render() {
    console.log('Counter-Rendered');
    return (
      <div>
        {/* {this.props.children}
        {this.state.tags.length == 0 && "Please create a new tag"} */}
        {/* {this.renderTags()} */}
        <span className={this.getClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.id)}
          className="btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }
  getClasses() {
    let classes = "badge m-2 badge-";
    classes += "warning";
    return classes;
  }

  formatCount() {
    const value = this.props.value;
    return value == 0 ? <h3>Zero</h3> : value;
  }
}

export default Counter;
