import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const nav = [
  { label: "Life Insurance", href: "/#products" },
  { label: "Health Insurance", href: "/#products" },
  { label: "Claims", href: "/#experience" },
  { label: "Careers", href: "/careers" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="container-page flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-1">
  <span className="text-2xl font-extrabold tracking-tight text-foreground">
    SAFEGUARD
  </span>
  <span className="-mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
</Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild>
            <a href="#cta">Buy Insurance</a>
          </Button>
        </div>

        <button
          className="rounded-md p-2 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="container-page flex flex-col gap-1 py-3">
            {nav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-foreground/80 hover:bg-secondary"
              >
                {item.label}
              </a>
            ))}
            <Button asChild className="mt-2">
              <a href="#cta">Buy Insurance</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
