exports.up = function(knex) {
  return (
    knex.schema
      .createTable("users", tbl => {
        tbl.increments();
        tbl
          .string("username", 255)
          .notNullable()
          .unique();
        tbl.string("email", 255).notNullable();
        tbl.string("password", 255).notNullable();
      })
      .createTable("recipes", tbl => {
        tbl.increments();
        tbl
          .string("recipe_name", 255)
          .notNullable()
          .unique();
        tbl.string("recipe_source", 255).notNullable();
        tbl.string("recipe_ingredients", 1024).notNullable();
        tbl.string("recipe_category", 255).notNullable();
        tbl
          .integer("user_id")
          .unsigned()
          .references("id")
          .inTable("users")
          .onDelete("CASCADE") // what to do if the primary key value is deleted. "CASCADE" means delete that too
          .onUpdate("CASCADE")
          .notNullable(); // what to do if primary key value is updated
        // Foreign Key for Ingredient id
      })
      // .createTable("ingredients", tbl => {
      //   tbl.increments();
      //   tbl
      //     .string("ingredient_name", 255)
      //     .notNullable()
      //     .unique();
      // })
      // .createTable("recipe_ingredient", tbl => {
      //   tbl.increments();
      //   tbl
      //     .integer("recipe_id")
      //     .unsigned()
      //     .references("id")
      //     .inTable("recipes")
      //     .onDelete("CASCADE")
      //     .onUpdate("CASCADE");
      //   tbl
      //     .integer("ingredient_id")
      //     .unsigned()
      //     .references("id")
      //     .inTable("ingredients")
      //     .onDelete("CASCADE")
      //     .onUpdate("CASCADE");
      // })
      .createTable("instructions", tbl => {
        tbl.increments();
        tbl
          .string("steps", 1024)
          .notNullable()
          .unique();
        tbl
          .integer("recipe_id")
          .unsigned()
          .references("id")
          .inTable("recipes")
          .onDelete("CASCADE")
          .onUpdate("CASCADE");
      })
  );
};

exports.down = function(knex) {
  return (
    knex.schema
      .dropTableIfExists("instructions")
      // .dropTableIfExists("recipe_ingredient")
      // .dropTableIfExists("ingredients")
      .dropTableIfExists("recipes")
      .dropTableIfExists("users")
  );
};
