INSERT INTO department (name)
VALUES ("IE"), 
("ME");

INSERT INTO role (title, salary, department_id)
VALUES ("Jr IE", 40000, 1),
("Mid IE", 60000, 1),
("Sr IE", 80000, 1),
("Jr ME", 40000, 2),
("Mid ME", 60000, 2),
("Sr ME", 80000, 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Briz", "Ice", 2, 10), 
("Meck", "Slazer", 1, 10),
("Ial", "Knave", 1, 10),
("Czek", "Ovkia", 2, 10),
("Rebec", "Carmen", 2, 9),
("Mario", "Yez", 4, 9),
("Raul", "Rodriguez", 5, 9),
("Amaraj", "Nectar", 4, 9),
("Rob", "Bichter", 6, NULL),
("Jom", "Swing", 3, NULL);