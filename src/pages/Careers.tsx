import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";

export const jobs = [
  { slug: "affiliate-partner", title: "Affiliate Partner", type: "Commission-Based Partnership" },
  { slug: "digital-marketing-intern", title: "Digital Marketing Intern", type: "Internship" },
  { slug: "content-creation-intern", title: "Content Creation Intern", type: "Internship" },
];

const Careers = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container-page py-16">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Careers at Safeguard</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Join our mission to make insurance simple, transparent, and trustworthy.
          </p>

          <div className="mt-10 space-y-4">
            {jobs.map((job) => (
              <Link
                key={job.slug}
                to={`/careers/${job.slug}`}
                className="group flex items-center justify-between rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary"
              >
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="text-lg font-semibold text-foreground">{job.title}</h3>
                    <span className="inline-flex items-center gap-1 rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground">
                      <MapPin className="h-3 w-3" /> Remote
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{job.type}</p>
                </div>
                <ArrowRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;
