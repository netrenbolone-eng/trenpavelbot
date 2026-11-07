interface SectionLabelProps {
  index: string;
  title: string;
  total?: string;
}

export default function SectionLabel({ index, title, total = "07" }: SectionLabelProps) {
  return (
    <div className="flex items-center gap-2 font-mono text-sm uppercase tracking-[0.12em] text-muted sm:gap-4">
      <span className="text-accent">{index}</span>
      <span className="text-olive">/</span>
      <span>{title}</span>
      <span aria-hidden className="h-px flex-1 bg-line" />
      <span>
        {index} — {total}
      </span>
    </div>
  );
}
