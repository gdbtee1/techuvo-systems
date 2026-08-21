import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  Check,
  FileText,
  Image,
  Link2,
  Palette,
  ShieldCheck,
  Sparkles,
  Upload,
  Video,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Your business",
    short: "Basics",
    icon: Building2,
  },
  {
    number: "02",
    title: "Your website",
    short: "Goals",
    icon: Sparkles,
  },
  {
    number: "03",
    title: "Your content",
    short: "Uploads",
    icon: Upload,
  },
  {
    number: "04",
    title: "Your style",
    short: "Direction",
    icon: Palette,
  },
  {
    number: "05",
    title: "Final details",
    short: "Review",
    icon: FileText,
  },
];

const initialForm = {
  businessName: "",
  contactName: "",
  email: "",
  phone: "",
  industry: "",
  city: "",
  existingWebsite: "",

  websiteGoal: "",
  services: "",
  pages: "",
  features: "",
  targetCustomer: "",

  colors: "",
  style: "",
  inspiration: "",
  avoid: "",

  notes: "",
};

function Field({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
}) {
  return (
    <label className="grid gap-2">
      <span className="text-[0.7rem] font-black uppercase tracking-[0.14em] text-slate-600">
        {label}
      </span>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="min-h-14 rounded-[1rem] border-[3px] border-slate-950 bg-white px-4 text-base font-bold text-slate-950 outline-none transition focus:-translate-y-0.5 focus:shadow-[4px_5px_0_#0f172a]"
      />
    </label>
  );
}

function TextArea({
  label,
  name,
  value,
  onChange,
  placeholder,
  rows = 5,
}) {
  return (
    <label className="grid gap-2">
      <span className="text-[0.7rem] font-black uppercase tracking-[0.14em] text-slate-600">
        {label}
      </span>

      <textarea
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        className="resize-none rounded-[1rem] border-[3px] border-slate-950 bg-white px-4 py-4 text-base font-semibold leading-7 text-slate-950 outline-none transition focus:-translate-y-0.5 focus:shadow-[4px_5px_0_#0f172a]"
      />
    </label>
  );
}

function UploadZone({
  icon: Icon,
  title,
  description,
  accept,
  multiple = true,
  files,
  onFiles,
}) {
  return (
    <label className="group relative block cursor-pointer">
      <input
        type="file"
        accept={accept}
        multiple={multiple}
        onChange={(event) =>
          onFiles(Array.from(event.target.files || []))
        }
        className="sr-only"
      />

      <div className="relative min-h-[175px] overflow-hidden rounded-[1.5rem] border-[3px] border-dashed border-slate-950 bg-white p-5 transition duration-200 group-hover:-translate-y-1 group-hover:border-solid group-hover:shadow-[6px_7px_0_#0f172a]">
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="grid h-12 w-12 place-items-center rounded-[1rem] border-[3px] border-slate-950 bg-yellow-300 shadow-[3px_4px_0_#0f172a]"
        >
          <Icon className="h-5 w-5" />
        </motion.div>

        <p className="mt-5 text-xl font-black tracking-[-0.04em]">
          {title}
        </p>

        <p className="mt-2 max-w-sm text-sm font-semibold leading-6 text-slate-500">
          {description}
        </p>

        <div className="mt-4 flex items-center gap-2 text-xs font-black uppercase tracking-[0.12em] text-blue-600">
          <Upload className="h-4 w-4" />
          Choose files
        </div>

        {files.length > 0 && (
          <div className="mt-4 rounded-xl border-2 border-slate-950 bg-[#6ee7b7] px-3 py-2 text-xs font-black">
            {files.length} file{files.length === 1 ? "" : "s"} selected
          </div>
        )}
      </div>
    </label>
  );
}

