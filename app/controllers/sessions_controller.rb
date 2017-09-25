class SessionsController < ApplicationController
  def google_oauth2_create
    # Do stuff with auth_hash
  end

  def microsoft_v2_auth_create
    # Do stuff with auth_hash
  end

  private

  def auth_hash
    request.env['omniauth.auth']
  end
end
