import React from 'react';
import '../styles/auth.css';
import Layout from '../components/Layout';
import { Link, useHistory } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import api from '../api';

export default function Register() {
    const history = useHistory();
    const [hidden, setHidden] = React.useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(
            e.target
        );
        let data = {
            name: form.get("name"),
            email: form.get("email"),
            password: form.get("password")
        };
        if (data.name.length < 3 || data.password.length < 8) {
            return alert("Ismingiz(kamida 3 harf) va parolni(kamida 8 harf) to'g'ri yozganingizni tekshiring!")
        }
        let registerApi = async () => {
            const { success, res } = await api.post('/users/register', data);
            if (success) {
                history.push('/auth/login');
            } else {
                console.log(res);
                alert('Something went wrong. Please, try again');
            }
        };
        registerApi();
    }

    return (
        <Layout title={'Registratsiya'}>
            <Row className={'m-5 p-5'}>
                <Col sm={12} md={6} lg={6} className={'mx-auto my-5'}>
                    <Form onSubmit={handleSubmit} className={'text-center my-3 p-5 auth'} autoComplete={'off'}>
                        <Form.Group className={'mb-3'} controlId={'register-name'}>
                            <Form.Label>Ism, familiyangiz*:</Form.Label>
                            <Form.Control type="text" name="name" placeholder={'Ismingizni kiriting'} />
                        </Form.Group>
                        <Form.Group className={'mb-3'} controlId={'register-email'}>
                            <Form.Label>Email*:</Form.Label>
                            <Form.Control type="email" name="email" placeholder={'Emailni kiriting'} />
                            {/* <Form.Text className="text-muted">
                                Biz hech qachon emailingizni boshqa birov ko'rishiga yo'l qo'ymaymiz
                            </Form.Text> */}
                        </Form.Group>
                        <Form.Group className={'mb-3'} controlId={'register-password'}>
                            <Form.Label>Parol*:</Form.Label>
                            <Form.Control type={hidden ? "password" : "text"} name="password" placeholder={'Parolni kiriting'} />
                        </Form.Group>
                        <Form.Group className={'mb-3 text-start'} controlId={'register-checkbox'}>
                            <Form.Check type="checkbox" label="Parolni ko'rsatish" onChange={() => setHidden(!hidden)} />
                        </Form.Group>
                        <Button type="submit" variant="primary" className={'mb-3'}>
                            Ro'yhatdan o'tish
                        </Button>
                        <Form.Text className={'text-muted text-center'}>
                            <p>Allaqachon ro'yhatdan o'tganmisiz? Marhamat, <Link to={'/auth/login'}>tizimga kiring!</Link></p>
                            <p><Link to={'/'}>Ortga</Link></p>
                        </Form.Text>
                    </Form>
                </Col>
            </Row>
        </Layout>
    )
}