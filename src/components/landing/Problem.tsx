import Section from "@/components/Section";

export default function Problem() {
  return (
    <Section>
      <p className="section-label">THE PROBLEM</p>
      <div className="space-y-6 text-lg leading-relaxed">
        <p>AI agents execute write actions on your tools — updating CRMs, sending emails, deploying code, deleting records.</p>
        <p>Without commit mode, you don't know if the action was authorized, budgeted, or delegated. It's just an API call. Anyone could have sent it.</p>
        <p>With Veyra, every productive write is delegated, verified, settled, and attributable. It's not just an API call. It's a legitimate production action.</p>
      </div>
    </Section>
  );
}
