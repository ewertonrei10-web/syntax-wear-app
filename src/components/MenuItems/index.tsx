const menus = [
  { title: "Masculino", items: ["Casual", "Esporte", "Moderno", "Futurista"] },
  { title: "Feminino", items: ["Casual", "Esporte", "Moderno", "Futurista"] },
  { title: "Outlet", items: ["Masculino", "Feminino"] },
  { title: "Sobre", items: ["Quem somos", "Missão"] },
];

export const MenuItems = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-7">
      {menus.map(({ title, items }) => (
        <nav>
          <ul className="flex flex-col gap-4">
            <li>
              <p className="font-normal text-surface-alt tex-xl">{title}</p>
              {items.map((item) => (
                <li
                  className="font-medium hover:text-[#cccccc] transition-colors text-xl mb-1"
                  key={item}
                >
                  <a href="#">{item}</a>
                </li>
              ))}
            </li>
          </ul>
        </nav>
      ))}
    </div>
  );
};
