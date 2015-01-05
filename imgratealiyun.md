
jdk install ..

rpm -qa | grep jdk
delete default jdk package
 rpm -e  jdk....
jdk invironment setting
ln -s /opt/profile.d/jdk.sh /etc/profile.d/jdk.sh


mysql install  imgration

1.  create symbol link  /usr/local/mysql to /opt/dev/mariadb
 ln -s /opt/dev/mariadb-5.5.38-linux-x86_64/ /usr/local/mysql

2. user and group add
groupadd mysql
useradd -g mysql mysql
cd  /usr/local/mysql
chown -R root .
chown -R mysql data


 3. cp  mysql  shell to /etc/init.d  for  start and shutdown server
 cp /usr/local/mysql/support-files/mysql.server /etc/init.d/mysql

4. if        /etc/my.cnf file exist, and delete it
rm -rf /etc/my.cnf

5. environment variable setting
ln -s /opt/profile.d/mysql.sh /etc/profile.d/mysql.sh

 6.start and stop
 service mysql start|status|stop


httpd imigration install

(1) install rpms
rpm -Uvh *.rpm
rpm dependence list
   1:apr                    ########################################### [ 17%]
   2:apr-util               ########################################### [ 33%]
   3:apr-util-ldap          ########################################### [ 50%]
   4:openssl                ########################################### [ 67%]
   5:httpd-tools            ########################################### [ 83%]
   6:httpd 

(2) configurations
modify the configuration 
vi /etc/httpd/conf/httpd.conf

StartServers       3
MinSpareServers    2
MaxSpareServers   5

Listen 9999

DocumentRoot "/opt/dev/files"


nginx imigration 
1.  ln -s /lib64/libpcre.so.0.0.1 /lib64/libpcre.so.1
2. /opt/dev/nginx/sbin/nginx 

