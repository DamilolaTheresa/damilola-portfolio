import { testimonials } from "@/data/testimonials";
import TestimonialCard from "./TestimonialCard";

export default function TestimonialsGrid() {
  return (
    <div
      className="
        grid
        grid-cols-1
        gap-6
        md:grid-cols-2
        lg:grid-cols-3
      "
    >
      {testimonials.map(
        (testimonial, index) => (
          <TestimonialCard
            key={testimonial.name}
            testimonial={testimonial}
            index={index}
          />
        )
      )}
    </div>
  );
}