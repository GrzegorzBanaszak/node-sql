import db from "../services/db";
import { Request, Response } from "express";
import { Employer } from "../entities/Employer";

const getAllEmployers = async (req: Request, res: Response) => {
  const type = new Employer();

  const { limit, firstName } = req.query;
  const limitQuery: number = limit ? Number(limit) : 10;

  const data = await type.test();

  res.status(200).json(data);

  // if (firstName) {
  //   const data = await type.getAllEmployers(limitQuery, String(firstName));

  //   res.status(200).json(data);
  // } else {
  //   const data = await type.getAllEmployers(limitQuery, null);

  //   res.status(200).json(data);
  // }
};

const getById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const type = new Employer();

  // const data = await type.getById(Number(id));

  // res.status(200).json(data);
};

export { getAllEmployers, getById };
