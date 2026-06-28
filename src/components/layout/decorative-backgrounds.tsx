export function DecorativeBackgrounds() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-x-0 top-0 h-[28rem] bg-[linear-gradient(180deg,rgba(47,140,119,0.08),rgba(47,140,119,0.03)_48%,transparent_100%)]" />
      <div className="absolute inset-x-0 top-[9rem] h-px bg-[linear-gradient(90deg,transparent,rgba(29,55,72,0.08),transparent)]" />
      <div className="absolute inset-x-0 top-[34rem] h-px bg-[linear-gradient(90deg,transparent,rgba(29,55,72,0.06),transparent)]" />
      <div className="absolute inset-x-0 top-[62rem] h-px bg-[linear-gradient(90deg,transparent,rgba(29,55,72,0.05),transparent)]" />
      <div className="absolute left-[max(1rem,calc(50%-35rem))] top-0 hidden h-full w-px bg-[linear-gradient(180deg,rgba(29,55,72,0.04),transparent_18%,transparent_82%,rgba(29,55,72,0.04))] xl:block" />
    </div>
  );
}
