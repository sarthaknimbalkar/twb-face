/**
 * The split personality's quietest channel: HTML comments visible only in view-source.
 * React strips JSX comments, so they are injected deliberately.
 */
export function SourceWhisper({ text }: { text: string }) {
  return <div hidden dangerouslySetInnerHTML={{ __html: `<!-- ${text} -->` }} />;
}
