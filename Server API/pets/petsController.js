import {PetsDataLayer} from './petsDatalayer.js'

const dataLayer = new PetsDataLayer();

export const getPets = async (req, res) => {
    try {
    const data = await dataLayer.getPets();
    console.log(data);
    res.json({status: '200', data})
   
    }
    catch (err) {
        res.status(400).json({status: "error", message: err.message});
    }
}