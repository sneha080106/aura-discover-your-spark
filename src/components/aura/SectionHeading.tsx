import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  id?: string;
};

export function SectionHeading({ eyebrow, title, description, align = "center", id }: Props) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <Reveal>
          <p className="mb-4 text-xs font-semibold tracking-[0.35em] text-accent uppercase">
            {eyebrow}
          </p>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2
          id={id}
          className="text-3xl leading-[1.05] font-bold text-balance sm:text-4xl md:text-5xl"
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.12}>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
