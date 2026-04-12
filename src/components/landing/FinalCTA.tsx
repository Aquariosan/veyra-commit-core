import Section from "@/components/Section";

export default function FinalCTA() {
  return (
    <Section className="text-center">
      <h2 className="text-2xl md:text-4xl font-extrabold mb-4">
        Ready to put your tool into commit mode?
      </h2>
      <p className="text-muted-foreground mb-8">
        The fastest way to make your AI tool production-trusted.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="https://veyra.dev/docs/quickstart"
          className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:brightness-110 transition-all"
        >
          Protect your first write endpoint
        </a>
        <a
          href="https://veyra.dev/docs"
          className="px-6 py-3 rounded-lg border border-border text-foreground font-medium text-sm hover:bg-secondary transition-all"
        >
          Read the quickstart →
        </a>
      </div>
      <p className="mt-8 text-muted-foreground text-sm">
        Free to verify. Free to discover. Charged only when actions settle.
      </p>
    </Section>
  );
}
