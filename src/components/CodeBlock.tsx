interface Props {
  code: string;
  label?: string;
}

const keywords = ["import", "from", "const", "await", "if", "return", "export", "app"];
const builtins = ["true", "false", "null", "undefined"];

function highlightLine(line: string): JSX.Element[] {
  const parts: JSX.Element[] = [];
  let rest = line;
  let key = 0;

  // comments
  const commentIdx = rest.indexOf("//");
  let comment = "";
  if (commentIdx >= 0) {
    comment = rest.slice(commentIdx);
    rest = rest.slice(0, commentIdx);
  }

  // tokenize simply
  const tokens = rest.split(/(\s+|[{}()\[\],;.=:'"@/])/);
  for (const t of tokens) {
    if (!t) continue;
    // strings
    if (/^['"].*['"]$/.test(t)) {
      parts.push(<span key={key++} className="text-emerald-400">{t}</span>);
    } else if (keywords.includes(t)) {
      parts.push(<span key={key++} className="text-violet-400">{t}</span>);
    } else if (builtins.includes(t)) {
      parts.push(<span key={key++} className="text-amber-300">{t}</span>);
    } else {
      parts.push(<span key={key++}>{t}</span>);
    }
  }

  if (comment) {
    parts.push(<span key={key++} className="text-muted-foreground">{comment}</span>);
  }

  return parts;
}

function highlightJS(code: string) {
  return code.split("\n").map((line, i) => (
    <div key={i}>{highlightLine(line)}</div>
  ));
}

function highlightJSON(code: string) {
  return code.split("\n").map((line, i) => {
    const colored = line
      .replace(/"([^"]+)":/g, '<k>"$1"</k>:')
      .replace(/: "([^"]+)"/g, ': <s>"$1"</s>')
      .replace(/: (true|false)/g, ': <b>$1</b>');

    const parts: JSX.Element[] = [];
    let rest = colored;
    let key = 0;
    const tagRe = /<(k|s|b)>(.*?)<\/\1>/g;
    let match;
    let lastIdx = 0;

    while ((match = tagRe.exec(rest)) !== null) {
      if (match.index > lastIdx) {
        parts.push(<span key={key++}>{rest.slice(lastIdx, match.index)}</span>);
      }
      const cls = match[1] === "k" ? "text-sky-300" : match[1] === "s" ? "text-emerald-400" : "text-amber-300";
      parts.push(<span key={key++} className={cls}>{match[2]}</span>);
      lastIdx = match.index + match[0].length;
    }
    if (lastIdx < rest.length) parts.push(<span key={key++}>{rest.slice(lastIdx)}</span>);

    return <div key={i}>{parts}</div>;
  });
}

export default function CodeBlock({ code, label }: Props) {
  const trimmed = code.trim();
  const isJSON = trimmed.startsWith("{") || trimmed.startsWith("[");

  return (
    <div className="my-6">
      {label && (
        <div className="text-xs font-mono text-muted-foreground mb-2">{label}</div>
      )}
      <div className="code-block text-[13px] leading-6">
        {isJSON ? highlightJSON(trimmed) : highlightJS(trimmed)}
      </div>
    </div>
  );
}
