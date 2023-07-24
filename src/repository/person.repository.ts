import { db } from "../database";
import { Person } from "protocols/person.protocol";

async function getPerson() {
    return await db.query<Person[]>("SELECT * FROM people")
}

const personRepository = {
    getPerson
}
export default personRepository