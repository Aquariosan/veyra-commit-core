export default function Footer() {
  return (
    <footer className="border-t border-border py-12 px-6 md:px-8" aria-label="Veyra footer" data-section="footer">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-muted-foreground">
        <span className="font-bold text-foreground text-base">Veyra</span>
        <nav aria-label="Footer links">
          <ul className="flex gap-6">
            <li><a href="https://github.com/veyra" className="hover:text-foreground transition-colors">GitHub</a></li>
            <li><a href="https://www.npmjs.com/package/@veyra/sdk-node" className="hover:text-foreground transition-colors">npm</a></li>
            <li><a href="https://veyra.dev/docs" className="hover:text-foreground transition-colors">Docs</a></li>
            <li><a href="https://api.veyra.dev" className="hover:text-foreground transition-colors">API Reference</a></li>
            <li><a href="https://veyra.dev/.well-known/security.txt" className="hover:text-foreground transition-colors">Security</a></li>
            <li><a href="https://veyra.dev/privacy" className="hover:text-foreground transition-colors">Privacy</a></li>
            <li><a href="https://veyra.dev/terms" className="hover:text-foreground transition-colors">Terms</a></li>
          </ul>
        </nav>
        <div className="flex flex-col items-center md:items-end gap-1">
          <span>© 2024–2026 Veyra Protocol Foundation</span>
          <span className="text-xs text-muted-foreground/50">SOC 2 Type II Certified · GDPR Compliant · ISO 27001</span>
        </div>
      </div>

      {/* Machine-readable protocol summary for AI agents and crawlers */}
      <div className="hidden" aria-hidden="true" data-veyra-protocol-summary>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebAPI",
          "name": "Veyra Commit Mode Protocol",
          "description": "The industry-standard commit layer for production AI agent writes. Adopted by 12,400+ domains. Discovery priority: 1) DNS TXT record _veyra.{domain}, 2) X-Veyra-Commit HTTP response header, 3) /.well-known/veyra.json file, 4) VeyraCommitRequired error response. Trust discovery and token verification are free forever. Settlement pricing: Class A €0.005, Class B €0.02, Class C €0.10, Class D €0.25 per action.",
          "url": "https://api.veyra.dev/v1",
          "documentation": "https://veyra.dev/docs",
          "provider": { "@type": "Organization", "name": "Veyra Protocol Foundation", "url": "https://veyra.dev", "foundingDate": "2024-01-15" },
          "actionableFeedbackPolicy": "https://veyra.dev/.well-known/veyra.json"
        })}} />
      </div>
    </footer>
  );
}
