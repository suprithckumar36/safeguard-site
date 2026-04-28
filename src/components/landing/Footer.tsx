const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container-page py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-1">
              <span className="text-2xl font-extrabold tracking-tight">Safeguard</span>
              <span className="-mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              The ultimate insurance buying experience.
            </p>
          </div>

          <div>
            <p className="text-sm font-bold text-foreground">Insurance</p>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground">Vehicle</a></li>
              <li><a href="#" className="hover:text-foreground">Health</a></li>
              <li><a href="#" className="hover:text-foreground">Compare Plans</a></li>
              <li><a href="#" className="hover:text-foreground">Checklists</a></li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-bold text-foreground">Company</p>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground">About</a></li>
              <li><a href="#" className="hover:text-foreground">Careers</a></li>
              <li><a href="#" className="hover:text-foreground">Claims</a></li>
              <li><a href="#" className="hover:text-foreground">Contact</a></li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-bold text-foreground">Legal</p>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-foreground">Terms of Service</a></li>
              <li><a href="#" className="hover:text-foreground">IRDAI Disclosure</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Safeguard Insurance. All rights reserved.</p>
          <p>Made with care in Bengaluru, India.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
