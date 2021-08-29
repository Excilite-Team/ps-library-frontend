import React from "react";
import api from "../api";
import Layout from '../components/Layout';
import ListBooks from '../components/ListBooks';
import { Spinner } from 'react-bootstrap';

export default function PanelBooks() {
    const [books, setBooks] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        let fetchBooks = async () => {
            const { success, data } = await api.get(`/books`, {}, { auth: true });
            if (success) {
                setBooks(data?.data);
            } else {
                console.log(data);
            }
            setLoading(false);
        };
        fetchBooks();
    }, []);

    return (
        <Layout title="Mavjud kitoblar">
            <div className={'py-3'}>
                {
                    loading
                        ?
                        <div className="loader">
                            <Spinner animation="border" variant="primary" />
                        </div>
                        :
                        <ListBooks books={books} />
                }
            </div>
        </Layout>
    )
}