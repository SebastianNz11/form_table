import { Formulario } from "./components/Formulario";
import { Tabla } from "./components/Tabla";
import { Modal } from "./components/Modal";
import { useState, useEffect } from "react";

export const App = () => {
  const [data, setData] = useState([]);
  const [alerta, setAlerta] = useState(false);

  const columns = [
    {
      header: "Nombre",
      accessorKey: "nombre",
    },

    {
      header: "Apellido",
      accessorKey: "apellidos",
    },
    {
      header: "Correo",
      accessorKey: "correo",
    },
    {
      header: "Fecha de Nacimiento",
      accessorKey: "edad",
    },
  ];

  const insert = (datos) => {
    if (!data.find((d) => d.correo === datos.correo)) {
      setData([
        ...data,
        {
          nombre: datos.nombre,
          apellidos: datos.apellidos,
          correo: datos.correo,
          edad: datos.edad,
        },
      ]);
    } else {
      setAlerta(true);
    }
  };

  const tiempo = () => {
    setTimeout(() => {
      setAlerta(false);
    }, 4000);
  };

  useEffect(() => {
    let info = localStorage.getItem("data");
    info ? setData(JSON.parse(info)) : null;
  }, []);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);

  return (
    <div className="container-fluid border ">
      {alerta === true ? (
        <div>
          <Modal />
          {tiempo()}
        </div>
      ) : null}

      <div className="row align-items-center">
        <div className="p-2 col-sm-12 col-lg-6">
          <Formulario insert={insert} />
        </div>
        <div className="p-4 col-sm-12 col-lg-6">
          <Tabla data={data} columns={columns} />
        </div>
      </div>
    </div>
  );
};
