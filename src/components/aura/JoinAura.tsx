import { useState, type FormEvent } from "react";
import { Loader2, PartyPopper } from "lucide-react";
import { Reveal } from "./Reveal";
import { submitApplication, type ArtistApplication } from "@/lib/applications";

type Errors = Partial<Record<keyof ArtistApplication, string>>;

const empty: ArtistApplication = {
  fullName: "",
  stageName: "",
  age: "",
  city: "",
  email: "",
  primarySkill: "",
  musicStyle: "",
  languages: "",
  about: "",
  socialLink: "",
};

/** Client-side validation with accessible, field-level messages. */
function validate(values: ArtistApplication): Errors {
  const errors: Errors = {};
  if (!values.fullName.trim()) errors.fullName = "Please enter your full name.";
  if (!values.stageName.trim()) errors.stageName = "Please enter a stage name.";
  const age = Number(values.age);
  if (!values.age.trim()) errors.age = "Please enter your age.";
  else if (Number.isNaN(age) || age < 13 || age > 60) errors.age = "Age must be between 13 and 60.";
  if (!values.city.trim()) errors.city = "Please enter your city.";
  if (!/^\S+@\S+\.\S+$/.test(values.email)) errors.email = "Please enter a valid email address.";
  if (!values.primarySkill.trim()) errors.primarySkill = "Please select your primary skill.";
  if (!values.musicStyle.trim()) errors.musicStyle = "Please describe your music style.";
  if (!values.languages.trim()) errors.languages = "Please list the languages you sing in.";
  if (values.about.trim().length < 30)
    errors.about = "Please tell us at least a couple of sentences (30+ characters).";
  return errors;
}

const skills = ["Singer", "Vocalist & Performer", "Singer & Dancer", "Rapper", "Songwriter"];

export function JoinAura() {
  const [values, setValues] = useState<ArtistApplication>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const set = (key: keyof ArtistApplication) => (e: { target: { value: string } }) =>
    setValues((v) => ({ ...v, [key]: e.target.value }));

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      // Move focus to the first invalid field for screen-reader users.
      const first = document.getElementById(Object.keys(found)[0] ?? "");
      first?.focus();
      return;
    }
    setStatus("submitting");
    await submitApplication(values);
    setStatus("success");
  };

  const fieldClass = (key: keyof ArtistApplication) =>
    `w-full rounded-2xl border bg-secondary/50 px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none ${
      errors[key] ? "border-destructive" : "border-input focus:border-primary"
    }`;

  const Field = ({
    id,
    label,
    children,
  }: {
    id: keyof ArtistApplication;
    label: string;
    children: React.ReactNode;
  }) => (
    <div>
      <label htmlFor={id} className="mb-2 block text-xs tracking-widest text-muted-foreground uppercase">
        {label}
      </label>
      {children}
      {errors[id] && (
        <p id={`${id}-error`} role="alert" className="mt-1.5 text-xs text-destructive">
          {errors[id]}
        </p>
      )}
    </div>
  );

  const aria = (key: keyof ArtistApplication) => ({
    id: key,
    "aria-invalid": !!errors[key],
    "aria-describedby": errors[key] ? `${key}-error` : undefined,
    className: fieldClass(key),
  });

  return (
    <section id="join" aria-labelledby="join-title" className="section-pad relative">
      <div className="aura-blob top-1/4 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 bg-primary opacity-25" />
      <div className="relative mx-auto max-w-3xl px-5">
        <div className="text-center">
          <Reveal>
            <h2 id="join-title" className="text-3xl leading-tight font-bold sm:text-4xl md:text-5xl">
              YOUR STORY COULD <span className="text-aura">START HERE.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mx-auto mt-5 max-w-xl text-base text-muted-foreground md:text-lg">
              Whether you're singing from your bedroom, performing on a small stage, or still
              waiting for your first opportunity — your talent deserves to be seen.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.12}>
          <div className="glass mt-12 rounded-4xl p-6 sm:p-10">
            {status === "success" ? (
              <div className="py-10 text-center" role="status">
                <PartyPopper className="mx-auto h-10 w-10 text-accent" aria-hidden="true" />
                <h3 className="mt-5 font-display text-2xl font-bold">Application received.</h3>
                <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground">
                  Thank you, {values.stageName || values.fullName}. We review every submission
                  personally — you'll hear from AURA by email.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setValues(empty);
                    setStatus("idle");
                  }}
                  className="mt-7 rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:bg-secondary"
                >
                  Submit another artist
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
                <Field id="fullName" label="Full Name">
                  <input {...aria("fullName")} value={values.fullName} onChange={set("fullName")} />
                </Field>
                <Field id="stageName" label="Stage Name">
                  <input {...aria("stageName")} value={values.stageName} onChange={set("stageName")} />
                </Field>
                <Field id="age" label="Age">
                  <input
                    {...aria("age")}
                    type="number"
                    inputMode="numeric"
                    value={values.age}
                    onChange={set("age")}
                  />
                </Field>
                <Field id="city" label="City">
                  <input {...aria("city")} value={values.city} onChange={set("city")} />
                </Field>
                <Field id="email" label="Email">
                  <input {...aria("email")} type="email" value={values.email} onChange={set("email")} />
                </Field>
                <Field id="primarySkill" label="Primary Skill">
                  <select {...aria("primarySkill")} value={values.primarySkill} onChange={set("primarySkill")}>
                    <option value="">Select a skill</option>
                    {skills.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field id="musicStyle" label="Music Style">
                  <input
                    {...aria("musicStyle")}
                    placeholder="e.g. Indie pop, ghazal, R&B"
                    value={values.musicStyle}
                    onChange={set("musicStyle")}
                  />
                </Field>
                <Field id="languages" label="Languages">
                  <input
                    {...aria("languages")}
                    placeholder="e.g. Hindi, Tamil, English"
                    value={values.languages}
                    onChange={set("languages")}
                  />
                </Field>
                <div className="sm:col-span-2">
                  <Field id="about" label="Tell Us About Yourself">
                    <textarea {...aria("about")} rows={5} value={values.about} onChange={set("about")} />
                  </Field>
                </div>
                <div className="sm:col-span-2">
                  <Field id="socialLink" label="Instagram / YouTube Link (optional)">
                    <input
                      {...aria("socialLink")}
                      placeholder="https://"
                      value={values.socialLink}
                      onChange={set("socialLink")}
                    />
                  </Field>
                </div>

                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="glow-ring inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-bold tracking-[0.15em] text-primary-foreground transition-transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {status === "submitting" && (
                      <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                    )}
                    {status === "submitting" ? "SENDING..." : "BEGIN YOUR JOURNEY"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
