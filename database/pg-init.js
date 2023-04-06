const pgConnect = require('./pg-conect')

let query1 = 
`
    CREATE TABLE IF NOT EXISTS members (
        username character varying(255) PRIMARY KEY,
        password character varying (255),
        refresh_token character varying (255)
    )
`

let query2 = 
`
    INSERT INTO members (username, password, refresh_token) VALUES ('admin', '$2b$10$bgKSmPHXljEVs4knjB24QODzXsGrOQETBKUtXARjxZ1EU4Sqj3Iqi', null)
`

pgConnect(query1)
pgConnect(query2)