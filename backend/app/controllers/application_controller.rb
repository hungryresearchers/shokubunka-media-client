class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def current_ability
    @current_ability ||= current_admin_user.blank? ? Ability.new(current_writer) : Ability.new(current_admin_user)
  end
end
