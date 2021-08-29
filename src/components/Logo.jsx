import '../styles/logo.css';
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';

export default function Logo() {
    return (
        <div className="logo-outer">
            <Link to={'/'}>
                <Row className={'logo'}>
                    <Col sm={4}>
                        <img src={'/logo.png'} alt="" />
                    </Col>
                    <Col sm={8}>
                        <h3>PS LIBRARY</h3>
                    </Col>
                </Row>
            </Link>
        </div>
    )
}