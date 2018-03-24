class AddColumnToPosts < ActiveRecord::Migration[5.1]
  def change
    add_column :posts, :shop_tel,:integer
    add_column :posts, :price_min, :integer
    add_column :posts, :price_max, :integer
    add_column :posts, :shop_locate_url, :string
    add_column :posts, :business_hours, :string
  end
end
