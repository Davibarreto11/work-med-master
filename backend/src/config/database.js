module.exports = {
  dialect: 'postgres',
  host: 'postgres',
  username: 'postgres',
  password: 'docker',
  database: 'workmed',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
