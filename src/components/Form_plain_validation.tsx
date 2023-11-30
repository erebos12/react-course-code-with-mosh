import React, { FormEvent, useRef, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

interface FormData {
  name: string;
  age: number;
}

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <lable htmlFor="name" className="form-label">
          Name
        </lable>
        <input
          {...register("name", { required: true, minLength: 3 })}
          id="name"
          type="text"
          className="form-control"
        />
        {errors.name?.type === "required" && (
          <p className="text-danger">Then name field is required</p>
        )}
        {errors.name?.type === "minLength" && (
          <p className="text-danger">Minimum length must be 3</p>
        )}
      </div>
      <div className="mb-3">
        <lable htmlFor="age" className="form-label">
          Age
        </lable>
        <input
          {...(register("age"), { required: true, min: 18, max: 100 })}
          id="age"
          type="number"
          className="form-control"
        />
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
}

export default Form;
