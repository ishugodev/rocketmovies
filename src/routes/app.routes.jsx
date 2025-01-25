import { Routes, Route, Navigate } from "react-router-dom";

import { Home } from "../page/Home";
import { Profile } from "../page/Profile";
import { Create } from "../page/Create";
import { Preview } from "../page/Preview";

export function AppRoutes() {
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/create" element={<Create />} />
      <Route path="/preview/:id" element={<Preview />} />

      <Route path="*" element={<Navigate to="/" />} />

    </Routes>
  )
}