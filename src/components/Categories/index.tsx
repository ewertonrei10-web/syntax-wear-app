import tenisCasual from "@/assets/images/tenis-casual.jpg";
import tenisEsportivo from "@/assets/images/tenis-esportivo.jpg";
import tenisFuturista from "@/assets/images/tenis-futurista.jpg";
import tenisModerno from "@/assets/images/tenis-moderno.jpg";
import { Button } from "../Button";

const categories = [
  { name: "Casual", image: tenisCasual },
  { name: "Esportivo", image: tenisEsportivo },
  { name: "Futurista", image: tenisFuturista },
  { name: "Moderno", image: tenisModerno },
];

export const Categories = () => {
  return (
    <section className="container flex gap-4 lg:grid lg:grid-cols-4 mb-10 overflow-x-auto scrollbar-hide snap-x snap-mandatory">
      {categories.map((category, index) => (
        <div
          key={index}
          style={{ backgroundImage: `url(${category.image})` }}
          className="h-125 bg-cover bg-center rounded-[20px] relative flex items-center justify-center text-white shrink-0 w-[95%] snap-center md:w-1/2 lg:w-full"
        >
          <div className="pointer-events-none absolute inset-0 rounded-[20px] bg-black/35"></div>
          <div className="relative z-10">
            <Button variant="secondary">
              {category.name}
            </Button>
          </div>
        </div>
      ))}
    </section>
  );
};