import { Card, Row, Col, Container } from "react-bootstrap";

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

const AllTheBooks = () => {
  return (
    <Container className="my-4">
      <Row>
        {allBooks.map((book) => (
          <Col key={`${book.genre}-${book.id}`} xs={12} sm={6} md={4} lg={3}>
            <Card className="mb-4 shadow-sm">
              <Card.Img
                variant="top"
                src={book.img}
                alt={book.title}
                style={{ height: "300px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Subtitle className="text-muted mb-2">
                  {book.genre}
                </Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AllTheBooks;
