import { CreationAttributes, Model, ModelStatic, UpdateOptions } from "sequelize";

class CrudRepo<T extends Model> {
  private model: ModelStatic<T>;

  constructor(model: ModelStatic<T>) {
    this.model = model;
  }

  async create(data: CreationAttributes<T>): Promise<T> {
    try {
      const res = await this.model.create(data);
      return res;
    } catch (error) {
      console.log("Something went wrong in Repo level (create)");
      throw error;
    }
  }

  async update(id: number, data: Partial<CreationAttributes<T>>): Promise<[number]> {
    try {
      const res = await this.model.update(data as any, {
        where: { id } as UpdateOptions["where"],
      });
      return res;
    } catch (error) {
      console.log("Something went wrong in Repo level (update)");
      throw error;
    }
  }

  async delete(id: number): Promise<number> {
    try {
      console.log("id => ", id);
      const res = await this.model.destroy({
        where: { id } as UpdateOptions["where"],
      });
      return res;
    } catch (error) {
      console.log("Something went wrong in Repo level (delete)");
      throw error;
    }
  }

  async getAll(): Promise<T[]> {
    try {
      const res = await this.model.findAll();
      return res;
    } catch (error) {
      console.log("Something went wrong in Repo level (getAll)");
      throw error;
    }
  }

  async getById(id: number): Promise<T | null> {
    try {
      const res = await this.model.findOne({
        where: { id } as UpdateOptions["where"],
      });
      return res;
    } catch (error) {
      console.log("Something went wrong in Repo level (getById)");
      throw error;
    }
  }
}

export default CrudRepo;