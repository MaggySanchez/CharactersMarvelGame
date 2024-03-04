import { CountryModel } from "../models/country"

abstract class CountryController {

    static async country(){

        let result = CountryModel.getCountry()


    }

    static async countryById(){

        let result = CountryModel.getCountryById()

    }


}

export { CountryController }