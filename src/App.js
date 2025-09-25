import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  NavLink,
  useNavigate,
  Navigate,
} from "react-router-dom";

import {useState} from "react";

function Home() {
  return <h2>Giao diện trang Home</h2>;
}

function About() {
  return <h2>Giao diện trang About</h2>;
}

function Dashboard() {
  return <h2>Giao diện trang Dashboard (Chỉ cho user login)</h2>;
}

function Login({setAuth}) {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => {
        setAuth(true);
        alert("Bạn đã đăng nhập thành công");
        navigate("/about");
      }}
    >
      Login
    </button>
  );
}

function ProtectedPage({isAuth}) {
  if (!isAuth) return <Navigate to="/login" replace />;
  return <Dashboard />;
}

function CustomLink({to, label}) {
  return (
    <NavLink
      to={to}
      style={({isActive}) => ({
        fontWeight: isActive ? "bold" : "normal",
        color: isActive ? "green" : "blue",
      })}
    >
      {label}
    </NavLink>
  );
}

function App() {
  const [isAuth, setAuth] = useState(false);

  return (
    <BrowserRouter>
      <nav style={{display: "flex", gap: "20px"}}>
        <Link to="/">Home</Link>
        <NavLink to="/about">About</NavLink>
        <CustomLink to="/dashboard" label="Dashboard" />
        {!isAuth && <Link to="/login">Login</Link>}
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login setAuth={setAuth} />} />
        <Route path="/dashboard" element={<ProtectedPage isAuth={isAuth} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;