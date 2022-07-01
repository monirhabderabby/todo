import React from 'react';
import { useQuery } from 'react-query';
import TodoCard from '../../Shared/TodoCard';

const CompleteTasks = () => {
    const { data:completedTodos, isLoading: isLoading1, refetch:refetch1} = useQuery("completed", ()=> fetch("http://localhost:5000/completed").then(res=> res.json()))
    if (isLoading1) {
        return <p>loading...</p>;
    }
    return (
        <div className="h-[100vh] bg-[#f0f3ff] w-[100%] flex justify-center items-center">
            <div className="w-[100%] md:max-w-[80%] lg:max-w-[60%] h-auto bg-[#fff] rounded-md py-6 px-3">
                <div>
                    <p className='text-left px-3 py-3'>Completed Tasks</p>
                    <div>
                        {
                            completedTodos?.map(t => <TodoCard todo={t} refetch1={refetch1} isCompleted={true} />)
                        }
                    </div>
                    <hr />
                </div>
            </div>
        </div>
    );
};

export default CompleteTasks;