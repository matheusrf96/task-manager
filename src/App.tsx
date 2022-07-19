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
  }

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks}/>
      <List
        selectTask={selectTask}
        tasks={tasks}
      />
      <Timer />
    </div>
  );
}

export default App;
