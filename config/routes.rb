Rails.application.routes.draw do
  if Rails.env.development?
    mount GraphiQL::Rails::Engine, at: "/graphiql", graphql_path: "/graphql"
  end

  post "/graphql", to: "graphql#execute"

  get "/auth/google_oauth2/callback", to: "sessions#google_oauth2_create"
  get "/auth/microsoft_v2_auth/callback", to: "sessions#microsoft_v2_auth_create"

  get '*path', to: 'web#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
