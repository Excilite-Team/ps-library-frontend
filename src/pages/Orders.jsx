import React from "react";
import api from "../api";
import '../styles/orders.css';
import Layout from '../components/Layout';
import NavBar from '../components/Navbar';
import { Spinner } from 'react-bootstrap';
import { useHistory } from "react-router";
import Order from "../components/Order";

export default function Orders() {
    const history = useHistory();
    const [orders, setOrders] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        let fetchOrders = async () => {
            const { success, data } = await api.get(`/orders/my`, { auth: true });
            if (success) {
                setOrders(data?.data);
            } else {
                if (data) {
                    if (data.response.status === 401) {
                        return history.push('/auth/login')
                    }
                }
                console.log(data);
                alert(`Qandaydir xatolik yuz berdi, iltimos sahifani yangilang!`);
            }
            setLoading(false);
        };
        fetchOrders();
    }, [history]);

    return (
        <Layout title={"My orders"}>
            <NavBar />
            <hr />
            {
                loading
                    ?
                    <div className="loader">
                        <Spinner animation="border" variant="primary" />
                    </div>
                    :
                    <div className={"orders"}>
                        {
                            orders.map(order => (
                                <Order order={order} />
                            ))
                        }
                    </div>
            }
        </Layout>
    )
}