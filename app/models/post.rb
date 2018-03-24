# == Schema Information
#
# Table name: posts
#
#  id              :integer          not null, primary key
#  title           :string(255)      not null
#  author          :string(255)      not null
#  article         :text(65535)      not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  shop_tel        :integer
#  price_min       :integer
#  price_max       :integer
#  shop_locate_url :string(255)
#  business_hours  :string(255)
#

class Post < ApplicationRecord

  validates :title,
            presence: true,
            uniqueness: true
  validates :author,
            presence: true
  validates :article,
            presence: true
end
