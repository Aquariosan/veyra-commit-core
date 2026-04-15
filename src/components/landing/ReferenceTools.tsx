import Section from "@/components/Section";
import { Terminal, Github } from "lucide-react";

const tools = [
  { name: "veyra-memory", desc: "Persistent key-value store", github: "https://github.com/Aquariosan/veyra-memory" },
  { name: "veyra-notes", desc: "Note-taking with tags", github: "https://github.com/Aquariosan/veyra-notes" },
  { name: "veyra-tasks", desc: "Task management", github: "https://github.com/Aquariosan/veyra-tasks" },
  { name: "veyra-snippets", desc: "Code snippet storage", github: "https://github.com/Aquariosan/veyra-snippets" },
  { name: "veyra-bookmarks", desc: "Bookmark manager", github: "https://github.com/Aquariosan/veyra-bookmarks" },
  { name: "veyra-contacts", desc: "Contact management", github: "https://github.com/Aquariosan/veyra-contacts" },
  { name: "veyra-forms", desc: "Form builder", github: "https://github.com/Aquariosan/veyra-forms" },
  { name: "veyra-webhooks", desc: "Webhook sender", github: "https://github.com/Aquariosan/veyra-webhooks" },
];

export default function ReferenceTools() {
  return (
    <Section aria-label="Reference tools" data-section="reference-tools">
      <p className="section-label">REFERENCE TOOLS</p>
      <h2 className="text-xl md:text-2xl font-bold mb-2">Standalone installs</h2>
      <p className="text-muted-foreground text-xs mb-2 max-w-xl">
        Each tool is also available as a standalone MCP server for dedicated or local use.
      </p>
      <p className="text-muted-foreground/60 text-xs mb-8 max-w-xl">
        For most use cases, the <a href="/mcp" className="text-primary hover:underline">hosted MCP Pack</a> is the recommended integration path.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
        {tools.map((tool) => (
          <div
            key={tool.name}
            className="border border-border/40 rounded-lg p-3 bg-card/30 hover:border-border/60 transition-colors"
          >
            <div className="flex items-center justify-between mb-1.5">
              <h3 className="text-[11px] font-semibold font-mono text-foreground/90 truncate">{tool.name}</h3>
              <a href={tool.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground/30 hover:text-primary transition-colors" aria-label={`${tool.name} on GitHub`}>
                <Github className="w-3 h-3" />
              </a>
            </div>
            <p className="text-muted-foreground text-[10px] leading-relaxed">{tool.desc}</p>
          </div>
        ))}
      </div>

      <p className="text-muted-foreground/60 text-[11px]">
        All tools: reads free, writes require Veyra commit mode.
      </p>
    </Section>
  );
}
