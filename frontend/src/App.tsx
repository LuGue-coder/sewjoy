import { Route, Routes } from "react-router";
import ProjectsPage from "@/pages/ProjectsPage";
import FabricsPage from "@/pages/FabricsPage";
import Patterns_page from "./pages/Patterns_page";
import AppLayout from "./layout/AppLayout";






function App (){
  return (
    <Routes>
        <Route path="/" element={<AppLayout/>}>
          <Route index element={<ProjectsPage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="fabrics" element={<FabricsPage />} />
          <Route path="patterns" element={<Patterns_page />} />
        </Route>
    </Routes>

  )
    
} 
export default App

