
import { CreationAttributes, Model } from "sequelize";
import CrudRepo from "../repository/curd.repo";
import { BadRequestError } from "../utils/errors/app.error";

class CrudService<T extends Model> {
    private repo: CrudRepo<T>;

    constructor(repo: CrudRepo<T>) {
        this.repo = repo;
    }

    async createService(data: CreationAttributes<T>): Promise<T> {
        try {
            const res = await this.repo.create(data);
            return res;
        } catch (error) {
            console.error("Something went wrong in service level (create)", error);
            throw  BadRequestError;
        }
    }

    async updateService(id: number, data: Partial<CreationAttributes<T>>): Promise<T | null> {
    try {
        const res = await this.repo.update(id, data);
        return res;
    } catch (error) {
        console.error("Something went wrong in service level (update)", error);
        throw error;
    }
}

    async deleteService(id: number): Promise<number> {
        try {
            const res = await this.repo.delete(id);
            return res;
        } catch (error) {
            console.error("Something went wrong in service level (delete)", error);
            throw error;
        }
    }

    

    async getAllService(
        page: number = 1,
        limit: number = 10,
        filters: { status?: string; search?: string } = {}
    ): Promise<{ rows: T[], count: number }> {
        try {
            const res = await this.repo.getAll(page, limit, filters);
            return res;
        } catch (error) {
            console.error("Something went wrong in service level (getAll)", error);
            throw error;
        }
    }

    async getByIdService(id: number): Promise<T | null> {
        try {
            const res = await this.repo.getById(id);
            return res;
        } catch (error) {
            console.error("Something went wrong in service level (getById)", error);
            throw error;
        }
    }
}

export default CrudService;