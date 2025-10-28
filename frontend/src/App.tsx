import { Route, Routes } from "react-router";
import Projects_page from "@/pages/Projects_page";
import Fabrics_page from "./pages/Fabrics_page";
import Patterns_page from "./pages/Patterns_page";
import AppLayout from "./layout/app_layout";






function App (){
  return (
    <Routes>
        <Route path="/" element={<AppLayout/>}>
          <Route index element={<Projects_page />} />
          <Route path="projects" element={<Projects_page />} />
          <Route path="fabrics" element={<Fabrics_page />} />
          <Route path="patterns" element={<Patterns_page />} />
        </Route>
    </Routes>

  )
    
} 
export default App

