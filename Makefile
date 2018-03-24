init:
	bundle install

serve:
	bundle exec middleman server

build:
	bundle exec middleman build

deploy:
	bundle exec middleman build
	cd build && \
		git add . && \
		git commit -m "Site updated at `date`" && \
		git push origin master && \
		echo "Successfully built and pushed to GitHub."
