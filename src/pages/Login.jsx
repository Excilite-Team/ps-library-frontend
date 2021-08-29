import React from 'react';
import '../styles/auth.css';
import Layout from '../components/Layout';
import { Link, useHistory } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import api from '../api';

export default function Login() {
    const history = useHistory();
    const [hidden, setHidden] = React.useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(
            e.target
        );
        let data = {
            email: form.get("email"),
            password: form.get("password")
        };
        let loginApi = async () => {
            const { success, data: res } = await api.post('/users/login', data);
            if (success) {
                if (res?.status === 200) {
                    api.setToken(res.data);
                    history.push('/');
                }
            } else {
                console.log(res);
                alert("Email va parol to'g'ri ekaniga ishonch hosil qiling!");
            }
        };
        loginApi();
    }

    return (
        <Layout title={'Login'}>
            <Row className={'mx-2 px-2 py-5 my-5'}>
                <Col sm={12} md={8} lg={5} className={'mx-auto my-5'}>
                    <Form onSubmit={handleSubmit} className={'text-center my-3 p-5 auth'}>
                        <Form.Group className={'mb-3'} controlId={'login-email'}>
                            <Form.Label>Email*:</Form.Label>
                            <Form.Control type="email" name="email" placeholder={'Emailni kiriting'} />
                            {/* <Form.Text className="text-muted">
                            Biz hech qachon emailingizni boshqa birov ko'rishiga yo'l qo'ymaymiz
                        </Form.Text> */}
                        </Form.Group>
                        <Form.Group className={'mb-3'} controlId={'login-password'}>
                            <Form.Label>Parol*:</Form.Label>
                            <Form.Control type={hidden ? "password" : "text"} name="password" placeholder={'Parolni kiriting'} />
                        </Form.Group>
                        <Form.Group className={'mb-3 text-start'} controlId={'login-checkbox'}>
                            <Form.Check type="checkbox" label="Parolni ko'rsatish" onChange={() => setHidden(!hidden)} />
                        </Form.Group>
                        <Button type="submit" variant="primary" className={'mb-3'}>
                            Kirish
                        </Button>
                        <Form.Text className={'text-muted text-center'}>
                            <p>Ro'yhatdan o'tmaganmisiz? Marhamat, <Link to={'/auth/register'}>ro'yhatdan o'ting!</Link></p>
                            <p><Link to={'/'}>Ortga</Link></p>
                        </Form.Text>
                    </Form>
                </Col>
            </Row>
        </Layout>
    )
}