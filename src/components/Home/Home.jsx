import { useContext } from 'react';
import Loader from '../Loader/Loader';
import { AuthContext } from '../../providers/AuthProvider';

const Home = () => {

    const { loading } = useContext(AuthContext);

    if (loading) {
        return <Loader></Loader>
    }

    return (
        <div>
            <div>
                <h2>Hello from home</h2>
            </div>
        </div>
    );
};

export default Home;