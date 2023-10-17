Rails.application.routes.draw do
 
    resources :poems, only: [:index, :show, :create] do 
      resources :comments, only: [:create, :index]
    end

    resources :users, only: [:create, :show]
    
    post "/login", to: "sessions#create"
    delete "/logout", to: "sessions#destroy"
    get "/me", to: "users#show"


  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }

end
