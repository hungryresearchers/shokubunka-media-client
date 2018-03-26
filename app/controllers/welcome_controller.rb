class WelcomeController < ApplicationController
  def index
    # とりあえずCRUDまわりは最初適当に書きます
    @posts = Post.all
  end

  def article
    @post = Post.find(1)
  end
end
