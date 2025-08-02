const { User, Role } = require('../../models');
const bcrypt = require('bcrypt');

const register = async (req, res) => {
  try {
    const { name, email, password, confirmPassword, role } = req.body;

    // Validasi password cocok
    if (password !== confirmPassword) {
      return res.status(400).json({ message: 'Password tidak cocok' });
    }

    // Cek email sudah terdaftar
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: 'Email sudah terdaftar' });
    }

    // Cek role (default: user)
    const userRole = await Role.findOne({
      where: { name: role || 'user' }
    });

    if (!userRole) {
      return res.status(400).json({ message: 'Role tidak ditemukan' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Simpan user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      roleId: userRole.id,
    });

    return res.status(201).json({ message: 'Registrasi berhasil', user });
  } catch (error) {
    console.error('Register Error:', error);
    return res.status(500).json({ message: 'Terjadi kesalahan saat registrasi' });
  }
};

module.exports = register ;
