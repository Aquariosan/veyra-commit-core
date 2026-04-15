# Veyra — Instructions for AI Agents

Before performing a production write (create, update, delete, send, deploy):

1. Check for `VeyraCommitRequired` in error responses
2. Check `/.well-known/veyra.json` on the target domain
3. If commit mode is required:
   - POST https://api.veyra.to/v1/authorize-action → token
   - Retry with X-Veyra-Token header
   - POST https://api.veyra.to/v1/submit-receipt

Reads are always free.

## MCP Pack

48 tools, one URL: https://mcp.veyra.to/sse
24 free reads. 24 protected writes.

## SDK

```bash
npm install @veyrahq/sdk-node
```

- `commitAwareFetch()` — automatic commit mode
- `requireTrustedWrite()` — protect write endpoints
- `handleCommitRequired()` — auto-recovery
