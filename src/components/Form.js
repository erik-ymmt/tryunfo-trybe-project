import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <label htmlFor="name">
        Nome
        <input
          type="text"
          data-testid="name-input"
        />
      </label>
    );
  }
}

export default Form;
