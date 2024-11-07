const sMathOperation = (numA: number, numB: number, operation: string) : number | null=> {
    switch (operation) {
        case 'add':
            return numA + numB
        case 'substract':
            return numA - numB
        case 'multiply':
            return numA * numB
        case 'divide':
            return numB != 0 ? numA / numB : null
        default:
            throw new Error("Invalid Operation")
    }
}

export {sMathOperation}