import '../styles/navbar.css';
import { Col, Row } from "react-bootstrap";
import SearchBar from "./SearchBar";
import AuthBar from "./AuthBar";
import Logo from "./Logo";

export default function NavBar() {
    return (
        <Row className="navbar">
            <Col sm={2} className={'col-12'}>
                <Logo />
            </Col>
            <Col sm={6} lg={8} className={'col-12 px-3 px-sm-0'}>
                <SearchBar />
            </Col>
            <Col sm={4} md={2} className={'col-12'}>
                <AuthBar />
            </Col>
        </Row>
    )
}