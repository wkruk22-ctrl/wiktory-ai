type Props = {
  size?: number;
  className?: string;
  withWordmark?: boolean;
};

export default function Logo({ size = 40, className = "", withWordmark = false }: Props) {
  return (
    <span className={`inline-flex items-center gap-2 select-none ${className}`}>
      <img
        src="/logo.png"
        alt="wiktory.ai"
        width={size}
        height={size}
        style={{ mixBlendMode: "screen" }}
      />
      {withWordmark && (
        <span
          className="font-display italic text-white leading-none"
          style={{ fontSize: size * 0.55, letterSpacing: "-0.02em" }}
        >
          wiktory<span className="text-white/55">.ai</span>
        </span>
      )}
    </span>
  );
}
