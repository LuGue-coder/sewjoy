import { Route, Routes } from "react-router-dom";
import ProjectsPage from "@/pages/ProjectsPage";
import FabricsPage from "@/pages/FabricsPage";
import Patterns_page from "./pages/Patterns_page";
import AppLayout from "./layout/AppLayout";
import AddProjectForm from "./pages/AddProjectForm";
import AddFabricForm from "./pages/AddFabricForm";
import ProjectDetail from "./pages/ProjectDetail";
import Login from "./pages/Login";
import Signin from "./pages/Signup";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signin" element={<Signin />} />

      <Route element={<AppLayout />}>
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/addfabric" element={<AddFabricForm />} />
        <Route path="/addproject" element={<AddProjectForm />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/fabrics" element={<FabricsPage />} />
        <Route path="/patterns" element={<Patterns_page />} />
      </Route>
    </Routes>
  );
}
export default App;
