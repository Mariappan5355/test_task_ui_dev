import React, { useState } from "react";
import {
  FormSelect,
  FormTextArea,
  FileUpload,
  FormInput,
  BudgetType,
  PostCodeInput,
  CalendarInput,
} from "../components/forms";
import post from "../assets/post.png";

const ProjectPostPage = () => {
  const [formData, setFormData] = useState({
    category: "",
    subCategory: "",
    projectTitle: "",
    projectDescription: "",
    projectLocation: "",
    budgetType: "",
    postcode: "",
    startDate: "",
    endDate: "",
    totalDays: "",
    termsAgreed: false,
  });

  const calculateDays = (start, end) => {
    if (start && end) {
      const startDate = new Date(start);
      const endDate = new Date(end);
      const diffTime = Math.abs(endDate - startDate);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays.toString();
    }
    return "";
  };

  const handleChange = (name, value) => {
    setFormData((prev) => {
      const updatedData = {
        ...prev,
        [name]: value,
      };
        if ((name === "startDate" || name === "endDate") && updatedData.startDate && updatedData.endDate) {
            updatedData.totalDays = calculateDays(updatedData.startDate, updatedData.endDate);
          }
      
      return updatedData;
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="md:flex gap-8">
          {/* Left side - Image */}
          <div className="md:w-1/3 mb-8 md:mb-0">
            <img src={post} alt="Project" className="w-full rounded-lg" />
          </div>

          {/* Right side - Form */}
          <div className="md:w-2/3">
            <form
              className="bg-white p-6 rounded-lg shadow-sm"
              onSubmit={handleSubmit}
            >
              <FormSelect
                label="Category"
                required
                options={["Option 1", "Option 2"]}
                onChange={(e) => handleChange("category", e)}
              />
              <FormSelect
                label="Sub-Category"
                required
                options={["Option 1", "Option 2"]}
                onChange={(e) => handleChange("subCategory", e)}
              />
              <FormInput
                label="Project Title"
                required
                placeholder="Type your Project title"
                value={formData.projectTitle}
                onChange={(e) => handleChange("projectTitle", e)}
              />
              <FormTextArea
                label="Project Description"
                required
                placeholder="Type here..."
                onChange={(e) =>
                  handleChange("projectDescription", e)
                }
              />
              <FileUpload />
              <BudgetType
                onChange={(value) => handleChange("budgetType", value)}
              />
              <FormInput
                label="Project Location"
                required
                placeholder="Search for your location.."
                value={formData.projectLocation}
                onChange={(e) =>
                  handleChange("projectLocation", e)
                }
              />
              <PostCodeInput
               value={formData.postCode}
                onChange={(value) => handleChange("postcode", value)}
              />

              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Project Duration Days<span className="text-red-500">*</span>
                </label>
                <div className="space-y-4">
                  <CalendarInput
                    label="Start Date"
                    required
                    placeholder="Select start date"
                    value={formData.startDate}
                    onChange={(date) => handleChange("startDate", date)}
                  />

                  <CalendarInput
                    label="End Date"
                    required
                    placeholder="Select end date"
                    value={formData.endDate}
                    onChange={(date) => handleChange("endDate", date)}
                  />

                  <div className="flex items-center w-full">
                    <div className="text-sm font-medium text-gray-600 w-3/12">
                      Total Days
                    </div>
                    <FormInput
                      value={formData.totalDays}
                      className=" px-3 py-2 bg-gray-100 border border-gray-300 rounded-md"
                      readOnly
                    />
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-blue-500"
                    onChange={(e) =>
                      handleChange("termsAgreed", e.target.checked)
                    }
                  />
                  <span className="ml-2 text-sm text-gray-600">
                    I Agree the{" "}
                    <span className="text-blue-500">Terms & Conditions</span>
                  </span>
                </label>
              </div>

              <div className="flex gap-4">
                <button
                  type="submit"
                  className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                >
                  Post a Project
                </button>
                <button
                  type="button"
                  className="px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPostPage;
