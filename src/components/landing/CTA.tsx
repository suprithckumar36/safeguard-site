import { Calendar, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import BookCallDialog from "@/components/landing/BookCallDialog";

const CTA = () => {
  return (
    <section id="cta" className="py-20 lg:py-28">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-[2rem] bg-foreground px-8 py-16 text-background shadow-card sm:px-14 sm:py-20">
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-accent/30 blur-3xl" aria-hidden />
          <div className="absolute -bottom-20 -left-10 h-72 w-72 rounded-full bg-primary/40 blur-3xl" aria-hidden />

          <div className="relative max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-widest text-accent">
              Ready when you are
            </p>
            <h2 className="mt-3 text-4xl font-extrabold leading-tight sm:text-5xl">
              Choose Safeguard for a well-guided
              <br />
              insurance purchase.
            </h2>
            <p className="mt-5 max-w-xl text-base text-background/70">
              Book a 30-minute call with an IRDAI-certified advisor. No cost,
              no spam, no obligation.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <BookCallDialog>
                <Button size="lg" variant="secondary" className="gap-2">
                  <Calendar className="h-4 w-4" />
                  Book a free call now
                </Button>
              </BookCallDialog>
              <Button
  size="lg"
  variant="outline"
  className="gap-2 border-background/30 bg-transparent text-background"
  onClick={() => {
    window.open("https://wa.me/919880510265?text=Hi", "_blank");
  }}
>
  <MessageCircle className="h-4 w-4" />
  Chat on WhatsApp
</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
