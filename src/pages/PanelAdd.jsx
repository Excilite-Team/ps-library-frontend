import React from 'react';
import '../styles/auth.css';
import Layout from '../components/Layout';
import { Form, Button, Row, Col } from 'react-bootstrap';
import api from '../api';

export default function Paneladd() {
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(
            e.target
        );
        let formdata = {
            name: form.get("name"),
            author: form.get("author"),
            genre: form.get("genre"),
            image: form.get("image"),
            isAvailable: true
        };
        let addBook = async (book) => {
            const { success, data } = await api.post('/books/new', book, { auth: true });
            if (success) {
                return alert("Yangi kitob muvaffaqiyatli qo'shildi");
            } else {
                console.log(data);
                return alert("Noma'lum xatolik yuz berdi. Iltimos yana bir bor urinib ko'ring.");
            }
        }
        addBook(formdata);
    }

    return (
        <Layout title={'Yangi kitob'}>
            <Row className={'mx-2 px-2'}>
                <Col sm={12} md={8} lg={6} className={'mx-auto my-5'}>
                    <Form onSubmit={handleSubmit} className={'text-center my-3 p-5 auth'}>
                        <Form.Group className={'mb-3'} controlId={'book-name'}>
                            <Form.Label>Kitob nomi*:</Form.Label>
                            <Form.Control required type="text" name="name" placeholder={'Nomni kiriting'} />
                        </Form.Group>
                        <Form.Group className={'mb-3'} controlId={'book-author'}>
                            <Form.Label>Yozuvchi*:</Form.Label>
                            <Form.Control required type="text" name="author" placeholder={'Yozuvchi ismini kiriting'} />
                        </Form.Group>
                        <Form.Group className={'mb-3'} controlId={'book-genre'}>
                            <Form.Label>Kitob janri*:</Form.Label>
                            <Form.Select required name="genre" defaultValue={'default'}>
                                <option disabled value="default">Kategoriyani tanlang</option>
                                <option>sarguzasht</option>
                                <option>fantastika</option>
                                <option>romantika</option>
                                <option>komediya</option>
                                <option>klassika</option>
                                <option>detektiv</option>
                                <option>biznes</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className={'mb-3'} controlId={'book-image'}>
                            <Form.Label>Kitob rasmi*:</Form.Label>
                            <Form.Control required as="textarea" rows={3} name="image" placeholder={'Rasm manzilini kiriting'} />
                        </Form.Group>
                        <Button type="submit" variant="primary" className={'mb-3'}>
                            Qo'shish
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Layout>
    )
}