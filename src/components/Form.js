import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div className="form-container">
        <label htmlFor="name">
          Nome
          <input
            type="text"
            data-testid="name-input"
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
            type="text"
            data-testid="attr1-input"
          />
        </label>
        <label htmlFor="attr2">
          Atributo1
          <input
            type="text"
            data-testid="attr2-input"
          />
        </label>
        <label htmlFor="attr3">
          Atributo1
          <input
            type="text"
            data-testid="attr3-input"
          />
        </label>
      </div>
    );
  }
}

export default Form;
