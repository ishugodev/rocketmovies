import { Routes, Route } from "react-router-dom";

import { SignIn } from "../page/SignIn";
import { SignUp } from "../page/SignUp";

export function AuthRoutes() {
  return(
    <Routes>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  )
}