function WebsiteOnboarding() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState(initialForm);
  const [formStatus, setFormStatus] = useState("idle");
  const [submissionMessage, setSubmissionMessage] = useState("");

  const [paymentStatus, setPaymentStatus] = useState("checking");
  const [paymentMessage, setPaymentMessage] = useState("");
  const [verifiedSessionId, setVerifiedSessionId] = useState("");

  const [logoFiles, setLogoFiles] = useState([]);
  const [imageFiles, setImageFiles] = useState([]);
  const [videoFiles, setVideoFiles] = useState([]);
  const [documentFiles, setDocumentFiles] = useState([]);

  useEffect(() => {
    let cancelled = false;

    const verifyPayment = async () => {
      const params = new URLSearchParams(window.location.search);
      const sessionId = params.get("session_id");

      if (!sessionId || !sessionId.startsWith("cs_")) {
        if (!cancelled) {
          setPaymentStatus("required");
          setPaymentMessage(
            "A completed $50 Stripe checkout is required before project onboarding.",
          );
        }
        return;
      }

      try {
        setPaymentStatus("checking");
        setPaymentMessage("");

        const response = await fetch(
          `https://techuvo-checkout.techuvo-dev.workers.dev/verify-payment?session_id=${encodeURIComponent(
            sessionId,
          )}`,
          {
            method: "GET",
            headers: {
              Accept: "application/json",
            },
          },
        );

        const data = await response.json();

        if (!response.ok || !data?.paid) {
          throw new Error(
            data?.error ||
              "Stripe has not confirmed this $50 payment as completed.",
          );
        }

        if (cancelled) return;

        setVerifiedSessionId(sessionId);
        setPaymentStatus("verified");

        setForm((current) => ({
          ...current,
          email: current.email || data.customerEmail || "",
          contactName: current.contactName || data.customerName || "",
        }));
      } catch (error) {
        if (cancelled) return;

        setPaymentStatus("required");
        setPaymentMessage(
          error instanceof Error
            ? error.message
            : "We could not verify your Stripe payment.",
        );
      }
    };

    verifyPayment();

    return () => {
      cancelled = true;
    };
  }, []);

  const progress = useMemo(
    () => ((step + 1) / steps.length) * 100,
    [step],
  );

  const updateField = (event) => {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const nextStep = () => {
    setStep((current) =>
      Math.min(current + 1, steps.length - 1),
    );

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const previousStep = () => {
    setStep((current) => Math.max(current - 1, 0));

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleSubmit = async () => {
    const requiredFields = [
      ["businessName", "business name"],
      ["contactName", "your name"],
      ["email", "email"],
      ["phone", "phone number"],
      ["websiteGoal", "main website goal"],
    ];

    const missing = requiredFields.find(
      ([key]) => !String(form[key] || "").trim(),
    );

    if (missing) {
      setFormStatus("validation-error");
      setSubmissionMessage(
        `Please add ${missing[1]} before submitting your website brief.`,
      );
      return;
    }

    try {
      setFormStatus("submitting");
      setSubmissionMessage("");

      const payload = new FormData();

      payload.append("_subject", `NEW $50 TECHUVO WEBSITE CLIENT — ${form.businessName}`);
      payload.append("lead_source", "$50 Website Offer / Paid Onboarding");
      payload.append("stripe_checkout_session", verifiedSessionId);
      payload.append("payment_verified", "Yes");
      payload.append("business_name", form.businessName);
      payload.append("contact_name", form.contactName);
      payload.append("email", form.email);
      payload.append("phone", form.phone);
      payload.append("industry", form.industry);
      payload.append("city_service_area", form.city);
      payload.append("existing_website", form.existingWebsite);

      payload.append("website_goal", form.websiteGoal);
      payload.append("services_products", form.services);
      payload.append("pages_requested", form.pages);
      payload.append("special_features", form.features);
      payload.append("target_customer", form.targetCustomer);

      payload.append("preferred_colors", form.colors);
      payload.append("overall_style", form.style);
      payload.append("website_inspiration", form.inspiration);
      payload.append("things_to_avoid", form.avoid);
      payload.append("final_notes", form.notes);

      payload.append(
        "file_summary",
        `${logoFiles.length} logo/branding, ${imageFiles.length} photo, ${videoFiles.length} video, ${documentFiles.length} document file(s)`,
      );

      logoFiles.forEach((file) => payload.append("logo_branding_files", file));
      imageFiles.forEach((file) => payload.append("photo_files", file));
      videoFiles.forEach((file) => payload.append("video_files", file));
      documentFiles.forEach((file) => payload.append("document_files", file));

      const response = await fetch("https://formspree.io/f/mnjprdge", {
        method: "POST",
        body: payload,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        const message =
          data?.errors?.map((item) => item.message).join(" ") ||
          "Your brief could not be submitted right now.";

        throw new Error(message);
      }

      setFormStatus("success");
      setSubmissionMessage(
        "Your website brief was sent to Techuvo successfully. We now have your business details and project direction.",
      );
    } catch (error) {
      setFormStatus("submission-error");
      setSubmissionMessage(
        error?.message ||
          "Your brief could not be submitted right now. Please try again.",
      );
    }
  };

  const smsHref = `sms:+13134507265?body=${encodeURIComponent(
    `Hi Techuvo, I just submitted my $50 website brief. Business: ${
      form.businessName || "My business"
    }. Name: ${form.contactName || "Client"}.`,
  )}`;

  if (paymentStatus === "checking") {
    return (
      <main className="grid min-h-screen place-items-center overflow-hidden bg-[#fff9ee] px-5 text-slate-950">
        <div
          className="fixed inset-0 pointer-events-none opacity-[0.25]"
          style={{
            backgroundImage:
              "linear-gradient(#dbeafe 1px, transparent 1px), linear-gradient(90deg, #dbeafe 1px, transparent 1px)",
            backgroundSize: "34px 34px",
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          className="relative w-full max-w-xl rounded-[2rem] border-[3px] border-slate-950 bg-white p-7 text-center shadow-[8px_9px_0_#0f172a] sm:p-10"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 1.1,
              repeat: Infinity,
              ease: "linear",
            }}
            className="mx-auto h-14 w-14 rounded-full border-[5px] border-slate-200 border-t-blue-600"
          />

          <p className="mt-7 text-xs font-black uppercase tracking-[0.18em] text-blue-600">
            Secure checkout
          </p>

          <h1 className="mt-3 text-4xl font-black tracking-[-0.055em] sm:text-5xl">
            Verifying your payment.
          </h1>

          <p className="mx-auto mt-4 max-w-md text-sm font-semibold leading-6 text-slate-500">
            We&apos;re confirming your $50 Stripe payment before opening your
            Techuvo project briefing.
          </p>
        </motion.div>
      </main>
    );
  }

  if (paymentStatus !== "verified") {
    return (
      <main className="grid min-h-screen place-items-center overflow-hidden bg-[#fff9ee] px-5 text-slate-950">
        <div
          className="fixed inset-0 pointer-events-none opacity-[0.25]"
          style={{
            backgroundImage:
              "linear-gradient(#dbeafe 1px, transparent 1px), linear-gradient(90deg, #dbeafe 1px, transparent 1px)",
            backgroundSize: "34px 34px",
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          className="relative w-full max-w-xl rounded-[2rem] border-[3px] border-slate-950 bg-white p-7 text-center shadow-[8px_9px_0_#0f172a] sm:p-10"
        >
          <div className="mx-auto grid h-14 w-14 place-items-center rounded-full border-[3px] border-slate-950 bg-yellow-300 shadow-[3px_4px_0_#0f172a]">
            <ShieldCheck className="h-6 w-6" />
          </div>

          <p className="mt-7 text-xs font-black uppercase tracking-[0.18em] text-blue-600">
            Payment required
          </p>

          <h1 className="mt-3 text-4xl font-black tracking-[-0.055em] sm:text-5xl">
            Start your project first.
          </h1>

          <p className="mx-auto mt-4 max-w-md text-sm font-semibold leading-6 text-slate-500">
            {paymentMessage ||
              "A completed $50 Stripe checkout is required before project onboarding."}
          </p>

          <a
            href="/start"
            className="mt-7 inline-flex min-h-14 items-center justify-center gap-2 rounded-full border-[3px] border-slate-950 bg-blue-600 px-7 text-sm font-black text-white shadow-[5px_6px_0_#0f172a] transition hover:-translate-y-1"
          >
            Return to $50 Offer
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </main>
    );
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#fff9ee] text-slate-950">
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.25]"
        style={{
          backgroundImage:
            "linear-gradient(#dbeafe 1px, transparent 1px), linear-gradient(90deg, #dbeafe 1px, transparent 1px)",
          backgroundSize: "34px 34px",
        }}
      />

      {/* header */}
      <header className="relative z-20 border-b-[3px] border-slate-950 bg-white">
        <div className="mx-auto flex max-w-[94rem] items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
          <a href="/" className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-[14px] border-[3px] border-slate-950 bg-blue-600 text-sm font-black text-white shadow-[4px_4px_0_#0f172a]">
              T
            </div>

            <div>
              <p className="text-lg font-black tracking-[-0.05em]">
                Techuvo
              </p>

              <p className="text-[0.56rem] font-black uppercase tracking-[0.18em] text-slate-500">
                Project onboarding
              </p>
            </div>
          </a>

          <div className="hidden rounded-full border-[3px] border-slate-950 bg-[#6ee7b7] px-4 py-2 text-xs font-black uppercase tracking-[0.12em] shadow-[3px_4px_0_#0f172a] sm:block">
            Deposit received ✓
          </div>
        </div>
      </header>

      {/* progress */}
      <section className="relative z-10 border-b-[3px] border-slate-950 bg-yellow-300">
        <div className="mx-auto max-w-[94rem] px-5 py-4 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between gap-4">
            <p className="text-xs font-black uppercase tracking-[0.16em]">
              Project briefing
            </p>

            <p className="text-xs font-black">
              {step + 1} / {steps.length}
            </p>
          </div>

          <div className="mt-3 h-3 overflow-hidden rounded-full border-[2px] border-slate-950 bg-white">
            <motion.div
              animate={{ width: `${progress}%` }}
              transition={{
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="h-full bg-blue-600"
            />
          </div>
        </div>
      </section>

      <section className="relative z-10 px-5 py-10 sm:px-8 sm:py-16 lg:px-12">
        <div className="mx-auto grid max-w-[94rem] gap-10 lg:grid-cols-[18rem_1fr]">
          {/* desktop step map */}
          <aside className="hidden lg:block">
            <div className="sticky top-8">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-600">
                Build brief
              </p>

              <h1 className="mt-3 text-4xl font-black leading-[0.92] tracking-[-0.055em]">
                Give us everything we need.
              </h1>

              <p className="mt-4 text-sm font-semibold leading-6 text-slate-500">
                Your answers, images, videos and files stay organized
                with your project.
              </p>

              <div className="relative mt-8">
                <div className="absolute bottom-6 left-[1.45rem] top-6 w-[3px] bg-slate-950" />

                <div className="grid gap-5">
                  {steps.map((item, index) => {
                    const Icon = item.icon;
                    const active = index === step;
                    const completed = index < step;

                    return (
                      <button
                        key={item.number}
                        type="button"
                        onClick={() => setStep(index)}
                        className="relative z-10 flex items-center gap-4 text-left"
                      >
                        <motion.div
                          animate={{
                            scale: active ? 1.08 : 1,
                          }}
                          className={`grid h-12 w-12 shrink-0 place-items-center rounded-full border-[3px] border-slate-950 shadow-[3px_4px_0_#0f172a] ${
                            completed
                              ? "bg-[#6ee7b7]"
                              : active
                                ? "bg-yellow-300"
                                : "bg-white"
                          }`}
                        >
                          {completed ? (
                            <Check className="h-5 w-5" strokeWidth={4} />
                          ) : (
                            <Icon className="h-5 w-5" />
                          )}
                        </motion.div>

                        <div>
                          <p className="text-[9px] font-black uppercase tracking-[0.15em] text-slate-400">
                            Step {item.number}
                          </p>

                          <p
                            className={`mt-1 text-sm font-black ${
                              active
                                ? "text-blue-600"
                                : "text-slate-950"
                            }`}
                          >
                            {item.title}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </aside>

          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{
                  opacity: 0,
                  x: 35,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  x: -25,
                }}
                transition={{
                  duration: 0.32,
                }}
              >
                {/* STEP 1 */}
                {step === 0 && (
                  <div>
                    <div className="inline-flex rounded-full border-[3px] border-slate-950 bg-[#6ee7b7] px-4 py-2 text-xs font-black uppercase tracking-[0.14em] shadow-[3px_4px_0_#0f172a]">
                      Step 01 — The basics
                    </div>

                    <h2 className="mt-6 max-w-4xl text-[clamp(3.2rem,7vw,6.5rem)] font-black leading-[0.86] tracking-[-0.07em]">
                      First, tell us
                      <span className="block text-blue-600">
                        who we're building for.
                      </span>
                    </h2>

                    <div className="mt-10 grid gap-5 rounded-[2rem] border-[3px] border-slate-950 bg-[#bfe2ff] p-5 shadow-[8px_9px_0_#0f172a] sm:grid-cols-2 sm:p-7">
                      <Field
                        label="Business name"
                        name="businessName"
                        value={form.businessName}
                        onChange={updateField}
                        placeholder="Ex. Johnson's Barbershop"
                      />

                      <Field
                        label="Your name"
                        name="contactName"
                        value={form.contactName}
                        onChange={updateField}
                        placeholder="Who should we contact?"
                      />

                      <Field
                        label="Email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={updateField}
                        placeholder="you@business.com"
                      />

                      <Field
                        label="Phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={updateField}
                        placeholder="(313) 555-0123"
                      />

                      <Field
                        label="Industry"
                        name="industry"
                        value={form.industry}
                        onChange={updateField}
                        placeholder="Dental, barber, restaurant..."
                      />

                      <Field
                        label="City / service area"
                        name="city"
                        value={form.city}
                        onChange={updateField}
                        placeholder="Detroit, Michigan"
                      />

                      <div className="sm:col-span-2">
                        <Field
                          label="Existing website, if any"
                          name="existingWebsite"
                          value={form.existingWebsite}
                          onChange={updateField}
                          placeholder="https://..."
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 2 */}
                {step === 1 && (
                  <div>
                    <div className="inline-flex rounded-full border-[3px] border-slate-950 bg-yellow-300 px-4 py-2 text-xs font-black uppercase tracking-[0.14em] shadow-[3px_4px_0_#0f172a]">
                      Step 02 — The mission
                    </div>

                    <h2 className="mt-6 max-w-4xl text-[clamp(3.2rem,7vw,6.5rem)] font-black leading-[0.86] tracking-[-0.07em]">
                      What should your
                      <span className="block text-blue-600">
                        website accomplish?
                      </span>
                    </h2>

                    <div className="mt-10 grid gap-5 rounded-[2rem] border-[3px] border-slate-950 bg-yellow-200 p-5 shadow-[8px_9px_0_#0f172a] sm:p-7">
                      <TextArea
                        label="Main goal"
                        name="websiteGoal"
                        value={form.websiteGoal}
                        onChange={updateField}
                        placeholder="Ex. Get more appointment bookings, show my work, generate calls..."
                      />

                      <TextArea
                        label="Services / products"
                        name="services"
                        value={form.services}
                        onChange={updateField}
                        placeholder="Tell us what you sell or provide."
                      />

                      <div className="grid gap-5 sm:grid-cols-2">
                        <Field
                          label="Pages you think you need"
                          name="pages"
                          value={form.pages}
                          onChange={updateField}
                          placeholder="Home, About, Services..."
                        />

                        <Field
                          label="Special features"
                          name="features"
                          value={form.features}
                          onChange={updateField}
                          placeholder="Booking, forms, gallery..."
                        />
                      </div>

                      <TextArea
                        label="Who is your ideal customer?"
                        name="targetCustomer"
                        value={form.targetCustomer}
                        onChange={updateField}
                        placeholder="Who should this website speak to?"
                        rows={4}
                      />
                    </div>
                  </div>
                )}

                {/* STEP 3 */}
                {step === 2 && (
                  <div>
                    <div className="inline-flex rounded-full border-[3px] border-slate-950 bg-[#ff8c75] px-4 py-2 text-xs font-black uppercase tracking-[0.14em] shadow-[3px_4px_0_#0f172a]">
                      Step 03 — Your content
                    </div>

                    <h2 className="mt-6 max-w-4xl text-[clamp(3.2rem,7vw,6.5rem)] font-black leading-[0.86] tracking-[-0.07em]">
                      Drop everything
                      <span className="block text-blue-600">
                        right here.
                      </span>
                    </h2>

                    <p className="mt-6 max-w-2xl text-lg font-semibold leading-8 text-slate-600">
                      Logos, photos, videos, menus, price sheets,
                      brochures — anything you want Techuvo to work
                      with.
                    </p>

                    <div className="mt-10 grid gap-5 md:grid-cols-2">
                      <UploadZone
                        icon={Sparkles}
                        title="Logo & branding"
                        description="Upload your logo, brand marks, icons or existing brand files."
                        accept=".png,.jpg,.jpeg,.webp,.svg,.pdf"
                        files={logoFiles}
                        onFiles={setLogoFiles}
                      />

                      <UploadZone
                        icon={Image}
                        title="Photos"
                        description="Team photos, office photos, products, work examples, before/after images and more."
                        accept="image/*"
                        files={imageFiles}
                        onFiles={setImageFiles}
                      />

                      <UploadZone
                        icon={Video}
                        title="Videos"
                        description="Office tours, product clips, testimonials, background videos or other footage."
                        accept="video/*"
                        files={videoFiles}
                        onFiles={setVideoFiles}
                      />

                      <UploadZone
                        icon={FileText}
                        title="Documents"
                        description="Menus, pricing sheets, service lists, brochures, PDFs and other reference material."
                        accept=".pdf,.doc,.docx,.txt,.csv"
                        files={documentFiles}
                        onFiles={setDocumentFiles}
                      />
                    </div>

                    <div className="mt-6 rounded-[1.5rem] border-[3px] border-slate-950 bg-white p-5 shadow-[5px_6px_0_#0f172a]">
                      <p className="font-black">
                        Don't have everything yet?
                      </p>

                      <p className="mt-2 text-sm font-semibold leading-6 text-slate-500">
                        That's okay. You'll be able to add more project
                        files later once the client portal is connected.
                      </p>
                    </div>
                  </div>
                )}

                {/* STEP 4 */}
                {step === 3 && (
                  <div>
                    <div className="inline-flex rounded-full border-[3px] border-slate-950 bg-[#e8d3ce] px-4 py-2 text-xs font-black uppercase tracking-[0.14em] shadow-[3px_4px_0_#0f172a]">
                      Step 04 — Art direction
                    </div>

                    <h2 className="mt-6 max-w-4xl text-[clamp(3.2rem,7vw,6.5rem)] font-black leading-[0.86] tracking-[-0.07em]">
                      What should it
                      <span className="block text-blue-600">
                        feel like?
                      </span>
                    </h2>

                    <div className="mt-10 grid gap-5 rounded-[2rem] border-[3px] border-slate-950 bg-[#ead8d2] p-5 shadow-[8px_9px_0_#0f172a] sm:p-7">
                      <Field
                        label="Colors"
                        name="colors"
                        value={form.colors}
                        onChange={updateField}
                        placeholder="Blue, cream, gold..."
                      />

                      <Field
                        label="Overall style"
                        name="style"
                        value={form.style}
                        onChange={updateField}
                        placeholder="Luxury, playful, modern..."
                      />

                      <TextArea
                        label="Websites you like"
                        name="inspiration"
                        value={form.inspiration}
                        onChange={updateField}
                        placeholder="Paste links or describe websites/styles you like."
                      />

                      <TextArea
                        label="Anything you DON'T want?"
                        name="avoid"
                        value={form.avoid}
                        onChange={updateField}
                        placeholder="Colors, styles, layouts or ideas you want us to avoid."
                      />
                    </div>
                  </div>
                )}

                {/* STEP 5 */}
                {step === 4 && (
                  <div>
                    <div className="inline-flex rounded-full border-[3px] border-slate-950 bg-[#6ee7b7] px-4 py-2 text-xs font-black uppercase tracking-[0.14em] shadow-[3px_4px_0_#0f172a]">
                      Step 05 — Almost done
                    </div>

                    <h2 className="mt-6 max-w-4xl text-[clamp(3.2rem,7vw,6.5rem)] font-black leading-[0.86] tracking-[-0.07em]">
                      Anything else
                      <span className="block text-blue-600">
                        we should know?
                      </span>
                    </h2>

                    <div className="mt-10 rounded-[2rem] border-[3px] border-slate-950 bg-[#6ee7b7] p-5 shadow-[8px_9px_0_#0f172a] sm:p-7">
                      <TextArea
                        label="Final notes"
                        name="notes"
                        value={form.notes}
                        onChange={updateField}
                        placeholder="Deadlines, special requests, questions, ideas, details we haven't asked about..."
                        rows={8}
                      />
                    </div>

                    <div className="mt-6 grid gap-4 sm:grid-cols-3">
                      <div className="rounded-[1.3rem] border-[3px] border-slate-950 bg-white p-4 shadow-[4px_5px_0_#0f172a]">
                        <p className="text-[9px] font-black uppercase tracking-[0.15em] text-slate-400">
                          Business
                        </p>
                        <p className="mt-2 font-black">
                          {form.businessName || "Not entered yet"}
                        </p>
                      </div>

                      <div className="rounded-[1.3rem] border-[3px] border-slate-950 bg-white p-4 shadow-[4px_5px_0_#0f172a]">
                        <p className="text-[9px] font-black uppercase tracking-[0.15em] text-slate-400">
                          Files selected
                        </p>
                        <p className="mt-2 font-black">
                          {logoFiles.length +
                            imageFiles.length +
                            videoFiles.length +
                            documentFiles.length}
                        </p>
                      </div>

                      <div className="rounded-[1.3rem] border-[3px] border-slate-950 bg-white p-4 shadow-[4px_5px_0_#0f172a]">
                        <p className="text-[9px] font-black uppercase tracking-[0.15em] text-slate-400">
                          Status
                        </p>
                        <p className="mt-2 font-black text-blue-600">
                          Ready to submit
                        </p>
                      </div>
                    </div>

                    {formStatus === "validation-error" && (
                      <div
                        role="alert"
                        className="mt-6 rounded-[1.3rem] border-[3px] border-slate-950 bg-yellow-200 p-4 text-sm font-black shadow-[4px_5px_0_#0f172a]"
                      >
                        {submissionMessage}
                      </div>
                    )}

                    {formStatus === "submission-error" && (
                      <div
                        role="alert"
                        className="mt-6 rounded-[1.3rem] border-[3px] border-slate-950 bg-[#ff8c75] p-4 text-sm font-black shadow-[4px_5px_0_#0f172a]"
                      >
                        {submissionMessage}
                      </div>
                    )}

                    {formStatus === "success" ? (
                      <div className="mt-8 rounded-[2rem] border-[3px] border-slate-950 bg-white p-5 shadow-[7px_8px_0_#0f172a] sm:p-7">
                        <div className="flex items-start gap-4">
                          <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full border-[3px] border-slate-950 bg-[#6ee7b7] shadow-[3px_4px_0_#0f172a]">
                            <Check className="h-5 w-5" strokeWidth={4} />
                          </div>

                          <div>
                            <p className="text-xl font-black tracking-[-0.04em]">
                              Brief received.
                            </p>
                            <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">
                              {submissionMessage}
                            </p>
                          </div>
                        </div>

                        <a
                          href={smsHref}
                          className="mt-6 flex min-h-14 w-full items-center justify-center gap-3 rounded-full border-[3px] border-slate-950 bg-yellow-300 px-6 text-sm font-black text-slate-950 shadow-[5px_6px_0_#0f172a] transition hover:-translate-y-1"
                        >
                          Text Techuvo Now
                          <ArrowRight className="h-4 w-4" />
                        </a>

                        <p className="mt-3 text-center text-[0.7rem] font-bold leading-5 text-slate-500">
                          This opens a pre-filled text to Techuvo so we can connect
                          immediately.
                        </p>
                      </div>
                    ) : (
                      <>
                        <button
                          type="button"
                          onClick={handleSubmit}
                          disabled={formStatus === "submitting"}
                          className="mt-8 flex min-h-16 w-full items-center justify-center gap-3 rounded-full border-[3px] border-slate-950 bg-blue-600 px-7 text-base font-black text-white shadow-[7px_8px_0_#0f172a] transition hover:-translate-y-1 disabled:cursor-wait disabled:opacity-70 disabled:hover:translate-y-0"
                        >
                          {formStatus === "submitting"
                            ? "Sending Website Brief..."
                            : "Submit My Website Brief"}
                          <ArrowRight className="h-5 w-5" />
                        </button>

                        <p className="mt-4 text-center text-xs font-semibold text-slate-500">
                          Your brief is sent securely through Techuvo's project
                          intake form.
                        </p>
                      </>
                    )}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            {/* controls */}
            <div className="mt-12 flex items-center justify-between gap-4 border-t-[3px] border-slate-950 pt-6">
              <button
                type="button"
                onClick={previousStep}
                disabled={step === 0}
                className={`inline-flex min-h-13 items-center gap-2 rounded-full border-[3px] border-slate-950 px-5 text-sm font-black shadow-[4px_5px_0_#0f172a] transition ${
                  step === 0
                    ? "cursor-not-allowed bg-slate-100 text-slate-400 opacity-60"
                    : "bg-white hover:-translate-y-1"
                }`}
              >
                <ArrowLeft className="h-4 w-4" />
                Back
              </button>

              {step < steps.length - 1 && (
                <button
                  type="button"
                  onClick={nextStep}
                  className="inline-flex min-h-13 items-center gap-2 rounded-full border-[3px] border-slate-950 bg-blue-600 px-6 text-sm font-black text-white shadow-[4px_5px_0_#0f172a] transition hover:-translate-y-1"
                >
                  Continue
                  <ArrowRight className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default WebsiteOnboarding;