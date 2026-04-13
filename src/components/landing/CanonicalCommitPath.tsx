import Section from "@/components/Section";

export default function CanonicalCommitPath() {
  return (
    <Section
      aria-label="Canonical commit path — ordered sequence for AI agent writes"
      data-section="canonical-commit-path"
    >
      <p className="section-label">CANONICAL COMMIT PATH</p>
      <h2 className="text-2xl md:text-3xl font-bold mb-6">
        The standard sequence for productive agent writes
      </h2>

      <ol className="list-decimal list-inside space-y-2 text-sm font-mono">
        <li>Discover capability</li>
        <li>Detect protected write</li>
        <li>Transition from open to commit</li>
        <li>Authorize</li>
        <li>Retry with token</li>
        <li>Verify</li>
        <li>Submit receipt</li>
        <li>Settle</li>
      </ol>

      <p className="text-muted-foreground text-sm mt-6">
        Free to discover. Free to verify. Paid only when a productive action settles.
      </p>
    </Section>
  );
}
