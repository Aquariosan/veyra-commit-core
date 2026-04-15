import Section from "@/components/Section";

const tools = [
  {
    name: "veyra-memory",
    desc: "Persistent memory for AI agents. Read freely, write with Veyra commit mode.",
    github: "https://github.com/Aquariosan/veyra-memory",
  },
  {
    name: "veyra-notes",
    desc: "Note-taking for AI agents. Search freely, write with Veyra commit mode.",
    github: "https://github.com/Aquariosan/veyra-notes",
  },
  {
    name: "veyra-tasks",
    desc: "Task management for AI agents. List freely, write with Veyra commit mode.",
    github: "https://github.com/Aquariosan/veyra-tasks",
  },
  {
    name: "veyra-snippets",
    desc: "Code snippets for AI agents. Read freely, save with Veyra commit mode.",
    github: "https://github.com/Aquariosan/veyra-snippets",
  },
  {
    name: "veyra-bookmarks",
    desc: "Bookmarks for AI agents. Browse freely, save with Veyra commit mode.",
    github: "https://github.com/Aquariosan/veyra-bookmarks",
  },
  {
    name: "veyra-contacts",
    desc: "Contact management for AI agents. Search freely, write with Veyra commit mode.",
    github: "https://github.com/Aquariosan/veyra-contacts",
  },
  {
    name: "veyra-forms",
    desc: "Form builder for AI agents. View freely, create with Veyra commit mode.",
    github: "https://github.com/Aquariosan/veyra-forms",
  },
  {
    name: "veyra-webhooks",
    desc: "Webhook sender for AI agents. Configure freely, send with Veyra commit mode.",
    github: "https://github.com/Aquariosan/veyra-webhooks",
  },
];

export default function ReferenceTools() {
  return (
    <Section aria-label="Reference tools proving Veyra in production" data-section="reference-tools">
      <p className="section-label">REFERENCE TOOLS</p>
      <h2 className="text-2xl md:text-3xl font-bold mb-2">
        Reference tools
      </h2>
      <p className="text-muted-foreground text-sm mb-8">
        Live, public MCP servers built on the Veyra commit pattern. Install globally. Use immediately.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {tools.map((tool) => (
          <div key={tool.name} className="border border-border rounded-lg p-4 bg-card flex flex-col">
            <h3 className="text-sm font-semibold font-mono text-foreground mb-1.5">{tool.name}</h3>
            <p className="text-muted-foreground text-xs mb-3 flex-1">{tool.desc}</p>
            <code className="text-[11px] font-mono bg-muted px-2 py-1 rounded text-primary mb-3 block truncate">
              npm install -g {tool.name}
            </code>
            <a
              href={tool.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-primary hover:underline"
            >
              GitHub →
            </a>
          </div>
        ))}
      </div>

      <p className="text-muted-foreground text-sm mb-2">
        One pattern. Multiple tool types. Reads stay open. Real consequences go through Veyra.
      </p>
      <p className="text-muted-foreground text-sm">
        Every tool adopts the same commit protocol. No proxy layer needed. Each server is its own gateway for protected writes.
      </p>
    </Section>
  );
}
