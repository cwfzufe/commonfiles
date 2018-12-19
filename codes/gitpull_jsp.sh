#! /bin/bash
cd /var/www/html/homework

echo "Start cron job for gitpull on"  $(date) >> /tmp/gitpull.log

cd ~/Desktop/2018jsp-homework/1001 && git pull
cd ~/Desktop/2018jsp-homework/1002 && git pull
cd ~/Desktop/2018jsp-homework/150120400215 && git pull
cd ~/Desktop/2018jsp-homework/160104100111 && git pull
cd ~/Desktop/2018jsp-homework/160104100140 && git pull
cd ~/Desktop/2018jsp-homework/160104100229 && git pull
cd ~/Desktop/2018jsp-homework/160104100235 && git pull
cd ~/Desktop/2018jsp-homework/170104130103 && git pull
cd ~/Desktop/2018jsp-homework/170104130104 && git pull
cd ~/Desktop/2018jsp-homework/170104130112 && git pull
cd ~/Desktop/2018jsp-homework/170104130113 && git pull
cd ~/Desktop/2018jsp-homework/170104130114 && git pull
cd ~/Desktop/2018jsp-homework/170104130115 && git pull
cd ~/Desktop/2018jsp-homework/170104130116 && git pull
cd ~/Desktop/2018jsp-homework/170104130120 && git pull
cd ~/Desktop/2018jsp-homework/170104130122 && git pull
cd ~/Desktop/2018jsp-homework/170104130128 && git pull
cd ~/Desktop/2018jsp-homework/170104130130 && git pull
cd ~/Desktop/2018jsp-homework/170104130131 && git pull
cd ~/Desktop/2018jsp-homework/170104130134 && git pull
cd ~/Desktop/2018jsp-homework/170104130140 && git pull
