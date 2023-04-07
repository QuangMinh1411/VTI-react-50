import "./App.css";
// import Hello from "./Hello";
import ToDoList from "./components/ToDoList";
function App() {
  // let name = "Quang";
  // const course = {
  //   title: "React",
  //   lessons: 18,
  // };

  const tasks = [
    {
      title: "Learn React",
      content: "Learn component, state, redux",
    },
    {
      title: "Learn Spring boot",
      content: "Learn beans, mvc, data and security",
    },
    {
      title: "Learn database",
      content: "Learn design, algorithm",
    },
    {
      title: "Learn Devops",
      content: "Learn running app in multiple platform",
    },
  ];

  // const listElement = tasks.map((task) => (
  //   <ToDo key={task.title} title={task.title} content={task.content} />
  // ));
  return (
    <div className="App">
      {/* <h1>Hello Mr {name} </h1>
      <Hello title={course.title} lessons={course.lessons} />
      <Hello title="SpringBoot" lessons="11" /> */}
      <ul>
        {/* {tasks.map((task) => (
          <ToDo key={task.title} title={task.title} content={task.content} />
        ))} */}
        {/* {listElement} */}
        <ToDoList tasks={tasks} />
      </ul>
    </div>
  );
}

export default App;
