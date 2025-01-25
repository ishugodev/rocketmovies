import { Routes, Route, Navigate } from "react-router-dom";

import { SignIn } from "../page/SignIn";
import { SignUp } from "../page/SignUp";

export function AuthRoutes() {
  const user = localStorage.getItem("@rocketnotes:user");

  return(
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />

      { !user && <Route path="*" element={<Navigate to="/" />} /> }

    </Routes>
  )
}