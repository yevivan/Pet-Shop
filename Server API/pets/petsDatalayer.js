import { PetsModel } from "./petsModel.js";

export class PetsDataLayer {
  async getPets() {
    try {
      const pets = await PetsModel.find({});
      return pets;
    } catch (err) {
      throw err;
    }
  }
}
