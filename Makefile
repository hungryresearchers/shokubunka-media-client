start:
	docker-sync-stack start
start-app:
	docker-sync start
	docker run --service-ports app
clean:
	docker stop $$(docker ps -a -q)
	docker volume prune
build:
	docker-compose build
rebuild:
	docker-compose build --force-rm --no-cache
clean-rebuild:
	make clean
	make rebuild
enter-app:
	docker exec -it hungry_app bash
enter-db:
	docker exec -it hungry_db bash
