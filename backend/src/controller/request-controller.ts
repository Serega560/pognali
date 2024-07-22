import { Request, Response } from 'express';
import axios from 'axios';
import { generateToken } from '../utils/token';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getCountries = async (req: Request, res: Response) => {
  try {
    const { letter } = req.query;

    const response = await axios.get('https://restcountries.com/v3.1/all');
    const countries = response.data.map((country: any) => ({
      name: country.translations.rus.common,
      flag: country.flags.svg
    }));

    const filteredCountries = letter
      ? countries.filter((country: any) => country.name.startsWith(letter))
      : countries;

    res.json(filteredCountries);
  } catch (error) {
    res.status(500).json({ message: 'Ошибка при получении списка стран', error });
  }
};

export const getPagination = async (req: Request, res: Response) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 5;

    const requests = await prisma.request.findMany({
      skip: (page - 1) * limit,
      take: limit,
      orderBy: {
        id: 'asc',
      },
    });

    const totalItems = await prisma.request.count();

    res.json({
      page,
      limit,
      total: totalItems,
      totalPages: Math.ceil(totalItems / limit),
      data: requests,
    });
  } catch (error) {
    console.error('Ошибка при получении данных:', error);
    res.status(500).json({ message: 'Ошибка при получении данных', error });
  }
};

export const handleFormSubmission = async (req: Request, res: Response) => {
  try {
    const { date, country, text, transport_choice, name, hashtags } = req.body;

    const token = generateToken();
    const newRequest = await prisma.request.create({
      data: {
        date: new Date(date),
        country,
        text,
        token,
        transport_choice,
        name,
        hashtags,
        level: 0,
        is_form_generated: true,
      },
    });

    res.json({ message: 'Отправка формы успешна', formData: newRequest });
  } catch (error) {
    console.error('Ошибка при обработке формы:', error);
    res.status(500).json({ message: 'Ошибка при обработке формы', error });
  }
};

export const getCatalogRequests = async (req: Request, res: Response) => {
  try {
    const requests = await prisma.request.findMany();
    res.json(requests);
  } catch (error) {
    res.status(500).json({ message: 'Ошибка при получении запросов', error });
  }
};
