import React from "react";
import { useForm } from "react-hook-form";

export const Formulario = ({ insert }) => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    insert(data);
    reset();
  });

  return (
    <div className="p-5">
      <h2 className="mb-4">Formulario</h2>
      <form className="" onSubmit={onSubmit}>
        <input
          type="text"
          className="form-control mb-4"
          placeholder="Nombres"
          {...register("nombre", {
            required: {
              value: true,
              message: "Nombre es requerido",
            },
            maxLength: {
              value: 30,
              message: "Número de caracteres máximo es 30",
            },
            minLength: {
              value: 2,
              message: "Número de caracteres mínimo es 2",
            },
            pattern: {
              value: /^[a-zA-Z\u00C0-\u017F\s]+$/,
              message: "Nombre no válido",
            },
          })}
        />
        {errors.nombre && (
          <div className="alert alert-danger" role="alert">
            {errors.nombre.message}
          </div>
        )}
        <input
          type="text"
          className="form-control mb-4"
          placeholder="Apellidos"
          {...register("apellidos", {
            required: {
              value: true,
              message: "Apellidos es requerido",
            },
            maxLength: {
              value: 30,
              message: "Número de caracteres máximo es 30",
            },
            minLength: {
              value: 2,
              message: "Número de caracteres mínimo es 2",
            },
            pattern: {
              value: /^[a-zA-Z\u00C0-\u017F\s]+$/,
              message: "Apellido no válido",
            },
          })}
        />
        {errors.apellidos && (
          <div className="alert alert-danger" role="alert">
            {errors.apellidos.message}
          </div>
        )}
        <input
          type="email"
          className="form-control mb-4"
          placeholder="Correo"
          {...register("correo", {
            required: {
              value: true,
              message: "Correo es requerido",
            },
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: "Correo no valido",
            },
          })}
        />
        {errors.correo && (
          <div className="alert alert-danger" role="alert">
            {errors.correo.message}
          </div>
        )}
        <input
          type="date"
          className="form-control mb-4"
          placeholder="Edad"
          {...register("edad", {
            required: {
              value: true,
              message: "Edad es requerida",
            },
            validate: (value) => {
              const fechaNacimiento = new Date(value);
              const fechaActual = new Date();
              const edad =
                fechaActual.getFullYear() - fechaNacimiento.getFullYear();
              if (edad >= 18) {
                return true;
              } else {
                return "Debes ser mayor de edad";
              }
            },
          })}
        />
        {errors.edad && (
          <div className="alert alert-danger" role="alert">
            {errors.edad.message}
          </div>
        )}
        <button className="btn btn-success">Enviar</button>
      </form>
    </div>
  );
};
