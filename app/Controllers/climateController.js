const { join } = require('path');
const Climate = require(join(__dirname, '../Models/climateModel'));

// Endpoint to save climate data
exports.saveClimateData = async (req, res) => {
    try {
        const { climate, areaCode, temperature, humidity, chancesOfRain } = req.body;

        const newClimate = new Climate({
            climate,
            areaCode,
            temperature,
            humidity,
            chancesOfRain,
        });

        const savedClimate = await newClimate.save();

        res.json({
            success: true,
            error: null,
            data: {
                id: savedClimate._id,
            },
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message,
            data: null,
        });
    }
}

// Endpoint to fetch all saved records
exports.fetchAllRecords = async (req, res) => {
    try {
        const allClimateData = await Climate.find();
        res.json({
            success: true,
            error: null,
            data: allClimateData,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message,
            data: null,
        });
    }
}

// Endpoint to fetch records of a particular area
exports.fetchParticularData = async (req, res) => {
    const { areaCode } = req.params;
    try {
        const climateDataByArea = await Climate.findOne({ areaCode: Number(areaCode) });
        res.json({
            success: true,
            error: null,
            data: climateDataByArea,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message,
            data: null,
        });
    }
}

// Endpoint to fetch records of a particular climate of a particular area
exports.perticularClimateFoePerticularArea = async (req, res) => {
    const { areaCode, climate } = req.params;
    try {
        const climateDataByAreaAndClimate = await Climate.find({ areaCode: Number(areaCode), climate });
        res.json({
            success: true,
            error: null,
            data: climateDataByAreaAndClimate,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message,
            data: null,
        });
    }
}

// Endpoint to calculate climate data delta
exports.calculateClimateDataDelta = async (req, res) => {
    const { from_climate, to_climate, area_code } = req.body;
    try {
        const fromClimateData = await Climate.find({ areaCode: area_code, climate: from_climate });
        const toClimateData = await Climate.find({ areaCode: area_code, climate: to_climate });

        if (fromClimateData.length === 0 || toClimateData.length === 0) {
            return res.status(404).json({
                success: false,
                error: 'Data not found for specified climate and area',
                data: null,
            });
        }

        const temperatureDelta = calculateAverageDelta(fromClimateData, toClimateData, 'temperature');
        const humidityDelta = calculateAverageDelta(fromClimateData, toClimateData, 'humidity');
        const rainChancesDelta = calculateAverageDelta(fromClimateData, toClimateData, 'chancesOfRain');
        const climateChangeIndex = (temperatureDelta * humidityDelta) / rainChancesDelta;

        res.json({
            climate_delta: `${from_climate} -> ${to_climate}`,
            temperature_delta: temperatureDelta,
            humidity_delta: humidityDelta,
            rain_chances_delta: rainChancesDelta,
            climate_change_index: climateChangeIndex,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message,
            data: null,
        });
    }
}

// Function to calculate the average delta
const calculateAverageDelta = (fromData, toData, field) => {
    const fromSum = fromData.reduce((sum, record) => sum + record[field], 0);
    const toSum = toData.reduce((sum, record) => sum + record[field], 0);
    const numberOfRecords = Math.max(fromData.length, toData.length);

    return (toSum - fromSum) / numberOfRecords;
}