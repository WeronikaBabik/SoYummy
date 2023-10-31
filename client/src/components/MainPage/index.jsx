import * as React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export const MainPage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  return <div>Main Page comes here!</div>;
};
