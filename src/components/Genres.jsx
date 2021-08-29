import '../styles/genres.css';
import React from 'react';
import Genre from './Genre';
import api from '../api';
import { Spinner } from 'react-bootstrap';

export default function Genres() {
    const [genres, setGenres] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        let getGenres = async () => {
            const { success, data } = await api.get('/genres');
            if (success) {
                setGenres(data.data);
            } else {
                console.log(data);
                alert(`Qandaydir xatolik yuz berdi. Iltimos, sahifani yangilang.`)
            }
            setLoading(false);
        }
        getGenres();
    }, [])

    return (
        <div className="genres">
            <div className="genres-inner p-3 mx-auto">
                {
                    loading
                    ?
                    <div className="loader">
                        <Spinner animation="border" variant="primary" />
                    </div>
                    :
                    genres.map(genre => (
                        <Genre key={genre} genre={genre} />
                    ))
                }
            </div>
        </div>
    )
}