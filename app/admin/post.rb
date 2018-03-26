ActiveAdmin.register Post do
  permit_params :title, :author, :article

  form do |f|
    f.inputs do
      f.input :title
      f.input :author
      f.input :article
    end
    f.actions
  end
end
