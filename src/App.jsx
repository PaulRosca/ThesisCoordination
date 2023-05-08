import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar'
import Login from './pages/Login'
import StudentThesisCoordination from './pages/Student/ThesisCoordination'
import StudentPracticeStageNews from './pages/Student/PracticeStage/News'
import StudentPracticeStageHomework from './pages/Student/PracticeStage/Homework'
import StudentPracticeStageEvaluation from './pages/Student/PracticeStage/Evaluation'
import Chat from './pages/Chat'
import ProfessorThesisCoordination from './pages/Professor/ThesisCoordination'
import ProfessorProfile from './pages/Professor/Profile'
import ProfessorPracticeStage from './pages/Professor/PracticeStage'
import AdminThesisCoordinationNews from './pages/Admin/ThesisCoordination/News'
import AdminThesisCoordinationAddNews from './pages/Admin/ThesisCoordination/News/Add'
import AdminThesisCoordinators from './pages/Admin/ThesisCoordination/Coordinators'
import AdminThesisStudents from './pages/Admin/ThesisCoordination/Students'
import AdminThesisStudentsDetails from './pages/Admin/ThesisCoordination/Students/Details'
import AdminPracticeStageNews from './pages/Admin/PracticeStage/News'
import AdminPracticeStageAddNews from './pages/Admin/PracticeStage/News/Add'
import AdminPracticeStageHomework from './pages/Admin/PracticeStage/Homework'
import AdminPracticeStageAddHomework from './pages/Admin/PracticeStage/Homework/Add'
import AdminPracticeStageEvaluation from './pages/Admin/PracticeStage/Evaluation'
import { useState } from 'react'

export default function App() {
  const [userData, setUserData] = useState(null)
  const getRoutes = () => {
    switch (userData?.type) {
      case 'student':
        return (
          <>
            <Route path="/thesis-coordination" element={<StudentThesisCoordination />} />
            <Route path="/practice-stage/news" element={<StudentPracticeStageNews />} />
            <Route path="/practice-stage/homework" element={<StudentPracticeStageHomework />} />
            <Route path="/practice-stage/evaluation" element={<StudentPracticeStageEvaluation />} />
            <Route path="/chat" element={<Chat />} />
          </>
        );
      case 'profesor':
        return (
          <>
            <Route path="/thesis-coordination" element={<ProfessorThesisCoordination />} />
            <Route path="/profile" element={<ProfessorProfile professor={userData} />} />
            <Route path="/practice-stage/*" element={<ProfessorPracticeStage />} />
            <Route path="/chat" element={<Chat />} />
          </>
        )
      case 'admin':
        return (
          <>
            <Route path="/thesis-coordination" element={<AdminThesisCoordinationNews />} />
            <Route path="/thesis-coordination/add-news" element={<AdminThesisCoordinationAddNews />} />
            <Route path="/thesis-coordination/coordinators" element={<AdminThesisCoordinators />} />
            <Route path="/thesis-coordination/students" element={<AdminThesisStudents />} />
            <Route path="/thesis-coordination/students/details" element={<AdminThesisStudentsDetails />} />
            <Route path="/practice-stage/news" element={<AdminPracticeStageNews />} />
            <Route path="/practice-stage/add-news" element={<AdminPracticeStageAddNews />} />
            <Route path="/practice-stage/homework" element={<AdminPracticeStageHomework />} />
            <Route path="/practice-stage/add-homework" element={<AdminPracticeStageAddHomework />} />
            <Route path="/practice-stage/evaluation" element={<AdminPracticeStageEvaluation />} />
            <Route path="/chat" element={<Chat />} />
          </>
        )
      default:
        return (<Route path="*" element={<Login setUserData={setUserData} />} />);
    }
  }
  return (
    <>
      <BrowserRouter>
        {
          userData && (<NavBar userData={userData} setUserData={setUserData} />)
        }
        <Routes>
          {getRoutes()}
        </Routes>
      </BrowserRouter>
    </>
  )
}
