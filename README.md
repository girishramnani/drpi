# Data reporting using raspberry pi

This web app uses socket.io to show the real time values of sensors connect to a raspberry pi.


## HOW TO

```
npm install
nodejs index.js
```

<br>
NOTE :- The server is running on `8000` and the socket.io is listening on `8001`.
also dont forget to change the ip address from `my ip` to urs in the `index.html`


## TODO

- [X] Basic support for light sensor
- [X] Basic support for temperature sensor
- [ ] Android app 
- [ ] Use of visualization tools like freeboard or graphana to show graphs
- [ ] Better ui
- [ ] support for controlling the raspberry pi sensors parameters ( such as minimum threshold )
- [ ] Notification system ( email and message ) when certain user defined events occur

