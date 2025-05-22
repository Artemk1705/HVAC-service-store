import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { PolicyBlock } from "@/components/ui/policy-block";
import Disclamer from "./disclamer";

function FormDis() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
  });
  const [isModalOpen, setModalOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log("Submitting form data:", formData);

      const response = await fetch("https://your-ec2-domain.com/discount", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      console.log("Response object:", result);

      if (result.success) {
        console.log("Application submitted successfully");
        setIsSuccess(true);
      } else {
        console.log("Error submitting application:", result.error);
        setIsSuccess(false);
      }
    } catch (error) {
      console.error("Error during submission:", error);
      setIsSuccess(false);
    } finally {
      setModalOpen(true);
    }
  };

  const handleBack = () => {
    setModalOpen(false);
    router.push("/");
  };

  const handleSidebarToggle = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="bg-neutral-900 text-white w-screen py-25">
      <h2 className="text-center text-2xl uppercase py-5">get discount</h2>
      <div className="flex flex-row items-center justify-center text-center py-5">
        <p className="text-lg">Fill out the form and get 10% discount</p>
        <img
          src="/images/qutstion.png"
          className="quest_img"
          alt="Disclaimer"
          onClick={handleSidebarToggle}
        />
      </div>
      <form onSubmit={handleSubmit}>
        <div className="dis_form_input_container">
          <Input
            id="firstName"
            name="firstName"
            type="text"
            placeholder="First Name"
            onChange={handleChange}
            required
          />
          <div className="Lastname_block"></div>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
            required
          />
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="Phone Number"
            onChange={handleChange}
          />
          <Input
            id="city"
            name="city"
            type="text"
            placeholder="City"
            onChange={handleChange}
            required
          />
          <PolicyBlock />
          <Button variant="blur" type="submit">
            SUBMIT
          </Button>
        </div>
      </form>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            {isSuccess ? (
              <>
                <h2 className="success_title">Success!</h2>
                <p className="success_text">
                  We will contact you as soon as we process your data.
                </p>
              </>
            ) : (
              <p className="error_text">
                There was an error submitting your application. Please try again
                later.
              </p>
            )}
            <button className="button_back" onClick={handleBack}>
              Back
            </button>
          </div>
        </div>
      )}
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <div className="sidebar-content">
          <button className="close_button" onClick={handleSidebarToggle}>
            &times;
          </button>
          <Disclamer />
        </div>
      </div>
    </div>
  );
}

export default FormDis;
