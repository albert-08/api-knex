const JWT = require('jsonwebtoken')
const SECRET_KEY = 'iw6bPfybFfqGhXpV3DK8LqvYnfe3GDVJBVCgC2HmgD2SEoXK1oj+/82ykWpKt26CjseAG+UCmzL6asUrmIpw1bYxDjhlIPMlS4wQtZz17yPI/O4UOqeGfhl9wX8UYmTWfyo='

module.exports = ({id_user, rol, email}) => {
    const payload = {
        id_user,
        rol,
        email
    }

    return JWT.sign(payload,SECRET_KEY,{expiresIn:'24h'})
}