import Knex from 'knex';

export async function up(Knex: Knex) {
    /* Quais alterações eu quero realizar no banco de dados? */
    return Knex.schema.createTable('users', table => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('avatar').notNullable();
        table.string('whatsapp').notNullable();
        table.string('bio').notNullable();
    })
}

export async function down(knex: Knex) {
    /* Se deu ruim, o que faço pra voltar? */
    return knex.schema.dropTable('users');

}