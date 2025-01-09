import React, { useState } from 'react';
import { Row, Col, Container, Form } from 'react-bootstrap';
import SingleBook from './SingleBook';
import fantasy from "../data/fantasy.json";
import horror from "../data/horror.json";
import history from "../data/history.json";
import romance from "../data/romance.json";
import scifi from "../data/scifi.json";

const allBooks = [
  ...fantasy.map((book) => ({ ...book, genre: "Fantasy" })),
  ...horror.map((book) => ({ ...book, genre: "Horror" })),
  ...history.map((book) => ({ ...book, genre: "History" })),
  ...romance.map((book) => ({ ...book, genre: "Romance" })),
  ...scifi.map((book) => ({ ...book, genre: "Sci-Fi" })),
];

const BookList = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredBooks = allBooks.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container className="my-4">
      <Row className="my-3">
        <Col>
          <Form.Control
            type="text"
            placeholder="Search books..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Col>
      </Row>
      <Row>
        {filteredBooks.map((book) => (
          <Col key={`${book.genre}-${book.asin}`} xs={12} sm={6} md={4} lg={3}>
            <SingleBook book={book} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BookList;

