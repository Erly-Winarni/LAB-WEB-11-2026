import MenuCard from "./MenuCard.jsx";

function MenuList({ menu, kategoriAktif, onTambah }) {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold">
        {kategoriAktif === "Semua" ? "Semua menu" : kategoriAktif}
      </h2>

      <div className="grid gap-4 sm:grid-cols-2">
        {menu.map((item) => (
          <MenuCard
            key={item.id}
            id={item.id}
            nama={item.nama}
            kategori={item.kategori}
            harga={item.harga}
            tersedia={item.tersedia}
            deskripsi={item.deskripsi}
            onTambah={onTambah}
          />
        ))}
      </div>
    </section>
  );
}

export default MenuList;