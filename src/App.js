import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import StudentForm from './components/Studentsform/StudentsForm';

function App() {
  return (
    <div className="flex">
      <Navbar/>
      <StudentForm/>
      {/* <HomePage/> */}
    </div>
  );
}

export default App;
