const sequelize = require('./config/database');
const User = require('./models/User'); // Add other models later

(async () => {
    try {
        await sequelize.sync({ alter: true }); // Sync database and create tables
        console.log('Database synced successfully!');
        process.exit();
    } catch (error) {
        console.error('Error syncing database:', error);
        process.exit(1);
    }
})();
