import '../styles/logo.css';
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';

export default function Logo() {
    return (
        <div className="logo-outer mb-3 mb-sm-0">
            <Link to={'/'}>
                <Row className={'logo'}>
                    <Col sm={12} lg={4}>
                        <img src={'/logo.png'} alt="" />
                    </Col>
                    <Col sm={8} className="d-none d-sm-none d-lg-block">
                        <h3>PS LIBRARY</h3>
                    </Col>
                </Row>
            </Link>
        </div>
    )
}