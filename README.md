<h1>Climate Data Management System</h1>
<p>This project is a proof of concept (POC) for managing climate data. It provides endpoints for saving, retrieving, and calculating climate data deltas for different climate conditions and areas. The system uses Node.js and MongoDB for data storage.</p>
<h2>Postman Document</h2>
<p>This Is the Example of API Call <a href="https://documenter.getpostman.com/view/19679591/2s9YC7UXkC">Click Here</a></p>
<h2>Getting Started</h2>
<p>Follow the instructions below to set up and run the climate data management system on your local machine.</p>
<h3>Prerequisites</h3>
<ul>
   <li><strong>Node.js:</strong> Download and install Node.js from <a href="https://nodejs.org/">https://nodejs.org/</a>.</li>
    <li><strong>MongoDB:</strong> Download and install MongoDB from <a href="https://www.mongodb.com/try/download/community">https://www.mongodb.com/try/download/community</a>.</li>
</ul>
<h3>Installation</h3>
<ol>
    <li>Clone this repository to your local machine:</li>
</ol>
<pre><code>git clone https://github.com/Anishkumardiwan/climate_data_managment_system;</code></pre>
<ol start="2">
    <li>Navigate to the project directory:</li>
</ol>
<pre><code>cd climate_data_management_system</code></pre>
<ol start="3">
    <li>Install the project dependencies:</li>
</ol>
<pre><code>npm install</code></pre>
<ol start="4">
    <li>Start the server. You can usually do this by running:</li>
</ol>
<pre><code>npm start</code></pre>
<ol start="4">
    <li>Add .env file and Declare the variable:</li>
</ol>
<pre><code>PORT</code></pre>
<pre><code>MONGODBURL</code></pre>
<p>The server will start and listen on port 5000 or Decleare the process.env.PORT in .env file.</p>
<h2>Usage</h2>
<h3>Saving Climate Data</h3>
<p>To save climate data, make a POST request to the <code>/api/climate</code> endpoint with the following payload:</p>
<pre><code>{
  "climate": "hot",
  "area_code": 111,
  "temperature": 25,
  "humidity": 88,
  "chances_of_rain": 40
}</code></pre>
<h3>Fetching All Saved Records</h3>
<p>To fetch all saved climate records, make a GET request to the <code>/api/climate</code> endpoint.</p>
<h3>Fetching Records of a Particular Area</h3>
<p>To fetch climate records for a specific area, make a GET request to the <code>/api/climate/:areaCode</code>
        endpoint, where <code>:areaCode</code> should be replaced with the desired area code.</p>
<h3>Fetching Records of a Particular Climate in an Area</h3>
<p>To fetch climate records for a specific climate in a particular area, make a GET request to the <code>/api/climate/:areaCode/:climate</code>
        endpoint, where <code>:areaCode</code> is the area code, and <code>:climate</code> is one of the climate types (hot,
        humid, rainy, or cold).</p>
<h3>Calculating Climate Data Delta</h3>
<p>To calculate climate data delta, make a POST request to the <code>/api/climate/delta</code> endpoint with the following payload:</p>
<pre><code>{
  "from_climate": "hot",
  "to_climate": "cold",
  "area_code": 111
}</code></pre>
<h2>Response Format</h2>
<p>The API returns responses in JSON format with the following structure:</p>
<pre><code>{
  "success": true/false,
  "error": "If success is false, this will be set, else it will be null and its value would be the reason why the saving of data failed",
  "data": {
    // Data or result here
  }
}</code></pre>
<h2>Error Handling</h2>
<p>Proper error handling is implemented in the endpoints to handle various scenarios, including validation errors and data not found errors.</p>
<h2>Contributing</h2>
<p>Contributions are welcome! If you'd like to contribute to this project, please open an issue or submit a pull request.</p>
<h2>License</h2>
<p>This project is licensed under the MIT License - see the <a href="LICENSE">LICENSE</a> file for details.</p>


