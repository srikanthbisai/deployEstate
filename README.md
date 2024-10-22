 The Backend is deployed on Render.
 The render turns down the server when not in use, so have set up a cron job every 6 minutes. It might take a while to start the server. 
 It will start when we hit the request from the frontend or if bychance the cron job has activated the server just before the request.
