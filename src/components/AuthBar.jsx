import '../styles/authbar.css';
import api from "../api";
import React from 'react';
import { Button, Dropdown } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { MdLibraryBooks } from 'react-icons/md';
import { RiAccountCircleFill, RiLoginCircleLine } from 'react-icons/ri';

export default function AuthBar() {
    const token = api.getToken();
    let [user, setUser] = React.useState(null);
    React.useEffect(() => {
        if (token) {
            let auth = async () => {
                let { success, data } = await api.auth();
                if (!success) {
                    return alert(`Sizning ma'lumotlaringizni topishda noma'lum xatolik yuz berdi, iltimos yana bir bor login qiling!`);
                }
                setUser(data.data);
            };
            auth();
        }
    }, [token]);
    return (
        <>
            {
                token
                    ?
                    <div className={'authbar d-flex justify-content-between justify-content-md-evenly align-items-center'}>
                        <Link to={'/orders'} className={'color'}>
                            <Button title={"So'rovlar"} variant="primary"><MdLibraryBooks /></Button>
                        </Link>
                        <Dropdown>
                            <Dropdown.Toggle variant="primary" id="auth-dropdown">
                                <RiAccountCircleFill />
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item disabled>{user?.email}</Dropdown.Item>
                                {
                                    user?.isAdmin
                                        ?
                                        <Dropdown.Item>
                                            <Link to={'/panel'}>Admin panel</Link>
                                        </Dropdown.Item>
                                        :
                                        <></>
                                }
                                <Dropdown.Item onClick={() => api.logOut()}>Tizimdan chiqish</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    :
                    <div className={'authbar d-flex justify-content-between justify-content-md-evenly align-items-center'}>
                        <Button title={"Ro'yhatdan o'tish"} variant="primary"><Link to={'/auth/register'} className='color'><RiLoginCircleLine /></Link></Button>
                        <Button title={"Tizimga kirish"} variant='primary'><Link to={'/auth/login'} className='color'><RiAccountCircleFill /></Link></Button>
                    </div>
            }
        </>
    )
}