import { Heart, MessageCircle, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import BookCallDialog from "@/components/landing/BookCallDialog";

const products = [
  {
    icon: Shield,
    surface: "surface-yellow",
    title: "Vehicle Insurance",
    description:
      "Protect yourself from accidents and claim damages. Talk to an advisor to understand, compare and finalize a policy that best suits your needs.",
  },
  {
    icon: Heart,
    surface: "surface-mint",
    title: "Health Insurance",
    description:
      "Your medical bills will be covered if you're hospitalized. Talk to an advisor to explore, compare, and select a plan that best meets your health needs.",
  },
];

const Products = () => {
  return (
    <section id="products" className="surface-soft py-20 lg:py-28">
      <div className="container-page">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-primary">
            Safeguard offers
          </p>
          <h2 className="text-4xl font-extrabold text-foreground sm:text-5xl">
            Personalized advice on
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {products.map((p) => (
            <article
              key={p.title}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-soft transition-all hover:-translate-y-1 hover:shadow-card"
            >
              <div
                className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl ${p.surface}`}
              >
                <p.icon className="h-8 w-8 text-foreground" strokeWidth={2.2} />
              </div>
              <h3 className="text-2xl font-bold text-foreground">{p.title}</h3>
              <p className="mt-3 flex-1 text-base leading-relaxed text-muted-foreground">
                {p.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <BookCallDialog>
                  <Button>Book a free call</Button>
                </BookCallDialog>
                <Button
  variant="outline"
  className="gap-2"
  onClick={() => {
    window.open("https://wa.me/919880510265?text=Hi", "_blank");
  }}
>
  <MessageCircle className="h-4 w-4" />
  WhatsApp
</Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
