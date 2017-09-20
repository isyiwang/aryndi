class GraphqlController < ApplicationController
  # WARNING
  # WARNING
  # WARNING
  # DO NOT LEAVE THIS IN IN A PRODUCTION APP. YOU WILL NEED TO DO AUTHENTICATION
  # IN SOME WAY, PROBABLY THROUGH SOME TOKEN THAT YOU GIVE TO THE CLIENT.
  # THIS LINE IS JUST HERE SO THAT THE TEMPLATE WORKS OUT OF THE BOX.
  protect_from_forgery(:except => [:execute])
  # WARNING ^
  # WARNING ^
  # WARNING ^

  def execute
    variables = ensure_hash(params[:variables])
    query = params[:query]
    operation_name = params[:operationName]
    context = {
      # Query context goes here, for example:
      # current_user: current_user,
    }
    result = GrrrrSchema.execute(query, variables: variables, context: context, operation_name: operation_name)
    render json: result
  end

  private

  # Handle form data, JSON body, or a blank value
  def ensure_hash(ambiguous_param)
    case ambiguous_param
    when String
      if ambiguous_param.present?
        ensure_hash(JSON.parse(ambiguous_param))
      else
        {}
      end
    when Hash, ActionController::Parameters
      ambiguous_param
    when nil
      {}
    else
      raise ArgumentError, "Unexpected parameter: #{ambiguous_param}"
    end
  end
end
