import Statistic from "../DataBase/Models/statisticModel";

export default  async function deposit(provider,sum){
    console.log(`in deposit is ${provider} with sum of ${sum} `);
    const newMove = await Statistic.create(provider,sum)


}