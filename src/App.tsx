import React, { useContext } from 'react';
import { ToDoContext } from './ToDoContext';

import { ToDoCounter } from './components/ToDoCounter/ToDoCounter';
import { ToDoInput } from './components/ToDoInput/ToDoInput';
import { ToDoList } from './components/ToDoList/ToDoList';
import { ToDoItem } from './components/ToDoItem/ToDoItem';
import { CreateToDoButton } from './components/CreateToDoButton/CreateToDoButton';

import './App.css';

function App(): JSX.Element {
  // // const {toDoList, saveToDoList, loading, error} = useLocalStorage('toDoList_V1', []);
  // const [searchTask, setSearchTask] = useState<string>("");
  // const [toDoList, setToDoList] = useState<ITask[]>([]);
  // const [loading, setLoading] = useState<boolean>(true);
  // const [error, setError] = useState<boolean>(false);

  // const completedToDoList = toDoList.filter(toDo => toDo.completed).length;
  // const totalToDoList = toDoList.length;

  // useEffect(() => {
  //   setTimeout(() => {
  //     try {
  //       const localStorageToDo: (string | null) = localStorage.getItem('toDoList_V1');
  //       let parsedToDoList: ITask[] = localStorageToDo ? JSON.parse(localStorageToDo) : [];

  //       if (!localStorageToDo) localStorage.setItem('toDoList_V1', JSON.stringify([]));

  //       setToDoList(parsedToDoList);
  //       setLoading(false);
  //     } catch (error) {
  //       setError(true);
  //     }
  //   }, 1000);
  // }, [totalToDoList]);

  // const onCreateTask = (value: string) => {
  //   console.log(value);
  // };

  // const filterTasks = (item: ITask): boolean => {
  //   return (item.text).toLowerCase().includes(searchTask.toLowerCase());
  // };

  // const saveToDoList = (newTodoList: ITask[]): void => {
  //   try {
  //     localStorage.setItem('toDoList_V1', JSON.stringify(newTodoList));
  //     setToDoList(newTodoList);
  //   } catch(error) {
  //     setError(true);
  //   }
  // };

  // const onComplete = (id: number) => {
  //   let newTodoList = toDoList.map(toDo => {
  //     if (toDo.id === id) {
  //       return { ...toDo, completed: toDo.completed ? false : true }
  //     } else {
  //       return toDo
  //     }
  //   });

  //   saveToDoList(newTodoList);
  // };

  // const onDelete = (id: number) => {
  //   let deleteFromTodoList = toDoList.filter(toDo => toDo.id !== id);
  //   saveToDoList(deleteFromTodoList);
  // };

  const { error, loading, toDoList, setSearchTask, filterTasks, onComplete, onDelete, setCreateTaskText, onCreateTask, createTaskText } = useContext(ToDoContext);

  return (
    <main className='ToDo_container'>
      <section className='ToDo_section'>
        <article className='ToDo_section_create'>
          <h2 className='ToDo_section_create-title'>Create new task</h2>
          <ToDoInput
            className='ToDo_input'
            placeholder='Create new task'
            value={createTaskText}
            onChange={(e) => setCreateTaskText(e.target.value)}
          />
          <CreateToDoButton
            onClick={onCreateTask}
          />
        </article>
      </section>
      <section className='ToDo_section'>
        <article className='ToDo_section_list'>
          <ToDoCounter />
          <ToDoInput
            className='ToDo_input'
            placeholder='Search a task'
            onChange={(e) => setSearchTask(e.target.value)}
          />
          <ToDoList>
            {error && <p>Error</p>}
            {loading && <p>Loading...</p>}
            {(!loading && !toDoList.length) && <p>Crea tu primera tarea</p>}

            {toDoList.length > 0 &&
              toDoList.filter((item: ITask) => filterTasks(item)).map((item: ITask) => {
                return (
                  <ToDoItem
                    key = {item.id}
                    item = {item}
                    onComplete = {() => onComplete(item.id)}
                    onDelete = {() => onDelete(item.id)}
                  />
                )
              })
            }
          </ToDoList>
        </article>
      </section>
    </main>
  );
}

export default App;
