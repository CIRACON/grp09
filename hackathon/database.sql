CREATE TABLE "employees"
  (
     "id"            SERIAL PRIMARY KEY,
     "name"          VARCHAR(42) NOT NULL,
     "phone"         INTEGER NOT NULL,
     "job title"     VARCHAR(64) NOT NULL,
     "work location" VARCHAR(24) NOT NULL,
     "salary"        INTEGER NOT NULL
  );

INSERT INTO employees
            ("name",
             "phone",
             "job title",
             "work location",
             "salary")
VALUES      ('Paul Simon',
             '123456789',
             'dev',
             'saint paul',
             '108000'); 