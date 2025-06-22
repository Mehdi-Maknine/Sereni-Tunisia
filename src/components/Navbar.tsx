import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Come Funziona", path: "/come-funziona" },
    { label: "Residenze", path: "/residenze" },
    { label: "Servizi Medici", path: "/servizi-medici-benessere" },
    { label: "Vivere in Tunisia", path: "/vivere-in-tunisia" },
    { label: "FAQ", path: "/faq" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur border-b border-muted">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <h1
          className="text-xl md:text-2xl font-bold text-foreground cursor-pointer"
          onClick={() => navigate("/")}
        >
          Vivere Sereni
        </h1>
        <nav className="hidden md:flex space-x-4">
          {navItems.map((item) => (
            <Button
              key={item.path}
              variant={location.pathname === item.path ? "default" : "ghost"}
              className="text-sm font-medium"
              onClick={() => navigate(item.path)}
            >
              {item.label}
            </Button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
