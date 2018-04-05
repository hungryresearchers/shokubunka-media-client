require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Blog
  class Application < Rails::Application
    config.load_defaults 5.1
    config.generators.template_engine = :slim  
    # i18n path
    config.i18n.load_path += Dir[Rails.root.join('config', 'locales', '**', '*.{rb,yml}').to_s]

    # custom valitators path
    # @see http://qiita.com/joooee0000/items/3ab0f3d791e0d0beb639
    config.paths.add 'app/validators', eager_load: true

    # デフォルトのロケーションを日本語に設定
    config.i18n.default_locale = :ja
    # Timezone を日本時間に設定
    config.time_zone = 'Tokyo'
  end
end
