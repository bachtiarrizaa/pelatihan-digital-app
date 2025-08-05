import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
// import { Helmet } from 'react-helmet';
import Select from 'react-select';
import selectStyles from '../../utils/SelectSyle';

// Komponen input teks
const FormInput = ({ label, name, value, onChange, error, type = 'text', focusedField, setFocusedField, ...props }) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-medium text-gray-600 mb-1">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onFocus={() => setFocusedField(name)}
        onBlur={() => setFocusedField(null)}
        style={{
          boxShadow: focusedField === name ? '0 0 0 2px rgba(44, 125, 160, 0.2)' : 'none',
        }}
        className="w-full p-3 rounded-lg text-sm border border-blue-600 outline-none transition-shadow duration-200"
        {...props}
      />
      {error && <p className="text-red-600 text-xs mt-1">{error}</p>}
    </div>
  );
};

// Komponen input select
const FormSelect = ({ label, name, value, onChange, error, options, placeholder }) => {
  const reactSelectOptions = options.map(option => ({
    value: option.id,
    label: option.name,
  }));

  const selectedOption = reactSelectOptions.find(opt => opt.value === value) || null;

  return (
    <div className="mb-4">
      {label && (
        <label htmlFor={name} className="block text-sm font-medium text-gray-600 mb-1">
          {label}
        </label>
      )}
      <Select
        inputId={name}
        name={name}
        options={reactSelectOptions}
        value={selectedOption}
        onChange={(selected) => onChange({ target: { name, value: selected ? selected.value : '' } })}
        placeholder={placeholder}
        styles={selectStyles}
        className="react-select-container"
        classNamePrefix="react-select"
      />
      {error && <p className="text-red-600 text-xs mt-1">{error}</p>}
    </div>
  );
};

export default function EditProfile() {
  // Dummy user & options — ganti ini dengan fetch dari API jika perlu
  const user = {
    name: 'Budi',
    email: 'budi@example.com',
    site_id: 2,
    position_id: 1,
    phone_number: '081234567890',
    nik: '1234567890123456',
    address: 'Jl. Mawar',
    image_profile: '',
  };

  const sites = [
    { id: 1, name: 'Site A' },
    { id: 2, name: 'Site B' },
  ];

  const positions = [
    { id: 1, name: 'Manager' },
    { id: 2, name: 'Staff' },
  ];

  const fileInputRef = useRef();

  const [data, setData] = useState({
    name: user.name || '',
    email: user.email || '',
    site_id: user.site_id || '',
    position_id: user.position_id || '',
    phone_number: user.phone_number || '',
    nik: user.nik || '',
    address: user.address || '',
    image_profile: null,
  });

  const [errors, setErrors] = useState({});
  const [processing, setProcessing] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const [previewUrl, setPreviewUrl] = useState(
    user.image_profile
      ? `/storage/${user.image_profile}`
      : `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&background=random`
  );

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setData(prev => ({ ...prev, image_profile: file }));
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleChange = (e) => {
    setData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const submit = async (e) => {
    e.preventDefault();
    setProcessing(true);
    setErrors({});

    const formData = new FormData();
    for (let key in data) {
      formData.append(key, data[key]);
    }

    try {
      const response = await fetch('/update-profile', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (!response.ok) {
        setErrors(result.errors || {});
      } else {
        alert('Profil berhasil diperbarui!');
        // Bisa redirect di sini
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }

    setProcessing(false);
  };

  return (
    <>
      <div className="bg-white pt-12">
        <div className="bg-blue-600 text-white h-16 px-6 sm:px-16 flex items-center justify-between px-4 pt-16 pb-6">
          <Link to="/profile">
            <i className="fa-solid fa-chevron-left fa-xl"></i>
          </Link>
          <h1 className="text-lg font-semibold">Ubah Profil</h1>
          <button
            type="submit"
            form="edit-profile-form"
            disabled={processing}
            className={`text-lg font-semibold transition-opacity ${processing ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-80'}`}
          >
            Simpan
          </button>
        </div>

        <form id="edit-profile-form" onSubmit={submit} className="pb-8 px-6 bg-white">
          <div className="flex justify-center">
            <div className="relative my-4">
              <img
                src={previewUrl}
                alt="Pratinjau Profil"
                className="w-28 h-28 rounded-full object-cover border-4 border-white shadow cursor-pointer"
                onClick={() => fileInputRef.current.click()}
              />
              <div
                onClick={() => fileInputRef.current.click()}
                className="absolute bottom-1 right-1 cursor-pointer p-[2px] bg-white rounded-[0.5rem] hover:bg-blue-50 transition"
              >
                <i className="fa-solid fa-pen-to-square fa-xl text-blue-600"></i>
              </div>
              <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                accept="image/*"
                onChange={handleImageChange}
              />
            </div>
          </div>
          {errors.image_profile && (
            <p className="text-center text-red-600 text-xs -mt-4 mb-4">{errors.image_profile}</p>
          )}

          <div className="bg-white p-6 rounded-xl shadow">
            <FormInput label="NIK" name="nik" value={data.nik} onChange={handleChange} error={errors.nik} focusedField={focusedField} setFocusedField={setFocusedField} />
            <FormInput label="Nama" name="name" value={data.name} onChange={handleChange} error={errors.name} focusedField={focusedField} setFocusedField={setFocusedField} />
            <FormInput label="Email" name="email" type="email" value={data.email} onChange={handleChange} error={errors.email} focusedField={focusedField} setFocusedField={setFocusedField} />
            <FormInput label="No Telp" name="phone_number" value={data.phone_number} onChange={handleChange} error={errors.phone_number} focusedField={focusedField} setFocusedField={setFocusedField} />
            <FormSelect label="Jabatan" name="position_id" value={data.position_id} onChange={handleChange} error={errors.position_id} options={positions} placeholder="-- Pilih Jabatan --" />
            <FormSelect label="Site" name="site_id" value={data.site_id} onChange={handleChange} error={errors.site_id} options={sites} placeholder="-- Pilih Site --" />
            <FormInput label="Alamat" name="address" value={data.address} onChange={handleChange} error={errors.address} focusedField={focusedField} setFocusedField={setFocusedField} />
          </div>
        </form>
      </div>
    </>
  );
}
