echo "CREATE DATABASE IF NOT EXISTS hungry_searchers_test;" | "${mysql[@]}"
echo "GRANT ALL ON hungry_searchers_test.* TO '"$MYSQL_USER"'@'%' ;" | "${mysql[@]}"
echo 'FLUSH PRIVILEGES;' | "${mysql[@]}"
