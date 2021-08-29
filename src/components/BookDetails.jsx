import React from 'react';
import { Modal, Row, Col, Badge, Button } from 'react-bootstrap';
import Genre from './Genre';
import api from '../api';

export default function BookDetails({ book, show, onHide }) {
    const [disabled, setDisabled] = React.useState(false);

    const handleSubmit = (e) => {
        let submit = async () => {
            let { success, data } = await api.post(`/orders/new`, {
                bookId: book.bookID
            }, {
                auth: true
            });
            if (success) {
                setDisabled(true);
                alert("So'rov muvaffaqiyatli yuborildi!");
            } else {
                console.log(data);
            }
        }
        submit();
    }
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title"
            centered
            className={'book-details'}
        >
            <Modal.Header closeButton>
                <Modal.Title id="container-modal-title">Kitob haqida</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row>
                    <Col className="text-center">
                        <div className={'book-image p-4'}>
                            <img src={book.image} width="200px" height="350px" alt="" />
                        </div>
                    </Col>
                    <Col>
                        <h4 className={'mb-2'}>
                            <b>Nomi: </b>{book.name}
                        </h4>
                        <h4 className={'mb-2'}>
                            <b>Janri: </b><Genre genre={book.genre} />
                        </h4>
                        <h4 className={'mb-3'}>
                            <b>Yozuvchi: </b>{book.author}
                        </h4>
                        <h4 className={'mb-5'}>
                            <b>Holati: </b>
                            <Badge pill bg={book.isAvailable ? "success" : "danger"}>
                                {
                                    book.isAvailable ? "Mavjud" : "Mavjud emas"
                                }
                            </Badge>
                        </h4>
                        <Button variant="primary" disabled={!book.isAvailable || disabled} onClick={handleSubmit}>Navbatga yozilish</Button>
                    </Col>
                </Row>
            </Modal.Body>
        </Modal>
    )
}