import React from "react";
import api from "../api";
import Layout from '../components/Layout';
import NavBar from '../components/Navbar';
import ListBooks from '../components/ListBooks';
import { useParams } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

export default function Category() {
    const { name } = useParams();
    const [books, setBooks] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        let fetchCategory = async () => {
            const { success, data } = await api.get(`/books?genre=${name.toLowerCase()}`);
            if (success) {
                setBooks(data?.data);
            } else {
                console.log(data);
            }
            setLoading(false);
        };
        fetchCategory();
    }, [name, books, loading]);

    return (
        <Layout title={"Category " + name.toLowerCase()}>
            <NavBar />
            <hr />
            {
                loading
                ?
                <div className="loader">
                    <Spinner animation="border" variant="primary" />
                </div>
                :
                <ListBooks books={books} />
            }
        </Layout>
    )
}