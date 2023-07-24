import { Person } from "protocols/person.protocol"
import personRepository from "../repository/person.repository"

async function getPerson() {
    const person = await personRepository.getPerson()
    const number = Math.random() * (4 - 1)
    const pessoa:Person = person.rows[number.toFixed(0)]
    return pessoa
}

const personService = {
    getPerson
}
export default personService