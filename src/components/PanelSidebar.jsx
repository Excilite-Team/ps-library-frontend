import React from 'react';
import { } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { IoMdAddCircle, IoMdTimer, IoMdBookmarks } from 'react-icons/io';
import { MdAccountCircle, MdHome } from 'react-icons/md';
import '../styles/panel.css';

export default function PanelSidebar() {
    const [active, setActive] = React.useState('profile');
    const updateActive = (value) => {
        if (value) {
            return setActive(value);
        } else {
            switch (window.location.pathname) {
                case '/panel' || '/panel/': setActive('profile'); break;
                case '/panel/add' || '/panel/add/': setActive('add'); break;
                case '/panel/orders' || '/panel/orders/': setActive('orders'); break;
                case '/panel/books' || '/panel/books/': setActive('books'); break;
                default: setActive('profile'); break;
            }
        }
    }
    React.useEffect(() => {
        updateActive();
    }, []);
    return (
        <div className={'sidebar col-sm-2 col-md-1'}>
            <ul className={'mx-auto p-0 d-flex flex-column'}>
                <li className={active === 'profile' && 'active'}>
                    <Link to={'/panel'} onClick={() => updateActive('profile')}>
                        <MdAccountCircle />
                    </Link>
                </li>
                <hr />
                <li className={active === 'add' && 'active'}>
                    <Link to={'/panel/add'} onClick={() => updateActive('add')}>
                        <IoMdAddCircle />
                    </Link>
                </li>
                <li className={active === 'orders' && 'active'}>
                    <Link to={'/panel/orders'} onClick={() => updateActive('orders')}>
                        <IoMdTimer />
                    </Link>
                </li>
                <li className={active === 'books' && 'active'}>
                    <Link to={'/panel/books'} onClick={() => updateActive('books')}>
                        <IoMdBookmarks />
                    </Link>
                </li>
                <li className={'home-btn'}>
                    <Link to={'/'}>
                        <MdHome />
                    </Link>
                </li>
            </ul>
        </div>
    )
}