import 'css-modules-require-hook/preset'
import http from 'http'
import path from 'path'
import express from 'express'
import compression from 'compression'
import React from 'react'
import { renderToString } from 'react-dom/server'
import ReactApp from './src/App'
import assetConfig from './build/asset-manifest'
const app = express()

app.set('views', path.resolve(__dirname, 'views'))
app.set('view engine', 'jade')
app.use(compression())
app.use('/static', express.static(path.resolve(__dirname, 'build', 'static')))

app.get('*', (req, res) => {
    const html = renderToString(<ReactApp />);
    res.render('index', {
        title: 'React App',
        assetConfig,
        reactRoot: html
    })
})

const server = http.createServer(app, err => {
    if (!err) {
        console.log('x');
    }
})

server.listen(8080, () => {
    console.log(`listing on port 8080`)
})