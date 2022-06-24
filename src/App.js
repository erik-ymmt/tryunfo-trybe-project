import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();

    this.handleInput = this.handleInput.bind(this);

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      // cardTrunfo: '',
    };
  }

  handleInput({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const {
      cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, hasTrunfo,
      // cardTrunfo, isSaveButtonDisabled,
    } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled
          onInputChange={ this.handleInput }
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
