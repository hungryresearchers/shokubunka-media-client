Rails.application.routes.draw do
  mount Ckeditor::Engine => '/ckeditor'
  devise_for :admin_users, ActiveAdmin::Devise.config
  devise_for :writers, only: [:sign_in, :sign_out, :session]
  ActiveAdmin.routes(self)
  root to: 'welcome#index'

  resources :posts
  resources :welcome, only: [:index]
  get 'welcome/article' => 'welcome#article'
end
