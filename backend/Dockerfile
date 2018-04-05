FROM ruby:2.5

RUN apt-get update -qq && apt-get install -y build-essential libpq-dev nodejs
RUN apt-get -q -y install mysql-client
RUN mkdir /app

COPY Gemfile* /tmp/
WORKDIR /tmp
RUN bundle install

ADD . /app
WORKDIR /app

#CMD ["tail", "-f", "/dev/null"] hungry_appが異常終了した際のデバック用
