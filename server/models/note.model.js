module.exports = (sequelize, DataTypes) => {
    const Note = sequelize.define('Note', {
        //Model attributes are defined here boyo
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        content: {
            type: DataTypes.TEXT
        }
        // id, createdAt, and updatedAt are handled automatically
    });
    return Note;
};