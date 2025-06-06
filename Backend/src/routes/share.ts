import { Router } from "express";
import { contentModel, linkModel, userModel } from "../model/db";
import { random } from "../utils/util";
import { StatusCode } from "../enums/statusCodes";
import { userMiddleware } from "../middleware/middleware";
const shareRoute = Router();

shareRoute.post("/createLink",userMiddleware,async (req, res) => {
  const { share } = req.body;
  try {
    if (share) {
      const existingLink = await linkModel.findOne({
        //@ts-ignore
        userId: req.userId,
      });
      if (existingLink) {
        res.status(StatusCode.OK).json({
          hash: `/share/${existingLink.hash}`,
        });
        return;
      }
      const hash = random(10);
      await linkModel.create({
        //@ts-ignore
        userId: req.userId,
        hash: hash,
      });
      res.status(StatusCode.CREATED).json({
        message: `/share/${hash}`,
      });
    } else {
      await linkModel.deleteOne({
        //@ts-ignore
        userId: req.userId,
      });
      res.status(StatusCode.CONFLICT).json({
        message: "Removed Link",
      });
    }
  } catch (error) {
    res.status(StatusCode.NOT_FOUND).json({
      message: error,
    });
  }
});

shareRoute.get("/:shareLink", async (req, res) => {
  const hash = req.params.shareLink;
  const link = await linkModel.findOne({ hash });
  if (!link) {
    res.status(StatusCode.NOT_FOUND).json({
      message: "Invalid Link",
    });
    return;
  }
  const content = await contentModel.find({
    userId: link.userId,
  });
  const user = await userModel.findOne({
    _id: link.userId,
  });
  if (!user) {
    res.status(StatusCode.Content_Length_header_is_missing).json({
      message: "User not found, error should ideally not happen",
    });
    return;
  }
  res.status(StatusCode.OK).json({
    username: user.username,
    content: content,
  });
});

export { shareRoute };
