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
    <section className="container flex lg:grid lg:grid-cols-4 lg:gap-4 mb-10 overflow-x-auto scrollbar-hide snap-x snap-mandatory">
      {categories.map((category, index) => (
        <div
          key={index}
          style={{ backgroundImage: `url(${category.image})` }}
          className="h-125 bg-cover bg-center rounded-[20px] relative flex items-center justify-center text-white shrink-0 w-[95%] md:w-1/2 lg:w-full"
        >
          <div className="absolute inset-0 bg-black/35 snap-center"></div>
          <div className="realtive">
            <Button variant="secondary" />
            {category.name}
          </div>
        </div>
      ))}
    </section>
  );
};
