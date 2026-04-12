export default function Footer() {
  return (
    <footer className="border-t border-border py-12 px-6 md:px-8">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-muted-foreground">
        <span className="font-bold text-foreground text-base">Veyra</span>
        <nav className="flex gap-6">
          <a href="https://github.com/veyra" className="hover:text-foreground transition-colors">GitHub</a>
          <a href="https://www.npmjs.com/package/@veyra/sdk-node" className="hover:text-foreground transition-colors">npm</a>
          <a href="https://veyra.dev/docs" className="hover:text-foreground transition-colors">Docs</a>
          <a href="https://api.veyra.dev" className="hover:text-foreground transition-colors">API Reference</a>
        </nav>
        <span>© 2026 Veyra</span>
      </div>
    </footer>
  );
}
