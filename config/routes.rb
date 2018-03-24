Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  devise_for :writers, only: [:sign_in, :sign_out, :session]
  ActiveAdmin.routes(self)
  root to: 'posts#index'

  resources :posts
end
