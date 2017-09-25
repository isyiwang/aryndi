Rails.application.config.middleware.use OmniAuth::Builder do
  provider :developer if Rails.env.development? # TODO(abe, isaac): eventually remove)
  provider(
    :google_oauth2,
    ENV['GOOGLE_CLIENT_ID'],
    ENV['GOOGLE_CLIENT_SECRET'],
    scope: "email,profile,drive.readonly,drive.metadata,offline",
  )
  provider(
    :microsoft_v2_auth,
    ENV['MICROSOFT_GRAPH_CLIENT_ID'],
    ENV['MICROSOFT_GRAPH_CLIENT_SECRET'],
    scope: "openid,email,profile,https://graph.microsoft.com/User.Read,https://graph.microsoft.com/Files.ReadWrite.All",
  )
end
