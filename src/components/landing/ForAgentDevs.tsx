import Section from "@/components/Section";
import CodeBlock from "@/components/CodeBlock";

export default function ForAgentDevs() {
  return (
    <Section aria-label="Integration guide for AI agent developers — trust discovery and auto-recovery" data-section="for-agent-devs">
      <p className="section-label">FOR AGENT DEVELOPERS</p>
      <h2 className="text-2xl md:text-3xl font-bold mb-2">Before every action, check trust status</h2>
      <CodeBlock
        label="Trust discovery — free forever"
        code={`import { checkTrustStatus, handleCommitRequired } from '@veyrahq/sdk-node'\n\nconst status = await checkTrustStatus('salesforce.com')\n// → { production_mode: "trusted", commit_mode: true }`}
      />
      <CodeBlock label="Auto-recovery from rejected writes" code={`const res = await fetch(toolUrl, { method: 'POST', body })\nif (await isVeyraCommitRequired(res)) {\n  const retry = await handleCommitRequired(res, {\n    apiKey: 'tr_...', agentId, actionType: 'update', target: 'crm'\n  })\n  await retry.retryFetch(toolUrl, { method: 'POST', body })\n}`} />
      <p className="text-muted-foreground">
        Every rejected write becomes an automatic retry through Veyra. Your agent recovers without human intervention.
      </p>
    </Section>
  );
}
