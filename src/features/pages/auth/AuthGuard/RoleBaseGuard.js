import { useSelector } from "react-redux";

const useCurrentRole = () => {
  const role = "admin";
  return role;
};

export default function RoleBasedGuard({ children }) {
  const currentRole = useCurrentRole();
  const { user } = useSelector((state) => state.user);
  if (user.type_user !== currentRole) {
    return (
      <div style={{ marginTop: "200px" }}>
        <main>
          <h1>Permission Denied</h1>
          You do not have permission to access this page
        </main>
      </div>
    );
  }

  return <>{children}</>;
}
