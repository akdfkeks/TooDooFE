import React, { useState } from 'react';
import InputBox from './InputBox';
import ToDoItemList from './ToDoItemList';

const AddToDo = () => {
    const [todoList, setTodoList] = useState([]);
  
    return (
      <div>
  
        <div className="homepage__container">
        
        {/* ToDo Item을 추가할 수 있는 input 박스 */}
        <InputBox todoList={todoList} setTodoList={setTodoList} />
  
        {/* 할 일 Item 리스트 */}
        <ToDoItemList
          title={'할 일'}
          todoList={todoList}
          setTodoList={setTodoList}
          checkedList={false} // (체크되지 않은) 할 일 목록
        />
  
        {/* 완료한 Item 리스트 */}
        <ToDoItemList
          todoList={todoList}
          setTodoList={setTodoList}
          checkedList={true} // (체크되어 있는)완료한 목록
        />
        </div>
      </div>
    );
  };
  
  export default AddToDo;