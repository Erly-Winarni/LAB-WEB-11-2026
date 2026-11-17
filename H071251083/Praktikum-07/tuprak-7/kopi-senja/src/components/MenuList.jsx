import MenuCard from "./MenuCard.jsx";

function MenuList({ menuList, onTambah }) {
  return (
    <section className="grid gap-4 sm:grid-cols-2">
      {menuList.map((menu) => (
        <MenuCard key={menu.id} menu={menu} onTambah={onTambah} />
      ))}
    </section>
  );
}

export default MenuList;
