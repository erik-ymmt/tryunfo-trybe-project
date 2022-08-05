import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const {
      cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, hasTrunfo, isSaveButtonDisabled,
      onInputChange, onSaveButtonClick,
    } = this.props;
    return (
      <div className="form-container">
        <label htmlFor="name">
          Nome
          <input
            name="cardName"
            type="text"
            data-testid="name-input"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="description">
          Descrição
          <textarea
            name="cardDescription"
            data-testid="description-input"
            value={ cardDescription }
            onChange={ onInputChange }
            className="card-decription"
            maxLength="34"
          />
        </label>
        <label htmlFor="attr1">
          Defesa
          <input
            name="cardAttr1"
            type="number"
            data-testid="attr1-input"
            value={ cardAttr1 }
            onChange={ onInputChange }
            placeholder="0 ~ 90"
          />
        </label>
        <label htmlFor="attr2">
          Meio-Campo
          <input
            name="cardAttr2"
            type="number"
            data-testid="attr2-input"
            value={ cardAttr2 }
            onChange={ onInputChange }
            placeholder="0 ~ 90"
          />
        </label>
        <label htmlFor="attr3">
          Ataque
          <input
            name="cardAttr3"
            type="number"
            data-testid="attr3-input"
            value={ cardAttr3 }
            onChange={ onInputChange }
            placeholder="0 ~ 90 (soma máx.das skills = 210)"
          />
        </label>
        <label htmlFor="img">
          Imagem (URL)
          <input
            name="cardImage"
            type="text"
            data-testid="image-input"
            value={ cardImage }
            onChange={ onInputChange }
            placeholder="URL da Imagem"
          />
        </label>
        <label htmlFor="rarity">
          Raridade
          <select
            name="cardRare"
            data-testid="rare-input"
            id="rarity"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal"> normal </option>
            <option value="raro"> raro </option>
            <option value="muito raro"> muito raro </option>
          </select>
        </label>
        <div>
          { !hasTrunfo
            ? (
              <label htmlFor="super-trunfo" className="trunfo-container">
                <input
                  name="cardTrunfo"
                  type="checkbox"
                  data-testid="trunfo-input"
                  checked={ cardTrunfo }
                  onChange={ onInputChange }
                  className="trunfo-checkbox"
                />
                Super Trunfo
              </label>
            )
            : <p>Você já tem um Super Trunfo em seu baralho</p> }
        </div>
        <button
          type="button"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </div>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
