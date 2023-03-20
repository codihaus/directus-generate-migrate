const {
	defaultMetaField,
	defaultSchemaField,
	defaultMetaCollection,
	relationGen,
	fieldGen,
	migrateModel
} = require('./index')


const MigrationClass = require('./miggration.class')
const DirectusClass = require('./directus.class')

const migrationClass = new MigrationClass()

module.exports = {
	//####
	defaultMetaField,
	defaultSchemaField,
	defaultMetaCollection,
	relationGen,
	fieldGen,
	migrateModel,

	//
	DirectusClass,
	generateField: migrationClass.generateField,
	upCreateKnex: async (knex,config)  => migrationClass.upCreateKnex(knex,config),
	downCreateKnex: async(knex,config) => migrationClass.downCreateKnex(knex,config),
	upUpdateKnex: async(knex,config)=> migrationClass.upUpdateKnex(knex,config),
	downUpdateKnex: async(knex,config) => migrationClass.downUpdateKnex(knex,config)
}