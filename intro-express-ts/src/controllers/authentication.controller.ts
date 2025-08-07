import { Request, Response } from 'express';
import { readFile, writeFile } from '../utils/read.write.file';
import fs from 'fs';

export const authenticationLoginController = (
  req: Request,
  res: Response
) => {
  // Step-01: Req.body -> usernameOrEmail & password

  // Step-02: Read file -> utils/read.write.file.ts

  // Step-03: Manipulation -> users?.find(user => (user.email === usernameOrEmail || user.username === usernameOrEmail) && user.password === password)
};

export const authenticationRegisterController = (
  req: Request,
  res: Response
) => {
  const { email, username, password } = req.body;

  const users = readFile('src/database/users.json');

  const findUserByEmailAndUsername = users?.find(
    (user: any) => user?.email === email || user?.username === username
  ); `select * from users where email = email and username = username`;

  if (findUserByEmailAndUsername)
    res.status(400).json({
      success: false,
      message: 'Username or email already exist',
      data: {},
    });

  users.push({ uuid: Date.now(), username, email, password, role: 'USER' });

  writeFile({ path: 'src/database/users.json', data: JSON.stringify(users) });

  res.status(201).json({
    success: true,
    message: `Register user successfull`,
    data: {
      email,
      username,
    },
  });
};
