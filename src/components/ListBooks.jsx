import '../styles/books-list.css';
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { ImSleepy } from 'react-icons/im';
import Book from './Book';

export default function ListBooks({ books }) {
    let [filteredBooks, setFilteredBooks] = React.useState(books);
    let [categories, setCategories] = React.useState([]);

    React.useEffect(() => {
        let result = [];
        for (let book of books) {
            if (!result.includes(book.genre)) {
                result.push(book.genre);
            }
        }
        setCategories(result);
    }, [books]);


    const handleFilter = (event) => {
        let category = event.target.value;
        if (categories.includes(category)) {
            let result = books.filter(book => book.genre === category);
            setFilteredBooks(result);
        }
    }

    return (
        <div className='books-list'>
            <FilterArea categories={categories} onFilter={handleFilter} />
            {
                filteredBooks?.length > 0
                    ?
                    filteredBooks?.map(book => (
                        <Book key={book.bookID} book={book} />
                    ))
                    :
                    <h4 className={'text-secondary text-center p-5'}>Birorta ham kitob topilmadi. Zerikarli... <ImSleepy /></h4>
            }
        </div>
    )
}

function FilterArea({ categories, onFilter }) {
    return (
        <div className="books-filter">
            <Row>
                <Col sm={8} md={10}>
                    <h3 className={'mx-5 my-auto'}>
                        Kitoblar
                    </h3>
                </Col>
                <Col sm={4} md={2}>
                    <div className="select">
                        <select onChange={onFilter} defaultValue={"Janr"}>
                            <option disabled>Janr</option>
                            {
                                categories.map(category => (
                                    <option key={category}>{category}</option>
                                ))
                            }
                        </select>
                    </div>
                </Col>
            </Row>
        </div>
    )
}