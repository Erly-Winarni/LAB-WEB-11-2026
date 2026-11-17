import MenuCard from "./MenuCard";

function MenuList({ menuList, onTambah }) {
  if (menuList.length === 0) {
    return (
      <div className="bg-white rounded-2xl p-12 text-center border border-amber-100 shadow-sm">
        <p className="text-stone-500 text-sm">
          Tidak ada menu yang sesuai dengan kategori ini.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {menuList.map((menu) => (
        <MenuCard key={menu.id} menu={menu} onTambah={onTambah} />
      ))}
    </div>
  );
}

export default MenuList;
