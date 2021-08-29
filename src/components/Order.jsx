import React from 'react';
import api from '../api';
import { Spinner, Card, Button, Badge, Row, Col } from 'react-bootstrap';
import BookDetails from './BookDetails';
import { useHistory } from 'react-router-dom';

export default function Order({ order, isAdmin = false }) {
    const history = useHistory();
    const [book, setBook] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
    const [isModalOpened, setIsModalOpened] = React.useState(false);

    React.useEffect(() => {
        let fetchBook = async () => {
            const { success, data } = await api.get('/books/' + order.bookId);
            if (success) {
                setBook(data.data);
            } else {
                console.log(data);
                alert('Qandaydir xatolik yuz berdi, iltimos sahifani yangilang!');
            }
            setLoading(false);
        }
        fetchBook();
    }, [order.bookId]);

    const handleCancel = (e) => {
        if (!isAdmin) {
            e.preventDefault();
        }
        let completeOrder = async () => {
            const { success, data } = await api.put(`/orders/${order._id}/cancel`, {}, { auth: true });
            if (success) {
                alert("So'rov bekor qilindi!");
                return history.push('/panel');
            } else {
                console.log(data);
                return alert("Noma'lum xatolik yuz berdi. Iltimos yana bir bor urinib ko'ring.");
            }
        }
        completeOrder();
    }

    const handleAccept = (e) => {
        if (!isAdmin) {
            e.preventDefault();
        }
        let acceptOrder = async () => {
            const { success, data } = await api.put(`/orders/${order._id}/accept`, {}, { auth: true });
            if (success) {
                alert("So'rov qabul qilindi!");
                return history.push('/panel');
            } else {
                console.log(data);
                return alert("Noma'lum xatolik yuz berdi. Iltimos yana bir bor urinib ko'ring.");
            }
        }
        acceptOrder();
    }

    const handleComplete = (e) => {
        if (!isAdmin) {
            e.preventDefault();
        }
        let completeOrder = async () => {
            const { success, data } = await api.delete(`/orders/${order._id}/complete`, { auth: true });
            if (success) {
                alert("So'rov muvaffaqiyatli tugatildi!");
                return history.push('/panel');
            } else {
                console.log(data);
                return alert("Noma'lum xatolik yuz berdi. Iltimos yana bir bor urinib ko'ring.");
            }
        }
        completeOrder();
    }

    return (
        <>
            {
                loading
                    ?
                    <div className="loader">
                        <Spinner animation="border" variant="primary" />
                    </div>
                    :
                    <div className={"order text-center p-3 d-inline-block col-6 col-md-4 col-lg-3"}>
                        <Card>
                            <Card.Header className={'bg-primary color'}>
                                <h4>{book.name.slice(0, 12)}...</h4>
                            </Card.Header>
                            <Card.Body>
                                <p>Oxirgi muddat: {new Date(order.until).toLocaleDateString()}</p>
                                {
                                    order.isCancelled
                                        ?
                                        <Badge pill bg="danger">Bekor qilingan</Badge>
                                        :
                                        (order.isAccepted
                                            ?
                                            <Badge pill bg="success">Ruxsat berilgan</Badge>
                                            :
                                            <Badge pill bg="warning">Yuborilgan</Badge>
                                        )
                                }
                                <br />
                            </Card.Body>
                            <Card.Footer>
                                <Button variant={'primary'} onClick={() => setIsModalOpened(true)}>Kitob haqida</Button>
                                <BookDetails
                                    book={book}
                                    show={isModalOpened}
                                    onHide={() => setIsModalOpened(false)}
                                />
                                {
                                    isAdmin
                                        ?
                                        <>
                                            <br />
                                            <br />
                                            {
                                                !(order.isCancelled || order.isAccepted)
                                                ?
                                                <Row>
                                                    <Col sm={6}>
                                                        <Button variant={'success'} onClick={handleAccept}>Accept</Button>
                                                    </Col>
                                                    <Col sm={6}>
                                                        <Button variant={'danger'} onClick={handleCancel}>Cancel</Button>
                                                    </Col>
                                                </Row>
                                                :
                                                <Button variant={'success'} onClick={handleComplete}>Complete</Button>
                                            }
                                        </>
                                        :
                                        <>
                                        </>
                                }
                            </Card.Footer>
                        </Card>
                    </div>
            }
        </>
    )
}