import { Navigate } from "react-router-dom";
import useWalletConnection from "../../hooks/useWalletConnection";

type ProtectedRouteProps = {
  children: React.ReactNode;
};

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { isConnected } = useWalletConnection();

  if (!isConnected) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
