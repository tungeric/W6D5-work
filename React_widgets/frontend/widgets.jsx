import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';
import Weather from './weather';
import AutoComplete from './autocomplete';
import Tab from './tab';

const NAMES = [
  'Darth Vader',
  'Han Solo',
  'Boba Fett',
  'C-3P0',
  'R2-D2',
  'Luke Skywalker',
  'Leia Organa',
  'Jabba the Hutt',
  'Wedge Antilles',
  'Lando Calrissian',
  'Chewbacca',
  'Obi-Wan Kenobi'
];

const WINDOWS = [
  { title: "The Teardown", content: "Trade Jrue Holiday for Nerlens Noel" },
  { title: "The Process", content: "Draft Embiid, Simmons, and Fultz" },
  { title: "The Fruit", content: "We gonna be championship" }
];

class Root extends React.Component {
  render() {
    return (
      <div>
        <Clock />
        <Weather />
        <AutoComplete names = {NAMES}/>
        <Tab windows = {WINDOWS}/>
      </div>
    );
  }
}

document.addEventListener('DOMContentLoaded', () =>{
  ReactDOM.render(<Root/>, document.getElementById('main'));
});
