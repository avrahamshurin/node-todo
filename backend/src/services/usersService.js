import dbService from "./dbService.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { token } from "morgan";

const usersService = {};
usersService.signUp = async (firstName, lastName, email, password) => {
  const existsResult = await dbService.query(
    "SELECT EXISTS(SELECT 1 FROM users WHERE email = $1)",
    [email]
  );
  if (existsResult[0].exists) {
    throw new Error("user already exists");
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const result = await dbService.query(
    "INSERT INTO users (first_name, last_name, email, password) VALUES ($1, $2, $3, $4) RETURNING id",
    [firstName, lastName, email, hashedPassword]
  );

  const { id } = result[0];

  const token = createToken(id);

  return { id, token };
};

usersService.login = async (email, password) => {
  const user = (
    await dbService.query("SELECT * FROM users WHERE email = $1", [email])
  )[0];
  if (!user) {
    throw new Error("user doesn't exist");
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    throw new Error("wrong password");
  }

  const token = createToken(user.id);
  return { id: user.id, token: token };
};

const createToken = (id) => {
  return jwt.sign({ id }, process.env.SECRET, { expiresIn: "15m" });
};

export default usersService;
