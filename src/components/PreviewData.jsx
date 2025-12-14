import { useState } from "react";

const PreviewData = () => {
  const [data, setData] = useState({
    fname: "",
    lname: "",
    age: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <h1>ແອັບສະແດງຜົນຂໍ້ມູນ</h1>

      <h2>
        ຊື່: {data.fname} ນາມສະກຸນ:{data.lname}, ອາຍຸ {data.age} ປີ
      </h2>

      <input
        className="preview-input"
        type="text"
        placeholder="ປ້ອນຊື່ຂອງທ່ານ..."
        name="fname"
        value={data.fname}
        onChange={handleChange}
      />
      <input
        className="preview-input"
        type="text"
        placeholder="ປ້ອນນາມສະກຸນຂອງທ່ານ..."
        name="lname"
        value={data.lname}
        onChange={handleChange}
      />
      <input
        className="preview-input"
        type="text"
        placeholder="ປ້ອນອາຍຸຂອງທ່ານ..."
        name="age"
        value={data.age}
        onChange={handleChange}
      />
    </div>
  );
};

export default PreviewData;
