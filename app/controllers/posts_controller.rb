class PostsController < ApplicationController
  def index
    # とりあえずCRUDまわりは最初適当に書きます
    @posts = Post.all
  end

  def new
    @post = Post.new
  end

  def show
  end

  def edit
    @post = Post.find(params[:id])
  end

  def create
    @post = Post.new(post_params)
    if @post.save
      redirect_to posts_path
    else
      flash :danger
    end
  end

  def update
    @post = Post.all
    if @post.update(update_post_params)
      redirect_to posts_path(nonclear: true)
    else
      render :edit
    end
  end

  def destroy
    @post.destroy
  end

  private
  def post_params
    params.require(:post).permit(:title, :author, :article)
  end

  def update_post_params
    params.require(:post).permit(:title, :author, :article)
  end



end
