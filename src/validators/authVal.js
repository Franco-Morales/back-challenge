import { check } from "express-validator";

import {  validate } from "./validate";
import User from "../models/user";


const singUpVal = [
    check("email")
        .notEmpty()
        .withMessage("Email is required")
        .normalizeEmail()
        .isEmail()
        .withMessage("Invalid email format")
        .custom( async ( value ) => {
            const emailCheck = await User.findOne({ email: value });

            if( emailCheck !== null ) return Promise.reject();
        })
        .withMessage('Email is already in use'),
    check("password")
        .notEmpty()
        .withMessage("Password is required")
        .isLength({ min: 6, max: 16 })
        .withMessage("The min of characters is 6 and max is 16"),
    check("username")
        .notEmpty()
        .withMessage("Username is required")
        .isLength({ min: 8, max: 16 })
        .withMessage("The min of characters is 8 and max is 16"),
    (req, res, next) => validate(req, res, next)
];

const loggInVal = [
    check("email")
        .notEmpty()
        .withMessage("Email is required")
        .normalizeEmail()
        .isEmail()
        .withMessage("Invalid email format")
        .custom( async ( value ) => {
            const emailCheck = await User.findOne({ email: value });
            
            if( !emailCheck  ) return Promise.reject();
        })
        .withMessage('User does not exist'),
    check("password")
        .notEmpty()
        .withMessage("Password is required")
        .isLength({ min: 6, max: 16 })
        .withMessage("The min of characters is 6 and max is 16"),
    (req, res, next) => validate(req, res, next)
];


export { singUpVal, loggInVal };