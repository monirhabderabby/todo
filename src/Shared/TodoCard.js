import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTrash,
    faPenSquare,
    faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";

const TodoCard = ({ todo }) => {
    return (
        <form className="w-[100%] md:w-[100%] mx-auto mt-4">
            <div class="relative">
                <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"></div>
                <input
                    type="search"
                    name="todo"
                    class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={todo?.todo}
                    readOnly
                />
                <div className="absolute right-2.5 bottom-2.5 ">
                    <FontAwesomeIcon icon={faCheckCircle} className="mx-2" />
                    <FontAwesomeIcon icon={faPenSquare} className="mx-2" />
                    <FontAwesomeIcon icon={faTrash} className="mx-2" />
                </div>
            </div>
        </form>
    );
};

export default TodoCard;
