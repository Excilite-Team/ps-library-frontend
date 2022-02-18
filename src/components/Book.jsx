import '../styles/books.css';
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import BookDetails from './BookDetails';

export default function Book({ book }) {
    const [isModalOpened, setIsModalOpened] = React.useState(false);

    const goToPdf = () => {
        window.open(book.pdf, '_blank');
    }

    return (
        <div className={'book col-12 px-5 px-sm-2 col-sm-6 col-md-4 col-lg-3 p-3'}>
            <Card>
                <div className={'p-4'}>
                    <Card.Img variant="top" src={book.image} />
                </div>
                <Card.Body className={'text-center'}>
                    <Card.Title className={'title-focus'} onClick={() => setIsModalOpened(true)}>{book.name.slice(0, 15)}...</Card.Title>
                    <Card.Text className="text-secondary">{book.author}</Card.Text>
                    {/* <Genre genre={book.genre} />
                <br />
                <br /> */}
                    {/* <Button variant="primary" onClick={() => setIsModalOpened(true)}>
                        Batafsil
                    </Button> */}
                    <Button variant="success" onClick={goToPdf}>
                        Elektron format
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