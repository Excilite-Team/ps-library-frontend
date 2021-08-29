import '../styles/panel.css';
import { Row, Col } from 'react-bootstrap';
import PanelSidebar from '../components/PanelSidebar';
import { Switch, Route } from 'react-router-dom';
import PanelProfile from './PanelProfile';
import PanelAdd from './PanelAdd';
import PanelOrders from './PanelOrders';
import PanelBooks from './PanelBooks';

export default function Panel() {
    return (
        <div>
            <Row>
                <Col sm={2} md={1} className={'mx-auto'}>
                    <PanelSidebar />
                </Col>
                <Col sm={10} md={11} className="sidebar-opposite">
                    <Switch>
                        <Route exact path="/panel">
                            <PanelProfile />
                        </Route>
                        <Route path="/panel/add">
                            <PanelAdd />
                        </Route>
                        <Route path="/panel/orders">
                            <PanelOrders />
                        </Route>
                        <Route path="/panel/books">
                            <PanelBooks />
                        </Route>
                    </Switch>
                </Col>
            </Row>
        </div>
    )
}