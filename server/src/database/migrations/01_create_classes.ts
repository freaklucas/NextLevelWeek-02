import Knex from 'knex';

export async function up(Knex: Knex) {
    /* Quais alterações eu quero realizar no banco de dados? */
    return Knex.schema.createTable('classes', table => {
        table.increments('id').primary();
        table.string('subject').notNullable();
        table.string('cost').notNullable();
        
        table.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        });
}

export async function down(knex: Knex) {
    /* Se deu ruim, o que faço pra voltar? */
    return knex.schema.dropTable('classes');

}