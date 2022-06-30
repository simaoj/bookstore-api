module.exports = {
  async up(db, client) {
    await db.collection('books').updateMany({}, { $set: { isbn: '', price: 0.00 } }, { many: true });
  },

  async down(db, client) {
    await db.collection('books').updateMany({}, { $unset: { isbn: '', price: 0.00 } }, { many: true });
  }
};
