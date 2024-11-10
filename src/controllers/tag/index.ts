import { Request, Response } from "express";
import { formatResponse } from "../../utils/formatResponse";
import STag from "../../services/tag";

export const getAllTags = async (req: Request, res: Response) => {
  try {
    const tags = await STag.findAll();
    res.json(formatResponse(200, "Success", tags));
  } catch (error: any) {
    res.status(500).json({ error: "Failed to retrieve tags" });
  }
};

export const getTagById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const tags = await STag.findById(id);
    if (!tags) {
      res.status(404).json({ error: "Article not found" });
      return;
    }
    res.json(formatResponse(200, "Success", tags));
  } catch (error: any) {
    res.status(500).json({ error: "Failed to retrieve tags" });
  }
};

export const createTag = async (req: Request, res: Response) => {
  try {
    const newTag = await STag.create(req.body);
    res.json(formatResponse(201, "Success", newTag));
  } catch (error: any) {
    res.status(500).json({ error: "Failed to create tag" });
  }
};

export const updateTag = async (req: Request, res: Response) => {
  try {
    const { id } = req.body;
    const updatedTag = await STag.update(id, req.body);
    if (!updatedTag) {
      res.status(404).json({ error: "Tag not found" });
      return;
    }
    res.json(formatResponse(200, "Success", updatedTag));
  } catch (error: any) {
    res.status(500).json({ error: "Failed to update tag" });
  }
};

export const deleteTag = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletedTag = await STag.remove(id);
    if (!deletedTag) {
      res.status(404).json({ error: "Tag not found" });
      return;
    }
    res.json(formatResponse(200, "Success", deletedTag));
  } catch (error: any) {
    res.status(500).json({ error: "Failed to delete tag" });
  }
};
