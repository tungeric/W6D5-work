import React from 'react';
import ReactDOM from 'react-dom';

class Tab extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selected: this.props.windows[0]};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    let text = event.target.innerText;
    let result = this.props.windows.filter((tab) => {
      return tab.title === event.target.innerText;
    });
    this.setState({selected: result[0]});
  }

  render() {
    return (
      <div>
        <h1>Tabs!!!</h1>
        <ul className = "tabs">
        {
          this.props.windows.map( (pane, idx) =>
            <h1 className = "header" onClick = {this.handleClick} key={idx}>{pane.title}</h1>)
        }
        </ul>
        <ul className = "content">
          <p>{this.state.selected.content}</p>
        </ul>
      </div>
    );
  }
}

export default Tab;
