import { Link } from "react-router-dom";

function AuthHeader() {
  return (
    <header className="container h-[108px] py-4 px-2">
      <Link to="/" className="text-4xl font-bold text-clr-primary">
        Educonnect
      </Link>{" "}
    </header>
  );
}

export default AuthHeader;
