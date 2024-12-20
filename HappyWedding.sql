CREATE DATABASE HappyWedding;
GO

USE HappyWedding;
GO

CREATE TABLE greeting
(
    Id INT PRIMARY KEY IDENTITY(1,1), -- Auto-incrementing primary key
    Sender NVARCHAR(100) NOT NULL,     -- Name of the sender
    Message NVARCHAR(MAX) NOT NULL,  -- The wedding message
    Image VARCHAR(MAX),             -- Path to the image (optional)
    CreatedAt SMALLDATETIME NOT NULL DEFAULT GETDATE() -- Timestamp
);
GO


