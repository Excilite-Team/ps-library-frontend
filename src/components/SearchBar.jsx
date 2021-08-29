import '../styles/searchbar.css';
import { Row, Col } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';

export default function SearchBar() {
    return (
        <div className="searchbar mb-3 mb-sm-0">
            <form action="/search" method="GET">
                <Row>
                    <Col sm={10} className={'col-10'}>
                        <input type="text" placeholder="Search..." name="query" />
                    </Col>
                    <Col sm={2} className={'col-2'}>
                        <button type="submit">
                            <FaSearch />
                            &nbsp;
                            <span className="d-none d-sm-none d-lg-block">Qidirish</span>
                        </button>
                    </Col>
                </Row>
            </form>
        </div>
    )
}