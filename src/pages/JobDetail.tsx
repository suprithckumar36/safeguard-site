import { Link, useParams } from "react-router-dom";
import { ArrowLeft, MapPin } from "lucide-react";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";

type JobContent = {
  title: string;
  location: string;
  type: string;
  applyUrl: string;
  sections: { heading?: string; paragraphs?: string[]; bullets?: string[] }[];
};

const APPLY_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScq9qFSZxZp6834VlVbPnjmQ5-fKXde3ggCpwsFgxgRbMXpEA/viewform?usp=publish-editor";

const JOBS: Record<string, JobContent> = {
  "affiliate-partner": {
    title: "Affiliate Partner – Safeguard Insurance Advisors",
    location: "Remote / Flexible",
    type: "Commission-Based Partnership",
    applyUrl: APPLY_URL,
    sections: [
      {
        heading: "About Us",
        paragraphs: [
          "Safeguard Insurance Advisors is a client-focused insurance consultancy dedicated to helping individuals and businesses secure the right protection through trusted advisory and tailored solutions.",
        ],
      },
      {
        heading: "Role Overview",
        paragraphs: [
          "We are looking for motivated Affiliate Partners who can refer potential clients to Safeguard Insurance Advisors and earn attractive commissions on successful conversions. This role is ideal for individuals with strong networks, communication skills, and a drive to earn based on performance.",
        ],
      },
      {
        heading: "Key Responsibilities",
        bullets: [
          "Identify and connect with potential clients (individuals or businesses)",
          "Refer leads interested in insurance products (health, vehicle, general, etc.)",
          "Maintain relationships with your network to generate ongoing referrals",
          "Coordinate with our advisory team for smooth client onboarding",
          "Follow up on leads when required",
        ],
      },
      {
        heading: "Who Can Apply",
        bullets: [
          "Students, freelancers, working professionals, or entrepreneurs",
          "Individuals with strong social or professional networks",
          "Anyone interested in earning additional income without fixed hours",
          "Prior experience in sales or insurance is a plus, but not mandatory",
        ],
      },
      {
        heading: "What You Get",
        bullets: [
          "High earning potential (commission-based)",
          "Flexible working hours – work at your own pace",
          "No investment required",
          "Training and support from our team",
          "Opportunity to grow into a long-term business partnership",
          "Internship Certificate issued under a Licensed Insurance Agent",
        ],
      },
      {
        heading: "Compensation",
        bullets: [
          "Commission on every successful policy sale",
          "Incentives for high-performing partners",
        ],
      },
      {
        heading: "How It Works",
        bullets: [
          "You refer a client",
          "Our team handles consultation and closing",
          "You earn commission on successful conversion",
        ],
      },
      {
        heading: "Apply Now",
        paragraphs: [
          "Interested candidates can fill out the Google Form to apply and get started.",
        ],
      },
    ],
  },
  "digital-marketing-intern": {
    title: "Digital Marketing Intern – Safeguard Insurance Advisors",
    location: "Remote / Flexible",
    type: "Internship (0–2 years)",
    applyUrl: APPLY_URL,
    sections: [
      {
        heading: "Role Overview",
        paragraphs: [
          "This is a performance-focused digital marketing role, not a generic internship. You will work on real campaigns, market analysis, and visibility strategies within the Indian insurance space. The role requires analytical thinking, consistency, and the ability to execute structured marketing work.",
        ],
      },
      {
        heading: "Key Responsibilities",
        bullets: [
          "Conduct SEO and SEM research specific to the insurance sector in India",
          "Assist in planning and executing Meta Ads and Google Ads campaigns",
          "Prepare detailed reports on insurance visibility, competitor positioning, and market trends in India",
          "Analyze campaign performance and suggest optimization strategies",
          "Support website/content optimization for better search rankings",
          "Work with the team to improve lead generation funnels",
        ],
      },
      {
        heading: "Skills We're Looking For",
        bullets: [
          "Understanding (or strong willingness to learn) SEO, SEM, Meta Ads, and Google Ads",
          "Ability to work with data, research, and performance metrics",
          "Structured thinking and attention to detail",
          "Basic familiarity with tools like Google Analytics, Search Console (preferred, not mandatory)",
          "Strong discipline and consistency in execution",
        ],
      },
      {
        heading: "Eligibility",
        bullets: [
          "0–2 years of experience",
          "Students and freshers are welcome",
          "No prior work experience required, but serious interest in digital marketing is essential",
        ],
      },
      {
        heading: "What You Get",
        bullets: [
          "Hands-on experience working on real campaigns in a competitive industry",
          "Exposure to performance marketing and analytics",
          "Internship certificate under a Licensed Insurance Agent",
          "Opportunity for long-term role based on performance",
        ],
      },
      {
        heading: "Apply Now",
        paragraphs: [
          "Interested candidates can fill out the Google Form to apply and get started.",
        ],
      },
    ],
  },
  "content-creation-intern": {
    title: "Content Creation Intern – Safeguard Insurance Advisors",
    location: "Remote / Flexible",
    type: "Internship (0–2 years)",
    applyUrl: APPLY_URL,
    sections: [
      {
        heading: "Role Overview",
        paragraphs: [
          "This is an advertising-driven content role, focused on creating high-quality, platform-specific content that drives engagement and conversions. We are not looking for casual creators—this role requires execution, consistency, and a strong understanding of digital trends.",
        ],
      },
      {
        heading: "Key Responsibilities",
        bullets: [
          "Create content for Instagram, Twitter (X), and YouTube aligned with brand and campaign goals",
          "Develop ad-focused video content (reels, short-form, promotional creatives)",
          "Identify and execute trending formats and ideas relevant to our industry",
          "Collaborate with the marketing team on campaign-based content",
          "Maintain consistency in brand tone and visual quality",
        ],
      },
      {
        heading: "Skills We're Looking For",
        bullets: [
          "Not camera shy and comfortable appearing in content if required",
          "Preferably owns or has access to a professional camera setup",
          "Proficiency in Adobe Premiere Pro, Final Cut Pro, or DaVinci Resolve",
          "Strong understanding of Instagram, Twitter (X), and YouTube trends",
          "Ability to think in terms of advertising and audience engagement, not just aesthetics",
        ],
      },
      {
        heading: "Eligibility",
        bullets: [
          "0–2 years of experience",
          "Students and freshers are welcome",
          "No prior work experience required, but portfolio or sample work is a strong advantage",
        ],
      },
      {
        heading: "What You Get",
        bullets: [
          "Opportunity to build a strong content portfolio in an advertising environment",
          "Work on real campaigns with measurable impact",
          "Internship certificate under a Licensed Insurance Agent",
          "Potential to transition into a long-term creative role",
        ],
      },
      {
        heading: "Apply Now",
        paragraphs: [
          "Interested candidates can fill out the Google Form to apply and get started.",
        ],
      },
    ],
  },
};

const JobDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const job = slug ? JOBS[slug] : undefined;

  if (!job) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container-page py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold">Job not found</h1>
            <p className="mt-3 text-muted-foreground">This role isn't available right now.</p>
            <Button asChild className="mt-6">
              <Link to="/careers">Back to Careers</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container-page py-16">
        <div className="mx-auto max-w-3xl">
          <Link
            to="/careers"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" /> All openings
          </Link>

          <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex-1">
              <h1 className="text-3xl font-bold tracking-tight md:text-4xl">{job.title}</h1>
              <div className="mt-4 flex flex-wrap items-center gap-3 text-sm">
                <span className="inline-flex items-center gap-1 rounded-full bg-secondary px-3 py-1 font-medium text-secondary-foreground">
                  <MapPin className="h-3.5 w-3.5" /> {job.location}
                </span>
                <span className="inline-flex items-center rounded-full bg-secondary px-3 py-1 font-medium text-secondary-foreground">
                  {job.type}
                </span>
              </div>
            </div>
            <a
              href={job.applyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 shrink-0 items-center justify-center rounded-lg bg-blue-600 px-8 text-base font-bold text-white shadow-lg transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
            >
              Apply Now
            </a>
          </div>

          <div className="mt-8 space-y-8">
            {job.sections.map((section, i) => (
              <section key={i}>
                {section.heading && (
                  <h2 className="text-xl font-semibold text-foreground">{section.heading}</h2>
                )}
                {section.paragraphs?.map((p, idx) => (
                  <p key={idx} className="mt-3 text-base leading-relaxed text-muted-foreground">
                    {p}
                  </p>
                ))}
                {section.bullets && (
                  <ul className="mt-3 space-y-2">
                    {section.bullets.map((b, idx) => (
                      <li key={idx} className="flex gap-2 text-base text-muted-foreground">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default JobDetail;
