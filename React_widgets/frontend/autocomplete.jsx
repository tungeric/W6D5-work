import React from 'react';
import ReactDOM from 'react-dom';

class AutoComplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputVal: "", matchedList: Array.from(props.names) };
    this.getMatchedNames = this.getMatchedNames.bind(this);
    this.handleInput = this.handleInput.bind(this);

  }

  componentDidUpdate(){
    let matched = this.getMatchedNames();
    if (matched.toString() != this.state.matchedList.toString()) {
      this.setState({ matchedList: matched });
    }
  }

  handleInput(event) {
    this.setState({ inputVal: event.currentTarget.value });
  }

  getMatchedNames() {
    let matchedNames = [];
    this.props.names.forEach((name) => {
      if (name.toLowerCase().includes(this.state.inputVal.toLowerCase())) {
        matchedNames.push(name);
      }
    });
    return matchedNames;
  }

  render () {
    return (
      <div>
        <h1>Autocomplete</h1>
        <div className = "auto">
        <label className = "label">Search for a name
          <input className="test" onChange = {this.handleInput} value={this.state.inputVal}
            placeholder='Search...'/>
        </label>
        <ul className ="autolist">
          {
            this.state.matchedList.map( (name,idx) => <li key={idx}>{name}</li>)
          }
        </ul>
      </div>
    </div>
    );
  }
}

export default AutoComplete;
