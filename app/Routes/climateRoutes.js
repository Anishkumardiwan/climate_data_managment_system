const express = require('express');
const { join } = require('path');
const climateController = require(join(__dirname, '../Controllers/climateController'));
const app = express();

// Endpoint to fetch records of a particular climate of a particular area
app.get('/api/climate/:areaCode/:climate', climateController.perticularClimateFoePerticularArea);

// Endpoint to fetch records of a particular area
app.get('/api/climate/:areaCode', climateController.fetchParticularData);

// Endpoint to calculate climate data delta
app.post('/api/climate/delta', climateController.calculateClimateDataDelta)

// Endpoint to save climate data
app.post('/api/climate', climateController.saveClimateData);

// Endpoint to fetch all saved records
app.get('/api/climate', climateController.fetchAllRecords);


module.exports = app;