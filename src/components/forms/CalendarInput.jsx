import React, { useState } from 'react';
import { Calendar } from 'lucide-react';

export const CalendarInput = ({ label, required = false, placeholder, onChange, value }) => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 10 }, (_, i) => currentYear + i);
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  // Generate days based on selected month and year
  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const [selectedDate, setSelectedDate] = useState({
    day: '',
    month: new Date().getMonth(),
    year: currentYear
  });

  const handleDateSelect = (day) => {
    const newDate = {
      ...selectedDate,
      day: day
    };
    setSelectedDate(newDate);
    
    const dateString = `${months[newDate.month]} ${day}, ${newDate.year}`;
    onChange?.(dateString);
    setShowDatePicker(false);
  };

  return (
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-medium mb-2">
        {label}{required && <span className="text-red-500">*</span>}
      </label>
      
      <div className="relative">
        <input
          type="text"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder={placeholder || "Select date"}
          value={value}
          readOnly
          onClick={() => setShowDatePicker(!showDatePicker)}
        />
        <Calendar 
          className="absolute right-3 top-2.5 text-gray-400 cursor-pointer" 
          size={20}
          onClick={() => setShowDatePicker(!showDatePicker)}
        />
        
        {showDatePicker && (
          <div className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg">
            <div className="p-2 border-b flex gap-2">
              <select 
                className="flex-1 p-1 border rounded"
                value={selectedDate.month}
                onChange={(e) => setSelectedDate({...selectedDate, month: parseInt(e.target.value)})}
              >
                {months.map((month, index) => (
                  <option key={month} value={index}>{month}</option>
                ))}
              </select>
              <select 
                className="w-24 p-1 border rounded"
                value={selectedDate.year}
                onChange={(e) => setSelectedDate({...selectedDate, year: parseInt(e.target.value)})}
              >
                {years.map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>
            
            <div className="p-2 grid grid-cols-7 gap-1">
              {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
                <div key={day} className="text-center text-sm text-gray-600 font-medium p-1">
                  {day}
                </div>
              ))}
              
              {Array.from({ length: getDaysInMonth(selectedDate.month, selectedDate.year) }, (_, i) => i + 1).map(day => (
                <button
                  key={day}
                  className={`p-1 text-center rounded hover:bg-blue-50 
                    ${selectedDate.day === day ? 'bg-blue-500 text-white hover:bg-blue-600' : ''}`}
                  onClick={() => handleDateSelect(day)}
                  type="button"
                >
                  {day}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

