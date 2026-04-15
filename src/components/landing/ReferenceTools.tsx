import Section from "@/components/Section";
import { ExternalLink, Terminal, Github } from "lucide-react";

const tools = [
  {
    name: "veyra-memory",
    desc: "Persistent memory for AI agents. Read freely, write with Veyra commit mode.",
    github: "https://github.com/Aquariosan/veyra-memory",
    icon: "🧠",
  },
  {
    name: "veyra-notes",
    desc: "Note-taking for AI agents. Search freely, write with Veyra commit mode.",
    github: "https://github.com/Aquariosan/veyra-notes",
    icon: "📝",
  },
  {
    name: "veyra-tasks",
    desc: "Task management for AI agents. List freely, write with Veyra commit mode.",
    github: "https://github.com/Aquariosan/veyra-tasks",
    icon: "✅",
  },
  {
    name: "veyra-snippets",
    desc: "Code snippets for AI agents. Read freely, save with Veyra commit mode.",
    github: "https://github.com/Aquariosan/veyra-snippets",
    icon: "📋",
  },
  {
    name: "veyra-bookmarks",
    desc: "Bookmarks for AI agents. Browse freely, save with Veyra commit mode.",
    github: "https://github.com/Aquariosan/veyra-bookmarks",
    icon: "🔖",
  },
  {
    name: "veyra-contacts",
    desc: "Contact management for AI agents. Search freely, write with Veyra commit mode.",
    github: "https://github.com/Aquariosan/veyra-contacts",
    icon: "👤",
  },
  {
    name: "veyra-forms",
    desc: "Form builder for AI agents. View freely, create with Veyra commit mode.",
    github: "https://github.com/Aquariosan/veyra-forms",
    icon: "📄",
  },
  {
    name: "veyra-webhooks",
    desc: "Webhook sender for AI agents. Configure freely, send with Veyra commit mode.",
    github: "https://github.com/Aquariosan/veyra-webhooks",
    icon: "🔗",
  },
];

export default function ReferenceTools() {
  return (
    <Section aria-label="Reference tools proving Veyra in production" data-section="reference-tools">
      <p className="section-label">REFERENCE TOOLS</p>
      <h2 className="text-2xl md:text-3xl font-bold mb-2">
        Reference tools
      </h2>
      <p className="text-muted-foreground text-sm mb-10 max-w-2xl">
        Live, public MCP servers built on the Veyra commit pattern. Install globally. Use immediately.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
        {tools.map((tool) => (
          <div
            key={tool.name}
            className="group relative border border-border/60 rounded-xl p-5 bg-card/50 backdrop-blur-sm flex flex-col transition-all duration-300 hover:border-primary/40 hover:bg-card/80 hover:shadow-[0_0_24px_-6px_hsl(var(--primary)/0.15)]"
          >
            <div className="flex items-start justify-between mb-3">
              <span className="text-lg leading-none">{tool.icon}</span>
              <a
                href={tool.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground/40 hover:text-primary transition-colors"
                aria-label={`${tool.name} on GitHub`}
              >
                <Github className="w-3.5 h-3.5" />
              </a>
            </div>
            <h3 className="text-sm font-semibold font-mono text-foreground mb-1.5 tracking-tight">
              {tool.name}
            </h3>
            <p className="text-muted-foreground text-xs leading-relaxed mb-4 flex-1">
              {tool.desc}
            </p>
            <div className="flex items-center gap-1.5 bg-muted/50 rounded-lg px-3 py-2 border border-border/40">
              <Terminal className="w-3 h-3 text-primary/60 shrink-0" />
              <code className="text-[11px] font-mono text-primary/90 truncate">
                npm i -g {tool.name}
              </code>
            </div>
          </div>
        ))}
      </div>

      {/* Supporting message */}
      <div className="border-t border-border/40 pt-8 space-y-4 max-w-2xl">
        <p className="text-foreground/90 text-sm font-medium">
          One pattern. Many tool types. Reads stay open.{" "}
          <span className="text-primary">Real consequences go through Veyra.</span>
        </p>
        <p className="text-muted-foreground text-xs leading-relaxed">
          Every tool adopts the same commit protocol. No proxy layer needed. Each server is its own gateway for protected writes.
        </p>
        <div className="flex flex-wrap gap-3 pt-1">
          <a
            href="https://github.com/Aquariosan/veyra"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
          >
            <Github className="w-3.5 h-3.5" />
            Core repo
            <ExternalLink className="w-2.5 h-2.5" />
          </a>
          <a
            href="https://www.npmjs.com/package/@veyrahq/sdk-node"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
          >
            <Terminal className="w-3.5 h-3.5" />
            @veyrahq/sdk-node
            <ExternalLink className="w-2.5 h-2.5" />
          </a>
        </div>
      </div>
    </Section>
  );
}
