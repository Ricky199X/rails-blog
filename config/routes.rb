Rails.application.routes.draw do
  root 'welcome#index'


  namespace :api do
    namespace :v1 do
      resources :articles
        resources :comments
    end
  end

  get '*path', to: 'welcome#index', via: :all

end
