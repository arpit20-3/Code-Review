require('dotenv').config()
const app = require('./src/app')



app.listen(1000, () => {
    console.log('Server is running on http://localhost:1000')
})
