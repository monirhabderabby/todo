import React, { useState } from "react";
import "./Todo.css";
import note from "../../Assets/note.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDay, faL } from "@fortawesome/free-solid-svg-icons";
import DayPickerModal from "../../Shared/DayPickerModal";
import { useQuery } from "react-query";
import TodoCard from "../../Shared/TodoCard";
import { Accordion } from "flowbite-react";
import { format } from "date-fns";

const Todo = () => {
    const [isPickDate, setIsPickDate] = useState(false);
    const [date, setDate] = useState("");
    const [today, setToday] = useState(new Date());

    const { data:allTodos, isLoading, refetch } = useQuery("todos", () =>
        fetch(`http://localhost:5000/todos/${format(today, "PP")}`).then(
            (res) => res.json()
        )
    );

    const { data:completedTodos, isLoading: isLoading1, refetch:refetch1} = useQuery("completed", ()=> fetch("http://localhost:5000/completed").then(res=> res.json()))
    if (isLoading || isLoading1) {
        return <p>loading...</p>;
    }

    

    const handleNewToDo = async (e) => {
        e.preventDefault();
        let todo = e.target.todo.value;
        const result = { todo, date: date || format(today, "PP"), isCompleted: false };
        fetch("http://localhost:5000/todo", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(result),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.acknowledged) {
                    refetch();
                    e.target.todo.value = "";
                }
            });
    };
    return (
        <div className="h-[100vh] bg-[#f0f3ff] w-[100%] flex justify-center items-center">
            <div className="w-[100%] md:max-w-[80%] lg:max-w-[60%] h-auto bg-[#fff] shadow-2xl rounded-md py-3 px-3">
                <h4>TODO is favourite notifications</h4>
                <hr />
                <form
                    className="w-[100%] md:w-[50%] mx-auto mt-4"
                    onSubmit={handleNewToDo}
                >
                    <div class="relative">
                        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <img src={note} alt="" className="w-6" />
                        </div>
                        <input
                            type="search"
                            name="todo"
                            class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="New Task"
                            required
                        />
                        <div className="absolute right-2.5 bottom-2.5 ">
                            <FontAwesomeIcon
                                icon={faCalendarDay}
                                className="mr-2"
                                onClick={() => setIsPickDate(true)}
                            />
                            <button
                                type="submit"
                                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                SAVE
                            </button>
                        </div>
                    </div>
                </form>

                <section className="w-[100%] md:w-[50%] mx-auto mt-4">
                    <Accordion alwaysOpen={true}>
                        <Accordion.Panel>
                            <Accordion.Title>Today ({allTodos?.length})</Accordion.Title>
                            <Accordion.Content>
                                {allTodos?.map((t) => (
                                    <TodoCard todo={t} refetch={refetch}/>
                                ))}
                            </Accordion.Content>
                        </Accordion.Panel>
                    </Accordion>
                </section>
                <section className="w-[100%] md:w-[50%] mx-auto mt-4">
                    <Accordion alwaysOpen={true}>
                        <Accordion.Panel>
                            <Accordion.Title>Completed {completedTodos?.length}</Accordion.Title>
                            <Accordion.Content>
                                {completedTodos?.map((t) => (
                                    <TodoCard  todo={t} refetch1={refetch1} />
                                ))}
                            </Accordion.Content>
                        </Accordion.Panel>
                    </Accordion>
                </section>
            </div>
            {isPickDate && (
                <DayPickerModal
                    modal={isPickDate}
                    setIsPickDate={setIsPickDate}
                    setDate={setDate}
                />
            )}
        </div>
    );
};

export default Todo;
