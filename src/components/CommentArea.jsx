import { Component } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";
import Loading from "./Loading";
import Error from "./Error";

class CommentArea extends Component {
  state = {
    comments: [],
    isLoading: true,
    isError: false,
  };

  componentDidMount() {
    if (this.props.asin) {
      this.fetchComments();
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.asin !== this.props.asin) {
      this.fetchComments();
    }
  }

  fetchComments = async () => {
    if (!this.props.asin) {
      this.setState({ comments: [], isLoading: false, isError: false });
      return;
    }

    this.setState({ isLoading: true, isError: false });
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${this.props.asin}`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzViZWFlNWQyMjA3MTAwMTVkZTJmMzAiLCJpYXQiOjE3MzY3NzcxMDcsImV4cCI6MTczNzk4NjcwN30.f7zoyAoGjkTykUlSherIB81gcwTpksqXFL2enENAOQY",
          },
        }
      );
      if (response.ok) {
        let comments = await response.json();
        this.setState({ comments, isLoading: false, isError: false });
      } else {
        this.setState({ isLoading: false, isError: true });
      }
    } catch (error) {
      console.log(error);
      this.setState({ isLoading: false, isError: true });
    }
  };

  render() {
    return (
      <div className="text-center">
        {this.state.isLoading && <Loading />}
        {this.state.isError && <Error />}
        {this.props.asin ? (
          <>
            <AddComment asin={this.props.asin} />
            <CommentList commentsToShow={this.state.comments} />
          </>
        ) : (
          <p>Seleziona un libro per vedere i commenti</p>
        )}
      </div>
    );
  }
}

export default CommentArea;
