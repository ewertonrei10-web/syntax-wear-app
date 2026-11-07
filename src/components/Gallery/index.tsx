import Homme from "@/assets/images/secao-grid/galeria-homen.jpg";
import PurpleShoe from "@/assets/images/secao-grid/galeria-tenis-roxo.jpg";
import FemaleModel from "@/assets/images/secao-grid/galeria-modelo.jpg";
import ColorfulShoe from "@/assets/images/secao-grid/galeria-tenis-colorido.jpg";
import WhiteBlackShoe from "@/assets/images/secao-grid/galeria-tenis-branco-e-preto.jpg";
import SilverShoe from "@/assets/images/secao-grid/galeria-tenis-prateado.jpg";
import { Button } from "../Button";

export const Gallery = () => {
    return (
        <section className="container mb-10">
            <div
                className="grid grid-cols-[1fr_1fr] grid-rows-[494px_190px_180px_180px_190px] gap-2.5 [grid-template-areas:'highlight_highlight'_'sneaker-white_sneaker-white'_'model_sneaker-color'_'model_sneaker-silver'_'sneaker-purple_sneaker-purple'] md:grid-cols-[repeat(4,minmax(0,1fr))] md:grid-rows-[repeat(3,300px)] md:gap-[30px] md:[grid-template-areas:'highlight_highlight_sneaker-purple_sneaker-purple'_'highlight_highlight_model_sneaker-color'_'sneaker-white_sneaker-white_model_sneaker-silver']"
            >
                <div className="group relative flex items-center justify-center overflow-hidden rounded-[20px] bg-black/10 [grid-area:highlight]">
                    <img src={Homme} alt="Modelo masculino usando tênis SyntaxWear" className="absolute inset-0 h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100" />
                    <div className="relative z-10 flex flex-col items-center px-4 text-center text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100">
                        <p className="text-sm font-bold leading-none">Krypton One</p>
                        <h2 className="mt-2.5 mb-5 text-lg font-bold md:mt-2.5 md:mb-5">Estilo urbano com atitude</h2>
                        <div className="flex gap-2.5">
                            <Button variant="secondary" size="sm">Feminino</Button>
                            <Button variant="secondary" size="sm">Masculino</Button>
                        </div>
                    </div>
                </div>

                <img src={PurpleShoe} alt="Tênis roxo e verde" className="h-full w-full rounded-[20px] object-cover [grid-area:sneaker-purple]" />
                <img src={FemaleModel} alt="Modelo feminina com tênis SyntaxWear" className="h-full w-full rounded-[20px] object-cover [grid-area:model]" />
                <img src={ColorfulShoe} alt="Tênis colorido" className="h-full w-full rounded-[20px] object-cover [grid-area:sneaker-color]" />
                <img src={WhiteBlackShoe} alt="Tênis preto branco e azul" className="h-full w-full rounded-[20px] object-cover [grid-area:sneaker-white]" />
                <img src={SilverShoe} alt="Tênis prata" className="h-full w-full rounded-[20px] object-cover [grid-area:sneaker-silver]" />
            </div>
        </section>
    );
}