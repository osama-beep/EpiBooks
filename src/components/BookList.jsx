import { Component } from "react";
import SingleBook from "./SingleBook";
import CommentArea from "./CommentArea";
import { Col, Form, Row, Container } from "react-bootstrap";

class BookList extends Component {
  state = {
    searchQuery: "",
    selectedBook: null,
  };

  handleBookSelect = (asin) => {
    this.setState({ selectedBook: asin });
  };
  render() {
    return (
      <Container fluid>
        <Row className="justify-content-center mt-5">
          <Col xs={12} md={4} className="text-center">
            <Form.Group>
              <Form.Control
                type="search"
                placeholder="Cerca un libro"
                value={this.state.searchQuery}
                onChange={(e) => this.setState({ searchQuery: e.target.value })}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={8}>
            <Row className="g-2 mt-3">
              {this.props.books
                .filter((b) =>
                  b.title.toLowerCase().includes(this.state.searchQuery.toLowerCase())
                )
                .map((b) => (
                  <Col xs={12} md={4} key={b.asin}>
                    <SingleBook 
                      book={b} 
                      selected={this.state.selectedBook === b.asin}
                      onSelect={this.handleBookSelect}
                    />
                  </Col>
                ))}
            </Row>
          </Col>
          <Col xs={12} md={4}>
            <CommentArea asin={this.state.selectedBook} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default BookList;

