#!/bin/sh

sudo -u postgres psql -U postgres -c "CREATE TABLE guilds ( guild_id VARCHAR(30) NOT NULL PRIMARY KEY, prefix VARCHAR(15) NOT NULL, disabled text ARRAY NOT NULL, disabled_commands text ARRAY NOT NULL, accessed timestamp );"
sudo -u postgres psql -U postgres -c "CREATE TABLE counts ( command VARCHAR NOT NULL PRIMARY KEY, count integer NOT NULL );"
sudo -u postgres psql -U postgres -c "CREATE TABLE tags ( guild_id VARCHAR(30) NOT NULL, name text NOT NULL, content text NOT NULL, author VARCHAR(30) NOT NULL, UNIQUE(guild_id, name) );"
sudo -u postgres psql -U postgres -c "CREATE TABLE settings ( id smallint PRIMARY KEY, version integer NOT NULL, CHECK(id = 1) );"
sudo -u postgres psql -U postgres -c "INSERT INTO settings (id, version) VALUES (1, 1) ON CONFLICT (id) DO NOTHING;"
