const sequelize = require('./config/database');

(async () => {
    try {
        console.log('✅ Attempting to connect to MySQL...');
        await sequelize.authenticate();
        console.log('✅ Connection to MySQL has been established successfully.');
    } catch (error) {
        console.error('❌ Unable to connect to MySQL:', error);
    }
})();
