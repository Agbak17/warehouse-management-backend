import {
  getAllLocations,
  createLocation as repoCreateLocation,
} from "../db/locationRepo.js";

export const getLocations = async (req, res) => {
  try {
    const locations = await getAllLocations();
    res.json(locations);
  } catch (err) {
    console.error("getLocations error:", err);
    res.status(500).json({ error: "Failed to fetch locations" });
  }
};

export const createLocation = async (req, res) => {
  try {
    const { name, locationType } = req.body;

    if (!name || !locationType) {
      return res
        .status(400)
        .json({ error: "name and locationType are required" });
    }

    const location = await repoCreateLocation({ name, locationType });
    res.status(201).json(location);
  } catch (err) {
    console.error("createLocation error:", err);
    res.status(500).json({ error: "Failed to create location" });
  }
};
