const fs = require('fs');
const filepath = './middlewares/logFile.txt';

const dataEntryLogger = (request, response, next) => {
    const currentDate = new Date();
    const status = response.statusCode >= 400 ? 'Fail' : 'Pass';
    fs.appendFileSync(filepath, 'New user Authenticated!\n' , 'utf-8');
    fs.appendFileSync(filepath, `Username: ${request.params.uname} \n`, 'utf8');
    fs.appendFileSync(filepath, `Password: ${request.params.upwd} \n`, 'utf8');
    fs.appendFileSync(filepath, `URL: ${request.originalUrl} \n`, 'utf8');
    fs.appendFileSync(filepath, `Date: ${currentDate.toLocaleString()} \n`, 'utf8');
    fs.appendFileSync(filepath, `Method Type: ${request.method} \n`, 'utf8');
    fs.appendFileSync(filepath, `Status: ${status} \n`, 'utf8');
    next()
}

module.exports = dataEntryLogger