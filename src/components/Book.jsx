import '../styles/books.css';
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import BookDetails from './BookDetails';

export default function Book({ book }) {
    const [isModalOpened, setIsModalOpened] = React.useState(false);
    return (
        <div className={'book col-6 col-md-4 col-lg-3 p-3'}>
            <Card>
                <Card.Img variant="top" src={book.image} />
                <Card.Body className={'text-center'}>
                    <Card.Title>{book.name.slice(0, 15)}...</Card.Title>
                    <Card.Text className="text-secondary">{book.author}</Card.Text>
                    {/* <Genre genre={book.genre} />
                <br />
                <br /> */}
                    <Button variant="primary" onClick={() => setIsModalOpened(true)}>
                        Batafsil
                    </Button>
                    <BookDetails
                        book={book}
                        show={isModalOpened}
                        onHide={() => setIsModalOpened(false)}
                    />
                </Card.Body>
            </Card>
        </div>
    )
}