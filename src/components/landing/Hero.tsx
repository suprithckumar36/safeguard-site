import { Calendar, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import BookCallDialog from "@/components/landing/BookCallDialog";
import advisor from "@/assets/advisor-hero.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="container-page grid items-center gap-12 py-12 lg:grid-cols-2 lg:py-20">
        <div className="animate-fade-up">
          <div className="mb-8 flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 shadow-soft">
              <Star className="h-4 w-4 fill-accent text-accent" />
              <span className="text-sm font-semibold">4.9</span>
              <span className="text-xs text-muted-foreground">21,000+ Google reviews</span>
            </div>
          </div>

          <h1 className="text-5xl font-extrabold leading-[1.05] text-foreground sm:text-6xl lg:text-7xl">
            The Ultimate
            <br />
            Insurance Buying
            <br />
            <span className="relative inline-block">
              Experience
              <span className="absolute -bottom-1 left-0 h-2 w-full rounded bg-accent/70" aria-hidden />
            </span>
          </h1>

          <p className="mt-6 max-w-md text-lg text-muted-foreground">
            Talk to IRDAI-certified advisors. Zero spam. Zero cost. Just clear,
            personalized guidance for the policy that actually suits you.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <BookCallDialog>
              <Button size="lg" className="gap-2">
                <Calendar className="h-4 w-4" />
                Book a free call now
              </Button>
            </BookCallDialog>
            <Button size="lg" variant="outline" asChild>
              <a href="#experience">How it works</a>
            </Button>
          </div>

          <div className="mt-8 flex items-center gap-6 text-xs font-medium text-muted-foreground">
            <span>✓ 30-min consultation</span>
            <span>✓ Zero cost</span>
            <span>✓ Zero spam</span>
          </div>
        </div>

        <div className="relative">
          <div className="relative mx-auto aspect-square w-full max-w-lg overflow-hidden rounded-[2rem] surface-yellow shadow-card">
            <img
              src={advisor}
              alt="Friendly Safeguard insurance advisor"
              width={1024}
              height={1024}
              className="h-full w-full object-cover"
            />

            <div className="absolute left-5 top-5 max-w-[60%] rounded-2xl bg-card px-4 py-3 shadow-card">
              <p className="text-xs font-semibold text-muted-foreground">Professional Advice</p>
              <p className="mt-1 text-sm font-bold text-foreground">
                Which health insurance is best for me?
              </p>
            </div>

            <div className="absolute bottom-5 left-5 right-5 space-y-2">
              <div className="flex items-center gap-3 rounded-xl bg-card px-3 py-2.5 shadow-soft">
                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-destructive/10 text-xs font-bold text-destructive">
                  H
                </div>
                <span className="text-sm font-semibold text-foreground">HDFC ERGO</span>
                <div className="ml-auto flex gap-1.5">
                  <span className="h-2 w-10 rounded bg-muted" />
                  <span className="h-2 w-10 rounded bg-muted" />
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-xl bg-card px-3 py-2.5 shadow-soft">
                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/10 text-xs font-bold text-primary">
                  I
                </div>
                <span className="text-sm font-semibold text-foreground">ICICI Lombard</span>
                <div className="ml-auto flex gap-1.5">
                  <span className="h-2 w-10 rounded bg-muted" />
                  <span className="h-2 w-10 rounded bg-muted" />
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -right-2 top-10 hidden animate-float rounded-2xl bg-card px-4 py-3 shadow-card lg:block">
            <p className="text-xs text-muted-foreground">Premium</p>
            <p className="text-lg font-bold text-foreground">₹1 Crore</p>
            <p className="text-xs font-medium text-success">Cover ✓</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
