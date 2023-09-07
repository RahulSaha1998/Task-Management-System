import { useContext } from 'react';
import Loader from '../Loader/Loader';
import { AuthContext } from '../../providers/AuthProvider';
import AddTask from '../AddTask/AddTask';

const Home = () => {

    const { loading } = useContext(AuthContext);

    if (loading) {
        return <Loader></Loader>
    }

    return (
        <div>
            <div>
                <AddTask></AddTask>
            </div>
        </div>
    );
};

export default Home;