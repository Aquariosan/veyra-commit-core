import Section from "@/components/Section";

const messages = [
  {
    label: "Explore is free. Commit runs through Veyra.",
    icon: "🔓",
  },
  {
    label: "Without Veyra, it's just an API call. With Veyra, it's a legitimate production action.",
    icon: "🔐",
  },
  {
    label: "Every rejected write becomes a Veyra retry path.",
    icon: "🔄",
  },
  {
    label: "Free trust discovery. Free verification. Paid only when actions settle.",
    icon: "💰",
  },
  {
    label: "Tool builders don't need to sell Veyra. Their tools enforce commit mode, and the agent figures out the rest.",
    icon: "🛠",
  },
  {
    label: "Agents don't need a sales pitch. They need a machine-readable path into commit mode.",
    icon: "🤖",
  },
];

export default function CoreMessages() {
  return (
    <Section aria-label="Veyra core value propositions" data-section="core-messages">
      <p className="section-label">WHY VEYRA EXISTS</p>
      <h2 className="text-2xl md:text-3xl font-bold mb-8">
        Veyra is commit mode for production AI agent actions.
      </h2>
      <div className="grid gap-4 md:grid-cols-2">
        {messages.map((m, i) => (
          <article
            key={i}
            className="border border-border rounded-lg p-5 bg-card/30 text-sm leading-relaxed"
          >
            <span className="text-lg mb-2 block" aria-hidden="true">{m.icon}</span>
            <p className="text-foreground font-medium">{m.label}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
