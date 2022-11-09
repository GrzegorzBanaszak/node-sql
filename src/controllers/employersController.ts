import { Request, Response } from "express";
import { Employer } from "../entities/Employer";

const getAllEmployers = async (req: Request, res: Response) => {
  const type = new Employer();

  const { firstName, lastName, email } = req.query;

  if (firstName || lastName || email) {
    const data = await type.getWithQueries({
      firstName,
      lastName,
      email,
    });

    res.status(200).json(data);
  } else {
    const data = await type.getAll();

    res.status(200).json(data);
  }
};

const getById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const type = new Employer();

  // const data = await type.getById(Number(id));

  // res.status(200).json(data);
};

export { getAllEmployers, getById };
