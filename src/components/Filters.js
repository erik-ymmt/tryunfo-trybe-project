import React from 'react';
import PropTypes from 'prop-types';

class Filters extends React.Component {
  render() {
    const { onInputChange, trunfoFilter } = this.props;
    return (
      <>
        <label htmlFor="search-name-filter">
          Fitlro de Busca
          <input
            name="nameFilter"
            type="text"
            data-testid="name-filter"
            onChange={ onInputChange }
            placeholder="Nome da carta"
            disabled={ trunfoFilter }
          />
        </label>
        <label htmlFor="rarity">
          <select
            name="rareFilter"
            data-testid="rare-filter"
            onChange={ onInputChange }
            disabled={ trunfoFilter }
          >
            <option value="todas"> todas </option>
            <option value="normal"> normal </option>
            <option value="raro"> raro </option>
            <option value="muito raro"> muito raro </option>
          </select>
        </label>
        <label htmlFor="super-trunfo">
          Super Trunfo
          <input
            name="trunfoFilter"
            type="checkbox"
            data-testid="trunfo-filter"
            checked={ trunfoFilter }
            onChange={ onInputChange }
          />
        </label>
      </>
    );
  }
}

Filters.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  trunfoFilter: PropTypes.bool.isRequired,
};

export default Filters;
