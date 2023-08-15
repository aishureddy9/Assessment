# Project Title

React Map Interface for Visualizing the Geographic Data

## Overview

This application contains a React component that displays a map with markers using the [react-map-gl] library. It fetches marker data from an API and displays them on the map, with popups providing additional information about each location.

## Prerequisites

* Node.js and npm installed on your machine.
  ```
  npm install
  ```

## Features

* Displays geographical data as markers on a dynamic map using the 'react-map-gl' library.
* Render an interactive map using the react-map-gl library.
* Utilizing the Axios to retrieve geographic data from remote API.
* Displayed markers on the map for each geographic location.
* Show popups with information when markers are clicked.
* Enabled various controls such as Navigation, Scale, Geolocation, and Fullscreen controls.

##### Marker Customization

The `Pin` component takes two props: `type` and `size`. The `type` prop specifies the marker type, and the `size` prop specifies the size of the marker. The color of the marker is determined by the `colorEnum` object based on the `type` prop.


## Configuration and Execution
* Obtained the Mapbox Access Token from the Mapbox account dashboard.
* Replace "YOUR_MAPBOX_ACCESS_TOKEN" in the MapComponent.js file with our Mapbox access token.
* Adjusted the 'api_url' to point to the API endpoint which is provided with geographical data
*After rendering the MapComponent 
run the react application
Rename the `.env.example` file to `.env` and provide the Mapbox access token.
```   
npm install                        // install all the necessary node modules
npm run start                     //starts the development server
```
open another terminal and navigate to backend  
```
nodemon server.js
```
open the browser and navigate to localhost:8080 to see the component in action.


## API Integration
Fetching the location data from a remote API using Axios and displays markers on the map. The API integration is handled using Express on the backend. 
*The frontend component initiates a request to the backend API endpoint to fetch location data.
*The Express server fetches location data from API using Axios and returns it to the front.
*front end processes the received data and displays markers on the map.

## Dependencies
React and React DOM: used to create and render the map component and other UI elements. 
react-map-gl: A react wrapper for Mapbox GL JS, used for displaying interactive maps. 
Axios: A promise-based HTTP client for making API requests.
Express: A web framework for node.js used for building the API server.
CORS: A package that provides support for express applications

## 
```
git init                             // create a new repo
git clone repo                      // create a copy of remote repo
git status                         // check the status
git add .                         // add all changes to the file
git commit -m 'code changes      // commit changes
git push 
```


### Deploying the application to an EC2 instance
generated an ssh key in the local machine
```
ssh -i keygen  
```
connected to the EC2 server
```
ssh -i path/of/key.pem ec2-username@instance-public-ip
```
install the essential packages and dependencies
```
sudo apt install nodejs
sudo apt update
sudo npm install                       
```
Setup a Systemd service to manage react application
```
sudo systemctl start/stop/status my-frontend.service                           
path : /etc/systemd/system/frontend.service
[Unit]
Description=My React Frontend Service
After=syslog.target
 
[Service]
User=your_username
WorkingDirectory=/path/to/your/frontend
ExecStart=/usr/bin/npm start
Restart=always
RestartSec=10
 
[Install]
WantedBy=multi-user.target
```

set-up reverse proxy nginx server to revert the port:3000 to port:8080
```
sudo systemctl start/stop/status nginx
path: /etc/nginx/sites-available/map
sudo ln -s /etc/nginx/sites-available/myapp /etc/nginx/sites-enabled/        //Link configuration 
sudo nginx -t                                            //test nginx command

server {
  listen 8080;
  server_name 3.328...... (IP address);

  location / {
    proxy_pass http://localhost:3000/;
  }
}
``````
Access the application at https:EC2_ip_address:8080
