import { Routes, Route } from 'react-router-dom'
import routes from './constants/routes';


const App = () => {
    return (
        <Routes>
            {
                routes.map(route => <Route path={route.path} element={route.element} />)
            }
        </Routes>
    );
};


export default App;