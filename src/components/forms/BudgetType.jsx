export const BudgetType = ({ value, onChange }) => (
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-medium mb-2">
        Budget Type<span className="text-red-500">*</span>
      </label>
      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => onChange('Fixed')}
          className={`px-6 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800 ${value === 'Fixed' ? 'bg-blue-700' : ''}`}
        >
          Fixed
        </button>
        <button
          type="button"
          onClick={() => onChange('Range')}
          className={`px-6 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800 ${value === 'Range' ? 'bg-blue-700' : ''}`}
        >
          Range
        </button>
        <button
          type="button"
          onClick={() => onChange('No Idea')}
          className={`px-6 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800 ${value === 'No Idea' ? 'bg-blue-700' : ''}`}
        >
          No Idea
        </button>
      </div>
      {value === 'Range' && (
        <input
          type="text"
          placeholder="Flexible"
          className="mt-3 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      )}
    </div>
  );
  