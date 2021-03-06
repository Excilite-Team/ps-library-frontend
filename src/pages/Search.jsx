import React from "react";
import api from "../api";
import useQuery from "../hooks/useQuery"
import Layout from '../components/Layout';
import NavBar from '../components/Navbar';
import ListBooks from '../components/ListBooks';
import { Spinner } from 'react-bootstrap';

export default function Search(props) {
    const query = useQuery().get("query");
    const [books, setBooks] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        let fetchCategory = async () => {
            const { success, data } = await api.get(`/books?name=${query}`);
            if (success) {
                setBooks(data?.data);
            } else {
                console.log(data);
            }
            setLoading(false);
        };
        fetchCategory();
    }, [query, books, loading]);

    return (
        <Layout title={`Search results - ${query}`}>
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