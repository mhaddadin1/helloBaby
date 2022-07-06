import Auth from "../../utils/auth";
import { Card } from "react-bootstrap";
import "./style.css";

const Header = () => {
  return (
    <>
      <header>
        <Card className="circle">
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
          </Card.Body>
        </Card>
      </header>
    </>
  );
};

export default Header;
