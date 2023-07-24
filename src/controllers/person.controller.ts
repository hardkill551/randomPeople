import { Request, Response } from "express";
import httpStatus from "http-status";
import personService from "../services/person.service";

export async function getPerson(req:Request, res:Response) {
    const person = await personService.getPerson()
    res.send(person).status(httpStatus.OK)
}