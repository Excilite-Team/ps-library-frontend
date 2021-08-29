import '../styles/navbar.css';
import { Col, Row } from "react-bootstrap";
import SearchBar from "./SearchBar";
import AuthBar from "./AuthBar";
import Logo from "./Logo";

export default function NavBar() {
    return (
        <Row className="navbar">
            <Col sm={2}>
                <Logo />
            </Col>
            <Col sm={8}>
                <SearchBar />
            </Col>
            <Col sm={2}>
                <AuthBar />
            </Col>
        </Row>
    )
}