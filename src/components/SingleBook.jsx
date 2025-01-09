import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';

const SingleBook = ({ book }) => {
  const [selected, setSelected] = useState(false);

  const toggleSelected = () => {
    setSelected(!selected);
  };

  return (
    <Card 
      className="mb-4 shadow-sm" 
      style={{ 
        width: '18rem',
        border: selected ? '3px solid red' : 'none'
      }}
    >
      <Card.Img
        variant="top"
        src={book.img}
        alt={book.title}
        style={{ height: '300px', objectFit: 'cover', cursor: 'pointer' }}
        onClick={toggleSelected}
      />
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        <Card.Text>
          <strong>Price: ${book.price.toFixed(2)}</strong>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

SingleBook.propTypes = {
  book: PropTypes.shape({
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};
export default SingleBook;

