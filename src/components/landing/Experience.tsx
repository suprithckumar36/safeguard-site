import { CheckCircle2, Headphones, LifeBuoy } from "lucide-react";

const steps = [
  {
    n: "01",
    icon: Headphones,
    title: "Get Expert Guidance",
    body: "Talk to IRDAI-certified experts instead of pushy salesmen, with a guaranteed no-spam policy.",
    chips: ["30-min consultation", "Zero Cost", "Zero Spam"],
  },
  {
    n: "02",
    icon: CheckCircle2,
    title: "End-to-End Assistance",
    body: "Get complete handholding from Safeguard — from the moment you book a call to the moment you receive your policy.",
    chips: [
      "Understand basics",
      "Compare options",
      "Clarify coverage",
      "Finalize policy",
      "Fill application",
    ],
  },
  {
    n: "03",
    icon: LifeBuoy,
    title: "Lifetime Claim Support",
    body: "With Safeguard's expert claims team at your disposal 24/7, you and your family will always receive the support you deserve.",
    chips: ["Register your claim"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 lg:py-28">
      <div className="container-page">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-primary">
            The Safeguard experience
          </p>
          <h2 className="mx-auto max-w-2xl text-4xl font-extrabold text-foreground sm:text-5xl">
            A simple, three-step journey
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((s) => (
            <div
              key={s.n}
              className="relative flex flex-col rounded-3xl border border-border bg-card p-7 shadow-soft transition-shadow hover:shadow-card"
            >
              <span className="text-sm font-bold text-muted-foreground">{s.n}</span>
              <div className="mt-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-bold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {s.chips.map((c) => (
                  <span
                    key={c}
                    className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-foreground/80"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <figure className="mx-auto mt-16 max-w-3xl rounded-3xl border border-border surface-soft p-8 text-center">
          <blockquote className="text-lg font-medium leading-relaxed text-foreground sm:text-xl">
            "For a long time, one item on our to-do list was to build an insurance
            platform free of conflicts, mis-selling, and spam. Then we met the
            Safeguard team"
          </blockquote>
          <figcaption className="mt-5 flex items-center justify-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
              SK
            </div>
            <div className="text-left">
              <p className="text-sm font-bold text-foreground">​Suprith C Kumar</p>
              <p className="text-xs text-muted-foreground">CEO, Main Thing</p>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default Experience;
