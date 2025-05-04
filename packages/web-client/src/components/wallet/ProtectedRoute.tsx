import { Navigate } from "react-router-dom";
import { useWallets } from "@0xsequence/connect";

type ProtectedRouteProps = {
  children: React.ReactNode;
};

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { wallets } = useWallets();
  const isConnected = wallets.length > 0;

  if (!isConnected) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
