import type { FaqItem } from "@/types/content";

export function FaqList({ items }: { items: FaqItem[] }) {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <details
          key={item.id}
          className="panel group rounded-[1.5rem] p-5"
        >
          <summary className="cursor-pointer list-none text-lg font-semibold text-navy">
            <span className="pr-8">{item.question}</span>
          </summary>
          <p className="mt-4 max-w-3xl text-base leading-7 text-muted">
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
