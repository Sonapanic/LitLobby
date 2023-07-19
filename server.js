import express from 'express'
import pg from 'pg'
import dotenv from 'dotenv'
import cors from 'cors'


dotenv.config()
const { Pool } = pg
const app = express()
const port = process.env.PORT


app.use(express.json())
app.use(cors())
app.use(express.static('dist'))



const pool = new Pool ({
    connectionString: process.env.DATABASE_URL
})



app.get('/books', async (req, res) => {
    try {
        const result = await pool.query('SELECT id, title, description, author, page, genre FROM books ORDER BY id ASC')
        res.status(200).json(result.rows)
    } catch (err) {
        console.error(err)
        res.status(500).send('Internal Server Error')
    }
})



app.get('/books/:id', async (req, res) => {
    const { id } = req.params
    try {
        const result = await pool.query(`SELECT id, title, description, author, page, genre FROM books WHERE id=$1`, [id])
        if (result.rowCount === 0) {
            res.status(404).send('Book not found') 
        } else {
            res.status(200).json(result.rows)
        }
    } catch (err) {
        console.error(err)
        res.status(500).send('Internal Server Error')
    }
})



app.post('/books', async (req, res) => {
    const { title, description, author, page, genre } = req.body
    if (title && description && author && page && genre) {
        try {
            const result = await pool.query(`INSERT INTO books (title, description, author, page, genre) VALUES ($1, $2, $3, $4, $5) RETURNING *`, [title, description, author, page, genre])
            res.status(201).json(result.rows)
        } catch (err) {
            console.error(err)
            res.status(500).send('Internal Server Error')
        }
    } else {
        res.status(400).send('Please fill in all fields.')
    }
})



app.put('/books/:id', async (req, res) => {
    const { id } = req.params
    const { title, description, author, page, genre } = req.body
    if (title && description && author && page && genre) {
        try {
            const result = await pool.query(`UPDATE books SET title=$1, description=$2, author=$3, page=$4, genre=$5 WHERE id=$6 RETURNING *`, [title, description, author, page, genre, id])
            res.status(201).json(result.rows)
        } catch (err) {
            console.error(err)
            res.status(500).send('Internal Server Error')
        }
    } else {
        res.status(400).send('Please fill in all fields.')
    }
})



app.delete('/books/:id', async (req, res) => {
    const { id } = req.params
    try {
        const result = await pool.query('DELETE FROM books WHERE id=$1 RETURNING *', [id])
        result.rowCount === 0 ? res.status(404).send('Book not found') : res.status(201).json(result.rows)
    } catch (err) {
            console.error(err)
            res.status(500).send('Internal Server Error')
        }
})


app.use((req, res) => {
    res.status(404).send('Not Found')
})


app.listen(port)