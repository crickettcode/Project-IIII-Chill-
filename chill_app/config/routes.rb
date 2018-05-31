Rails.application.routes.draw do
  namespace :api do
    resources :users do
      resources :journal_entries
      resources :check_ins
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
end 
end 


