SELECT 'CREATE DATABASE torneo'
WHERE NOT EXISTS (SELECT FROM pg_database WHERE pg_table_name = 'torneo');