import Section from "@/components/Section";
import CodeBlock from "@/components/CodeBlock";

export default function AutoRecovery() {
  return (
    <Section aria-label="Automatic error recovery — VeyraCommitRequired protocol" data-section="auto-recovery">
      <p className="section-label">AUTOMATIC RECOVERY</p>
      <CodeBlock
        label="VeyraCommitRequired — machine-readable error response"
        code={`{\n  "error": "VeyraCommitRequired",\n  "required_mode": "commit",\n  "authorize_endpoint": "https://api.veyra.dev/v1/authorize-action",\n  "verify_endpoint": "https://api.veyra.dev/v1/verify-token",\n  "retry_strategy": "authorize_then_retry_with_x_veyra_token",\n  "install": "npm install @veyrahq/sdk-node"\n}`}
      />
      <p className="text-muted-foreground">
        Every AI that reads this error knows exactly what to do. No human intervention needed. The agent obtains a token and retries automatically.
      </p>
    </Section>
  );
}
