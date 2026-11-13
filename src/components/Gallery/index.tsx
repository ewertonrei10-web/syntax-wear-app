import tenisBrancoEPreto from "@/assets/images/galeria-tenis-branco-e-preto.jpg";
import tenisCinza from "@/assets/images/galeria-tenis-cinza.jpg";
import tenisColorido from "@/assets/images/galeria-tenis-colorido.jpg";
import homem from "@/assets/images/galeria-homen.jpg";
import modelo from "@/assets/images/galeria-modelo.jpg";
import tenisRoxo from "@/assets/images/galeria-tenis-roxo.jpg";
import { Button } from "../Button";

export const Gallery = () => {
  return (
    <section className="container grid grid-cols-2 [grid-template-rows:repeat(5,auto)] [grid-template-areas:'highlight_highlight'_'sneaker-white_sneaker-white'_'model_sneaker-color'_'model_sneaker-silver'_'sneaker-purple_sneaker-purple'] gap-[10px] px-2.5 md:grid-cols-4 md:[grid-template-rows:repeat(3,300px)] md:[grid-template-areas:'highlight_highlight_sneaker-purple_sneaker-purple'_'highlight_highlight_model_sneaker-color'_'sneaker-white_sneaker-white_model_sneaker-silver'] md:gap-[30px] md:px-10">
      <div className="group relative h-[494px] overflow-hidden rounded-[20px] [grid-area:highlight] md:h-full">
        <img
          src={homem}
          alt="Modelo masculino usando tênis SyntaxWear"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/10 text-center text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100">
          <h2 className="text-xl font-medium tracking-wider">Krypton One</h2>
          <p className="text-xl tracking-widest">Estilo urbano com atitude</p>
          <div className="mt-4 flex gap-2.5">
            <Button variant="secondary" size="sm">
              Feminino
            </Button>
            <Button variant="secondary" size="sm">
              Masculino
            </Button>
          </div>
        </div>
      </div>
      <img
        src={tenisBrancoEPreto}
        alt="Tênis preto e branco"
        className="h-[190px] w-full rounded-[20px] object-cover [grid-area:sneaker-white] md:h-full"
      />
      <img
        src={modelo}
        alt="Modelo feminina usando tênis SyntaxWear"
        className="h-[371px] w-full rounded-[20px] object-cover [grid-area:model] md:h-full"
      />
      <img
        src={tenisColorido}
        alt="Tênis colorido"
        className="h-[180px] w-full rounded-[20px] object-cover [grid-area:sneaker-color] md:h-full"
      />
      <img
        src={tenisCinza}
        alt="Tênis cinza"
        className="h-[180px] w-full rounded-[20px] object-cover [grid-area:sneaker-silver] md:h-full"
      />
      <img
        src={tenisRoxo}
        alt="Tênis roxo"
        className="h-[190px] w-full rounded-[20px] object-cover [grid-area:sneaker-purple] md:h-full"
      />
    </section>
  );
};
