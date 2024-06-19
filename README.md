# ecommerce-backend


## To start your app 

1. Create a `.env` file in the workspace root containing `MONGO_URI`,`JWT_SECRET` and `PORT` env vars.

2. You can find the URI in your MongoDB Atlas dashboard under the "Connect" tab of your cluster. It typically looks like this:
    - `mongodb+srv://<username>:<password>@<cluster-url>/<database-name>?retryWrites=true&w=majority`

    - Replace `<username>`, `<password>`, `<cluster-url>`, and `<database-name>` with your actual MongoDB Atlas credentials.

3. Once you've replaced the placeholder with your MongoDB Atlas URI, you can start your app by running:
    - npm start

