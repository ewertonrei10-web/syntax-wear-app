import tenisFuturista from "@/assets/images/products/tenis-futurista.jpg";
import tenisCasual from "@/assets/images/products/tenis-casual.jpg";
import tenisModerno from "@/assets/images/products/tenis-moderno.jpg";  
import tenisEsportivo from "@/assets/images/products/tenis-esportivo.jpg";
import { Button } from "../Button";

const categories = [
    {name:'Futurista', image: tenisFuturista},
    {name:'Casual', image: tenisCasual},
    {name:'Moderno', image: tenisModerno},
    {name:'Esportivo', image: tenisEsportivo},
];

export const Categories = () => {
    return (
        <section className="container flex gap-3 lg:grid lg:grid-cols-4 lg:gap-3 mb-10 overflow-x-auto scrollbar-hidde snap-x snap-mandatory">
            {categories.map((category, index) => (
                <div key={index} style={{ backgroundImage: `url(${category.image})` }} className="h-125 bg-cover bg-center rounded-[20px] relative flex items-center justify-center text-white shrink-0 w-[95%] md:w-1/2 lg:w-full ">
                    <div className="absolute inset-0 bg-black/40 rounded-[20px] snap-center"></div>

                    <div className="relative">
                        <Button variant="secondary">{category.name}</Button>
                    </div>
                </div>
            ))}
        </section>
    )
}