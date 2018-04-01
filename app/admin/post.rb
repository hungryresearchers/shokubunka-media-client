ActiveAdmin.register Post do
  permit_params :title, :writer, :article

  form do |f|
    f.inputs do
      f.input :title
      f.input :writer
      f.input :article
    end
    f.actions
  end
end
