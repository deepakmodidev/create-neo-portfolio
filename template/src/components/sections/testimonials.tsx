"use client";

import { TESTIMONIALS } from "@/app/constants/data";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <div className="flex items-center py-2 px-4 border-b border-dashed border-border">
        <h2 className="text-2xl font-semibold flex items-center">
          testimonials.
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-dashed divide-border relative">
        {TESTIMONIALS.map((testimonial, index) => (
          <div
            key={testimonial.name}
            className="flex flex-col h-full relative p-4"
          >
            <div className="flex-1">
              <p className="text-sm text-muted-foreground leading-relaxed relative z-10 text-justify">
                {testimonial.content}
              </p>
            </div>

            <footer className="mt-2 flex flex-col space-y-0.5">
              <p className="font-medium text-foreground text-sm tracking-tight leading-tight">
                {testimonial.name}
              </p>
              <span className="text-xs text-muted-foreground opacity-90">
                {testimonial.role}
              </span>
            </footer>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
