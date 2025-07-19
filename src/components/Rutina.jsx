import React, { useState } from "react";
import DiaRutina from "./DiaRutina";
import TabNav from "./TabNav";

const Rutina = ({ data }) => {
  const dias = Object.keys(data["Rutina Nico"]);
  const [selectedDia, setSelectedDia] = useState(dias[0]);

  return (
    <div>
      <TabNav tabs={dias} selected={selectedDia} onSelect={setSelectedDia} />
      <DiaRutina
        dia={selectedDia}
        ejercicios={data["Rutina Nico"][selectedDia]}
      />
    </div>
  );
};

export default Rutina;
