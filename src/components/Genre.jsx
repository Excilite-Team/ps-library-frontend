import { Link } from 'react-router-dom';
import { Badge } from 'react-bootstrap';

export default function Genre({ genre }) {
    return (
        <div className={'genre d-inline-block m-1 text-center'}>
            <Link to={`/category/${genre}`}>
                <Badge pill bg="primary">
                    <h6 className={'my-auto'}>{genre}</h6>
                </Badge>
            </Link>
        </div>
    )
}