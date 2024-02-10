import { Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Task from "../pages/Task";
import Notification from "../pages/Notification";
import Projects from "../pages/Projects";

const Router = () => {
  return (
    <>
      <Route path="/" component={Dashboard}></Route>
      <Route path="task" component={Task}></Route>
      <Route path="task-add" component={Task}></Route>
      <Route path="task-details" component={Task}></Route>
      <Route path="notification" component={Notification}></Route>
      <Route path="projects" component={Projects}></Route>
    </>
  );
};

export default Router;
