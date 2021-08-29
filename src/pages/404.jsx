import '../styles/404.css';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'

export default function NotFound() {
    return (
        <div className="not-found">
            <Row>
                <Col>
                    <img src="/404.png" alt="" />
                </Col>
                <Col>
                    <div className="content">
                        <h1>AWWW...DON'T CRY</h1>
                        <h4>It's just a 404 error</h4>
                        <p>What you're looking for may have been misplaced in Long Term Memory</p>
                        <Link to={'/'}>Don't you wanna take a journey?</Link>
                    </div>
                </Col>
            </Row>
        </div>
    )
}