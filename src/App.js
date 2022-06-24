import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName="teste"
          cardDescription="teste"
          cardAttr1
          cardAttr2
          cardAttr3
          cardImage="teste"
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
