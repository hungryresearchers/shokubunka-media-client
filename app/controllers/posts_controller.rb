class PostsController < ApplicationController
  load_and_authorize_resource
  skip_load_and_authorize_resource only: %i[index show]

  def index
    # とりあえずCRUDまわりは最初適当に書きます
    @posts = Post.all.order('created_at desc')
  end

  def new
    @post = Post.new
  end

  def show
    @post = Post.find(params[:id])
  end

  def edit
    @post = Post.find(params[:id])
  end

  def create
    @post = Post.new(post_params)
    if @post.save
      redirect_to posts_path
    else
      render :new
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
    @post = Post.find(params[:id])
    @post.destroy
    redirect_to posts_path(nonclear: true)
  end

  private

  def post_params
    params.require(:post).permit(
      :image,
      :title,
      :author,
      :article,
      :shop_tel,
      :price_min,
      :price_max,
      :shop_locate_url,
      :business_hours
    )
  end

  def update_post_params
    params.require(:post).permit(
      :image,
      :title,
      :author,
      :article,
      :shop_tel,
      :price_min,
      :price_max,
      :shop_locate_url,
      :business_hours
    )
  end



end
