import React from "react";

import { useEffect } from "react";

import { useNavigate } from "react-router";

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/", { replace: true });
    }, 5000); // 3000 milliseconds = 3 seconds
  }, [navigate]);

  return (
    <div>
      ບໍ່ພົບໜ້າທີ່ທ່ານຄົ້ນຫາ 404, ລະບົບຈະນຳທາງທ່ານກັບສູ່ໜ້າຫຼັກໃນ 5 ວິນາທີ.
    </div>
  );
};

export default NotFound;
