import fs from 'fs'

const historyFile = 'history.json'
function logHistory(
    operation: string,
    valueA: number,
    valueB: number,
    result: number
) {
    const history = {
        operation,
        valueA,
        valueB,
        result,
        date: new Date()
    }

    if (!fs.existsSync(historyFile)) {
        fs.writeFileSync(historyFile, "[]")
    }

    const data = JSON.parse(fs.readFileSync(historyFile, 'utf-8'))
    data.push(history)

    fs.writeFileSync(historyFile, JSON.stringify(data))

    return history
}

function getAllHistory() {
    if (!fs.existsSync(historyFile)) {
        fs.writeFileSync(historyFile, "[]")
    }

    const data = JSON.parse(fs.readFileSync(historyFile, 'utf-8'))
    return data
}

function deleteHistory(id: number) {
    if (!fs.existsSync(historyFile)) {
        fs.writeFileSync(historyFile, "[]")
    }

    const data = JSON.parse(fs.readFileSync(historyFile, 'utf-8'))
    const historyIndex = data.findIndex((item: any, index: number) => index == id)
    data.splice(historyIndex, 1)

    fs.writeFileSync(historyFile, JSON.stringify(data))

    return data
}

export { logHistory, getAllHistory, deleteHistory }