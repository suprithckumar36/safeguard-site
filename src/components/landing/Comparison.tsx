import { Check, X } from "lucide-react";

const rows = [
  {
    title: "Shortlisting",
    sub: "Identifying a policy that suits your financial & medical needs",
    Safeguard: "2–3 carefully selected recommendations, with clear explanations tailored to you.",
    other: "Minimal or no human guidance, with policies recommended based on sales targets.",
  },
  {
    title: "Application & Payment",
    sub: "The most critical step — ensuring your application is accurate",
    Safeguard: "Expert assistance, do's & don'ts, and full coordination with the insurer.",
    other: "No guidance — higher risk of rejection and disrupted claims later.",
  },
  {
    title: "Policy Issuance",
    sub: "Where the insurer evaluates your application",
    Safeguard: "Help with medical tests, counter-offer evaluation and resolution.",
    other: "No assistance — rejections require slow, tedious follow-ups.",
  },
  {
    title: "Claims",
    sub: "When you actually need your policy to deliver",
    Safeguard: "Extensive claims support — we fight your case end to end.",
    other: "No support for claims. You're on your own.",
  },
];

const Comparison = () => {
  return (
    <section className="surface-soft py-20 lg:py-28">
      <div className="container-page">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-primary">
            Compare
          </p>
          <h2 className="text-4xl font-extrabold text-foreground sm:text-5xl">
            Insurance buying experience
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            What customers experience throughout their insurance journey with Safeguard
            versus other platforms.
          </p>
        </div>

        <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-soft">
          <div className="grid grid-cols-1 border-b border-border md:grid-cols-3">
            <div className="hidden p-5 md:block" />
            <div className="border-l border-border bg-primary/5 p-5">
              <p className="text-xs font-bold uppercase tracking-wider text-primary">Safeguard</p>
              <p className="mt-1 text-base font-bold text-foreground">Guided & supported</p>
            </div>
            <div className="border-l border-border p-5">
              <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Other Platforms
              </p>
              <p className="mt-1 text-base font-bold text-foreground">Mostly self-serve</p>
            </div>
          </div>

          {rows.map((r, i) => (
            <div
              key={r.title}
              className={`grid grid-cols-1 md:grid-cols-3 ${
                i !== rows.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <div className="p-5">
                <h3 className="text-base font-bold text-foreground">{r.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{r.sub}</p>
              </div>
              <div className="border-t border-border bg-primary/5 p-5 md:border-l md:border-t-0">
                <div className="flex gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-success text-success-foreground">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  <p className="text-sm leading-relaxed text-foreground">{r.Safeguard}</p>
                </div>
              </div>
              <div className="border-t border-border p-5 md:border-l md:border-t-0">
                <div className="flex gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-destructive/10 text-destructive">
                    <X className="h-3 w-3" strokeWidth={3} />
                  </span>
                  <p className="text-sm leading-relaxed text-muted-foreground">{r.other}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Comparison;
