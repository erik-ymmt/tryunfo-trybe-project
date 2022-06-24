import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();

    this.handleInput = this.handleInput.bind(this);

    // this.state = {
    //   cardName: '',
    //   cardDescription: '',
    //   cardAttr1: '',
    //   cardAttr2: '',
    //   cardAttr3: '',
    //   cardImage: '',
    //   cardRare: '',
    //   cardTrunfo: '',
    // };
  }

  handleInput() {
    this.setState(

    );
  }

  render() {
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ this.handleInput }
          cardDescription
          cardAttr1
          cardAttr2
          cardAttr3
          cardImage
          cardRare
          cardTrunfo
          hasTrunfo
          isSaveButtonDisabled
          onInputChange
          onSaveButtonClick
        />
        <Card
          cardName
          cardDescription
          cardAttr1
          cardAttr2
          cardAttr3
          cardImage
          cardRare
          cardTrunfo
        />
      </div>
    );
  }
}

export default App;
