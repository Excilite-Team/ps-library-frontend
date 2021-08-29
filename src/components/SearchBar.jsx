import '../styles/searchbar.css';
import { Row, Col } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';

export default function SearchBar() {
    return (
        <div className="searchbar">
            <form action="/search" method="GET">
                <Row>
                    <Col sm={10}>
                        <input type="text" placeholder="Search..." name="query" />
                    </Col>
                    <Col sm={2}>
                        <button type="submit">
                            <FaSearch />&nbsp;Qidirish
                        </button>
                    </Col>
                </Row>
            </form>
        </div>
    )
}