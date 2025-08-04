// src/Utils/selectStyles.js
const selectStyles = {
  control: (provided, state) => ({
    ...provided,
    borderRadius: '0.5rem', // Tailwind: rounded-lg
    border: '1px solid rgba(37, 109, 141, 0.5)',
    padding: '2px',
    boxShadow: state.isFocused ? '0 0 0 3px rgba(44, 125, 160, 0.2)' : 'none',
    transition: 'box-shadow 0.2s',
    outline: 'none',
    '&:hover': {
      borderColor: '#2C7DA0',
    },
  }),
  singleValue: (provided) => ({
    ...provided,
    fontSize: '14px',
  }),
  placeholder: (provided) => ({
    ...provided,
    fontSize: '14px',
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? '#256D8D' : 'white',
    color: state.isSelected ? 'white' : '#2C7DA0',
    fontSize: '0.875rem',
    ':hover': {
      backgroundColor: '#b4d0dcff',
      color: 'white',
    },
  }),
};

export default selectStyles;