import axios from 'axios';

export const getHoroscopeData = async (req,res) => {
    try {
        const data = req.body;
        const response = await axios.post("https://newastro.vercel.app/", data,{
            headers: {
                'Content-Type': 'application/json',
            }
        });
        console.log(response.data);
        res.status(200).json(response.data);
    } catch (error) {
        //res.status(500).json({message: error.message});
        console.error("API Request Failed:", error.response ? error.response.data : error.message);

        res.status(error.response?.status || 500).json({
            message: "Error calling external API",
            error: error.response?.data || "No additional details",
        });
    }
}