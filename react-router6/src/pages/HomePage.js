import { Link } from "react-router-dom";

const userId = "jose";

export default function HomePage() {
  return (
    <div>
      <h1>Application</h1>
      <Link to={`/user/${userId}`}>Usuarios</Link>
    </div>
  );
}
