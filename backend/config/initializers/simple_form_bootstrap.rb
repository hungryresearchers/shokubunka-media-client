# Use this setup block to configure all options available in SimpleForm.
SimpleForm.setup do |config|
  config.error_notification_class = 'alert alert-danger'
  config.button_class = nil
  config.boolean_label_class = 'checkbox'

  config.wrappers :vertical_form, tag: 'div', class: 'form-group', error_class: 'has-error' do |b|
    b.use :html5
    b.use :placeholder
    b.optional :maxlength
    b.optional :pattern
    b.optional :min_max
    b.optional :readonly
    b.use :label, class: 'control-label'

    b.use :input, class: 'form-control'
    b.use :full_error, wrap_with: {tag: 'span', class: 'help-block'}
    b.use :hint, wrap_with: {tag: 'p', class: 'help-block'}
  end

  config.wrappers :vertical_file_input, tag: 'div', class: 'form-group', error_class: 'has-error' do |b|
    b.use :html5
    b.use :placeholder
    b.optional :maxlength
    b.optional :readonly
    b.use :label, class: 'control-label'

    b.use :input
    b.use :full_error, wrap_with: {tag: 'span', class: 'help-block'}
    b.use :hint, wrap_with: {tag: 'p', class: 'help-block'}
  end

  config.wrappers :vertical_boolean, tag: 'div', class: 'form-group', error_class: 'has-error' do |b|
    b.use :html5
    b.optional :readonly

    b.wrapper tag: 'div', class: 'checkbox' do |ba|
      ba.use :label_input
    end

    b.use :full_error, wrap_with: {tag: 'span', class: 'help-block'}
    b.use :hint, wrap_with: {tag: 'p', class: 'help-block'}
  end

  config.wrappers :vertical_radio_and_checkboxes, tag: 'div', class: 'form-group', error_class: 'has-error' do |b|
    b.use :html5
    b.optional :readonly
    b.use :label, class: 'control-label'
    b.use :input
    b.use :full_error, wrap_with: {tag: 'span', class: 'help-block'}
    b.use :hint, wrap_with: {tag: 'p', class: 'help-block'}
  end

  config.wrappers :vertical_input_group, tag: 'div', class: 'form-group', error_class: 'has-error' do |b|
    b.use :html5
    b.use :placeholder
    b.use :label, class: 'control-label'

    b.wrapper tag: 'div' do |ba|
      ba.wrapper tag: 'div', class: 'input-group col-sm-12' do |append|
        append.use :input, class: 'form-control'
      end

      ba.use :full_error, wrap_with: {tag: 'span', class: 'help-block'}
      ba.use :hint, wrap_with: {tag: 'p', class: 'help-block'}
    end
  end

  config.wrappers :inline_form, tag: 'div', class: 'form-group', error_class: 'has-error' do |b|
    b.use :html5
    b.use :placeholder
    b.optional :maxlength
    b.optional :pattern
    b.optional :min_max
    b.optional :readonly
    b.use :label, class: 'sr-only'

    b.use :input, class: 'form-control'
    b.use :full_error, wrap_with: {tag: 'span', class: 'help-block'}
    b.use :hint, wrap_with: {tag: 'p', class: 'help-block'}
  end

  config.wrappers :multi_select, tag: 'div', class: 'form-group', error_class: 'has-error' do |b|
    b.use :html5
    b.optional :readonly
    b.use :label, class: 'control-label'

    b.wrapper tag: 'div', class: 'form-inline' do |ba|
      ba.use :input, class: 'form-control'
      ba.use :full_error, wrap_with: {tag: 'span', class: 'help-block'}
      ba.use :hint, wrap_with: {tag: 'p', class: 'help-block'}
    end
  end

  config.wrappers :horizontal_form, tag: 'div', class: 'form-group', error_class: 'has-error' do |b|
    b.use :html5
    b.use :placeholder
    b.optional :maxlength
    b.optional :pattern
    b.optional :min_max
    b.optional :readonly
    b.use :label, class: 'col-sm-3 col-md-3 col-lg-3 control-label'

    b.wrapper tag: 'div', class: 'col-sm-9 col-md-10 col-lg-8' do |ba|
      ba.use :input, class: 'form-control'
      ba.use :full_error, wrap_with: {tag: 'span', class: 'help-block'}
      ba.use :hint, wrap_with: {tag: 'p', class: 'help-block'}
    end
  end

  config.wrappers :horizontal_form_xs, tag: 'div', class: 'form-group', error_class: 'has-error' do |b|
    b.use :html5
    b.use :placeholder
    b.use :label, class: 'col-sm-3 col-md-3 col-lg-3 control-label'

    b.wrapper tag: 'div', class: 'col-sm-8 col-md-2 col-lg-1' do |ba|
      ba.use :input, class: 'form-control'
      ba.use :full_error, wrap_with: {tag: 'span', class: 'help-block'}
      ba.use :hint, wrap_with: {tag: 'p', class: 'help-block'}
    end
  end

  config.wrappers :horizontal_form_sm, tag: 'div', class: 'form-group', error_class: 'has-error' do |b|
    b.use :html5
    b.use :placeholder
    b.use :label, class: 'col-sm-3 col-md-3 col-lg-3 control-label'

    b.wrapper tag: 'div', class: 'col-sm-8 col-md-4 col-lg-3' do |ba|
      ba.use :input, class: 'form-control'
      ba.use :full_error, wrap_with: {tag: 'span', class: 'help-block'}
      ba.use :hint, wrap_with: {tag: 'p', class: 'help-block'}
    end
  end

  config.wrappers :horizontal_form_md, tag: 'div', class: 'form-group', error_class: 'has-error' do |b|
    b.use :html5
    b.use :placeholder
    b.use :label, class: 'col-sm-3 col-md-3 col-lg-3 control-label'

    b.wrapper tag: 'div', class: 'col-sm-8 col-md-6 col-lg-4' do |ba|
      ba.use :input, class: 'form-control'
      ba.use :full_error, wrap_with: {tag: 'span', class: 'help-block'}
      ba.use :hint, wrap_with: {tag: 'p', class: 'help-block'}
    end
  end

  config.wrappers :horizontal_file_input, tag: 'div', class: 'form-group', error_class: 'has-error' do |b|
    b.use :html5
    b.use :placeholder
    b.optional :maxlength
    b.optional :readonly
    b.use :label, class: 'col-sm-3 col-md-3 col-lg-3 control-label'

    b.wrapper tag: 'div', class: 'col-sm-8 col-md-7 col-lg-6' do |ba|
      ba.use :input
      ba.use :full_error, wrap_with: {tag: 'span', class: 'help-block'}
      ba.use :hint, wrap_with: {tag: 'p', class: 'help-block'}
    end
  end

  config.wrappers :horizontal_boolean, tag: 'div', class: 'form-group', error_class: 'has-error' do |b|
    b.use :html5
    b.optional :readonly

    b.wrapper tag: 'div', class: 'col-sm-offset-3 col-sm-8 col-md-offset-3 col-md-7 col-lg-offset-3 col-lg-6' do |wr|
      wr.wrapper tag: 'div', class: 'checkbox' do |ba|
        ba.use :label_input
      end

      wr.use :full_error, wrap_with: {tag: 'span', class: 'help-block'}
      wr.use :hint, wrap_with: {tag: 'p', class: 'help-block'}
    end
  end

  config.wrappers :horizontal_radio_and_checkboxes, tag: 'div', class: 'form-group', error_class: 'has-error' do |b|
    b.use :html5
    b.optional :readonly
    b.use :label, class: 'col-sm-3 col-md-3 col-lg-3 control-label'

    b.wrapper tag: 'div', class: 'col-sm-8 col-md-7 col-lg-6' do |ba|
      ba.use :input
      ba.use :full_error, wrap_with: {tag: 'span', class: 'help-block'}
      ba.use :hint, wrap_with: {tag: 'p', class: 'help-block'}
    end
  end

  config.wrappers :horizontal_input_group, tag: 'div', class: 'form-group', error_class: 'has-error' do |b|
    b.use :html5
    b.use :placeholder
    b.use :label, class: 'col-sm-3 col-md-3 col-lg-3 control-label'

    b.wrapper tag: 'div', class: 'col-sm-8 col-md-7 col-lg-6' do |ba|
      ba.wrapper tag: 'div', class: 'input-group' do |ap|
        ap.use :input
      end

      ba.use :full_error, wrap_with: {tag: 'span', class: 'help-block'}
      ba.use :hint, wrap_with: {tag: 'p', class: 'help-block'}
    end
  end

  config.wrappers :horizontal_input_group_xs, tag: 'div', class: 'form-group', error_class: 'has-error' do |b|
    b.use :html5
    b.use :placeholder
    b.use :label, class: 'col-sm-3 col-md-3 col-lg-3 control-label'

    b.wrapper tag: 'div', class: 'col-sm-8 col-md-2 col-lg-1' do |ba|
      ba.wrapper tag: 'div', class: 'input-group' do |ap|
        ap.use :input
      end

      ba.use :full_error, wrap_with: {tag: 'span', class: 'help-block'}
      ba.use :hint, wrap_with: {tag: 'p', class: 'help-block'}
    end
  end

  config.wrappers :horizontal_input_group_sm, tag: 'div', class: 'form-group', error_class: 'has-error' do |b|
    b.use :html5
    b.use :placeholder
    b.use :label, class: 'col-sm-3 col-md-3 col-lg-3 control-label'

    b.wrapper tag: 'div', class: 'col-sm-8 col-md-4 col-lg-3' do |ba|
      ba.wrapper tag: 'div', class: 'input-group' do |ap|
        ap.use :input
      end

      ba.use :full_error, wrap_with: {tag: 'span', class: 'help-block'}
      ba.use :hint, wrap_with: {tag: 'p', class: 'help-block'}
    end
  end

  config.wrappers :horizontal_input_group_md, tag: 'div', class: 'form-group', error_class: 'has-error' do |b|
    b.use :html5
    b.use :placeholder
    b.use :label, class: 'col-sm-3 col-md-3 col-lg-3 control-label'

    b.wrapper tag: 'div', class: 'col-sm-8 col-md-6 col-lg-5' do |ba|
      ba.wrapper tag: 'div', class: 'input-group' do |ap|
        ap.use :input
      end

      ba.use :full_error, wrap_with: {tag: 'span', class: 'help-block'}
      ba.use :hint, wrap_with: {tag: 'p', class: 'help-block'}
    end
  end

  config.wrappers :horizontal_button_group, tag: 'div', class: 'form-group', error_class: 'has-error' do |b|
    b.use :html5
    b.use :placeholder

    b.wrapper tag: 'div', class: 'col-sm-11 col-md-10 col-lg-9 text-right' do |ba|
      ba.use :input
      ba.use :full_error, wrap_with: {tag: 'span', class: 'help-block'}
      ba.use :hint, wrap_with: {tag: 'p', class: 'help-block'}
    end
  end

  config.wrappers :horizontal_boolean_inline, tag: 'div', class: 'form-group', error_class: 'has-error' do |b|
    b.use :html5
    b.use :placeholder
    b.use :label, class: 'col-sm-3 col-md-3 col-lg-3 control-label'

    b.wrapper tag: 'div', class: 'col-sm-8 col-md-7 col-lg-6 form-inline' do |ba|
      ba.use :input
      ba.use :full_error, wrap_with: {tag: 'span', class: 'help-block'}
      ba.use :hint, wrap_with: {tag: 'p', class: 'help-block'}
    end
  end

  config.wrappers :horizontal_radio_and_checkboxes_inline, tag: 'div', class: 'form-group', error_class: 'has-error' do |b|
    b.use :html5
    b.optional :readonly
    b.use :label, class: 'col-sm-3 col-md-3 col-lg-3 control-label'

    b.wrapper tag: 'div', class: 'col-sm-8 col-md-7 col-lg-6 form-inline' do |ba|
      ba.use :input
      ba.use :full_error, wrap_with: {tag: 'span', class: 'help-block'}
      ba.use :hint, wrap_with: {tag: 'p', class: 'help-block'}
    end
  end

  config.wrappers :inline_horizontal_form_md, tag: 'div', class: 'form-group col-xs-6', error_class: 'has-error' do |b|
    b.use :html5
    b.use :placeholder
    b.optional :maxlength
    b.optional :pattern
    b.optional :min_max
    b.optional :readonly
    b.use :label, class: 'col-sm-4 control-label'

    b.wrapper tag: 'div', class: 'col-sm-8' do |ba|
      ba.use :input, class: 'form-control'
      ba.use :full_error, wrap_with: {tag: 'span', class: 'help-block'}
      ba.use :hint, wrap_with: {tag: 'p', class: 'help-block'}
    end
  end

  config.wrappers :inline_horizontal_form_get_plans_search, tag: 'div', class: 'form-group col-xs-12 col-sm-6', error_class: 'has-error' do |b|
    b.use :html5
    b.use :placeholder
    b.optional :maxlength
    b.optional :pattern
    b.optional :min_max
    b.optional :readonly
    b.use :label, class: 'col-sm-4 control-label'

    b.wrapper tag: 'div', class: 'col-sm-8 form-inline' do |ba|
      ba.use :input, class: 'form-control'
      ba.use :full_error, wrap_with: {tag: 'span', class: 'help-block'}
      ba.use :hint, wrap_with: {tag: 'p', class: 'help-block'}
    end
  end

  config.wrappers :inline_horizontal_input_group_md, tag: 'div', class: 'form-group col-xs-6', error_class: 'has-error' do |b|
    b.use :html5
    b.use :placeholder
    b.use :label, class: 'col-sm-4 control-label'

    b.wrapper tag: 'div', class: 'col-sm-8' do |ba|
      ba.wrapper tag: 'div', class: 'input-group' do |ap|
        ap.use :input
      end

      ba.use :full_error, wrap_with: {tag: 'span', class: 'help-block'}
      ba.use :hint, wrap_with: {tag: 'p', class: 'help-block'}
    end
  end

  config.wrappers :inline_horizontal_button_group, tag: 'div', class: 'form-group col-xs-12', error_class: 'has-error' do |b|
    b.use :html5
    b.use :placeholder

    b.wrapper tag: 'div', class: 'text-right' do |ba|
      ba.use :input
      ba.use :full_error, wrap_with: {tag: 'span', class: 'help-block'}
      ba.use :hint, wrap_with: {tag: 'p', class: 'help-block'}
    end
  end

  config.wrappers :inline_horizontal_radio_or_checkbox, tag: 'div', class: 'form-group col-xs-12 col-sm-6', error_class: 'has-error' do |b|
    b.use :html5
    b.optional :readonly
    b.use :label, class: 'col-xs-6 col-sm-6 control-label'

    b.wrapper tag: 'div', class: 'col-xs-6 col-sm-6 form-inline' do |ba|
      ba.use :input
      ba.use :full_error, wrap_with: {tag: 'span', class: 'help-block'}
      ba.use :hint, wrap_with: {tag: 'p', class: 'help-block'}
    end
  end

  config.wrappers :horizontal_half_input_group, tag: 'div', class: 'form-group col-xs-12', error_class: 'has-error' do |b|
    b.use :html5
    b.optional :readonly
    b.use :label, class: 'col-xs-6 col-sm-3 control-label'

    b.wrapper tag: 'div', class: 'col-xs-6 col-sm-3 form-inline' do |ba|
      ba.use :input
      ba.use :full_error, wrap_with: {tag: 'span', class: 'help-block'}
      ba.use :hint, wrap_with: {tag: 'p', class: 'help-block'}
    end
  end

  # Wrappers for forms and inputs using the Bootstrap toolkit.
  # Check the Bootstrap docs (http://getbootstrap.com)
  # to learn about the different styles for forms and inputs,
  # buttons and other elements.
  config.default_wrapper = :vertical_form
  config.wrapper_mappings = {
      check_boxes: :vertical_radio_and_checkboxes,
      radio_buttons: :vertical_radio_and_checkboxes,
      file: :vertical_file_input,
      boolean: :vertical_boolean,
      datetime: :multi_select,
      date: :multi_select,
      time: :multi_select
  }
end
