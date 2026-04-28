import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What is Safeguard?",
    a: "Safeguard helps you make better decisions when buying insurance. That's it. That's all we do.",
  },
  {
    q: "But what exactly do you do?",
    a: "We have a host of well-trained advisors who walk you through any queries you may have, and we'll even help you make a purchase. All you have to do is book a call.",
  },
  {
    q: "Is it free?",
    a: "Yes, it's completely free. We're paid by the insurer when you buy a policy through us — never by you.",
  },
  {
    q: "Will I be spammed with calls?",
    a: "Never. We have a strict no-spam policy. You'll only hear from us if you ask us to follow up.",
  },
  {
    q: "Are your advisors IRDAI certified?",
    a: "Yes. Every Safeguard advisor is IRDAI-certified and trained extensively before they take a single call.",
  },
];

const FAQ = () => {
  return (
    <section className="surface-soft py-20 lg:py-28">
      <div className="container-page grid gap-12 lg:grid-cols-[1fr_2fr]">
        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-primary">
            Got questions?
          </p>
          <h2 className="text-4xl font-extrabold text-foreground sm:text-5xl">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Can't find what you're looking for? Book a free call and our advisors
            will answer everything.
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((f, i) => (
            <AccordionItem
              key={f.q}
              value={`item-${i}`}
              className="rounded-2xl border border-border bg-card px-5 mb-3 shadow-soft"
            >
              <AccordionTrigger className="text-left text-base font-semibold hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
