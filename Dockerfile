FROM ruby:2.5

RUN apt-get update -qq && apt-get install -y build-essential libpq-dev nodejs
RUN mkdir /app
WORKDIR /app

COPY Gemfile* /tmp/
WORKDIR /tmp
RUN bundle install

COPY . /app
WORKDIR /app

#CMD ["tail", "-f", "/dev/null"]
