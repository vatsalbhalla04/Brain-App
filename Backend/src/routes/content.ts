import { Router, Request, Response } from "express";
import { contentModel } from "../model/db";
import { StatusCode } from "../enums/statusCodes";

const contentRoute = Router();

contentRoute.post("/PostContent", async (req: Request, res: Response) => {
  const { link, type } = req.body;
  try {
    await contentModel.create({
      link,
      type,
      title: req.body.title,
      //@ts-ignore
      userId: req.userId,
      tags: [],
    });
    res.status(StatusCode.OK).json({
      message: "Content Added",
    });
  } catch (error) {
    res.status(StatusCode.INTERNAL_SERVER_ERROR).json({
      message: error,
    });
  }
});

contentRoute.get("/GetContent", async (req, res) => {
  //@ts-ignore
  const userId = req.userId;
  
  try {
    const content = await contentModel
      .find({ userId })
      .populate("userId", "username");
      
      res.status(StatusCode.OK).json({
          content,
        });
    } catch (error) {
    res.status(StatusCode.INTERNAL_SERVER_ERROR).json({
    //@ts-ignore
      error: error.message,
    });
  }
});


contentRoute.delete("/DeleteContent", async (req, res) => {
  const { contentID } = req.body;
  try {
    await contentModel.deleteOne({
      _id: contentID,
      // @ts-ignore
      userId: req.userId,
    });
    res.status(StatusCode.OK).json({
      message: "Content Deleted",
    });
  } catch (error) {
    message: error;
  }
});

export { contentRoute };
