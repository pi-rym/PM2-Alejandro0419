module.exports ={
    mode: 'development',
    entry: {
        index:'./scripts/index.js',
        btnClear:'./scripts/createMovie/btnReset.js',
        btnSubmit:'./scripts/createMovie/btnSubmit.js',
},
    output: {
        path: __dirname + '/browser',
        filename: "[name].bundle.js"
    }
}