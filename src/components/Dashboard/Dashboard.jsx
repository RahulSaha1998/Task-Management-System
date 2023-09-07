import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import SectionTitle from '../SectionTitle/SectionTitle';
import { AuthContext } from '../../providers/AuthProvider';
import Loader from '../Loader/Loader';
import { Helmet } from 'react-helmet-async';



const Dashboard = () => {


    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <Loader></Loader>
    }



    // const [tasks, setTasks] = useState(loadedTask);
    const [sortBy, setSortBy] = useState('asc');
    const [filteredTasks, setFilteredTasks] = useState([]);




    // const storedTaskJSON = localStorage.getItem('userTask');
    // const storedTask = storedTaskJSON ? JSON.parse(storedTaskJSON) : null;
    // setFilteredTasks(storedTask);

    // // Check if the user is logged in and if the emails match
    // const matchingUser = user && storedTask.map(item => {
    //     console.log(item);
    // });
    // console.log(matchingUser);


    // Retrieve the user data from local storage
    const storedTaskJSON = localStorage.getItem('taskData');
    const storedTask = JSON.parse(storedTaskJSON);
    useEffect(() => {
        setFilteredTasks(storedTask);
    }, [])

    console.log(filteredTasks);



    const handleFilterByDate = () => {
        if (sortBy === 'asc') {
            // Sort tasks in ascending order by date
            const sortedTasks = [...filteredTasks].sort((a, b) =>
                a.date.localeCompare(b.date)
            );
            setFilteredTasks(sortedTasks);
            setSortBy('desc');
        } else {
            // Sort tasks in descending order by date
            const sortedTasks = [...filteredTasks].sort((a, b) =>
                b.date.localeCompare(a.date)
            );
            setFilteredTasks(sortedTasks);
            setSortBy('asc');
        }
    };

    const handleFilterByStatus = () => {
        if (sortBy === 'asc') {
            // Sort tasks in ascending order by priorityLevel
            const sortedTasks = [...filteredTasks].sort((a, b) =>
                a.priorityLevel.localeCompare(b.priorityLevel)
            );
            setFilteredTasks(sortedTasks);
            setSortBy('desc');
        } else {
            // Sort tasks in descending order by priorityLevel
            const sortedTasks = [...filteredTasks].sort((a, b) =>
                b.priorityLevel.localeCompare(a.priorityLevel)
            );
            setFilteredTasks(sortedTasks);
            setSortBy('asc');
        }
    };


    return (
        <>
            <div className='mb-5'>
                <Helmet>
                    <title>Daily Task | Dashboard</title>
                </Helmet>
                <div className='mt-5 mb-5'>
                    <SectionTitle heading='View Tasks' />
                </div>

                <div className='flex justify-center gap-2'>
                    <div className='text-center mb-4'>
                        <button onClick={handleFilterByDate}
                            className={`btn ${sortBy === 'asc' ? 'btn-success' : ' btn-info'}`}>
                            {sortBy === 'asc' ? 'Sort by Date' : 'Sort by Date'}
                        </button>
                    </div>
                    <div className='text-center mb-4'>
                        <button onClick={handleFilterByStatus} className={`btn ${sortBy === 'asc' ? 'btn-success' : ' btn-info'}`}>
                            {sortBy === 'asc' ? 'Sort by Status' : 'Sort by Status'}
                        </button>
                    </div>
                </div>

                <div className="overflow-x-auto card shadow-xl">
                    <table className="table table-zebra">
                        {/* Table head */}
                        <thead>
                            <tr className="bg-slate-400 text-slate-800 text-base">
                                <th className='text-center'>No</th>
                                <th className='text-center'>Title</th>
                                <th className='text-center'>Description</th>
                                <th className='text-center'>Due Date</th>
                                <th className='text-center'>Status</th>
                                <th className='text-center'>Priority Level</th>
                                <th className='text-center'>Assigned User</th>
                            </tr>
                        </thead>
                        <tbody>

                            {/* Table Contents */}

                            {
                                filteredTasks.map((task, index) =>
                                    <tr
                                        key={task._id}
                                        index={index}
                                        className='font-bold'
                                    >
                                        <th className='text-center'>{index + 1}</th>
                                        <td className='text-center'>{task.title}</td>
                                        <td className='text-center'>{task.description}</td>
                                        <td className='text-center'>{task.date}</td>
                                        <td className='text-center'>{task.status}</td>
                                        <td className='text-center'>{task.priorityLevel}</td>
                                        <td className='text-center'>{task.assignTask}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default Dashboard;