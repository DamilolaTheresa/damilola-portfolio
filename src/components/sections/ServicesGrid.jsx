import { services } from "@/data/services";
import ServiceCard from "./ServiceCard";

export default function ServicesGrid() {
  return (
    <div
      className="
        grid
        grid-cols-1
        gap-4
        md:grid-cols-2
        lg:grid-cols-3
      "
    >
      {services.map(
        (service, index) => (
          <ServiceCard
            key={service.title}
            service={service}
            index={index}
          />
        )
      )}
    </div>
  );
}