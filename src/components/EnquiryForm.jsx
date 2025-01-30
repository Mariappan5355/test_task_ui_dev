import { FormInput } from "./forms";

export const EnquiryForm = () => (
  <div className="bg-gray-100 p-6 rounded-lg">
    <h2 className="text-2xl font-bold mb-6 primary-blue">Enquiry now</h2>
    <form className="space-y-4 mt-2">
      <FormInput
        label={'Name'}
        type={"text"}
        placeholder={"Enter"}
        required
        className={"w-full p-3 border mt-2 rounded"}
      />
      <FormInput
        label={'Mobile Number'}
        type={"te;"}
        placeholder={"Enter your number"}
        required
        className={"w-full p-3 border mt-2 rounded"}
      />
      <FormInput
        label={'Email ID'}
        type={"text"}
        placeholder={"Enter Mail"}
        required
        className={"w-full p-3 border mt-2 rounded"}
      />
      <FormInput
        label={'Site Location'}
        type={"text"}
        placeholder={"Enter Your Location"}
        required
        className={"w-full p-3 border mt-2 rounded"}
      />
      <button
        type="submit"
        className="w-full text-white py-3 mt-2 bg-[#003F6B] hover:bg-blue-700"
      >
        Get a Quotes
      </button>
      <p className="text-center text-sm text-gray-500">We'll get back to you</p>
    </form>
  </div>
);