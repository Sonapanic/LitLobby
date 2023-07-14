import express from 'express'
import pg from 'pg'
import dotenv from 'dotenv'

dotenv.config()
const { Pool } = pg
const app = express()
const port = process.env.port

const pool = new Pool ({
    connectionString: process.env.DATABASE_URL
})