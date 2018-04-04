class CreatePost < ActiveRecord::Migration[5.1]
  def change
    create_table :posts do |t|
      t.string :title, null: false
      t.string :writer, null: false
      t.text   :article, null: false
      t.timestamps
    end
  end
end
