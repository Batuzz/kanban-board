const { Model } = require('objection');

class User extends Model {
  static get tableName() {
    return 'users';
  }

  static get idColumn() {
    return 'id';
  }

  static get relationMappings() {
    return {
      tasks: {
        relation: Model.HasManyRelation,
        modelClass: __dirname + '/Task',
        join: {
          from: 'users.id',
          to: 'tasks.authorID',
        }
      },
    };
  }
}

module.exports = User;
