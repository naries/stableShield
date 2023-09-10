import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      Login
      <Link to="/protected">Go to authenticated</Link>
    </div>
  );
};

export default Login;
