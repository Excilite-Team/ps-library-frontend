import React from 'react';
import Layout from "../components/Layout"
import NavBar from "../components/Navbar"
import Slider from "../components/Slider"
import ListBooks from '../components/ListBooks';
import api from '../api';
import Spinner from 'react-bootstrap/Spinner';
import Genres from '../components/Genres';

export default class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            books: [],
            loading: true
        };
    }

    componentDidMount() {
        let fetchBooks = async () => {
            let { success, data } = await api.get('/books');
            if (success) {
                this.setState({ books: data.data });
            } else {
                console.log(data);
            }
            this.setState({ loading: false });
        }
        fetchBooks();
    }
    render() {
        return (
            <Layout>
                <NavBar />
                <Slider />
                <Genres />
                <hr />
                <br />
                {
                    this.state.loading
                        ?
                        <div className="loader">
                            <Spinner animation="border" variant="primary" />
                        </div>
                        :
                        <ListBooks books={this.state.books} />
                }
            </Layout>
        )
    }
}