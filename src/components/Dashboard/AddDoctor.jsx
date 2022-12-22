import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "./../../axios";
import DashboardMenu from "./../shared/Dashboard/DashboardMenu";
import axios from "axios";
import { toast } from "react-toastify";
import { useState } from "react";
import Loading from "./../Loading/Loading";
import { SyncLoader } from "react-spinners";

const AddDoctor = () => {
  const [loader, setLoader] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const { data: { data } = {} } = useQuery(["allTreatments"], () =>
    fetchData.get("/treatments")
  );

  const imgBBkey = "9cb6669c21801a2db21169576923dc5e";

  const onSubmit = async (data) => {
    setLoader(true);
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imgBBkey}`;
    axios.post(url, formData).then(({ data: result }) => {
      if (result.success) {
        const { url, delete_url } = result.data;
        const doctorsInfo = {
          name: data.name,
          email: data.email,
          specialty: data.specialty,
          image: {
            url,
            delete_url,
          },
        };
        fetchData
          .post("/doctors/add", doctorsInfo, {
            headers: {
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          })
          .then((res) => {
            if (res.data._id) {
              toast.success("Doctor added successfully.");
              reset();
            } else {
              toast.error("Failed to add the doctor.");
            }
            setLoader(false);
          });
      }
    });
  };

  if (loader) {
    return <Loading />;
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-10">
        <DashboardMenu />
        <h1 className="text-xl lg:text-3xl font-semibold">Add Doctor</h1>
      </div>
      <div className="bg-white rounded-xl">
        <div className="overflow-x-auto flex justify-center py-10">
          <form className="lg:w-6/12" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                {...register("name", {
                  required: "Name is required",
                })}
                className="input input-bordered w-full"
              />
              {errors?.name ? (
                <label className="label">
                  <span className="label-text-alt text-red">
                    {errors?.name?.message}
                  </span>
                </label>
              ) : undefined}
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                })}
                className="input input-bordered w-full"
              />
              {errors?.email ? (
                <label className="label">
                  <span className="label-text-alt text-red">
                    {errors?.email?.message}
                  </span>
                </label>
              ) : undefined}
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Specialty</span>
              </label>
              <select
                {...register("specialty")}
                name="specialty"
                className="select select-bordered w-full"
              >
                <option>Specialty</option>
                {data?.map(({ name }, i) => (
                  <option key={i} value={name}>
                    {name}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Image</span>
              </label>
              <input
                type="file"
                {...register("image", {
                  required: "Image is required",
                })}
                className="input input-bordered w-full"
              />
              {errors?.image ? (
                <label className="label">
                  <span className="label-text-alt text-red">
                    {errors?.image?.message}
                  </span>
                </label>
              ) : undefined}
            </div>
            <button className="btn w-full mt-5">Add</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddDoctor;
