Rails.application.routes.draw do
 
  resources :postings, only: [:index, :show] do 
    resources :comments, only: [:create]
  end

  resources :poems, only: [:create, :update, :destroy]

  resources :users, only: [:create]
  
  get '/hello', to: 'application#hello_world'


  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }

end
