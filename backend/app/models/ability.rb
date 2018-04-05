class Ability
  include CanCan::Ability

  def initialize(user)
    alias_action :create, :read, :update, :destroy, to: :crud

    user ||= Writer.new()
    can :read, Post
    return if user.blank?

    can :manage, :all if user.class == AdminUser

    # Define permission of Writer
    if user.class == Writer
      can :manage, :all if user.admin?
      can :read, Post if user.nothing?
      can :crud, Post if user.writer?
    end
  end
end
