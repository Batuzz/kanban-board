const { Model } = require('objection');

class Task extends Model {
  static get tableName() {
    return 'tasks';
  }

  static get idColumn() {
    return 'id';
  }

  static get relationMappings() {
    return {
      author: {
        relation: Model.BelongsToOneRelation,
        modelClass: __dirname + '/User',
        join: {
          from: 'posts.authorID',
          to: 'users.id',
        }
      },
    };
  }
}

module.exports = Task;
