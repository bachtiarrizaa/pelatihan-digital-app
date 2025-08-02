// controllers/logoutController.js

const logout = async (req, res) => {
  try {
    // Karena kita tidak menyimpan token di server (JWT stateless), cukup respon sukses
    res.json({ message: 'Logout berhasil' });
  } catch (error) {
    res.status(500).json({ message: 'Terjadi kesalahan saat logout' });
  }
};

module.exports = logout;
