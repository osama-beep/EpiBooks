import { Alert } from "react-bootstrap";

const Welcome = () => {
  return (
    <div className="text-center my-4">
      <Alert variant="success">
        <h1>Welcome to EpiBooks!</h1>
        <p>Your personal book store.</p>
      </Alert>
    </div>
  );
};

export default Welcome;
