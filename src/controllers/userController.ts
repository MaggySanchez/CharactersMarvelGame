import { UserModel } from "../models/user";

abstract class UserController{

    static async create(){


        let result = UserModel.createUser()


    }

}

export { UserController }