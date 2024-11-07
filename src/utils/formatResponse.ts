export const formatResponse = (status:number, message: string, data:any) => {
    return {
        status: status,
        message: message,
        data: data
    }
}