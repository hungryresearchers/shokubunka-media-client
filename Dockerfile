FROM ruby:2.5

RUN apt-get update -qq && apt-get install -y build-essential libpq-dev nodejs
RUN mkdir /app
WORKDIR /app
# Using cache
COPY Gemfile /app/Gemfile
COPY Gemfile.lock /app/Gemfile.lock

COPY . /app
RUN rm -f /tmp/pids/server.pid
RUN bundle install --path vendor/bundle

CMD ["bundle", "exec", "rails", "s", "-p", "3000", "-b", "0.0.0.0"]

#CMD ["tail", "-f", "/dev/null"] Debug用
