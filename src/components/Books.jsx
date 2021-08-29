import '../styles/books.css';
import Book from './Book';

export default function Books({ books }) {
    return (
        <div className={'books'}>
            {
                books.length > 0
                ?
                books.map(book => <Book key={book.bookId} book={book} />)
                :
                <h1>There is no any book yet.</h1>
            }
        </div>
    )
}