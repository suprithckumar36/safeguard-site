import { Star } from "lucide-react";

const reviews = [
  {
    name: "Pippalla Chakravarthi",
    initials: "PC",
    text: "Such a smooth experience with Safeguard! These guys don't spam you like other insurers. Safeguard gives customers the space to reach out at their convenience.",
  },
  {
    name: "Aanya Sharma",
    initials: "AS",
    text: "The advisor walked me through every clause. Felt like a friend explaining things, not a salesperson selling something.",
  },
  {
    name: "Rahul Mehta",
    initials: "RM",
    text: "Compared 4 health policies in one call and finalized the right one. Saved me hours of confusion. 10/10 would recommend.",
  },
];

const Trust = () => {
  return (
    <section id="trust" className="py-20 lg:py-28">
      <div className="container-page">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-primary">
            Why people trust Safeguard
          </p>
          <h2 className="mx-auto max-w-3xl text-4xl font-extrabold text-foreground sm:text-5xl">
            India's Safest insurance advisor
          </h2>
          <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-border bg-card px-5 py-2.5 shadow-soft">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-accent text-accent" />
              ))}
            </div>
            <span className="text-sm font-bold">4.9</span>
            <span className="text-sm text-muted-foreground">from 21,000+ reviews</span>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {reviews.map((r) => (
            <article
              key={r.name}
              className="rounded-3xl border border-border bg-card p-6 shadow-soft"
            >
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-foreground">"{r.text}"</p>
              <div className="mt-5 flex items-center gap-3 border-t border-border pt-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                  {r.initials}
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">{r.name}</p>
                  <p className="text-xs text-muted-foreground">Verified Google review</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trust;
