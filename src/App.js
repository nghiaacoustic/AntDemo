import './App.css';

//components
import CartComponent from './components';
import Home from './Layouts/Home/index';
import PageNotFound from './Layouts/PageNotFound';
import Flexbox from './Layouts/Flexbox/Flexbox';
import ReactHookForm from './Layouts/ReactHookForm';

//antd
import { Layout, Menu } from 'antd';

//router
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Grid from './Layouts/Grid/grid';
import StyledComponent from './Layouts/StyledComponent';

const { Header } = Layout;

function App() {
  const renderNav = () => {
    return (
      <Layout style={{ marginBottom: '80px', opacity: '.8' }}>
        <Header style={{ position: 'fixed', zIndex: 2, width: '100%' }}>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item style={{ marginRight: '10px' }}>
              <Link to="/">LOGO</Link>
            </Menu.Item>
            <Menu.Item key="1" style={{ marginRight: '10px' }}>
              <Link to="/home">HomePage</Link>
            </Menu.Item>
            <Menu.Item key="2" style={{ marginRight: '10px' }}><Link to="/cart" exact>CartDemo</Link></Menu.Item>
            <Menu.Item key="3" style={{ marginRight: '10px' }}><Link to="/flexbox" exact>Flexbox</Link></Menu.Item>
            <Menu.Item key="4" style={{ marginRight: '10px' }}><Link to="/grid" exact>Grid</Link></Menu.Item>
            <Menu.Item key="5" style={{ marginRight: '10px' }}><Link to="/react-form-hook" exact>ReactHookForm</Link></Menu.Item>
            <Menu.Item key="6" style={{ marginRight: '10px' }}><Link to="/styled-component" exact>StyledComponent</Link></Menu.Item>
          </Menu>
        </Header>
      </Layout>
    )
  }
  return (
    <Router>
      {renderNav()}
      <Switch>
        <Route path="/home" exact>
          <Home />
        </Route>
        <Route path="/cart" exact>
          <CartComponent />
        </Route>
        <Route path="/flexbox" exact>
          <Flexbox />
        </Route>
        <Route path="/grid" exact>
          <Grid />
        </Route>
        <Route path="/react-form-hook" exact>
          <ReactHookForm />
        </Route>
        <Route path="/styled-component" exact>
          <StyledComponent />
        </Route>
        <Route path="/">
          <Home />
        </Route>
        <Route>
          <PageNotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
