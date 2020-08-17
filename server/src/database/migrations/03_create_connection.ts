import Knex from 'knex';

export async function up(Knex: Knex) {
    /* Quais alterações eu quero realizar no banco de dados? */
    return Knex.schema.createTable('conenctions', table => {
        table.increments('id').primary();
        
        table.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');

            table.timestamp('create_at')
                .defaultTo(Knex.raw('CURRENT_TIMESTAMP'))
                .notNullable();
            });
}

export async function down(knex: Knex) {
    /* Se deu ruim, o que faço pra voltar? */
    return knex.schema.dropTable('connections');

}