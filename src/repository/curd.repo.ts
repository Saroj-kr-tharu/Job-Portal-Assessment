import { CreationAttributes, Model, ModelStatic, UpdateOptions } from "sequelize";

class CrudRepo<T extends Model> {
  private model: ModelStatic<T>;

  constructor(model: ModelStatic<T>) {
    this.model = model;
  }

  async getAll(page: number = 1, limit: number = 10): Promise<{ rows: T[], count: number }> {
    try {
        const offset = (page - 1) * limit;
        const res = await this.model.findAndCountAll({
            limit,
            offset,
            order: [['createdAt', 'DESC']],
        });
        return res;
    } catch (error) {
        console.error("Something went wrong in Repo level (getAll)", error);
        throw error;
    }
}

  async create(data: CreationAttributes<T>): Promise<T> {
    try {
      console.log("data => ", data)
      const res = await this.model.create(data);
      return res;
    } catch (error) {
      console.log("Something went wrong in Repo level (create)");
      throw error;
    }
  }

  async update(id: number, data: Partial<CreationAttributes<T>>): Promise<T | null> {
    try {
        const [affectedCount, updatedRows] = await this.model.update(data as any, {
            where: { id } as UpdateOptions["where"],
            returning: true,  
        });

        if (affectedCount === 0) return null;

        return updatedRows[0];  
    } catch (error) {
        console.error("Something went wrong in Repo level (update)");
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

  async getAllWithOutPagination(): Promise<T[]> {
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