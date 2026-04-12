import { Link } from "react-router-dom";
import VeyraLogo from "@/components/VeyraLogo";

const navItems = [
  { label: "Quickstart", to: "/docs/quickstart" },
  { label: "Commit Mode", to: "/docs/commit-mode" },
  { label: "handleCommitRequired", to: "/docs/handle-commit-required" },
  { label: "API Reference", to: "/docs/api-reference" },
  { label: "Pricing", to: "/docs/pricing" },
];

interface Props {
  children: React.ReactNode;
}

export default function DocsLayout({ children }: Props) {
  return (
    <div className="min-h-screen">
      <header className="border-b border-border px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <VeyraLogo className="w-28 h-auto" />
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm" aria-label="Documentation navigation">
            {navItems.map((item) => (
              <Link key={item.to} to={item.to} className="text-muted-foreground hover:text-foreground transition-colors">
                {item.label}
              </Link>
            ))}
          </nav>
          <a href="https://github.com/veyra" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            GitHub
          </a>
        </div>
      </header>
      <main className="max-w-3xl mx-auto px-6 py-12">
        {children}
      </main>
      <footer className="border-t border-border py-8 px-6 text-center text-sm text-muted-foreground">
        © 2024–2026 Veyra Protocol Foundation
      </footer>
    </div>
  );
}
