import { useState } from "react";

const MarketItemApp = () => {
  const [items, setItems] = useState([]); // ["ໝາກຫຸ່ງ", "ຜັກກາດຝ"]

  const handleSubmit = (e) => {
    e.preventDefault(); // ປ້ອງກັນໜ້າເວັບບໍ່ໃຫ້ມັນ refresh

    const formData = new FormData(e.target); // ຮັບຄ່າຂໍ້ມູນມາຈາກ form ໂດຍກົງ

    // ເອົາຂໍ້ມູນຈາກ formData
    const itemName = formData.get("name");

    setItems([...items, itemName]); // ເພີ່ມ item ໃໝ່ເຂົ້າໄປໃນລາຍການ items

    // ຄືນຄ່າໃຫ້ form ເປັນຫວ່າງອີກຄັ້ງ
    e.target.reset();
  };

  function handleRemoveItem(index) {
    const newItems = items.filter((item, i) => i !== index);

    setItems(newItems);
  }

  console.log("items:", items);

  return (
    <div>
      <h1>ແອັບຈົດໂນດລົງຕະຫຼາດ</h1>

      <form onSubmit={handleSubmit} className="market-app-form">
        <input
          name="name"
          id="name"
          type="text"
          placeholder="ປ້ອນລາຍການທີ່ຕ້ອງຊື້"
        />

        <button>ເພີ່ມລາຍການ</button>
      </form>

      {items.length === 0 ? (
        <p>ບໍ່ທັນມີລາຍການເທື່ອ</p>
      ) : (
        items.map((item, index) => (
          <p>
            {item}{" "}
            <button onClick={() => handleRemoveItem(index)}>ລົບລາຍການ</button>
          </p>
        ))
      )}
    </div>
  );
};

export default MarketItemApp;
