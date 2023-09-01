import { ErrorRequestHandler } from "express";

export const ErrorHandler: ErrorRequestHandler = async (
  error,
  Request,
  Response,
  Next
) => {
  try {
    console.log(error.fields);
    // mail = errorMailer.sendMail({
    //     from: 'contact@neverforgetit.net',
    //     to: 'kuczak.tomasz@gmail.com',
    //     subject: 'REST API Error',
    //     text: 'There has been an error in the bookstore REST API',
    //     html: '<p>There has been an error in the bookstore REST API<p>'
    // })
    //   UTILS.Logger.error(`Message sent`);
    //   UTILS.Logger.error(error, error.message);
  } catch (e) {
    //   UTILS.Logger.error(e);
  }

  // return NITRO_RESPONSE(Response, {
  //   statusCode: 500,
  //   status: "There was an internal server error. Please try again.",
  //   results: 0,
  //   data: null,
  // });
  // Response.status(500).send("Internal Server Error");
  // Next();
};
