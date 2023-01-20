SETUP EC2 INSTANCES ENVIRONMENT

1. Connect to new Created Instances
2. sudo apt-get update - this will update upto now in ubuntu server
3. After update Close console
4. Once again connect to instance
5. Get a message in terminal All the update are getting successfully
6. sudo apt-get install curl - this will helps to setup node js environment
7. curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
8. This is the command install node js inside ubuntu server
9. sudo apt-get install -y nodejs -to get nodejs and npm with that
10. Check installed node and npm using node -v and npm -v
11. sudo apt-get install nginx -y -If you want to setup using nginx environment then install
that also
12. Check installed nginx version using nginx -v
13. After all installation go to html folder using cd /var/www/html/
14. Check folders or other list using command ls
15. Go to your EC2 instances Dashboard and go to security group and click security group
link
16. Inside it click Edit inbound Rules
17. Add rule click and set type as HTTP and select source as Anywhere custom ip4 and click
save rules
18. After doing all this stuff then get instances public ip address and open it with new tab
and it will show nginx welcome template

Install React And Run forever
1. npx create-react-app reactHosting create react application with your given any
name
2. cd reactHosting navigate to created application inside /var/www/html folder
3. Before start application you must go to your instances security group again and
setup inbound rules
4. Inside security group clickAdd rule and set type as Custome TCP and give port
as 3000 and add another rule with custom TCP with port 8080(To nodejs port)
and select source as Anywhere custom ip4
5. Then inside reactHosting give command npm start to start project with port 3000
6. To start Forever run inside react install pm2 globally npm install pm2 -g
7. navigate to the project folder and execute, space is required after –
pm2 start npm -- start
8. to see running instances pm2 ps
9. This is the react forever run..


NODE JS FOREVER START
1. Go to cd /var/www/html/ and clone node js project
2. git clone https://github.com/xyz.git
3. cd nodejsHosting
4. remove current node_modules using rm -rf node_modules
5. install it again npm install
6. npm start(Running on port 8080)
7. Stop ctrl + c or cmd + c
8. Install Globally pm2
9. Install globally npm install forever -g
10. Go to your project folder
11. forever start --minUptime 1000 --spinSleepTime 1000 index.js
