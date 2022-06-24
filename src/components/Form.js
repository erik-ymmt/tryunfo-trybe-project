import React from 'react';

class Form extends React.Component {
  render() {
    const {
      cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, hasTrunfo, isSaveButtonDisabled,
      onInputChange, onSaveButtonClick 
    } = this.props;
    return (
      <div className="form-container">
        <label htmlFor="name">
          Nome
          <input
            type="text"
            data-testid="name-input"
            value={ cardDescription }
          />
        </label>
        <label htmlFor="description">
          Descrição
          <textarea
            data-testid="description-input"
          />
        </label>
        <label htmlFor="attr1">
          Atributo1
          <input
            type="number"
            data-testid="attr1-input"
          />
        </label>
        <label htmlFor="attr2">
          Atributo2
          <input
            type="number"
            data-testid="attr2-input"
          />
        </label>
        <label htmlFor="attr3">
          Atributo3
          <input
            type="number"
            data-testid="attr3-input"
          />
        </label>
        <label htmlFor="img">
          URL da Imagem
          <input
            type="text"
            data-testid="image-input"
          />
        </label>
        <label htmlFor="rarity">
          Raridade
          <select data-testid="rare-input" id="rarity">
            <option value="normal"> normal </option>
            <option value="raro"> raro </option>
            <option value="muito raro"> muito raro </option>
          </select>
        </label>
        <label htmlFor="super-trunfo">
          Super Trunfo
          <input
            type="checkbox"
            data-testid="trunfo-input"
          />
        </label>
        <button
          type="button"
          data-testid="save-button"
        >
          Salvar
        </button>
      </div>
    );
  }
}

export default Form;
