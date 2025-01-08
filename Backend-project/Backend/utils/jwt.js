export const generationToken = () => {
    try {
        const token = jwt.sign(data, process.env.JWT_SECRET)
        return token;
    } catch (error) {
        throw new error("")
    }
}