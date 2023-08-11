import express from "express";
import dotenv from "dotenv";
dotenv.config();

const API = express();

API.set('env', process.env.NODE_ENV)
// API.settings({env: process.env.NODE_ENV})

console.log(API)