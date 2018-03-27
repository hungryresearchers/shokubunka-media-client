class WelcomeController < ApplicationController
  def index
    # とりあえずCRUDまわりは最初適当に書きます
    @posts = Post.all
  end

  def show
    
  end

  def article
    if Post.find(params[:id]).present?
      @post = Post.find(params[:id])
    else
      redirect_to :index
      flash[:danger]
    end
  end
end
