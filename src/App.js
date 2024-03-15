import { Switch, Route } from "react-router-dom";
import About from "./component/About";
import Home from "./component/Home";
import Main from "./component/Main";
import TeacherZone from "./component/teacherZone";
import Login from "./component/Login";
import SignUp from "./component/signup";
import Gallery from "./component/Gallery";
import StudentZone from "./component/studentZone";
import Resources from "./component/resources";
import StudentDashboard from "./component/studentDashboard";
import TeacherDashboard from "./component/teacherDashboard";
import TeacherResult from "./component/teacherResult";
import StudentResult from "./component/studentResult";
import TeacherAttendance from "./component/teacherAttendance";
import StudentAttendance from "./component/studentAttendance";
import StudentFees from "./component/studentFees";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/main" component={Main}/>
        <Route path="/teacherResources/:id/:classname"><TeacherZone><Resources ></Resources></TeacherZone></Route>
        <Route path="/studentResources/:id/:classname"><StudentZone><Resources ></Resources></StudentZone></Route>
        <Route path="/teacherDashboard/:id">
          <TeacherZone>
            <TeacherDashboard></TeacherDashboard>
          </TeacherZone>
        </Route>
        <Route path="/teacherAttendance/:id">
          <TeacherZone>
            <TeacherAttendance></TeacherAttendance>
          </TeacherZone>
        </Route>
        <Route path="/studentDashboard/:id">
          <StudentZone>
            <StudentDashboard></StudentDashboard>
          </StudentZone>
        </Route>
        <Route path="/studentResult/:id">
          <StudentZone>
            <StudentResult></StudentResult>
          </StudentZone>
        </Route>
        <Route path="/studentAttendance/:id">
          <StudentZone>
            <StudentAttendance></StudentAttendance>
          </StudentZone>
        </Route>
        <Route path="/studentFees/:id">
          <StudentZone>
            <StudentFees></StudentFees>
          </StudentZone>
        </Route>
        <Route path="/Login" component={Login}/>
        <Route path="/studentZone" component={StudentZone}/>
        <Route path="/Register" component={SignUp}/>
        <Route path="/Gallery" component={Gallery}/>
        <Route path="/teacherResult/:id"><TeacherZone><TeacherResult></TeacherResult></TeacherZone></Route>
      </Switch>
    </div>
  );
}

export default App;
