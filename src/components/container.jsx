import React, { useState } from "react";

import FormTodo from "./formTodo";
import TaskList from "./taskList";

const Container = () => {
    const [list, setList] = useState([])
    const handleAddItem = addItem => {
        setList([...list,addItem])
    }
    

    return (
        <div>
            Container!
            <FormTodo handleAddItem = {handleAddItem}/>
            <TaskList list = {list} setList = {setList}/>
        </div>
    )
}

export default Container