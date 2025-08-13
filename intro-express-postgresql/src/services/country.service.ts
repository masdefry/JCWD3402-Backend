// Service: Handle logic backend
// Service: Handle data access to db
interface ICountryProps {
  id: number;
  country: string;
  last_update: Date;
}
import pool from '../config/pool.connection';

export const createCountryService = async ({
  country,
}: Pick<ICountryProps, 'country'>) => {
  const findCountry = await pool.query(
    `SELECT * FROM country where country=$1`,
    [country]
  );

  if (findCountry.rows.length)
    throw new Error(`Country with name = ${country} already exist`);

  await pool.query(`INSERT INTO country(country) VALUES($1)`, [country]);
};

export const readCountryService = async() => {
  return await pool.query('SELECT * FROM country')
}