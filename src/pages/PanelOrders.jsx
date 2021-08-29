import React from "react";
import api from "../api";
import '../styles/orders.css';
import Layout from '../components/Layout';
import { Spinner } from 'react-bootstrap';
import { useHistory } from "react-router";
import Order from "../components/Order";

export default function PanelOrders() {
    const history = useHistory();
    const [orders, setOrders] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        let fetchOrders = async () => {
            const { success, data } = await api.get(`/orders`, { auth: true });
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
        <Layout title={"Mavjud so'rovlar"}>
            <div className={'py-3'}>
                {
                    loading
                        ?
                        <div className="loader">
                            <Spinner animation="border" variant="primary" />
                        </div>
                        :
                        <div className={"orders"}>
                            {
                                orders.length > 0
                                    ?
                                    orders.map(order => (
                                        <Order order={order} isAdmin={true} />
                                    ))
                                    :
                                    <div className={'text-center py-5 text-muted'}>
                                        <h1>Birorta ham so'rov maavjud emas</h1>
                                    </div>
                            }
                        </div>
                }
            </div>
        </Layout>
    )
}