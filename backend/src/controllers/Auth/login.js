const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User, Role } = require('../../models');

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Cari user dan sertakan relasi Role
    const user = await User.findOne({
      where: { email },
      include: {
        model: Role,
        attributes: ['name'] // hanya ambil nama role
      }
    });

    if (!user) {
      return res.status(404).json({ message: 'User tidak ditemukan' });
    }

    // Cek password
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: 'Password salah' });
    }

    // Ambil nama role dari relasi
    const roleName = user.Role?.name || 'user';

    // Buat token yang menyertakan role
    const token = jwt.sign(
      { id: user.id, role: roleName },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    // Kirim data ke frontend
    res.status(200).json({
      message: 'Login berhasil',
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: roleName,
      },
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Terjadi kesalahan di server' });
  }
};

module.exports = login;
