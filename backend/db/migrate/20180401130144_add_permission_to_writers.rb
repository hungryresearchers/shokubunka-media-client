class AddPermissionToWriters < ActiveRecord::Migration[5.1]
  #
  # ユーザーの権限管理用カラム 記事作成周りの権限管理
  # 0 => 権限なし
  # 1 => CRUD
  # 2 => admin
  #
  def change
    add_column :writers, :permission, :integer, default: 0
  end
end
