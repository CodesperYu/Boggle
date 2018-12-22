import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      board: ['A', 'N', 'W', 'O',
              'T', 'M', 'F', 'S',
              'A', 'L', 'I', 'H',
              'U', 'S', 'B', 'V'
            ],
      solution: {
        'mantas': true,
        'manta': true,
        'mauls': true,
        'malt': true,
        'man': true,
        'malts': true,
        'maul': true,
        'miso': true,
        'milt': true,
        'mils': true,
        'mibs': true,
        'flat': true,
        'flam': true,
        'flus': true,
        'fish': true,
        'film': true,
        'fila': true,
        'fils': true,
        'fibs': true,
        'sown': true,
        'sima': true,
        'simas': true,
        'silt': true,
        'sisal': true,
        'sibs': true,
        'shim': true,
        'shiv': true,
        'hilt': true,
        'atma': true,
        'atman': true,
        'amis': true,
        'alma': true,
        'alif': true,
        'alifs': true,
        'albs': true,
        'lama': true,
        'lima': true,
        'liman': true,
        'limn': true,
        'limas': true,
        'libs': true,
        'hila': true,
        'hilus': true,
        'vias': true,
        'ulama': true,
        'salmi': true,
        'salmis': true,
        'saul': true,
        'sault': true,
        'slat': true,
        'slam': true,
        'slim': true,
        'sultan': true,
        'sulfo': true,
        'blat': true,
        'blam': true,
        'bima': true,
        'bimas': true,
        'visual': true,
      },
      select: '',
      selected: {},
      prev: '',
      acceptedWords: [],
      valids: {
        0: {1: true, 4: true, 5: true},
        1: {0: true, 4: true, 5: true, 2: true},
        2: {1: true, 3: true, 5: true, 6: true, 7:true},
        3: {2: true, 6: true, 7: true},
        4: {0: true, 1: true, 5: true, 8: true, 9: true},
        5: {0: true, 1: true, 2: true, 4: true, 6: true, 8: true, 9: true, 10: true},
        6: {1: true, 2: true, 3: true, 5: true, 7: true, 9: true, 10: true, 11: true},
        7: {2: true, 3: true, 6: true, 10: true, 11: true},
        8: {4: true, 5: true, 9: true, 12: true, 13: true},
        9: {4:true, 5: true, 6: true, 8: true, 10: true, 12: true, 13: true, 14: true},
        10: {7:true, 5: true, 6: true, 9: true, 11: true, 15: true, 13: true, 14: true},
        11: {6: true, 7: true, 10: true, 14: true, 15: true},
        12: {8: true, 9: true, 13: true},
        13: {8: true, 9: true, 10: true, 12: true, 14: true},
        14: {9: true, 10: true, 11: true, 13: true, 15:true},
        15: {10: true, 11: true, 14: true},
      }
    }
  }
  //adds an event listener to check answer and clear input
  componentDidMount() {
    document.addEventListener('keypress', (e) => {
      if (e.keyCode === 13) {
        this.checkAnswer()
        this.clearSelect()
      }
      e.preventDefault()
    })
  }
  //reset selected values
  clearSelect(e) { 
    this.setState({
      prev: '',
      select: '',
      selected: {}
    });
  }
  //check solutions
  checkAnswer() {
    let check = this.state.select.toLowerCase();
    let join
    if (this.state.solution.hasOwnProperty(check)) {
      join = this.state.acceptedWords.concat(check);
      this.setState({
        acceptedWords: join
      });
    };
    this.clearSelect()
  }
  //check if the selected value is valid
  checkValidClick(index) {
    let prev = this.state.prev
    if (!this.state.select.length) {
      return true
    }
    if (this.state.selected.hasOwnProperty(index) || !this.state.valids[prev].hasOwnProperty(index)) {
      return false
    }
    return true
  }
  //evnet listener for letter clicks
  selectLetter(e) {
    let index = e.currentTarget.value
    let newVal = this.state.select + e.currentTarget.innerText
    if (this.checkValidClick(index)) {
      let newSelected = this.state.selected
      newSelected[index] = true
      this.setState({
        prev: index,
        select: newVal,
        selected: newSelected
      });
    }
  }
  render() {
    return (
      <div className="App">
        <div className="Boggle">
          <div id='word'>
            {this.state.select}
          </div>
          <div className="Boggle-Board">
            {
              this.state.board.map((box, i) => {
                return (
                  <button type='button' className="box" key={i} value={i} onClick={this.selectLetter.bind(this)}> 
                    {box}
                  </button>
                )
              })
            }
          </div>
          <div className='solutions'>
            {
              this.state.acceptedWords.map((word, i) => {
                return <div key={i}> {word} </div>
              })
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
