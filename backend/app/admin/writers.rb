ActiveAdmin.register Writer do
  permit_params :name, :email, :password, :password_confirmation, :permission

  form do |f|
    f.inputs do
      f.input :name
      f.input :email
      f.input :password
      f.input :password_confirmation
      f.input :permission
    end
    f.actions
  end
end
