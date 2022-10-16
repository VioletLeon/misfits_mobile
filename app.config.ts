import "dotenv/config"

module.exports = {
  name: 'Misfit Method',
  version: '1.0.0',
  extra: {
    backendUrl: process.env.BACKEND_URL,
  },
  scheme: "misfitmethod",
};
