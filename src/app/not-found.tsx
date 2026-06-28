import Link from "next/link";
import { buttonClasses } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="section-space">
      <div className="shell">
        <div className="surface-card mx-auto max-w-3xl rounded-[1.5rem] p-10 text-center">
          <span className="eyebrow">Page not found</span>
          <h1 className="mt-6 text-4xl font-bold text-navy">
            We could not find the page you were looking for.
          </h1>
          <p className="mt-5 text-lg leading-8 text-muted">
            Head back to the services overview or start a quote request to keep moving.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/services" className={buttonClasses({ tone: "primary" })}>
              View Services
            </Link>
            <Link href="/get-a-quote" className={buttonClasses({ tone: "secondary" })}>
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
