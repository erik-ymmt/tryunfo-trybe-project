import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;

    return (
      <div className="card">
        <h3 data-testid="name-card">{ cardName }</h3>
        <div className="img-container">
          <img src={ cardImage } alt={ cardName } data-testid="image-card" />
        </div>
        <p data-testid="description-card"><em>{ cardDescription }</em></p>
        <div className="attr-container">
          <div data-testid="attr1-card" className="attr1-card">
            <div className="attr1">{ cardAttr1 }</div>
            &nbsp;Defesa
          </div>
          <div data-testid="attr2-card" className="attr2-card">
            <div className="attr2">{ cardAttr2 }</div>
            &nbsp;Meio-Campo
          </div>
          <div data-testid="attr3-card" className="attr3-card">
            <div className="attr3">{ cardAttr3 }</div>
            &nbsp;Ataque
          </div>
        </div>
        <div className="card-footer">
          <div data-testid="rare-card" className="rare-card">{ cardRare }</div>
          <div className="trunfo-card">
            { cardTrunfo
              ? <div data-testid="trunfo-card">&nbsp; | &nbsp; Super Trunfo </div>
              : <div />}
          </div>
        </div>
      </div>

    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
