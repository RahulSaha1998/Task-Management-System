import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../SectionTitle/SectionTitle';

const AddTask = () => {

    const [state, setState] = useState([])

    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    // Retrieve the user data from local storage
    const storedUserDataJSON = localStorage.getItem('userData');
    const parsedData = JSON.parse(storedUserDataJSON);
    useEffect(() => {
        setState(parsedData);
    }, [])



    const handleAddTask = async (event) => {
        if (user && user.email) {
            event.preventDefault();
            const form = event.target;
            const title = form.title.value;
            const assignTask = form.assignTask.value;
            const date = form.date.value;
            const priorityLevel = form.priorityLevel.value;
            const desc = form.desc.value;

            const newTask = {
                title: title,
                assignTask,
                date,
                priorityLevel,
                description: desc,
                status: 'progress'
            };
            console.log(newTask);

            try {

                const existingTaskJSON = localStorage.getItem('taskData');
                const existingTask = existingTaskJSON ? JSON.parse(existingTaskJSON) : [];

                // Append the new user to the existing user data
                const updatedTask = [...existingTask, newTask];

                // Store the updated user data in local storage
                localStorage.setItem('taskData', JSON.stringify(updatedTask));

                Swal.fire({
                    icon: 'success',
                    title: 'Successfully added to Tasks!',
                    showConfirmButton: false,
                    timer: 2000
                });
                form.reset();
            } catch (error) {
                console.error('Error:', error);
            }
        } else {
            Swal.fire({
                icon: 'error',
                title: 'You have to Login first!',
                showConfirmButton: false,
                timer: 2000
            });
            navigate('/login');
        }
    };



    return (
        <div>
            <div className='mt-5 mb-5'>
                <SectionTitle heading='Add Task' />
            </div>
            <div className="hero h-full">
                <Helmet>
                    <title>Daily Task | Home</title>
                </Helmet>
                <div className='bg-slate-200 rounded-lg shadow-xl p-7 mb-5'>
                    <form onSubmit={handleAddTask} className='w-[80%] mx-auto '>
                        <div className='grid grid-cols-2 gap-5'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Title</span>
                                </label>
                                <input type="text" placeholder="Title"
                                    name='title'
                                    className="input input-info"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Assigned Task</span>
                                </label>

                                <select name="assignTask" className="input input-info">
                                    {state?.length > 0 ? (
                                        state.map((item, index) => (
                                            <option key={index} value={item?.name}>
                                                {item?.name}
                                            </option>
                                        ))
                                    ) : (
                                        <option value="Peter">Peter</option>
                                    )}
                                </select>

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Due Date</span>
                                </label>
                                <input type="date"
                                    name='date'
                                    className="input input-info"
                                    required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Priority Level</span>
                                </label>
                                <select name="priorityLevel" className="input input-info">
                                    <option value="High">High</option>
                                    <option value="Medium">Medium</option>
                                    <option value="Low">Low</option>
                                </select>
                            </div>





                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <textarea type="text"
                                name='desc'
                                placeholder='Write here . . .'
                                className="textarea textarea-info w-full"
                                required />
                        </div>
                        <div className="form-control mt-6 text-center">
                            <input className="btn btn-block btn-info mb-6" type="submit" value='Submit' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddTask;