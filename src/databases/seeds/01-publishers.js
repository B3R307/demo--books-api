const IdFactory = function(arg = 0){
  this._id = arg || 0,
  this.genId = function(){
    let newId = this._id + 1
    this._id = newId
    return this._id
  }
}

const idFactory = new IdFactory()

const publisherSeeds =[
{id: idFactory.genId(), name: 'Planeta'},
{id: idFactory.genId(), name: 'Fondo de Cultura Economica'},
{id: idFactory.genId(), name: 'Porrua'}
]


exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('publishers').del()
    .then(function () {
      // Inserts seed entries
      return knex('publishers').insert(publisherSeeds);

    });
};
