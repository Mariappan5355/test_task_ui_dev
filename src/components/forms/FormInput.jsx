export const FormInput = ({
    label,
    type = "text",
    placeholder,
    required = false,
    className = "",
    value = "", 
    onChange,
  }) => (
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-medium mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
        value={value || ""}
        onChange={(e) => onChange(e.target.value)} 
      />
    </div>
  );
  