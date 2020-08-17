import Knex from 'knex';

export async function up(Knex: Knex) {
    /* Quais alterações eu quero realizar no banco de dados? */
    return Knex.schema.createTable('class_schedule', table => {
        table.increments('id').primary();
       
        table.integer('week_day').notNullable();
        table.integer('from').notNullable();
        table.integer('to').notNullable();
        
        table.integer('class_id')
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        });
}

export async function down(knex: Knex) {
    /* Se deu ruim, o que faço pra voltar? */
    return knex.schema.dropTable('class_schedule');

}