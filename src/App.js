import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();

    this.handleInput = this.handleInput.bind(this);
    this.saveCard = this.saveCard.bind(this);

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      deck: [],
    };
  }

  handleInput({ target }) {
    const { name, value, type, checked } = target;
    const finalValue = type === 'checkbox' ? checked : value;
    this.setState({
      [name]: finalValue,
    }, this.enableSaveBtn);
  }

  validatesTextInput() {
    const { cardName, cardDescription,
      cardImage, cardRare } = this.state;
    if (
      cardName.length > 0
      && cardDescription.length > 0
      && cardImage.length > 0
      && cardRare.length > 0
    ) {
      return true;
    }
  }

  validatesAttrInput() {
    const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const maxAttribute = 90;
    const maxAttributeSum = 210;
    const attrSum = parseInt(cardAttr1, 10)
      + parseInt(cardAttr2, 10)
      + parseInt(cardAttr3, 10);
    if (cardAttr1 <= maxAttribute && cardAttr1 >= 0
      && cardAttr2 <= maxAttribute && cardAttr2 >= 0
      && cardAttr3 <= maxAttribute && cardAttr3 >= 0
      && attrSum <= maxAttributeSum) {
      return true;
    }
  }

  enableSaveBtn() {
    if (this.validatesTextInput() && this.validatesAttrInput()) {
      this.setState({ isSaveButtonDisabled: false });
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }
  }

  createNewCard() {
    const {
      cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo,
      isSaveButtonDisabled,
    } = this.state;
    return {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      isSaveButtonDisabled,
    };
  }

  resetInputs() {
    return 1;
  }

  saveCard() {
    const { deck } = this.state;
    this.setState({
      deck: [...deck, this.createNewCard()],
    });
  }

  render() {
    const {
      cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, hasTrunfo, cardTrunfo,
      isSaveButtonDisabled,
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
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.handleInput }
          onSaveButtonClick={ this.saveCard }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
      </div>
    );
  }
}

export default App;
