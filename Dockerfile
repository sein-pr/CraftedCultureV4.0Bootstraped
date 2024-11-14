# Use the official Nginx image as the base image
FROM nginx:alpine

# Set the working directory
WORKDIR /usr/share/nginx/html

# Copy all files and folders from the current directory into the Nginx directory
COPY . /usr/share/nginx/html

# Expose port 80 to be able to access the app
EXPOSE 80

# Nginx will automatically start and serve files from /usr/share/nginx/html
# No CMD or ENTRYPOINT is required because Nginx is the default command
