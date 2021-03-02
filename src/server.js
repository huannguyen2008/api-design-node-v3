import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'

export const app = express()

app.disable('x-powered-by')

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

const logSomething = async function (req, res, next) {
    console.log('dau 1 lan` la finish')
    req.myData = 'definitely xao lao'
    next()
}

app.get('/data', [logSomething, logSomething, logSomething], async function (req, res) {
    res.send({ data: req.myData })
})

app.post('/', async function (req, res) {
    console.log(req.body)
    res.send(req.body)
})
export const start = () => {
    app.listen(3100, () => {
        console.log("go go on 3100")
    })
}