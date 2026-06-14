import { Instagram, ArrowRight } from "lucide-react";

type Social = {
  name: string;
  handle: string;
  description: string;
  url: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  badgeStyle: React.CSSProperties;
};

const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M18.244 2H21.5l-7.5 8.57L22.75 22h-6.86l-5.37-6.94L4.3 22H1.04l8.02-9.16L1.25 2h7.04l4.86 6.4L18.244 2Zm-1.2 18h1.88L7.04 4h-2.02l12.024 16Z" />
  </svg>
);

const SOCIALS: Social[] = [
  {
    name: "Instagram",
    handle: "@safeguard.ltd",
    description: "Insurance tips, customer stories & behind-the-scenes updates.",
    url: "https://www.instagram.com/safeguard.ltd/",
    icon: Instagram,
    badgeStyle: {
      background:
        "linear-gradient(135deg, #feda75 0%, #fa7e1e 25%, #d62976 50%, #962fbf 75%, #4f5bd5 100%)",
    },
  },
  {
    name: "X",
    handle: "@joinsafeguardco",
    description: "Quick takes on insurance, policy news & launch updates.",
    url: "https://x.com/joinsafeguardco",
    icon: XIcon,
    badgeStyle: { backgroundColor: "#000000" },
  },
];

const SocialFollowBanner = () => {
  return (
    <section className="py-10 lg:py-14">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-[2rem] p-1 shadow-card">
          {/* Instagram-style gradient border */}
          <div
            className="absolute inset-0 rounded-[2rem]"
            style={{
              background:
                "linear-gradient(135deg, #feda75 0%, #fa7e1e 25%, #d62976 50%, #962fbf 75%, #4f5bd5 100%)",
            }}
            aria-hidden
          />

          {/* Inner content */}
          <div className="relative rounded-[1.75rem] bg-background px-6 py-7 sm:px-10 sm:py-9">
            <div className="flex flex-col gap-2">
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                Stay in the loop
              </p>
              <h3 className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
                Follow <span className="text-primary">Safeguard</span> on social
              </h3>
              <p className="max-w-2xl text-sm text-muted-foreground">
                Insurance tips, customer stories, and behind-the-scenes updates — wherever you like to hang out.
              </p>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {SOCIALS.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow Safeguard on ${social.name}`}
                    className="group flex items-center justify-between gap-4 rounded-2xl border border-border bg-card px-5 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:shadow-soft"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-background"
                        style={social.badgeStyle}
                      >
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                          {social.name}
                        </p>
                        <p className="text-base font-bold text-foreground">
                          {social.handle}
                        </p>
                        <p className="mt-0.5 text-xs text-muted-foreground">
                          {social.description}
                        </p>
                      </div>
                    </div>
                    <div className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full bg-foreground text-background transition-transform duration-300 group-hover:translate-x-1 sm:flex">
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialFollowBanner;
