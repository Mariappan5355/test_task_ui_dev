export const PostCodeInput = ({ value = '', onChange }) => (
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-medium mb-2">
        Post Code<span className="text-red-500">*</span>
      </label>
      <div className="flex gap-2">
        {[...Array(7)].map((_, i) => (
          <input
            key={i}
            type="text"
            maxLength="1"
            className="w-10 h-10 text-center border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={value[i] ?? ''}
            onChange={(e) => {
              const newValue = value.split('');
              newValue[i] = e.target.value;
              onChange(newValue.join(''));
            }}
          />
        ))}
      </div>
    </div>
  );
  