var db = require('../db');

var Matiere = {
    getMatieres: function(callback) {
        return db.query('SELECT * from t_matiere', callback);
    },

    creationMatiere: function(matiere, callback) {
        return db.query('Insert into t_matiere(libelle, coefficient) values(?, ?)', [matiere.libelle, matiere.coefficient], callback);
    }
}
module.exports = Matiere;