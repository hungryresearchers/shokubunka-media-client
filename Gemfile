source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end


gem 'rails', '~> 5.1.4'
gem 'mysql2', '~> 0.3.20'
gem 'puma', '~> 3.7'
gem 'sass-rails', '~> 5.0'
gem 'uglifier', '>= 1.3.0'
gem 'coffee-rails', '~> 4.2'
gem 'turbolinks', '~> 5'
gem 'jbuilder', '~> 2.5'
gem 'cancancan'
gem 'slim-rails'
gem 'devise'
gem 'babel-transpiler'
gem 'annotate'
gem 'activeadmin'
gem 'draper'
gem 'bootstrap-sass'
gem 'pundit'
gem 'simple_form'

group :development, :test do
  gem 'pry-byebug'
  gem 'letter_opener'
  gem 'better_errors'
  gem 'binding_of_caller'
  gem 'capybara', '~> 2.13'
  gem 'selenium-webdriver'
end

group :development do
  gem 'web-console', '>= 3.3.0'
  gem 'listen', '>= 3.0.5', '< 3.2'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
gem 'therubyracer'
gem 'carrierwave'
gem 'mini_magick'
