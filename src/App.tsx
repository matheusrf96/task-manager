import React, { useState } from 'react';

import Form from './components/Form';
import List from './components/List';
import Timer from './components/Timer';
import { ITask } from './types/tasks';

import style from './App.module.scss'


function App() {
  const [tasks, setTasks] = useState<ITask[] | []>([]);
  const [selected, setSelected] = useState<ITask>();

  function selectTask(selectedTask: ITask) {
    setSelected(selectedTask);
    setTasks(oldTasks => oldTasks.map(task => ({
      ...task,
      selected: task.id === selectedTask.id ? true : false,
    })));
  }

  function finishTask() {
    if (selected) {
      setSelected(undefined)
      setTasks(oldTasks => oldTasks.map(task => {
        if (task.id === selected.id) {
          return {
            ...task,
            selected: false,
            completed: true,
          }
        }

        return task
      }));
    }
  }

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks}/>
      <List
        selectTask={selectTask}
        tasks={tasks}
      />
      <Timer
        selected={selected}
        finishTask={finishTask}
      />
    </div>
  );
}

export default App;
