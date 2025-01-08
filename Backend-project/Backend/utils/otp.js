import crypto from "crypto"

const generateOPT = () => {
    return crypto.randomInt(10000,99999)
}