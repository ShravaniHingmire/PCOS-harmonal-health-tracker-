-- Create the database
CREATE DATABASE symptom_tracker;

-- Use the database
USE symptom_tracker;

-- Create the symptoms table
CREATE TABLE symptoms (
    id INT AUTO_INCREMENT PRIMARY KEY,
    date DATE NOT NULL,
    symptoms TEXT NOT NULL,
    severity INT CHECK (severity BETWEEN 1 AND 10) NOT NULL
);

-- Insert sample data
INSERT INTO symptoms (date, symptoms, severity) 
VALUES 
('2025-03-04', 'Irregular periods and fatigue', 7),
('2025-03-03', 'Acne and bloating', 5);

-- Retrieve all symptoms
SELECT * FROM symptoms;

-- Query symptoms by date
SELECT * FROM symptoms WHERE date = '2025-03-04';

-- Query symptoms by severity
SELECT * FROM symptoms WHERE severity >= 5;

-- Update a symptom entry
UPDATE symptoms 
SET severity = 8 
WHERE id = 1;

-- Delete a symptom entry
DELETE FROM symptoms WHERE id = 2;
